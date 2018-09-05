import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <a href="file://c:\Program Files\Microsoft Office\Office12\EXCEL.EXE">EXCEL</a>
        </p>
        <Test />
      </div>
    );
  }
}

export default App;
