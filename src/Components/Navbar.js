import React from 'react';
import logo from '../logo.svg';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0">
            <div className="nav-container container-fluid">
                {/*<img src={logo} classNameName="nav-logo" alt="logo" /><img src={logo} classNameName="nav-logo w-25" alt="logo" />*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        );
  }
              {/*<ul classNameName="nav-logo-element"><img src={logo} classNameName="nav-logo" alt="logo" /> <img src={logo} classNameName="nav-logo" alt="logo" /></ul>
<nav classNameName="navbar">
        <ul classNameName="nav-items">
            <li classNameName="nav-logo-element"><img src={logo} classNameName="nav-logo" alt="logo" /> <img src={logo} classNameName="nav-logo" alt="logo" /></li>
            <li classNameName="nav-element">Acerca de mi</li>
            <li classNameName="nav-element">Contacto</li>
        </ul>
        <ul classNameName="nav-element">Acerca de mi</ul>
        <ul classNameName="nav-element">Contacto</ul>
      </nav>*/}

  
  export default Navbar;