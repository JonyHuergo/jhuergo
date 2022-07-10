import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import logo from '../assets/logoReact.svg';

function Header() {
  return (
    <ScrollPage>       
      <header id="header" className="header">
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
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
        </Animator>
      </header>
    </ScrollPage>
  );
}

export default Header;