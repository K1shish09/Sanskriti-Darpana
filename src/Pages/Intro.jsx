import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Introduction from "../components/Introduction.jsx";

const Intro = () => {
  const [selected, setSelected] = useState("Introduction");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Introduction",
    "Languages",
    "Districts",
    "Religion",
    "Traditional Attire", 
    "Food",
    "Festivals",
    "Folk Dance",
    "Folk Music",
    "Flora and Fauna",
    "Heritage Sites",
  ];

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
              onClick={() => setSelected(item)}
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
      <div className="flex-1 p-6">
        <Introduction selected={selected} />
      </div>
    </div>
  );
};

export default Intro;
