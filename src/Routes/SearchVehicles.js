import React, { useState } from 'react';

function SearchVehicles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('brand'); // Default search type
  const [vehicles, setVehicles] = useState([]);

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
  };

  return (
    <div className="container bg-slate-500 p-6 mb-80">
      <div className="flex flex-col items-center mb-6">
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 w-full max-w-md mb-4"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded-md p-2 w-full max-w-md mb-4"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="brand">Brand</option>
          <option value="model">Model</option>
          <option value="year">Year</option>
        </select>
        <button
          className="bg-blue-600 text-white rounded-md p-2 w-full max-w-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{vehicle.brand} {vehicle.model}</h5>
            <p className="text-gray-700 dark:text-gray-400">Year: {vehicle.year}</p>
            <p className="text-gray-700 dark:text-gray-400">Price: ${vehicle.price}</p>
            <p className="text-gray-700 dark:text-gray-400">Status: {vehicle.status}</p>
            <button
              className="mt-4 w-full bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => handleBuy(vehicle.id, vehicle.price)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchVehicles;
