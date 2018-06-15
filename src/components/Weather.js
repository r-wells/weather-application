import React, { Component } from 'react';

import classes from './Weather.css';
import Cloudy from '../assets/images/cloudy.PNG';

class Weather extends Component {
    render () {

    return (
    <div className={classes.WeatherDiv}>
        <p>This is the weather app</p>
        <img src={Cloudy} alt="Cloudy Image" />
    </div>
    );
}
}

export default Weather;