import React, { useEffect } from 'react';
import './About.css';
import anime from 'animejs/lib/anime.es.js';
import GalaxyAnimation from './GalaxyAnimation';
import Header from './Header';
import styled from 'styled-components';
import astronaut from './assets/astro.gif';
// Define the AstronautImage styled component
const AstronautImage = styled.img`
    position: absolute;
    left: 5px; /* Adjust as needed */
    top: 50%;
    transform: translateY(-50%);
    width: 550px; /* Adjust as needed */
    height: auto;
    border-radius: 10px; /* Optional */
    
     /* Optional */
`;
const Astro= styled.img`
    position: absolute;
    right: 100px; /* Adjust as needed */
    top: 50%;
    transform: translateY(-50%);
    width: 350px; /* Adjust as needed */
    height: auto;
    border-radius: 10px; /* Optional */
    
     /* Optional */
`;
const EventsContainer = styled.div`
    max-height: 530px; /* Adjust based on your needs */
    overflow-y: auto; /* Enables vertical scrolling */
    padding: 30px;
    width:40%;
    margin-left:27%;
    margin-top:8%;
    border: 2px solid rgb(40, 210, 207); /* Add border */
  border-radius: 12px; /* Rounded corners */
  
  background-color: #041514c9 ;
    box-shadow: 
        1px 4px 8px rgb(45, 210, 207), /* Shadow on bottom and right */
        0 -4px 8px rgb(45, 210, 207); /* Shadow on top */
    position: relative; /* Allows positioning of the GIF */
    /* Space for the astronaut GIF */
`;
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
  }, []);

  return (
    <section id="about" className="sec">
      <GalaxyAnimation />
      <Header />
      <div className="welcomemessage">
      <AstronautImage src={astronaut} alt="Astronaut"/>
      <Astro src={astronaut} alt="Astronaut"/>
     <EventsContainer>
    
      <h2 className='head'>About Us</h2>
        
         
          <p>Welcome to SpaceAdventure, your gateway to the wonders of space exploration! Our journey begins with the brave astronauts who push the boundaries of human exploration, venturing into the cosmos to uncover new frontiers and expand our knowledge of the universe. These heroes undergo rigorous training and embark on extraordinary missions, from historic spacewalks to life aboard the International Space Station (ISS). 

Equally fascinating are the satellites that orbit our planet, providing critical data that supports weather forecasting, climate monitoring, communication, and navigation. These technological marvels gather and relay essential information from space, playing a pivotal role in our daily lives and scientific advancements.

Stay informed about the latest and upcoming events in the world of space. Whether it’s satellite launches, space missions, astronomical phenomena, or international conferences, SpaceAdventure keeps you updated on all the exciting developments in space exploration. Join us as we explore the final frontier and celebrate the achievements that shape our understanding of the universe.</p>
</EventsContainer>

        </div>
       
    
    
    </section>
  );
}

export default About;
