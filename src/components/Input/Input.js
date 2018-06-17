import React from 'react';

import classes from './Input.css';

const input = (props) => {
    return (
        <div className={classes.InputDiv}>
            <input className={classes.Input} />
            <button onClick={props.onClick} className={classes.Button}>See The Weather</button>
        </div>
    );
}

export default input;