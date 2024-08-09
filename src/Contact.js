// Contact.js
import React from 'react';
import './Contact.css';
import GalaxyAnimation from './GalaxyAnimation';
import Header from './Header';

function Contact() {
  return (
    <section id="contact" className="section">
         <GalaxyAnimation />
         <Header />
         <div className="staggered-text">
      <h2>Contact Us</h2>
      <p>Email: contact@spaceadventure.com</p>
      </div>
    </section>
  );
}

export default Contact;
