
import React from 'react';
import './Satellite.css';
import GalaxyAnimation from './GalaxyAnimation';
import Header from './Header';
function Satellite() {
  return (
    <section id="unique" className="section">
        <GalaxyAnimation />
         <Header />
         <div className="staggered-text">
      <h2>Unique Page</h2>
      <p>This is a unique page with special content.</p>
      </div>
    </section>
  );
}

export default Satellite;
