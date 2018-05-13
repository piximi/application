import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import data from './images/mnist';

import reducer from './reducers';

const demo = {
  categories: data.categories,
  images: data.images,
  settings: {
    columns: 8,
    createCategory: {
      open: false
    },
    help: {
      open: false
    },
    settings: {
      open: false
    },
    sidebar: {
      open: true
    }
  }
};

const store = createStore(reducer, demo);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
