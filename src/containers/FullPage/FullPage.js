import React, { Component } from 'react';
import axios from 'axios';

import FullPageSubWeather from '../../components/FullPageSubWeather/FullPageSubWeather';

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

        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        const paramsid = this.state.loadedPageForecasts;
        console.log(paramsid);

        const todaysDateArray = this.props.match.params.id.split(" ");
        const todaysDate = todaysDateArray[0];

        let result = paramsid.filter(obj => {
            return obj.dt_txt.includes(todaysDate);
        });

        const projections = result.map(subForecasts => {
            const d = new Date();
            let weekday = days[ d.getDay(todaysDate) ];
            console.log(weekday);

            //let newTempMin =  Math.round((9/5) * (subForecasts.main.temp_min - 273) + 32);

            let newTempMax = Math.round((9/5) * (subForecasts.main.temp_max - 273) + 32);

            let hh = d.getHours();
            let h = hh;
            let dd = "AM";
            if (h >= 12) {
                h = hh - 12;
                dd = "PM";
            }
            if (h === 0) {
                h = 12;
            }

            let minutes = d.getMinutes();
            let month = months[ d.getMonth() ];
            let day = d.getDate();
            
            // subForecasts.dt_txt.split(" ")[1]
            return (
            <FullPageSubWeather
                date={weekday}
                month={month}
                day = {day}
                hours = {h}
                minutes = {minutes}
                apm = {dd}
                tempMax={newTempMax} 
                weather={subForecasts.weather[0].description}
                key={subForecasts.dt} />
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