import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Subweather from '../SubWeather/SubWeather';
import classes from './Projections.css';

class Projections extends Component {

    state = {
        forecasts: []
      }

    componentDidMount () {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=77b11a8fa7b1f45be18d23910a441f75')
            .then(response => {
                //const forecastData = response.data.list.slice(0,1);
                this.setState({forecasts: response.data.list});
                //console.log(this.state.forecasts);
            });
    }

    render () {

        const projections = this.state.forecasts.map(forecast => {

            return (<Link to={forecast.dt_txt}
                key={forecast.dt}>
            <Subweather
                date={forecast.dt_txt}
                tempMin={forecast.main.temp_min}
                tempMax={forecast.main.temp_max} />
            </Link>) ;
        });

        console.log(projections);

        return(
            <section className={classes.ProjectionsDiv}>
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
            </section>
        );
    }
}

export default Projections;