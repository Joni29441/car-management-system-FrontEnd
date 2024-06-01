import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LinkButton = styled(Link)({
  textDecoration: 'none',
  color: 'inherit', 
});

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Car Management System
        </Typography>
        <Button color="inherit">
          <LinkButton to="/">Home</LinkButton>
        </Button>
        <Button color="inherit">
          <LinkButton to="/login">Login</LinkButton>
        </Button>
        <Button color="inherit">
          <LinkButton to="/register">Register</LinkButton>
        </Button>
        <Button color="inherit">
          <LinkButton to="/about">About Us</LinkButton>
        </Button>
        <Button color="inherit">
          <LinkButton to="/contact">Contact Us</LinkButton>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
