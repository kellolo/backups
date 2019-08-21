import './Button.css';

import React from 'react';

// stateless
export default function(props) {
  const { children } = props;
  return (
    <button className="button" {...props}>{children}</button>
  )
}