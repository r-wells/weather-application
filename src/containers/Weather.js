import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Projections from './Projections/Projections';

class Weather extends Component {

    render() {

        return (
            <div>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <Route path="/" exact component={Projections} />
            </div>
        );
    }
}

export default Weather;