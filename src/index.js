import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import { createStore } from 'redux';
import reducers from './reducers';  // index.js에 정의
import { Provider } from 'react-redux';

// 스토어 생성
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
