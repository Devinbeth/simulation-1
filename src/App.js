import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import Bins from './components/Bins.js';
import Bin from './components/Bin.js';
import Create from './components/Create.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/bins/:id' component={Bins}/>
          <Route path='/bin/:id' component={Bin}/>
          <Route path='/create/:id' component={Create}/>
        </Switch>
      </div>
    );
  }
}

export default App;
