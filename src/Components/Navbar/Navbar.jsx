import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">AgroGuard</Link>
        

        {/* Menu Toggle (for mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 text-white">
            <li>
              <Link to='/' className="hover:text-gray-300" >Home</Link>
            </li>
            <li>
            <Link to='/about' className="hover:text-gray-300" >About</Link>
            </li>
            <li>
            <Link to='/contact' className="hover:text-gray-300" >Contact Us</Link>
            </li>
          </ul>

          {/* Login Button */}
          <div className="mt-4 md:mt-0 md:ml-6">
            <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
