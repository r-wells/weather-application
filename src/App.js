import React, { Component } from 'react';
import Weather from './components/Weather';
import Header from './components/Header/Header';
//import SubWeather from './components/SubWeather/SubWeather';
import classes from './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {

    return (
      <div className={classes.App}>
          <Header />
        <div>
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;
