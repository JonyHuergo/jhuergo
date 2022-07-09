import React from 'react';
import logo from '../assets/logoReact.svg';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jonathan Huergo Portfolio
        </p>
        <p>Made with <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a></p>
        
      </header>
    </div>
  );
}

export default App;
