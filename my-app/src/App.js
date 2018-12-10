import React from 'react';
// import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Instructions from './components/Instructions';
import GameArea from './components/GameArea';

//this is where I will bring in my different components of the page, this file is then used by index.js

const App = () => (
  <Wrapper>
    <Instructions />
    <GameArea />
  </Wrapper>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
