import React, { useState } from 'react';

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
import Navigation from './components/public-navigation/Nav';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const LoginFunction = details => {
    console.log(details)
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged In!");
      setUser({
        email: details.email
      })
    } else {
      console.log("Details do not match!")
      setError("Details do not match!")
    }
  }

  const LogoutFunction = () => {
    setUser({email: ""});
  }

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome">
          <Router>
            {/* Make the Nav Below the Public One! */}
          <Navigation />
          </Router>
          <h2>Welcome, <span>{user.email}</span></h2>
          <button onClick={LogoutFunction}>Logout</button>
        </div>
      ) : 
        
        <Router>
          <Navigation />
          <Routes>
            <Route path= '/' exact element={<Home/>} />
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
            <Route path = '/login' exact element={<Login LoginFunction={LoginFunction} error={error}/>} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
