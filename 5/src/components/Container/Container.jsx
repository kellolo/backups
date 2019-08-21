import './Container.css';

import React, { Component } from 'react';

export default class Container extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className="container">
        {children}
      </div>
    )
  }
}