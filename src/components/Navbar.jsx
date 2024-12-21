import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="mx-auto w-full flex justify-center">
      <nav className="flex w-full justify-around shadow-sm p-10 h-16 items-center">
        <div className="text-green-950 font-bold text-3xl font-serif">
          Rivo
        </div>

        <div className="flex items-center space-x-6">
          {/* Shopping Bag Icon */}
          <div className="relative">
            <FaShoppingBag className="text-2xl text-green-900 cursor-pointer" />
            {/* Optional badge for item count */}
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>

          {/* Login Button */}
          <div className="uppercase font-serif border hover:shadow-inner rounded p-1 px-4 border-green-900 cursor-pointer">
            <Link to="RivoFrontend/login">Login</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
