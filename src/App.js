import React, { Component } from 'react';
import Weather from './components/Weather';
import logo from './logo.svg';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <img src={logo} className={classes.AppLogo} alt="logo" />
          <h1 className={classes.AppTitle}>Welcome to My React App</h1>
        </header>
        <p className={classes.AppIntro}>
          This is a weather application that displays the weather for a given region.
        </p>
          <Weather />
      </div>
    );
  }
}

export default App;
