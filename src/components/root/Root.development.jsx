import React, { Component } from 'react';

import DevTools from '../development/DevTools.jsx';
import App from '../app';

export default class Root extends Component {
  render() {
    return (
      <div>
        <App />
        <DevTools />
      </div>
    );
  }
}
