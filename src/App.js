import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro" style={{padding: 20}}>
          <div>{this.props.counter}</div>
          <button onClick={this.props.add}>add</button>
          <button onClick={this.props.sub}>sub</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({calc}) {
  return {
    counter: calc.counter
  }
}

export default connect(mapStateToProps, actions)(App);
