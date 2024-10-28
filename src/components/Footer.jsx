import React from 'react'

function Footer() {
  return (
   <>
   <div className="bg-gray-100">

{/* Footer Section */}
<div className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-8 relative">
  <div className="container mx-auto px-3">

    {/* Top Right: Subscribe Button */}
    <div className="absolute top-4 right-2">
      <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full">
        Subscribe
      </button>
    </div>

    <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 mt-8">
      
      {/* Logo and Description */}
      <div className="flex items-start space-x-4 md:space-x-8 w-full md:w-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="logo.jpg" alt="Logo" className="w-16 h-16 rounded-full" />
        </div>
        
        {/* Description */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Sanskriti Darpan</h1>
          <p className="mt-3 text-lg max-w-lg">
            Our website '<strong>Sanskriti Darpan</strong>' is a great way of promoting our rich
            and diverse Indian cultural heritage and tradition among students. Our primary goal is to spread and promote Indian 
            Culture among students and aspirants about India’s Cultural and Heritage.
          </p>
        </div>
      </div>

      {/* Visit Section */}
      <div className="text-center md:text-left">
        <h2 className="font-bold text-3xl">Visit For More</h2>
        <ul className="mt-3 text-lg space-y-1">
          <li><a href="#" className="hover:underline">My Government</a></li>
          <li><a href="#" className="hover:underline">Digital India</a></li>
          <li><a href="#" className="hover:underline">Ministry of Tourism</a></li>
        </ul>
      </div>
      
      {/* Contact Info */}
      <div className="text-center md:text-left">
        <h2 className="font-bold text-3xl">Contact Us</h2>
        <ul className="mt-2 space-y-1 text-lg">
          <li><i className="fas fa-phone-alt mr-2"></i>Phone: 4653344562</li>
          <li><i className="fas fa-phone-alt mr-2"></i>Phone: 8765455674</li>
          <li><i className="fas fa-envelope mr-2"></i>Email: <a href="mailto:SanskritiDarpan@gmail.com" className="underline">SanskritiDarpan@gmail.com</a></li>
        </ul>
      </div>
    </div>

    {/* Social Media Icons Positioned at Bottom-Right */}
    <div className="absolute bottom-4 right-7 flex space-x-8">
      <a href="#" className="text-white hover:text-gray-200">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="#" className="text-white hover:text-gray-200">
        <i className="fab fa-instagram fa-2x"></i>
      </a>
      <a href="#" className="text-white hover:text-gray-200">
        <i className="fab fa-facebook fa-2x"></i>
      </a>
    </div>

    {/* Bottom Center: Developed by Sanskriti Shilpis */}
    <div className="text-center text-white mt-8">
      <p><strong>Developed by Sanskriti Shilpis</strong></p>
    </div>
  </div>
</div>

</div>
   </>
  )
}

export default Footer
