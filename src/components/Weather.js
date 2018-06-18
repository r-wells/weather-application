import React, { Component } from 'react';
import axios from 'axios';

import Subweather from './SubWeather/SubWeather';
import classes from './Weather.css';

class Weather extends Component {

    componentDidMount () {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=77b11a8fa7b1f45be18d23910a441f75')
            .then(response => {
                console.log(response);
            });

    }
    
    state = {
        forecast: [
          { id: 'qwkdik', date: 'Monday', temp: 90},
          { id: 'ponu', date: 'Tuesday', temp: 90},
          { id: 'dncscs', date: 'Wenesday', temp: 90},
          { id: 'dnoc', date: 'Thursday', temp: 90},
          { id: 'pioun', date: 'Friday', temp: 90},
          { id: 'adwwneu', date: 'Saturday', temp: 90},
          { id: 'cueih', date: 'Sunday', temp: 90}
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
                temp={day.temp}
                key={day.id} />
            })}
            {/* {
                this.state.showBottom === true ?
                <div>
                    <p>Displays an hourly forecast when clicked</p>
                </div>: null
            } */}
        </div>
    );
}
}

export default Weather;