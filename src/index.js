import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.css";
import './css/index.css';
import './css/App.css';
import './css/Navbar.css';
import './css/Header.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);