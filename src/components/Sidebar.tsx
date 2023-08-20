// src/components/Sidebar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/5 bg-gray-900 h-screen text-white p-4">
      <h1 className="text-2xl font-semibold mb-4">My App</h1>
      <ul>
        <li className="mb-2">
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Contacts
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/charts-and-maps" className="text-blue-400 hover:text-blue-300">
            Charts and Maps
          </Link>
        </li>
        {/* ... Other sidebar items */}
      </ul>
    </div>
  );
};

export default Sidebar;
