import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Redux dependencies
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from '../root';

import configureStore from '../../stores/configureStore';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

export default class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Root} />
        </Router>
      </Provider>
    );
  }
}
