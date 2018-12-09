import React from 'react';
import './GameArea.css';

const GameArea = () => (
    <div>
        <button>
            <img src="https://www.billboard.com/files/media/cher-mamma-mia-premiere-2018-uu-billboard-1548.jpg" alt="game piece" />
        </button>
        <button>
            <img src="https://3.bp.blogspot.com/-eYSjHgly08s/Wwk5BgWpY8I/AAAAAAAANFM/FtuY3Yp-ziEPJdmviKnW8cyFboiroYXggCLcBGAs/s1600/Cher%2B2018%2Bjames%2Bcorden.png" alt="game piece" />
        </button>
        <button>
            <img src="https://nyppagesix.files.wordpress.com/2017/06/gettyimages-493892077.jpg?quality=90&strip=all&w=618&h=410&crop=1" alt="game piece" />
        </button>
    </div>
);
    // when have an array will use props to pass in the image URLs
    // multiple divs each containing a picture
    // loop though an array of image URLs to assgin to each div,
    // render each div randomly on page
    // upon click of image re render images in new random pattern


export default GameArea;