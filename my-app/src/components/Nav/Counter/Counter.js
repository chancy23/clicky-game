import React from 'react';
import './Counter.css';

//need to make a state for the score board, to update on click event
const Counter = (props) => (
  <div id="scoreboard">
    <p>Current Score: {props.currentScore} </p>
    {/* <p>Top Score: {props.topScore}</p> */}
  </div>
);

export default Counter;
