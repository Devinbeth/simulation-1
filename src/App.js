import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' component={Home}/>
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
