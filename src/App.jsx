import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { UserProvider } from './UserContext';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import Profilecreate from './Components/profileCreate';
import Book from './Components/Book';
import Bookings from './Components/Bookings';
 
function App() {
  return (
    <UserProvider>
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profileCreate" element={<Profilecreate />} />
          <Route path="/book" element={<Book />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;
