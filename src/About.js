import React, { useEffect } from 'react';
import './About.css';
import anime from 'animejs/lib/anime.es.js';
import GalaxyAnimation from './GalaxyAnimation';
import Header from './Header';

function About() {
  useEffect(() => {
    // Line drawing animation for SVG paths
    anime({
      targets: '.line-drawing-demo .line',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250; },
      direction: 'alternate',
      loop: true
    });

    // Staggered scale animation for text elements

  }, []);

  return (
    <section id="about" className="section">
          <GalaxyAnimation />
          <Header />
      <div className="line-drawing-demo">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <path className="line" d="M10,10 H90 V90 H10 Z" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="staggered-text">
        <h2 className="ell">About Us</h2>
        <p className="ell">This is the about section.</p>
      </div>
    </section>
  );
}

export default About;
