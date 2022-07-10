import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollContainer>
        <Header />
        <About />
        <Contact />
        <Footer />
      </ScrollContainer>
    </div>
  );
}

export default App;
