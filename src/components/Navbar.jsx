import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';  
import map from './../Assets/india .png'; 
import logo from './../Assets/logo.jpg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); 

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 h-20 px-4 md:px-16 mt-5 rounded-full flex items-center justify-between fixed top-0 left-5 right-5 z-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="h-14 w-14 md:h-20 md:w-20 p-2">
            <img
              src={logo} 
              className="rounded-full h-full w-full object-cover"
              alt="Logo"
            />
          </div>
          <div className="ml-4">
            <h1 className="text-white text-xl md:text-3xl font-bold">
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
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links for desktop */}
        <div className="hidden md:flex flex-row items-center justify-between md:w-auto">
          <a href="#" className="text-white mx-4 text-lg hover:text-gray-300 transition duration-200">Home</a>
          <a href="#" className="text-white mx-4 text-lg hover:text-gray-300 transition duration-200">About</a>
          <a href="#" className="text-white mx-4 text-lg hover:text-gray-300 transition duration-200">Quiz</a>
          <a href="#" className="text-white mx-4 text-lg hover:text-gray-300 transition duration-200">Reviews</a>
          <a href="#" className="text-white mx-4 text-lg hover:text-gray-300 transition duration-200">News</a>
          <a href="#" className="text-white mx-4 text-lg hover:text-gray-300 transition duration-200">Signin</a>

          <div className="ml-4">
            <a href="#">
              <img
                src={map}
                alt="Map Logo"
                className="h-[60px] w-[60px] md:h-[70px] md:w-[60px] transition-transform duration-200 transform hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu (for small screens, horizontally below the navbar) */}
      <div className={`md:hidden w-full ${menuOpen ? 'block' : 'hidden'} mt-[80px]`}>
        <div className="flex flex-col items-center rounded-lg py-4">
          <a href="#" className="text-red-700 mx-4 my-2 text-lg hover:text-gray-300 transition duration-200">Home</a>
          <a href="#" className="text-red-700 mx-4 my-2 text-lg hover:text-gray-300 transition duration-200">About</a>
          <a href="#" className="text-red-700 mx-4 my-2 text-lg hover:text-gray-300 transition duration-200">Quiz</a>
          <a href="#" className="text-red-700 mx-4 my-2 text-lg hover:text-gray-300 transition duration-200">Reviews</a>
          <a href="#" className="text-red-700 mx-4 my-2 text-lg hover:text-gray-300 transition duration-200">News</a>
          <a href="#" className="text-red-700 mx-4 my-2 text-lg hover:text-gray-300 transition duration-200">Signin</a>
        </div>

        {/* Map icon below the menu for mobile */}
        <div className="flex justify-center mt-4">
          <a href="#">
            <img
              src={map}
              alt="Map Logo"
              className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] transition-transform duration-200 transform hover:scale-105"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;















