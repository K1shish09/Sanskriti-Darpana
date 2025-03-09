import React from 'react';
import './Quiz.css';
import Navbar from './../components/Navbar.jsx';
import Footer from './../components/Footer.jsx';

const QuizPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <div className="relative z-50">
        {/* <Navbar /> */}
      </div>

      {/* Title Section Below Navbar */}
      <div className="relative z-10 mt-32 flex justify-center">
        <h2 className="text-white bg-gradient-to-r from-pink-500 to-red-500 font-bold py-2 px-6 rounded-lg shadow-xl text-2xl md:text-3xl lg:text-4xl">
          Quiz Your Knowledge on Indian Culture!
        </h2>
      </div>

      {/* Content Section */}
      <div
        className="relative w-full max-w-8xl h-96 mt-12 rounded-lg shadow-xl overflow-hidden"
        style={{
          width: '100%',
          height: '70vh',
          backgroundImage: `url("src/Assets/BackgroundImage.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* "Explore India Quiz" Button at the Top */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
          <button className="text-white bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 font-semibold py-3 px-12 rounded-lg shadow-lg transition duration-300">
            Explore India's Quiz
          </button>
        </div>

        {/* "Start Quiz" Button at the Bottom */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
          <a href='/ques' className="text-white bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 font-semibold py-3 px-12 rounded-lg shadow-lg transition duration-300">
            Start Quiz
          </a>
        </div>
      </div>

      {/* Lower Section */}
      <div className="relative w-full h-screen bg-white mt-0">
        {/* Floating Wave Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 600"
            className="w-full h-full transform rotate-180"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              d="M0,300C120,200,240,270,360,250C480,220,600,160,720,160C840,160,960,220,1080,250C1200,270,1320,200,1440,300V600H0Z"
            ></path>
          </svg>
        </div>

        {/* Icon and Text Section Above the Wave */}
        <div className="relative z-10 flex flex-col items-center text-white pt-16 px-10">
          <h1 className="text-6xl font-semibold text-center mb-20 text-white animate-text-glow">
            Our Unique Features
          </h1>

          {/* Icon and Text Content */}
          <div className="flex justify-between w-full max-w-6xl px-6">
            {/* First Feature Box */}
            <div className="flex flex-col items-center w-32 mb-8 relative z-10">
              <div className="feature-box bg-gray-500 p-6 rounded-full shadow-lg">
                <span role="img" aria-label="cloud" className="text-6xl text-white">☁️</span>
              </div>
              <h2 className="feature-box-text text-2xl font-extrabold text-white mt-4 tracking-wider drop-shadow-lg transition-all duration-300 ease-in-out hover:text-gray-200">
                Updated Questions
              </h2>
            </div>

            {/* Second Feature Box */}
            <div className="flex flex-col items-center w-32 mb-8 relative z-10">
              <div className="feature-box bg-gray-500 p-6 rounded-full shadow-lg">
                <span role="img" aria-label="thumbs-up" className="text-6xl text-white">👍</span>
              </div>
              <h2 className="feature-box-text text-2xl font-extrabold text-white mt-4 tracking-wider drop-shadow-lg transition-all duration-300 ease-in-out hover:text-gray-200">
                Detailed Explanation
              </h2>
            </div>
            

            {/* Third Feature Box */}
            <div className="flex flex-col items-center w-32 mb-8 relative z-10">
              <div className="feature-box bg-gray-500 p-6 rounded-full shadow-lg">
                <span role="img" aria-label="verified" className="text-6xl text-white">🏅</span>
              </div>
              <h2 className="feature-box-text text-2xl font-extrabold text-white mt-4 tracking-wider drop-shadow-lg transition-all duration-300 ease-in-out hover:text-gray-200">
                Verified Questions
              </h2>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default QuizPage;
