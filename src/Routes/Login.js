import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../components/HomeNavbar';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:7133/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userId', data.userId); // Store the user ID
        localStorage.setItem('roles', JSON.stringify(data.roles)); // Store roles
        onLoginSuccess(data.token, data.roles);
        setEmail('');
        setPassword('');
        setError(null);

        // Navigate based on roles
        if (data.roles.includes('Admin')) {
          navigate('/VehicleList'); // Redirect to admin page
        } else {
          navigate('/VehicleHome'); // Redirect to user page
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };
  
  
  return (
    <>
    <HomeNavbar/>

    <div className="min-h-screen flex items-center justify-center hero-background">
    <div className="hero-content">
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 mx-auto rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleOnSubmit}>
          <TextField
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            fullWidth
            margin="normal"
          />
          <TextField
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            fullWidth
            margin="normal"
          />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </div>
    </div>
    </div>

    </>
  );
}

export default Login;
