import React from 'react';
import logo from '../logo.svg';
import '../css/Navbar.css';

function Navbar() {
    return (
      <nav className="navbar">
        <ul className="nav-logo-element"><img src={logo} className="nav-logo" alt="logo" /> <img src={logo} className="nav-logo" alt="logo" /></ul>
        <ul className="nav-element">Acerca de mi</ul>
        <ul className="nav-element">Contacto</ul>
      </nav>
    );
  }
  
  export default Navbar;