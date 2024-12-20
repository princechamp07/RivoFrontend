import React from 'react';
import { FaTshirt, FaHome, FaComments, FaTasks, FaUserFriends, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { icon: <FaHome />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FaTshirt />, label: 'Ecommerce', path: '/ecommerce' },
    { icon: <FaUserFriends />, label: 'Orders', path: '/order' },
    
  ];

  return (
    <div className="w-64 h-screen bg-white p-5 shadow-lg">
      <div className="text-2xl font-bold text-blue-500 mb-8">RIVO</div>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-600 cursor-pointer">
            <Link to={item.path} className="flex items-center space-x-2">
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
