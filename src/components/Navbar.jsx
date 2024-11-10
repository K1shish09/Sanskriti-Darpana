import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';  // Import react-icons
import map from './../Assets/india .png'; // Ensure the map image path is correct
import logo from './../Assets/logo.jpg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu toggle

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 h-20 w-[96%]  ml-6 px-4  md:px-16 mt-5 rounded-full flex items-center justify-between fixed top-0 left-0 right-0 z-10">
        {/* Logo Div */}
        <div className="flex items-center">
          <div className="h-20 w-24">
            <img
              src={logo} // Make sure to use the correct path here
              className="rounded-full h-[70px] w-[70px] align-middle mt-1 ml-2"
              alt="Logo"
            />
          </div>
          <div className="ml-4">
            <h1 className="text-white text-3xl font-bold">
              <span className="text-slate-100">S</span>anskriti
              <span className="text-slate-100">D</span>arpan
            </h1>
          </div>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}  {/* Toggle between FaBars and FaTimes */}
        </button>

        {/* Navbar Links */}
        <div
          className={`flex flex-col md:flex-row md:w-auto w-full items-center justify-between md:ml-32 transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          <a href="#" className="text-white ml-16 my-6 text-lg">
            Home
          </a>
          <a href="#" className="text-white ml-16 my-6 text-lg">
            About
          </a>
          <a href="#" className="text-white ml-16 my-6 text-lg">
            News
          </a>
          <a href="#" className="text-white ml-16 my-6 text-lg">
            Quiz
          </a>
          <a href="#" className="text-white ml-16 my-6 text-lg">
            Reviews
          </a>
          <a href="#" className="text-white ml-16 my-6 text-lg">
            Signin
          </a>
        </div>

        {/* Map Logo */}
        <div className="h-20 w-40 ml-5">
          <a href="#">
            <img src={map} alt="Map" className="h-[70px] w-[70px] ml-16 mt-1" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;

