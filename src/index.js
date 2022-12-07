import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import reducer from './Reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
