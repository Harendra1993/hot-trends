import React, { Component } from 'react';
import { colors, timing } from '../constants';
import { getRandomValue } from '../helpers/getRandomValue';

export default class Card extends Component {
  state = {
    isTyping: true,
    visibleChars: 0
  };

  componentWillMount() {
    this.initializeCard();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    if (prevProps.value !== value) {
      this.setState({ visibleChars: 0 }, this.initializeCard);
    }
  }

  initializeCard = () => {
    this.color = getRandomValue(colors);
    this.timer = setInterval(
      () => this.incrementVisibleChars(),
      timing.character
    );
  };

  incrementVisibleChars = () => {
    const { value } = this.props;
    const { visibleChars } = this.state;

    if (visibleChars === value.length) {
      clearInterval(this.timer);
      return this.setState({ isTyping: false });
    }

    this.setState(prevState => {
      return {
        isTyping: true,
        visibleChars: prevState.visibleChars + 1
      }
    });
  };

  render() {
    const { isTyping, visibleChars } = this.state;
    const { value } = this.props;
    const typingClass = isTyping ? 'typing' : '';

    return (
      <div style={{ background: this.color }} className={`card ${typingClass}`}>
        <a className="text" href={`https://www.google.com/search?q=${value}`} target="_blank" rel="noopener noreferrer">
          {value.substring(0, visibleChars)}<span className="cursor">|</span>
        </a>
      </div>
    );
  }
}
