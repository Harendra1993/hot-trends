import React, { Component } from 'react';
import { getTrends } from '../helpers/requests';
import './splash-screen.css';

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
                loading: true,
            };
        }


        async componentDidMount() {
            try {
                await getTrends((res) => {
                    console.log(res)
                    this.setState({
                        dataSets: res
                    })
                })

                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 1500)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
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