import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import AdminNavbar from '../components/AdminNavbar';

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [editingVehicle, setEditingVehicle] = useState(null);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    const response = await fetch("https://localhost:7133/api/Vehicle");
    const data = await response.json();
    setVehicles(data);
  };

  const handleDelete = async (vehicleId) => {
    const token = localStorage.getItem('authToken');

    const response = await fetch(`https://localhost:7133/${vehicleId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      fetchVehicles();
    } else {
      const errorData = await response.json();
      alert('Delete failed: ' + errorData.message);
    }
  };

  const handleEdit = (vehicle) => {
    setEditingVehicle(vehicle);
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem('authToken');
    const response = await fetch(`https://localhost:7133/${editingVehicle.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(editingVehicle),
    });

    if (response.ok) {
      setEditingVehicle(null);
      fetchVehicles();
    } else {
      const errorData = await response.json();
      alert('Update failed: ' + errorData.message);
    }
  };

  return (
    <>
    <AdminNavbar/>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-white-700">
            <h1 className="text-xl font-bold text-gray-500 dark:text-white">{vehicle.brand} {vehicle.model}</h1>
            <h2 className="text-gray-700 dark:text-gray-400">Year: {vehicle.year}</h2>
            <h1 className="text-gray-700 dark:text-gray-400">Price: ${vehicle.price}</h1>
            <h1 className="text-gray-700 dark:text-gray-100">Status: {vehicle.status}</h1>
            <div className="flex space-x-2 mt-4">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => handleEdit(vehicle)}
              >
                Edit
              </button>
              <button
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                onClick={() => handleDelete(vehicle.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingVehicle && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-white-800 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-black">Edit Vehicle</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
              <div className="mb-4">
                <TextField
                  variant="outlined"
                  value={editingVehicle.brand}
                  onChange={(e) => setEditingVehicle({ ...editingVehicle, brand: e.target.value })}
                  label="Brand"
                  fullWidth
                  margin="normal"
                  className="mb-4"
                />
                <TextField
                  variant="outlined"
                  value={editingVehicle.model}
                  onChange={(e) => setEditingVehicle({ ...editingVehicle, model: e.target.value })}
                  label="Model"
                  fullWidth
                  margin="normal"
                  className="mb-4"
                />
                <TextField
                  variant="outlined"
                  value={editingVehicle.year}
                  onChange={(e) => setEditingVehicle({ ...editingVehicle, year: e.target.value })}
                  label="Year"
                  fullWidth
                  margin="normal"
                  className="mb-4"
                />
                <TextField
                  variant="outlined"
                  value={editingVehicle.price}
                  onChange={(e) => setEditingVehicle({ ...editingVehicle, price: e.target.value })}
                  label="Price"
                  fullWidth
                  margin="normal"
                  className="mb-4"
                />
              </div>
              <div className="flex justify-between">
                <button type="submit" variant="contained" color="primary">
                  Update Vehicle
                </button>
                <button variant="contained" color="secondary" onClick={() => setEditingVehicle(null)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default VehicleList;
