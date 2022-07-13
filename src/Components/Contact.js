import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';

function Contact() {
  return (
    <ScrollPage>
    <div id="contact" className="contact container-fluid">
      <Animator animation={batch(Fade(), MoveIn(-200, 0), MoveOut(0, -200))}>
        <h2>CONTACTO</h2>
        <div class="row align-items-center">
          <div class="col-lg-6">
            <ContactInfoItem icon={<MdLocalPhone/>}/>
            <ContactInfoItem icon={<MdEmail/>}/>
            <ContactInfoItem />
          </div>
          <div class="col-lg-6">
            <ContactForm />
          </div>
        </div>
      </Animator>
    </div>
    </ScrollPage>
    );
}

export default Contact;