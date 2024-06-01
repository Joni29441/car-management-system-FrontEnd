import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import VehicleFrom from './components/VehicleForm';
import Login from './components/login';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  const handleLoginSuccess = (token) => {
    setToken(token);
    localStorage.setItem('authToken', token);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/vehicleForm" element={token ? <VehicleFrom /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
