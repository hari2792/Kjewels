import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import history from './history';
import store from './store';

ReactDOM.render(
  <Provider store={store} history={history}><App/></Provider>,
  document.getElementById('root')
);
