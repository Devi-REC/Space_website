import React, { useEffect, useRef } from 'react';
import './App.css';
import GalaxyAnimation from './GalaxyAnimation';
import Header from './Header';
import UpcomingEvents from './UpcomingEvents';
import styled from 'styled-components'; // Import styled-components
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

function Home() {
  const events = [
    {
        title: 'Space Exploration Webinar',
        date: 'August 20, 2024',
        description: 'Join us for a webinar on the latest in space exploration technology.',
    },
    {
        title: 'Satellite Launch Event',
        date: 'September 10, 2024',
        description: 'Witness the launch of our new satellite!',
    },
    // Add more events here
  ];
  
  const welcomeRef = useRef(null);

  useEffect(() => {
    const element = welcomeRef.current;
    const text = element.textContent;
    element.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
  }, []);

  return (
    <div className="App">
      <GalaxyAnimation />
      <Header />
      <div className="welcome-message">
        <h1 className="wel" ref={welcomeRef}>Welcome to Space Adventures</h1>
        <p className='para'>Explore the universe with us!</p>
        <AstronautImage src={astronaut} alt="Astronaut"/>
        <UpcomingEvents events={events} />
      </div>
    </div>
  );
}

export default Home;
