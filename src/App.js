import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tasks from "./containers/Tasks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tasks />
      </div>
    );
  }
}

export default App;
