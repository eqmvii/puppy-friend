import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//
// COMPONENTS
//

import Test from "./components/Test";

//
// APP
//

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Puppy Friend</h1>
        </header>
        <Test name="puppo" snugfactor={6} />
        <Test name="mister pup" snugfactor={3} />

      </div>
    );
  }
}

export default App;
