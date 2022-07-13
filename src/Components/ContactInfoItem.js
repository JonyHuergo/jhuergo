import React from 'react';
import { MdPlace } from 'react-icons/md';

function ContactInfoItem({
  icon = <MdPlace />,
  text = 'Texto por completar',
}) {
  return (
    <div>
      <div className="icon">{icon}</div>
      <div className="info">{text}</div>
    </div>
  );
}

export default ContactInfoItem;