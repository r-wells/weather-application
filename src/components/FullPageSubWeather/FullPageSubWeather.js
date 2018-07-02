import React from 'react';

import classes from './FullPageSubWeather.css';
import Cloudy from '../../assets/images/cloudy.PNG';

const fullPageSubWeather = (props) => {

    return (
        <div className={classes.FullPageSubWeatherDiv}>
                <p>{props.date} {props.month} {props.day} {props.hours}:{props.minutes} {props.apm}</p>
                <img className={classes.image} src={Cloudy} 
                alt="Avatar" />
                <p>{props.weather}</p>
                <p>{props.tempMax}&deg;</p>
        </div>
    );

}

export default fullPageSubWeather;