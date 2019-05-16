import React, {Component} from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import {Card} from '.';
import {animals, directions, plants, timing} from '../constants';
import getRandomValue from '../helpers/getRandomValue';

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: getRandomValue(this.dataSets[props.dataSet])
    };
  }

  dataSets = {
    'animals': animals,
    'plants': plants
  };

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setTimer = () => {
    const {value} = this.state;
    const {character, delay} = timing;

    this.timer = setInterval(
      () => this.setNewValue(),
      value.length * character + delay
    );
  };

  setNewValue = () => {
    const {dataSet} = this.props;
    clearInterval(this.timer);

    this.setState(prevState => {
      return {
        value: getRandomValue(this.dataSets[dataSet])
      };
    }, () => {
      this.setTimer();
    });
  };

  render() {
    const {value} = this.state;
    const {animation} = timing;

    return (
      <CSSTransitionGroup
        className="tile"
        transitionName={getRandomValue(directions)}
        transitionEnterTimeout={animation}
        transitionLeaveTimeout={animation}>
        <Card key={value} value={value} />
      </CSSTransitionGroup>
    );
  }
}
