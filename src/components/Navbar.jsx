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
        <div className="flex flex-col md:flex-row items-center justify-between md:w-auto w-full md:ml-32 text-pink-600 transition-all duration-300 ease-in-out">
  <div className={`flex flex-col md:flex-row w-100 items-center md:justify-start justify-center md:ml-0 md:bg-transparent ${menuOpen ? 'block' : 'hidden'} md:flex`}>
    <a href="#" className="text-white mx-4 my-3 text-lg hover: transition duration-200">
      Home
    </a>
    <a href="#" className="text-white mx-4 my-3 text-lg hover: transition duration-200">
      About
    </a>
    <a href="#" className="text-white mx-4 my-3 text-lg hover: transition duration-200">
      Quiz
    </a>
    <a href="#" className="text-white mx-4 my-3 text-lg hover: transition duration-200">
      Reviews
    </a>
    <a href="#" className="text-white mx-4 my-3 text-lg hover: transition duration-200">
      Signin
    </a>
  </div>

  {/* Logo Section */}
  <div className="flex justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
    <a href="#">
      <img src={map} alt="Map Logo" className="h-[60px] w-[60px] ml-16 md:h-[70px] md:w-[70px] transition-transform duration-200 transform hover:scale-105" />
    </a>
  </div>
</div>

      </div>
    </>
  );
}

export default Navbar;

