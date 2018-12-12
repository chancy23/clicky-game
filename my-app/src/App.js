import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import Instructions from './components/Instructions';
import GameArea from './components/GameArea';

//array of images to be used in Game Area (add more later)
var data = [
  {
    id: 1,
    img: "https://www.billboard.com/files/media/cher-mamma-mia-premiere-2018-uu-billboard-1548.jpg",
    clicked: false
  },
  {
    id: 2,
    img: "https://3.bp.blogspot.com/-eYSjHgly08s/Wwk5BgWpY8I/AAAAAAAANFM/FtuY3Yp-ziEPJdmviKnW8cyFboiroYXggCLcBGAs/s1600/Cher%2B2018%2Bjames%2Bcorden.png",
    clicked: false
  },
  {
    id: 3,
    img: "https://nyppagesix.files.wordpress.com/2017/06/gettyimages-493892077.jpg?quality=90&strip=all&w=618&h=410&crop=1",
    clicked: false
  },
  {
    id: 4,
    img: "https://www.billboard.com/files/media/cher-jan-2018-u-billboard-1548.jpg",
    clicked: false
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZnfpdmgqtMtrA9uqRgFSoXpBgfoHbT63Hhlj-k5zQHjQYKY1",
    clicked: false
  },
  {
    id: 6,
    img: "https://4.bp.blogspot.com/-E2xSYHfZwpw/WvLg0Ccgf1I/AAAAAAAANDs/xW3w-1PEFFgZMZ-FIb_jf96E9HgV1HS0QCLcBGAs/s1600/Cher%2Bhere%2Bwe%2Bgo%2Bagain%2Btour%2B2018.png",
    clicked: false
  },
  {
    id: 7,
    img: "https://peopledotcom.files.wordpress.com/2018/07/cher-3-2000b.jpg",
    clicked: false
  },
  {
    id: 8,
    img: "https://www.gannett-cdn.com/presto/2018/12/03/USAT/a7b6d2cc-58b5-4d30-937d-8692bfe0d0ba-AP_2018_Kennedy_Center_Honors_-_Arrivals_7.JPG?width=680&height=510&fit=bounds&auto=webp",
    clicked: false
  },
  {
    id: 9,
    img: "https://www.gaystarnews.com/wp-content/uploads/2018/09/cher-hope-you-find-it.gif",
    clicked: false
  },
  {
    id: 10,
    img: "https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2018-07/eto_b02_mama_mia_071518.jpg?itok=NowIQVL5&h=c673cd1c",
    clicked: false
  },
  {
    id: 11,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDz2wROL7GlIRXMOrfJL6irGH_RGYM8FgMx0TyXE-0O_ZC0BHnw",
    clicked: false
  },
  {
    id: 12,
    img: "https://www.sbs.com.au/topics/sites/sbs.com.au.topics/files/styles/single/public/cherhilead.png?itok=JYHwVYWX&mtime=1519823367",
    clicked: false
  },
];

class App extends Component {
  state = {
    // set state at the most base component where it will be used by any other compontents
    currentScore: 0,
    // topScore: 0
    data: data
  }; 

  //method to increase the counter when image is clicked
  handleIncrement = (event) => {
    //get the id off of the img clicked.
    let clickedID = event.target.getAttribute("id");
    console.log(clickedID);
  
    
     /* helper function for shuffling the array
     * Randomize array element order in-place using Durstenfeld shuffle algorithm. */
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      };
      return array;
    };

    let shuffledData = shuffleArray(this.state.data);

    //loop through the shuffled array to match the id to the button clicked id
    for (let i = 0; i < shuffledData.length; i++) {
      //if the id does match one clicked then check clicked value
      if (shuffledData[i].id === parseInt(clickedID)) { 
        // if image is clicked and hasn't been clicked before add one to the score
        if (shuffledData[i].clicked === false){
          //console.log(shuffledData[i]);
          // change value to true
          shuffledData[i].clicked = true;
          //add one to the score
          this.setState({ currentScore: this.state.currentScore +1 });
        }
        //if image has been clicked before reset the game
        else {
          //set score back to zero and reset the array of objects to its original
          this.setState({
            currentScore: 0,
            
            data: [{
                id: 1,
                img: "https://www.billboard.com/files/media/cher-mamma-mia-premiere-2018-uu-billboard-1548.jpg",
                clicked: false
              },{
                id: 2,
                img: "https://3.bp.blogspot.com/-eYSjHgly08s/Wwk5BgWpY8I/AAAAAAAANFM/FtuY3Yp-ziEPJdmviKnW8cyFboiroYXggCLcBGAs/s1600/Cher%2B2018%2Bjames%2Bcorden.png",
                clicked: false
              },{
                id: 3,
                img: "https://nyppagesix.files.wordpress.com/2017/06/gettyimages-493892077.jpg?quality=90&strip=all&w=618&h=410&crop=1",
                clicked: false
              },{
                id: 4,
                img: "https://www.billboard.com/files/media/cher-jan-2018-u-billboard-1548.jpg",
                clicked: false
              },{
                id: 5,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZnfpdmgqtMtrA9uqRgFSoXpBgfoHbT63Hhlj-k5zQHjQYKY1",
                clicked: false
              },{
                id: 6,
                img: "https://4.bp.blogspot.com/-E2xSYHfZwpw/WvLg0Ccgf1I/AAAAAAAANDs/xW3w-1PEFFgZMZ-FIb_jf96E9HgV1HS0QCLcBGAs/s1600/Cher%2Bhere%2Bwe%2Bgo%2Bagain%2Btour%2B2018.png",
                clicked: false
              },{
                id: 7,
                img: "https://peopledotcom.files.wordpress.com/2018/07/cher-3-2000b.jpg",
                clicked: false
              },{
                id: 8,
                img: "https://www.gannett-cdn.com/presto/2018/12/03/USAT/a7b6d2cc-58b5-4d30-937d-8692bfe0d0ba-AP_2018_Kennedy_Center_Honors_-_Arrivals_7.JPG?width=680&height=510&fit=bounds&auto=webp",
                clicked: false
              },{
                id: 9,
                img: "https://www.gaystarnews.com/wp-content/uploads/2018/09/cher-hope-you-find-it.gif",
                clicked: false
              },{
                id: 10,
                img: "https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2018-07/eto_b02_mama_mia_071518.jpg?itok=NowIQVL5&h=c673cd1c",
                clicked: false
              },{
                id: 11,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDz2wROL7GlIRXMOrfJL6irGH_RGYM8FgMx0TyXE-0O_ZC0BHnw",
                clicked: false
              },{
                id: 12,
                img: "https://www.sbs.com.au/topics/sites/sbs.com.au.topics/files/styles/single/public/cherhilead.png?itok=JYHwVYWX&mtime=1519823367",
                clicked: false
              }]
          });
        }; 
      };
    };
  };

  render() {
    return (
      <div>
      <Nav currentScore={this.state.currentScore} />
      <Wrapper>
        <Instructions />
        <GameArea 
          data={this.state.data}
          handleIncrement={this.handleIncrement}
        />
      </Wrapper>
      </div>
    );
  }
}

export default App;
