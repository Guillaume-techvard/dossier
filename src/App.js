// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Guide1 from './pages/Guide1';

import Home from './pages/Home';
import Guide2 from './pages/Guide2';
import Guide3 from './pages/Guide3';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/guide1" element={<Guide1 />} />
        <Route path="/guide2" element={<Guide2 />} />
        <Route path="/guide3" element={<Guide3 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
