import React from 'react';
import logo from './../Assets/logo.png';

function Footer() {
  return (
    <div className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white relative">
      <div className="w-full max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        
        {/* Top Right: Subscribe Button */}
        <div className="absolute top-4 right-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full">
            Subscribe
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 mt-8">

          {/* Logo and Description */}
          <div className="flex items-start space-x-4 md:space-x-8 w-full md:w-auto">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Sanskrit Darpan</h1>
              <p className="mt-3 text-lg max-w-lg">
                Our website '<strong>Sanskriti Darpan</strong>' is a great way of promoting our rich
                and diverse Indian cultural heritage and tradition among students. Our primary goal is to spread and promote Indian 
                culture among students and aspirants interested in India’s Cultural and Heritage.
              </p>
            </div>
          </div>
          
          {/* Visit Section */}
          <div className="text-center md:text-left">
            <h1 className="font-bold text-3xl">Visit For More</h1>
            <ul className="mt-3 text-lg space-y-1">
              <li><a href="https://www.mygov.in/" className="hover:underline" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt mr-2"></i>My Government</a></li>
              <li><a href="https://www.digitalindia.gov.in/" className="hover:underline" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt mr-2"></i>Digital India</a></li>
              <li><a href="https://www.tourism.gov.in/" className="hover:underline" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt mr-2"></i>Ministry of Tourism</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h1 className="font-bold text-3xl">Contact Us</h1>
            <ul className="mt-2 space-y-2 text-lg max-w-lg">
              <li><i className="fas fa-phone-alt mr-2"></i>Phone: <a href="tel:+917653344562" className="underline">7653344562</a></li>
              <li><i className="fas fa-phone-alt mr-2"></i>Phone: <a href="tel:+918765455674" className="underline">8765455674</a></li>
              <li><i className="fas fa-envelope mr-2"></i>Email: <a href="mailto:SanskritiDarpan@gmail.com" className="underline">SanskritiDarpan@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons Positioned at Bottom-Right */}
        <div className="flex justify-center space-x-10 mt-10">
          <a href="https://www.linkedin.com/" className="text-white hover:text-gray-200" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/" className="text-white hover:text-gray-200" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/" className="text-white hover:text-gray-200" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        </div>

        {/* Bottom Center: Developed by Sanskriti Shilpis */}
        <div className="text-center text-white mt-8">
          <p><strong>Developed by Sanskriti Shilpi</strong></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
