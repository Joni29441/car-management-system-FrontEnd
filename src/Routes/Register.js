import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:7133/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        setEmail('');
        setPassword('');
        setError(null);
        navigate('/login');
      } else {
        const data = await response.json();
        setError(data || 'Registration failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
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
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
