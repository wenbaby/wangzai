import React, { Component } from 'react'
import RouterView from '@/router/index.js';
import { inject, observer } from 'mobx-react';
import Shop from '@/components/Shop.jsx'
import Study from '@/components/study.jsx'
// @inject((store) => {
//   return store.homeapp
// })
@observer
class Home extends Component {
  
  render() {
    console.log(this.props);
    return (
      <div>
        this is home pgae
        <RouterView routes={this.props.routes}></RouterView>
        {/* <h1>{this.props.homeapp.test}</h1>
        <button onClick={() => this.props.homeapp.add()}>点我</button> */}
        {/* <Shop /> */}
        <Study/>
      </div>
    )
  }
}
export default inject((store=>{
  return store.user
}))(Home)