import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import BookingPage from './pages/BookingPage';
import ProviderList from './pages/ProviderList';
import BookingHistory from './pages/BookingHistory';
import AdminPanel from './pages/AdminPanel';
import ProviderProfile from './components/ProviderProfile';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/book/:serviceName" element={<BookingPage />} />
  <Route path="/providers" element={<ProviderList />} />        
  <Route path="/my-bookings" element={<BookingHistory />} />
  <Route path="/admin" element={<AdminPanel />} />
  <Route path="/provider/:providerId" element={<ProviderProfile />} />
  <Route path="/provider/:id" element={<ProviderProfile />} />

</Routes>

    </BrowserRouter>
  );
}

export default App;
