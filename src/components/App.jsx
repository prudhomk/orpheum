import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Splash from '../components/Splash';
import Home from '../components/Home';
import Performers from '../components/Performers';
import Profile from '../components/User/Profile';
import Favorites from '../components/Favorites';
import News from '../components/News';

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Splash />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/performers" element={<Performers />}/>
        <Route exact path="/news" element={<News />}/>
        <Route exact path="/favorites" element={<Favorites />}/>
        <Route exact path="/profile" element={<Profile />}/>
      </Routes>
    </>
  )
}
