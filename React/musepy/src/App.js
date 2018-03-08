import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import Router from './Router';
import logo from './logo.svg';
import './App.css';

import './assets/css/bootstrap.min.css'; 
import './assets/css/main.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation activeTab={"songs"}/>
        
      </div>
    );
  }
}

export default App;

//<Router />
