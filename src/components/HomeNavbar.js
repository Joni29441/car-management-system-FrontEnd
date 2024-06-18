import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles/Navbar.css'; 

const HonmeNavbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        <Typography variant="h6" className="title">
          Car Management System
        </Typography>
        <Button color="inherit">
          <Link to="/">Home</Link>
        </Button>
        <Button color="inherit">
          <Link to="/about">About</Link>
        </Button>
        <Button color="inherit">
          <Link to="/contact">Contact</Link>
        </Button>
        <Button color="inherit">
          <Link to="/Login">Login</Link>
        </Button>
        <Button color="inherit">
          <Link to="/Register">Register</Link>
        </Button>

      </Toolbar>
    </AppBar>
  );
};

export default HonmeNavbar;
