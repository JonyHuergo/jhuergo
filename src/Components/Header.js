import React, { useEffect, useState } from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Header = () => {
  let animationSteps; // Adjust Header animation in devices with small height so it doesn't overlap with the navbar

  const [height, setDesktop] = useState(window.innerHeight);

  const updateMedia = () => {
    setDesktop(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  (height > 500) ? (
    animationSteps = batch(Fade(), Sticky(), MoveOut(0, -200))
  ):(
    animationSteps = batch(Fade(), MoveOut(0, -200))
  )

  return (
    <ScrollPage>       
      <header id="header" className="header">
          <Animator animation={animationSteps}>
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