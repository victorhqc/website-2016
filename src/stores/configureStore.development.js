/* eslint import/no-extraneous-dependencies: 0 */

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistState } from 'redux-devtools';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();
const historyMiddleware = routerMiddleware(browserHistory);

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

const enhancer = composeWithDevTools(
  // Middleware you want to use in development:
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    historyMiddleware,
  ),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(getDebugSessionKey()),
);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    /* eslint-disable global-require */
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers')),
    );
  }

  return store;
}
