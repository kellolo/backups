const fs = require('fs');
const path = require('path');

module.exports = (componentName) => {
  const componentCode = `import './${componentName}.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class ${componentName} extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="${componentName}"></div>
    )
  }
}`;

  fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
    componentCode,
  );
};