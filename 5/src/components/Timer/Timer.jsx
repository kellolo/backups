import './Timer.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('timer', this.state.timer);
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { timer } = this.state;
    return (
      <div className="Timer">{timer}</div>
    )
  }
}