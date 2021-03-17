
import './App.css';
import React, { Component } from 'react'
import Search from './components/Search/index'
import List from './components/List/index'

export default class App extends Component {

  state={users:[]}

  updateState=(stateObj)=>{
    this.setState({users:stateObj})
  }
  render() {
    return (
      <div className="container">
        <Search updateState={this.updateState} />
        <List {...this.state}/>
      
      </div>
    )
  }
}



