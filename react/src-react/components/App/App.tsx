import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Mockup from '../Mockup/Mockup';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockup" element={<Mockup />} />
      </Routes>
    </>
  );
}
