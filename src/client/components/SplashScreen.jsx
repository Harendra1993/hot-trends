import React, { Component } from 'react';
import { getTrends } from '../helpers/requests';
import '../App.css';

function LoadingMessage() {
    return (
        <div className="splash-screen">
            Wait a moment while we load your app.
            <div className="loading-dot">.</div>
        </div>
    );
}

function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true
            }
            this.handleTrends = this.handleTrends.bind(this);
        }

        handleTrends() {
            try {
                getTrends((res) => {
                    this.setState({
                        dataSets: res
                    })
                })
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false
                })
            }
        }


        async componentDidMount() {
            await this.handleTrends()

            setTimeout(() => {
                this.setState({
                    loading: false
                });
            }, 1500)

            this.interval = setInterval(this.handleTrends, 15 * 60 * 1000)
        }

        componentWillUnmount() {
            clearInterval(this.interval);
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return LoadingMessage();

            // otherwise, show the desired route
            return <WrappedComponent dataSets={this.state.dataSets} />;
        }
    };
}

export default withSplashScreen;