import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import './GameArea.css';

const GameArea = (props) => (
  <Grid id='display'>
    {/* use array.map to loop over the array of objects to populate each as a button 
    use an onClick to send that its been clicked and use the handleIncrement method to udpate score*/}
    {props.data.map((item) => (
      <button key={item.id} onClick={props.handleIncrement}>
        <img src={item.img} id={item.id} alt="game piece" />
      </button>
    ))};
  </Grid>
);
    
export default GameArea;