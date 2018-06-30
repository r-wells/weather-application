import React, { Component } from 'react';
import axios from 'axios';

import FullPageSubWeather from '../../components/FullPageSubWeather/FullPageSubWeather';
import classes from './FullPage.css'; 

class FullPage extends Component {

    state = {
        loadedPageForecasts: []
    } 

    componentDidMount () {
        //console.log(this.props);

        if (this.props.match.params.id) {
            axios.get('http://api.openweathermap.org/data/2.5/forecast?q=New York,us&appid=77b11a8fa7b1f45be18d23910a441f75')
            .then(response => {
                //const forecastData = response.data.list.;
                this.setState({loadedPageForecasts: response.data.list});
            });
        }    

    }

    render() {

        const paramsid = this.state.loadedPageForecasts;
        console.log(paramsid);

        const todaysDateArray = this.props.match.params.id.split(" ");
        const todaysDate = todaysDateArray[0];
        console.log(todaysDate);

        const d = new Date();
        let n = d.getDay(todaysDate);

        let result = paramsid.filter(obj => {
            return obj.dt_txt.includes(todaysDate);
        });

        console.log(result);

        const projections = result.map(subForecasts => {

            return (
            <FullPageSubWeather
                date={todaysDate}
                time={subForecasts.dt_txt.split(" ")[1]}
                tempMin={subForecasts.main.temp_min}
                tempMax={subForecasts.main.temp_max} 
                weather={subForecasts.weather[0].description} />
        )});

        return(
            <div>
                <h1>Hourly Weather For {todaysDate}</h1>
                {projections}
            </div>
        );

    }
}

export default FullPage;