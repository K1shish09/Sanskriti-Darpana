import React, { useState } from 'react';
// import Introduction from "../components/Introduction.jsx";
// import Districts from '../components/Districts.jsx';
// import Religion from '../components/Religion.jsx';
// import Attire from '../components/Dress.jsx';
// import Food from '../components/Food.jsx';
// import Festival from '../components/Festival.jsx';
// import Dance from '../components/Dance.jsx';
// import Music from '../components/Music.jsx';
// import Floraandfauna from '../components/Floraandfauna.jsx';
// import Heritagesites from '../components/Heritagesites.jsx';
// import Languages from '../components/Languages.jsx';




const Intro = () => {
  const [selected, setSelected] = useState("Introduction");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Introduction", "Districts", "Languages", "Religion", "Traditional Attire", "Food", "Festival", "Folk Dance", "Folk Music", "Flora and Fauna", "Heritage Sites"];

  const handleScroll = (id) => {
    setSelected(id);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen font-sans">
      {/* Sidebar */}
      <div className={`bg-gradient-to-b from-pink-500 to-pink-700 text-white w-full md:w-64 h-full p-6 shadow-xl relative rounded-lg overflow-y-auto transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out scrollbar-hide`}>
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-pink-600 to-pink-500 transform rotate-12 -z-10"></div>
        <h2 className="text-3xl font-extrabold mb-6 relative z-10 animate-text-glow">Explore</h2>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer p-3 rounded-lg hover:bg-pink-600 transition duration-300 text-lg font-semibold transform hover:scale-105 ${selected === item ? "bg-pink-800" : ""}`}
              onClick={() => handleScroll(item.replace(/\s+/g, ''))}
            >
              <span className="flex items-center">
                <span className="mr-3 text-xl text-white">▶</span>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden absolute top-4 left-4 z-20 bg-pink-600 text-white p-2 rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div>
<<<<<<< HEAD
         
      
      <button
  type="button"
  className="fixed animate-text-glow top-14 left-[1300px] px-6 py-3 bg-pink-600 text-white font-bold rounded-lg shadow-lg z-10"
>
  Start Quiz
</button>
=======


          <button
            type="button"
            className="fixed top-4 left-[1300px] px-6 py-3 bg-pink-600 text-white font-bold rounded-lg shadow-lg z-10"
          >
            Start Quiz
          </button>
>>>>>>> 820b88cfc3e6eb0a927d5b1828620dd7fe5b928d

        </div>
        <div id="Introduction">
          <Introduction selected="Introduction" />
        </div>
        <div id="Districts">
          <Districts selected="Districts" />
        </div>
        <div id="Languages">
          <Languages selected="Languages" />
        </div>
        <div id="Religion">
          <Religion selected="Religion" />
        </div>
        <div id="TraditionalAttire">
          <Attire selected="Traditional Attire" />
        </div>
        <div id="Food">
          <Food selected="Food" />
        </div>
        <div id="Festival">
          <Festival selected="Festival" />
        </div>
        <div id="FolkDance">
          <Dance selected="Folk Dance" />
        </div>
        <div id="FolkMusic">
          <Music selected="Folk Music" />
        </div>
        <div id="FloraandFauna">
          <Floraandfauna selected="Flora and Fauna" />
        </div>
        <div id="HeritageSites">
          <Heritagesites selected="Heritage Sites" />
        </div>
      </div>
    </div>
  );
};

export default Intro;