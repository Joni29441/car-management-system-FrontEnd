import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Card, CardContent, Typography, CardActions, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import UserNavbar from '../components/UserNavbar';

function VehicleListUser() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    const response = await fetch("https://localhost:7133/api/Vehicle");
    const data = await response.json();
    setVehicles(data);
  };

  const handleBuy = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handlePurchase = async () => {
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');

    const transactionData = {
      vehicleId: selectedVehicle.id,
      userId,
      amount: selectedVehicle.price,
    };

    const response = await fetch('https://localhost:7133/api/Transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(transactionData)
    });

    if (response.ok) {
      alert('Purchase successful!');
      setSelectedVehicle(null);
      fetchVehicles();
    } else {
      const errorData = await response.json();
      alert('Purchase failed: ' + errorData.message);
    }
  };

  return (
    <>
      <UserNavbar />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">{vehicle.brand} {vehicle.model}</h1>
              <h2 className="text-gray-700 dark:text-gray-400">Year: {vehicle.year}</h2>
              <h1 className="text-gray-700 dark:text-gray-400">Price: ${vehicle.price}</h1>
              <h1 className="text-gray-700 dark:text-gray-100">Status: {vehicle.status}</h1>
              <div className="flex space-x-2 mt-4">
                <button
                  className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                  onClick={() => handleBuy(vehicle)}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedVehicle && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Vehicle Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">Brand</h4>
                  <p className="text-gray-800 dark:text-gray-100">{selectedVehicle.brand}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">Model</h4>
                  <p className="text-gray-800 dark:text-gray-100">{selectedVehicle.model}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">Year</h4>
                  <p className="text-gray-800 dark:text-gray-100">{selectedVehicle.year}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">Price</h4>
                  <p className="text-gray-800 dark:text-gray-100">${selectedVehicle.price}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">Status</h4>
                  <p className="text-gray-800 dark:text-gray-100">{selectedVehicle.status}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={() => setSelectedVehicle(null)}
                >
                  Cancel
                </button>
                <button
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  onClick={handlePurchase}
                >
                  Proceed to Purchase
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default VehicleListUser;
