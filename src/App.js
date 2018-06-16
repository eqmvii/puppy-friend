import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import './App.css';

//
// COMPONENTS
//

import Test from "./components/Test";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";

//
// APP
//

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route path="/search" component={Search} />
          <Test name="puppo" snugfactor={6} />
          <Test name="mister pup" snugfactor={3} />
        </div>
      </Router>
    );
  }
}

export default App;
