import React, { Component } from 'react';
import axios from 'axios';

import Subweather from '../../components/SubWeather/SubWeather';
import classes from './FullPage.css'; 

class FullPage extends Component {

    state = {
        loadedPageForecasts: []
    } 

    componentDidMount () {
        //console.log(this.props);

        if (this.props.match.params.id) {
            axios.get('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=77b11a8fa7b1f45be18d23910a441f75')
            .then(response => {
                //const forecastData = response.data.list.;
                this.setState({loadedPageForecasts: response.data.list});
            });
        }    

    }

    render() {

        const paramsid = this.state.loadedPageForecasts;
        console.log(paramsid);

        let result = paramsid.filter(obj => {
            return obj.dt_txt.includes("2018-06-28");
        });

        console.log(result);

        // const filteredArray = (arr, key, value) => {
        //     let newArray = [];
        //     for(let i = 0; i < arr.length; i++) {
        //       if(arr[i][key] === value) {
        //         newArray.push(arr[i]);
        //         }
        //     }
        //     return newArray;
        // }
        // let newForecasts = [];
        // newForecasts = filteredArray((paramsid, paramsid.dt_txt, "2018-06-28 00:00:00"));
        return(
            <div>
                <h1>Hourly Weather For {this.props.match.params.id}</h1>
                <Subweather
                    date={this.props.match.params.id}
                    tempMin={this.props.tempmin}
                />
            </div>
        );

    }
}

export default FullPage;