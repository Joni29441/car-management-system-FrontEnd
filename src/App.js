import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Routes/Home';
import Navbar from './components/Navbar';
import Login from './Routes/Login';
import Register from './Routes/Register';
import VehicleForm from './Routes/VehicleForm';
import VehicleHome from './Routes/VehicleHome';
import VehicleList from './Routes/VehicleList';
import Footer from './components/Footer';


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
        <Route path="/register" element={<Register />} />
        <Route path="/vehicleList" element={<VehicleList />} />
        <Route path="/vehicleHome" element={<VehicleHome />} />
        <Route path="/vehicleForm" element={token ? <VehicleForm /> : <Navigate to="/login" />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
