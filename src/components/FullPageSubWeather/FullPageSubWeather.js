import React from 'react';

import classes from './FullPageSubWeather.css';
import Cloudy from '../../assets/images/cloudy.PNG';

const fullPageSubWeather = (props) => {

    return (
        <div className={classes.FullPageSubWeatherDiv}>
                <p>{props.date} {props.time}
                <img className={classes.image} src={Cloudy} 
                alt="Avatar" />
                {props.weather}
                {props.tempMin} {props.tempMax}</p>
        </div>
    );

}

export default fullPageSubWeather;