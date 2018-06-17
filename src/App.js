import React, { Component } from 'react';
import Weather from './components/Weather';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
//import SubWeather from './components/SubWeather/SubWeather';
import classes from './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  state = {
    showWeather: false
  }

  toggleWeatherHandler = () => {
    const doesShow = this.state.showWeather;
    this.setState({showWeather: !doesShow});
  }

  render() {

    let display = null;

    
  if(this.state.showWeather) {
    display = 
      <div>
        <Weather />
      </div>
  }

    return (
      <div className={classes.App}>
          <Header />
          <Input onClick={this.toggleWeatherHandler} />
          {display}
      </div>
    );
  }
}

export default App;
