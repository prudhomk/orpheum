import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Splash from '../components/Splash';
import Home from '../components/Home';

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Splash />}/>
        <Route exact path="/home" element={<Home />}/>
      </Routes>
    </>
  )
}
