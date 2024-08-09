import React, { useEffect, useRef } from 'react';
import './App.css';
import GalaxyAnimation from './GalaxyAnimation';
import Header from './Header';

function Home() {
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
        <h1 className="wel" ref={welcomeRef}>Welcome to Space Adventure</h1>
        <p>Explore the universe with us!</p>
      </div>
    </div>
  );
}

export default Home;
