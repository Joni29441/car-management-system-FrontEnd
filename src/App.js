import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Routes/Home';
import Navbar from './components/Navbar';
import Login from './Routes/Login';
import Register from './Routes/Register';
import VehicleForm from './Routes/VehicleForm';
import VehicleHome from './Routes/VehicleHome';

function App() {
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const [roles, setRoles] = useState(JSON.parse(localStorage.getItem('roles')) || []);

  useEffect(() => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('roles', JSON.stringify(roles));
  }, [token, roles]);

  const handleLoginSuccess = (token, roles) => {
    setToken(token);
    setRoles(roles);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vehicleHome" element={<VehicleHome />} />
        <Route path="/vehicleForm" element={roles.includes('Admin') ? <VehicleForm /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
