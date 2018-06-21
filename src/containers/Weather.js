import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Projections from './Projections/Projections';
import FullPage from './FullPage/FullPage';

class Weather extends Component {

    render() {

        return (
            <div>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <Route path="/" exact component={Projections} />
                <Route path="/:id" component={FullPage} />
            </div>
        );
    }
}

export default Weather;