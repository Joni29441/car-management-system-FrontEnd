import React from "react";
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-700 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Car Management System
        </Link>
        <div className="flex space-x-4">
          <Link to="/vehicleHome" className="hover:bg-gray-700 px-3 py-2 rounded-md">
            Search Vehicles
          </Link>
          <Link to="/vehicleListUser" className="hover:bg-gray-700 px-3 py-2 rounded-md">
            View Vehicles
          </Link>
          <Link to="/myTransactions" className="hover:bg-gray-700 px-3 py-2 rounded-md">
            My Transactions
          </Link>
          <Link to="/logout" className="hover:bg-gray-700 px-3 py-2 rounded-md">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};
         
export default AdminNavbar;