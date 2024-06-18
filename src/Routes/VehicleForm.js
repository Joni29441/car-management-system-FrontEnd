import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AdminNavbar from '../components/AdminNavbar';



function VehicleForm () {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
 
  const handleOnSubmit = async () => {
    await fetch('https://localhost:7133/api/vehicle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(
        { 
          brand,
          model,
          year,
          price,
          image
        }
      )
    });
    
    setBrand("");
    setModel("");
    setYear("");
    setPrice("");
    setImage(null);
  };  

  return (
    <>
    <AdminNavbar/>
    <div className="container mx-auto p-4">
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Vehicles</h2>
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
         
        <Button type="submit" variant="contained" color="primary" onClick={handleOnSubmit}>Add Vehicle</Button>
        </div>
        </div>
    </>
  );
};

export default VehicleForm;
