import React, { Component } from 'react';

import Subweather from './SubWeather/SubWeather';
import classes from './Weather.css';

class Weather extends Component {
    
    state = {
        forecast: [
          { date: 'Monday', temp: 90},
          { date: 'Tuesday', temp: 90},
          { date: 'Wenesday', temp: 90},
          { date: 'Thursday', temp: 90},
          { date: 'Friday', temp: 90},
          { date: 'Saturday', temp: 90},
          { date: 'Sunday', temp: 90}
        ],
        showBottom: false
      }
    
      displayBottomHandler = () => {
        const doesShow = this.state.showBottom;
        this.setState({showBottom: !doesShow});
      }

    render() {

    return (
        <div className={classes.WeatherDiv}>
            {this.state.forecast.map((day, index) => {
                return <Subweather
                click={() => this.displayBottomHandler(index)} 
                date={day.date}
                temp={day.temp} />
            })}
            {
                this.state.showBottom === true ?
                <div>
                    <p>Displays an hourly forecast when clicked</p>
                </div>: null
            }
        </div>
    );
}
}

export default Weather;