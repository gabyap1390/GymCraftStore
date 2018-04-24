import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './App';
import thunk from 'redux-thunk';
import routes from './routes';
import { createStore, applyMiddleware } from 'redux';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root'));


registerServiceWorker();
