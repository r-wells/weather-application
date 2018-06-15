import React, { Component } from 'react';
import Weather from './components/Weather';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My React App</h1>
        </header>
        <p className="App-intro">
          This is a weather application that displays the weather for a given region.
        </p>
          <Weather />
      </div>
    );
  }
}

export default App;
