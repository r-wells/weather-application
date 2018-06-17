import React from 'react';

import classes from './Weather.css';
import Cloudy from '../assets/images/cloudy.PNG';

const subweather = (props) => {

    return (
        <div onClick={props.onClick} className={classes.WeatherDiv}>
            <div className={classes.TestimonialContainer}>
                <p>{props.date}</p>
                <img src={Cloudy} 
                alt="Avatar" />
                <p>{props.temp}</p>
            </div>
        </div>
    );
    
}

export default subweather;