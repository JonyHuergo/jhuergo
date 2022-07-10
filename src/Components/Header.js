import React from 'react';
import logo from '../assets/logoReact.svg';

function Header() {
  return (
    <header id="header" className="header">
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
  );
}

export default Header;