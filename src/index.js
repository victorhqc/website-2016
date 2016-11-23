/* eslint global-require: 0 */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Routes from './components/routes';

// import 'roboto-fontface/css/roboto-fontface.css';
import './index.css';

const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./components/routes', () => {
    const NextRoutes = require('./components/routes').default;
    render(
      <AppContainer>
        <NextRoutes />
      </AppContainer>,
      rootEl,
    );
  });
}
