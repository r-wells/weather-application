import React from 'react';

import classes from './SubWeather.css';
import Cloudy from '../../assets/images/cloudy.PNG';

const subweather = (props) => {

    return (
        <div onClick={props.click}>
            <div className={classes.TestimonialContainer}>
                <p>{props.date}</p>
                <img src={Cloudy} 
                alt="Avatar" />
                <p>{props.tempMin} {props.tempMax}</p>
            </div>
        </div>
    );
    
}

export default subweather;