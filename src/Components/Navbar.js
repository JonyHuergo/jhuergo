import React from 'react';
import logoCircle from '../assets/logoCircle.png';
import logoSignature from '../assets/logoSignature.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <div className="container-fluid">
                <div className="nav-item logo-container">
                    <a className="nav-link active" aria-current="page" href="#header">
                        <img src={logoCircle} className="nav-logo nav-logo-circle" alt="logo" /><img src={logoSignature} className="nav-logo" alt="logo" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Acerca de mi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
  }
  
  export default Navbar;