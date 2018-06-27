import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import classes from './Header.css';

class Header extends Component {
    render() {
        return(
            <div>
                    <nav>
                        <ul>
                            <li><a href ="/">Home</a></li>
                        </ul>
                    </nav>
                <header className={classes.AppHeader}>
                    <img src={logo} className={classes.AppLogo} alt="logo" />
                    <h1 className={classes.AppTitle}>Welcome to My React Weather App</h1>
                </header>
                <p className={classes.AppIntro}>
                This is a weather application that displays the weather for a given region.
                </p>
            </div>
        );

    }
}

export default Header;