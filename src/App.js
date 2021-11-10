import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import About from '../src/components/public-pages/About';
import Home from './components/public-pages/Home';
import ToursMountain from './components/public-pages/ToursMountain';
import ToursHeritage from './components/public-pages/ToursHeritage';
import ToursGroup from './components/public-pages/ToursGroup';
import BookingIndividual from './components/public-pages/BookingIndividual';
import BookingGroup from './components/public-pages/BookingGroup';
import ContactEmail from './components/public-pages/ContactEmail';
import ContactVolunteer from './components/public-pages/ContactVolunteer';
import GuestComments from './components/public-pages/GuestComments';
import Login from './components/public-pages/Login';

// components
import Navigation from './components/navigation/Nav';

function App() {
  return (
    <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route path= '/home' exact element={<Home/>} />
            <Route path = '/about' exact element={<About/>} />
            <Route path = '/tours-mountain' exact element={<ToursMountain/>} />
            <Route path = '/tours-heritage' exact element={<ToursHeritage/>} />
            <Route path = '/tours-group' exact element={<ToursGroup/>} />
            <Route path = '/individual-booking' exact element={<BookingIndividual/>} />
            <Route path = '/group-booking' exact element={<BookingGroup/>} />
            <Route path = '/contact-email' exact element={<ContactEmail/>} />
            <Route path = '/contact-volunteer' exact element={<ContactVolunteer/>} />
            <Route path = '/guest-comments' exact element={<GuestComments/>} />
            <Route path = '/login' exact element={<Login/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
