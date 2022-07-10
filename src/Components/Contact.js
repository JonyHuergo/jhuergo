import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import logo from '../assets/logoReact.svg';

function Contact() {
  return (
    <ScrollPage>
      <div id="contact" className="contact">
        <Animator animation={batch(Fade(), MoveIn(-200, 0), MoveOut(0, -200))}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Contacto
          </p>
        </Animator>
      </div>
    </ScrollPage>
  );
}

export default Contact;