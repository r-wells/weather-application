import React, { Component } from 'react';

import classes from './Weather.css';
import Cloudy from '../assets/images/cloudy.PNG';

const weather = (props) => {

    return (
        <div className={classes.WeatherDiv}>
            <div className={classes.TestimonialContainer}>
                <p>{props.date}</p>
                <img src={Cloudy} 
                alt="Avatar" />
                <p>{props.temp}</p>
            </div>
        </div>
    );
    
}

export default weather;