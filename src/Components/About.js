import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import photo from '../assets/male-placeholder-image.jpeg';

function About() {
  return (
    <ScrollPage>
      <div id="about" className="about">
        <Animator animation={batch(Fade(), MoveIn(-200, 0), MoveOut(0, -200))}>
          <h2>ACERCA DE MI</h2>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h3>Titulo</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="col-lg-6">
              <img src={photo} className="photo" alt="photo" />
            </div>
          </div>
        </Animator>
      </div>
    </ScrollPage>
  );
}

export default About;