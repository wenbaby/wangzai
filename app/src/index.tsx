import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'mobx-react'
import stores from './store/index'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
ReactDOM.render(
  <BrowserRouter>
    <Provider {...stores}>
      <App />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

