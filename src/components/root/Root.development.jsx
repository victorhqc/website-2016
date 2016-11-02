import React, { Component } from 'react';

import DevTools from '../development/DevTools';
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
