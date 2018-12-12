import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Counter from './Counter';
import './Nav.css';

const Nav = (props) => {
  return (
    <Navbar fixedTop>
       <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Clicky Game</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Counter 
        //include the props from the counter state in App
        currentScore={props.currentScore}
      />
    </Navbar>
  );
};

export default Nav;


