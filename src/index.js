/* eslint global-require: 0 */
/* As reference, you can check more about the general approach of the app here: */
/* https://github.com/jpsierens/webpack-react-redux */


import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

// Redux dependencies
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/root';
import configureStore from './stores/configureStore';

// import 'roboto-fontface/css/roboto-fontface.css';
import './index.css';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <Root store={store} history={history}/>
  </AppContainer>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./components/root', () => {
    const NextRoot = require('./containers/root').default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history}/>
      </AppContainer>,
      rootEl,
    );
  });
}
