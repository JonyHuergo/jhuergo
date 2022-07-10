import React from 'react';
import Contact from './Contact';
import About from './About';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default App;
