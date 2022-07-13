import React, { useState } from 'react';


function ContactForm() {
  return (
    <form>
        <fieldset>
            <legend>Contactame por mail</legend>
            <div class="mb-3">
                <label for="name" class="form-label">Ingresa tu nombre</label>
                <input type="name" class="form-control" id="name"></input>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Ingresa tu mail</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp"></input>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Ingresa tu mensaje</label>
                <textarea class="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">ENVIAR</button>
        </fieldset>
    </form>
  );
}

export default ContactForm;