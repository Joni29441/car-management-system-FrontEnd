import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

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

      const text = await response.text(); // Log the response text
      console.log('Response text:', text);

      const data = JSON.parse(text); // Parse the text as JSON

      if (response.ok) {
        onLoginSuccess(data.token, data.roles || []);
        setEmail('');
        setPassword('');
        setError(null);

        // Navigate based on roles, assume roles are part of the response
        if (data.roles && data.roles.includes('Admin')) {
          navigate('/VehicleForm');
        } else {
          navigate('/VehicleHome');
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error); // Log error for debugging
    }
  };

  return (
    <div className="hero-background">
      <div className="hero-content">
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
  );
}

export default Login;
