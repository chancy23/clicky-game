import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import './Instructions.css';

const Instructions = () => (
  <Grid id='instructionsDisplay'>
    <Jumbotron>
      <h2>Let's Get Clickin'!</h2>
      <hr />
      <ul>
        <li>To begin, click on an image.</li>
        <li>You get a point for every image clicked.</li>
        <li>Once you click any image a second, the game is over.</li>
      </ul>  
    </Jumbotron>
  </Grid>
);

export default Instructions;