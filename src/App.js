import React, { Component } from 'react';
import Weather from './components/Weather';
import Header from './components/Header';
import classes from './App.css';

class App extends Component {

  render() {

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];

    return (
      <div className={classes.App}>
          <Header />
        <div className={classes.WeatherWrapper}>
          <Weather date={n} temp="90" />
          <Weather date={n} temp="90" />
          <Weather date={weekday[(d.getDay()) + 2]} temp="90" />
          <Weather date={weekday[(d.getDay()) + 3]} temp="90" />
          <Weather date={weekday[(d.getDay()) + 4]} temp="90" />
        </div>
      </div>
    );
  }
}

export default App;
