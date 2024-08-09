// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from './Contact';
import About from './About';
import Home from './Home';

import Satellite from './Satellite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/satellite' element={<Satellite />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
