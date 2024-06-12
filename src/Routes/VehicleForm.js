import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function VehicleForm () {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');

 
  const handleOnSubmit = async () => {
    await fetch('https://localhost:7133/api/Vehicle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        { 
          brand,
          model,
          year,
          price
        }
      )
    });
    setBrand("");
    setModel("");
    setYear("");
    setPrice("");
};  

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <TextField
          variant="outlined"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          label="Brand"
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          label="Model"
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          label="Year"
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          label="Price"
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Vehicle
        </Button>
      </form>
    </div>
  );
};

export default VehicleForm;
