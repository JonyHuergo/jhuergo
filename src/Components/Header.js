import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function Header() {
  return (
    <ScrollPage>       
      <header id="header" className="header">
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="presentation">
            <h1>Soy Jonathan Huergo,</h1>
            <h2>desarrollador Front End y estudiante de Ingeniería Informática</h2>
          </div>
          <a href="#contact"><button type="button" class="btn btn-outline-primary contact-button">CONTACTAME</button></a>
        </Animator>
      </header>
    </ScrollPage>
  );
}

export default Header;