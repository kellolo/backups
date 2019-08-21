import './CommentForm.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// statefull
export default class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      message: '',
    };
  }

  static propTypes = {
    onSend: PropTypes.func,
  }

  handleChange = (e) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick = () => {
    const { onSend } = this.props;

    this.setState({ message: '' });

    if (typeof onSend === 'function') {
      onSend(this.state);
    }
  }

  render() {
    const { author, message } = this.state;
    return (
      <Fragment>
        <input onChange={this.handleChange} name="author" value={author} type="text" /><br />
        <textarea onChange={this.handleChange} name="message" value={message}></textarea><br />
        <button onClick={this.handleClick}>Send</button>
      </Fragment>
    )
  }
}