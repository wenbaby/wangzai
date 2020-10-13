/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-12 15:23:59
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-12 15:31:45
 */
import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from '@/router/index.js';
function App() {
  return (
    <div>
      this is app page
      
      <Router>
        <RouterView></RouterView>
      </Router>
    </div>
   
  );
}

export default App;
