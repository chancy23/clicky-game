import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import './Instructions.css';
import Counter from './Counter';

const Instructions = (props) => (
  <Jumbotron>
    <h1>Clicky Game!</h1>
    <ul>
        <li>To begin, click on an image.</li>
        <li>You get a point for every image clicked.</li>
        <li>If you click the same image again, the game is over...wa-wa.</li>
    </ul>  

    <Counter 
      //include the props from the counter state in App
      currentScore={props.currentScore}
    />
  </Jumbotron>
);

export default Instructions;