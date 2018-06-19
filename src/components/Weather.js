import React, { Component } from 'react';
import axios from 'axios';

import Subweather from './SubWeather/SubWeather';
import classes from './Weather.css';

class Weather extends Component {
 
    state = {
        forecasts: []
      }

    componentDidMount () {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=77b11a8fa7b1f45be18d23910a441f75')
            .then(response => {
                this.setState({forecasts: response.data.list});
                console.log(this.state.forecasts);
            });
    }
    
      displayBottomHandler = () => {
        const doesShow = this.state.showBottom;
        this.setState({showBottom: !doesShow});
      }

    render() {

        const projections = this.state.forecasts.map(forecast => {

            return <Subweather
                    date={forecast.dt_txt}
                    tempMin={forecast.main.temp_min}
                    tempMax={forecast.main.temp_max}
                    key={forecast.id}  
                    /> ;
        });

        return (
            <div className={classes.WeatherDiv}>
                {projections[0]}
                {projections[8]}
                {projections[16]}
                {projections[24]}
                {projections[32]}
                {/* { {
                    this.state.showBottom === true ?
                    <div>
                        <p>Displays an hourly forecast when clicked</p>
                    </div>: null
                } } */}
            </div>
        );
    }
}

export default Weather;