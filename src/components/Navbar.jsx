import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import map from './../Assets/india .png';
import logo1 from './../Assets/logo.png';
import './Navbar.css';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth(); // Get currentUser and logout from AuthContext
  const navigate = useNavigate(); // Initialize useNavigate

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // Navigate to login page after logout
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <>
      <div className="bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 h-20 px-4 md:px-16 rounded-lg flex items-center justify-between fixed top-1 left-1 right-1 z-10 css">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="h-14 w-14 md:h-20 md:w-20 p-2">
            <img
              src={logo1}
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
          <a href="/" className="text-white mx-4 text-lg hover:text-gray-300 transition duration-200">Home</a>
          <a href="/about" className="text-white mx-4 text-lg hover:text-gray-300 transition duration-200">About</a>
          {!currentUser && (
            <a href="/quiz" className="text-white mx-4 text-lg hover:text-gray-300 transition duration-200">Quiz</a>
          )}
          <a href="/reviews" className="text-white mx-4 text-lg hover:text-gray-300 transition duration-200">Reviews</a>
          <a href="/news" className="text-white mx-4 text-lg hover:text-gray-300 transition duration-200">News</a>
          {currentUser ? (
            <>
              <div className="ml-4">
                <a href="/india-map" className="text-white mx-4 text-lg hover:text-gray-300 transition duration-200">
                  <img
                    src={map}
                    alt="Map Logo"
                    className="h-[60px] w-[60px] md:h-[70px] md:w-[60px] transition-transform duration-200 transform hover:scale-105"
                  />
                </a>
              </div>
              <button onClick={handleLogout} className="bg-white text-red-600 mx-4 my-2 text-lg hover:bg-gray-300 transition duration-200 px-4 py-2 rounded-full">Logout</button>
            </>
          ) : (
            <button onClick={() => navigate('/login')} className="bg-white text-red-600 mx-4 text-lg hover:bg-gray-300 transition duration-200 px-4 py-2 rounded-full">Login</button>
          )}
        </div>
      </div>

      {/* Mobile Menu (for small screens, horizontally below the navbar) */}
      <div className={`md:hidden w-full ${menuOpen ? 'block' : 'hidden'} mt-[80px]`}>
        <div className="flex flex-col items-center rounded-lg py-4">
          <a href="/" className="text-red-700 mx-4 my-2 text-lg hover:text-gray-300 transition duration-200">Home</a>
          <a href="/about" className="text-red-700 mx-4 my-2 text-lg hover:text-gray-300 transition duration-200">About</a>
          {!currentUser && (
            <a href="/quiz" className="text-red-700 mx-4 my-2 text-lg hover:text-gray-300 transition duration-200">Quiz</a>
          )}
          <a href="/reviews" className="text-red-700 mx-4 my-2 text-lg hover:text-gray-300 transition duration-200">Reviews</a>
          <a href="/news" className="text-red-700 mx-4 my-2 text-lg hover:text-gray-300 transition duration-200">News</a>
          
          {/* Map icon below the menu for mobile */}
        {currentUser && (
          <div className="flex justify-center mt-4">
            <a href="/india-map" className="text-red-700 mx-4 my-2 text-lg hover:text-gray-300 transition duration-200">
              <img
                src={map}
                alt="Map Logo"
                className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] transition-transform duration-200 transform hover:scale-105"
              />
            </a>
          </div>
        )}
          {currentUser ? (
            <button onClick={handleLogout} className="bg-white text-red-700 mx-4 my-2 text-lg hover:bg-gray-300 transition duration-200 px-4 py-2 rounded-full">Logout</button>
          ) : (
            <button onClick={() => navigate('/login')} className="bg-white text-red-700 mx-4 my-2 text-lg hover:bg-gray-300 transition duration-200 px-4 py-2 rounded-full">Login</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;

