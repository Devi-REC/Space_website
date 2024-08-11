// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SatelliteDetails from './components/SatelliteDetails';

import Contact from './Contact';
import About from './About';
import Home from './Home';
import Astronaut from './Astronaut';
import Satellite from './Satellite';
import AstronautDetail from './components/AstronautDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/astronaut' element={<Astronaut />} />
        <Route path='/satellite' element={<Satellite />} />
        <Route path="/satellite/:id" element={<SatelliteDetails />} />
        <Route path="/astronaut/:id" element={<AstronautDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
