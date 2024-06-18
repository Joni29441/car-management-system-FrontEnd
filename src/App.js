import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Routes/Home';
import Login from './Routes/Login';
import Register from './Routes/Register';
import VehicleForm from './Routes/VehicleForm';
import VehicleHome from './Routes/VehicleHome';
import Footer from './components/Footer';
import VehicleList from './Routes/VehicleList';
import VehicleListUser from './Routes/VehicleListUser';
import Transactions from './Routes/Transactions';
import AboutUs from './Routes/AboutUs';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vehicleListUser" element={<VehicleListUser />} />
        <Route path="/vehicleHome" element={<VehicleHome />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route
          path="/vehicleForm"
          element={token ? <VehicleForm /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      <Route path='/VehicleList' element={<VehicleList/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
