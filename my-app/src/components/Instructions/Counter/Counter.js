import React from 'react';
import Scoreboard from './Scoreboard';

//need to make a state for the score board, to update on click event
class Counter extends React.Component {
    state = {
        currentScore: 0,
        // topScore: 0
    };

    // function for adding +1 to the current score when image from GameArea is clicked
    // if this is in the game area, but the score is rendered inteh instructctions component
    //shouldn't these folders all be siblings, and I should not next them?
    handleIncrement = () => {
        //conditional:
            //if image is clicked that hasn't been clicked before add one to the score
            if (/*this needs a  value*/) { 
                this.setState({ currentScore: this.state.currentScore +1 )};
            
            //reshuffle the images
            }
            else {
                // else restart the game
                //reshuffle images
            };  
    };

    //function for resetting the game (this needs to go in the GameArea component maybe??)
        //making the current score the top score (not looking to do right now)
        //shuffling images

    render () {
        return (
            <Scoreboard
                currentScore={this.state.currentScore}
                // topScore={this.state.topScore} 
            />
            // this is where I would call the GameArea Component too??
        )
    }
};

export default Counter;
