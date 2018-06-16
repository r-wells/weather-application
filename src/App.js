import React, { Component } from 'react';
import Weather from './components/Weather';
import Header from './components/Header/Header';
import classes from './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  state = {
    forecast: [
      { date: 'Monday', temp: 90},
      { date: 'Tuesday', temp: 90},
      { date: 'Wenesday', temp: 90},
      { date: 'Thursday', temp: 90},
      { date: 'Friday', temp: 90},
      { date: 'Saturday', temp: 90},
      { date: 'Sunday', temp: 90}
    ]
  }

  displayHourHandler = () => {
    //console.log('was clicked');
    
  }

  render() {

    return (
      <div className={classes.App}>
          <Header />
        <div className={classes.WeatherWrapper}>
          <Weather onClick={this.displayHourHandler} date={this.state.forecast[0].date} temp={this.state.forecast[0].temp} />
          <Weather onClick={this.displayHourHandler} date={this.state.forecast[1].date} temp={this.state.forecast[1].temp} />
          <Weather onClick={this.displayHourHandler} date={this.state.forecast[2].date} temp={this.state.forecast[2].temp} />
          <Weather onClick={this.displayHourHandler} date={this.state.forecast[3].date} temp={this.state.forecast[3].temp} />
          <Weather onClick={this.displayHourHandler} date={this.state.forecast[4].date} temp={this.state.forecast[4].temp} />        
        </div>
      </div>
    );
  }
}

export default App;
