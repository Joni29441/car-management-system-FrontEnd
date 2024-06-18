import React, { useState } from 'react';

function SearchVehicles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('brand');
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleSearch = async () => {
    let url = `https://localhost:7133/api/Vehicle/search/by${searchType.charAt(0).toUpperCase() + searchType.slice(1)}/${searchTerm}`;
    const response = await fetch(url);
    const data = await response.json();
    setVehicles(data);
  };

  const handleBuy = async (vehicleId, amount) => {
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');

    const transactionData = {
      vehicleId,
      userId,
      amount,
    };

    try {
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
      } else {
        const errorData = await response.json();
        alert('Purchase failed: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing your request.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="search-bar flex flex-col items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-full max-w-md p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 mb-4"
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="w-full max-w-md p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 mb-4"
        >
          <option value="brand">Brand</option>
          <option value="model">Model</option>
          <option value="year">Year</option>
        </select>
        <button onClick={handleSearch} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">{vehicle.brand} {vehicle.model}</h1>
            <h2 className="text-gray-700 dark:text-gray-400">Year: {vehicle.year}</h2>
            <h1 className="text-gray-700 dark:text-gray-400">Price: ${vehicle.price}</h1>
            <h1 className="text-gray-700 dark:text-gray-100">Status: {vehicle.status}</h1>
            <button
              className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => setSelectedVehicle(vehicle)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>

      {selectedVehicle && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Vehicle Details</h3>
            <p><strong>Brand:</strong> {selectedVehicle.brand}</p>
            <p><strong>Model:</strong> {selectedVehicle.model}</p>
            <p><strong>Year:</strong> {selectedVehicle.year}</p>
            <p><strong>Price:</strong> ${selectedVehicle.price}</p>
            <div className="mt-4 flex justify-between">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                onClick={() => {
                  handleBuy(selectedVehicle.id, selectedVehicle.price);
                  setSelectedVehicle(null);
                }}
              >
                Proceed to Purchase
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={() => setSelectedVehicle(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchVehicles;
