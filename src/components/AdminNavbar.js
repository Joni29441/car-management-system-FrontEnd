import React from "react";
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <nav>
          <ul>
            <li><Link to="/vehicleHome">Vehicle Home</Link></li>
            <li><Link to="/vehicleForm">Add Vehicle</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      );
    }

export default AdminNavbar;