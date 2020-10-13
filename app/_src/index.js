/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-12 15:23:59
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-12 16:10:11
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'mobx-react'
import createModel from '@/store'
ReactDOM.render(
     <Provider {...createModel}>
        <App />
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();


