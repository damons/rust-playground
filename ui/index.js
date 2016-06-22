import promisePolyfill from 'es6-promise';
promisePolyfill.polyfill();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import playgroundApp from './reducers';
import Playground from './Playground.jsx';

const logger = createLogger(); // TODO: Development only
const store = createStore(
  playgroundApp,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Playground />
  </Provider>,
  document.getElementById('playground')
);
