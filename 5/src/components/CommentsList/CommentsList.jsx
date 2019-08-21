import './CommentsList.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class CommentsList extends Component {
  render() {
    const { comments } = this.props;
    
    return (
      <ul className="CommentsList">
        {comments.map(({name, body}, idx) => <li key={idx}><h3>{name}</h3><p>{body}</p></li>)}
      </ul>
    )
  }
}