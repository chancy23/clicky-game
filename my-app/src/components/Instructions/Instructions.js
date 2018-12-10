import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import './Instructions.css';
import Counter from './Counter';

const Instructions = () => (
    <Jumbotron>
        <h1>Clicky Game!</h1>
        <ul>
            <li>To begin, click on an image.</li>
            <li>You get a point for every image clicked.</li>
            <li>If you click the same image again, the game is over...wa-wa.</li>
        </ul>  
        {/* place for scoboard */}
        <Counter />
  </Jumbotron>
);


export default Instructions;