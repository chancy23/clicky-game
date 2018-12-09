import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

const Instructions = () => (
    <Jumbotron>
        <h1>Clicky Game!</h1>
        <p>
            To begin, click on an image. You get a point 
            for every image clicked, until you click the same image again, then the game is over
        </p>
        <p>
        {/* Scoreboard area */}
        </p>
  </Jumbotron>
);

export default Instructions;