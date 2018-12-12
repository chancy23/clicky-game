import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import './Instructions.css';

const Instructions = (props) => (
  <Jumbotron>
    <h2>Let's Get Clickin'!</h2>
    <hr />
    <ul>
        <li>To begin, click on an image.</li>
        <li>You get a point for every image clicked.</li>
        <li>If you click the same image again, the game is over...wa-wa.</li>
    </ul>  
  </Jumbotron>
);

export default Instructions;