import React from 'react';
import './Scoreboard.css';

//need to make a state for the score board, to update on click event
const Scoreboard = (props) => (
    <div id="scoreboard">
        <p>Current Score: {props.currentScore} </p>
        {/* <p>Top Score: {props.topScore}</p> */}
    </div>
);

export default Scoreboard;
