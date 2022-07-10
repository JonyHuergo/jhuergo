import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import logo from '../assets/logoReact.svg';

function About() {
  return (
    <ScrollPage>
      <div id="about" className="about">
        <Animator animation={batch(Fade(), MoveIn(-200, 0), MoveOut(0, -200))}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Acerca de mi
          </p>
        </Animator>
      </div>
    </ScrollPage>
  );
}

export default About;