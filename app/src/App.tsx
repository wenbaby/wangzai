import React, { Component } from 'react';
// import RouterView from './router';
import { inject, observer } from 'mobx-react'

@inject('homeStore')
@observer
class App extends Component<any> {
  render() {
    const { HomeNum, changeHomeNum } = this.props.homeStore
    return (
      <div>
        {/* <RouterView /> */}
        <h1>{HomeNum}</h1>
        <button onClick={() => changeHomeNum()}>dianwo</button>
      </div>
    );
  }
}

export default App;