import React from 'react';
import logo from '../assets/logoReact.svg';

function About() {
  return (
    <div className="about">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Acerca de mi
        </p>
    </div>
  );
}

export default About;