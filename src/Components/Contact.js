import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import ContactForm from './ContactForm';

function Contact() {
  return (
    <ScrollPage>
      <div id="contact" className="contact">
        <Animator animation={batch(Fade(), MoveIn(-200, 0), MoveOut(0, -200))}>
          <h2>CONTACTO</h2>
          <ContactForm />
        </Animator>
      </div>
    </ScrollPage>
  );
}

export default Contact;