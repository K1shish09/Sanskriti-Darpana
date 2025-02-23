import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { states } from "../components/states-data"; // Assuming state data is stored here
import Introduction from "../components/Introduction.jsx";
import Districts from "../components/Districts.jsx";
import Religion from "../components/Religion.jsx";
import Attire from "../components/Attire.jsx";
import Food from "../components/Food.jsx";
import Festival from "../components/Festival.jsx";
import Dance from "../components/Dance.jsx";
import Music from "../components/Music.jsx";
import Floraandfauna from "../components/Floraandfauna.jsx";
import Heritagesites from "../components/Heritagesites.jsx";
import Languages from "../components/Languages.jsx";

const StateInfo = () => {
  const { id } = useParams(); // Get state ID from URL
  const state = states.find((s) => s.id === id); // Find state details

  const [selected, setSelected] = useState("Introduction");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Introduction",
    "Districts",
    "Languages",
    "Religion",
    "Traditional Attire",
    "Food",
    "Festival",
    "Folk Dance",
    "Folk Music",
    "Flora and Fauna",
    "Heritage Sites",
  ];

  const handleScroll = (id) => {
    setSelected(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!state) {
    return <h2 className="text-white text-center mt-10">State Not Found</h2>;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen font-sans">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-pink-500 to-pink-700 text-white w-full md:w-64 h-full p-6 shadow-xl relative rounded-lg overflow-y-auto transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out scrollbar-hide`}
      >
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-pink-600 to-pink-500 transform rotate-12 -z-10"></div>
        <h2 className="text-3xl font-extrabold mb-6 relative z-10 animate-text-glow">
          Explore {state.name}
        </h2>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer p-3 rounded-lg hover:bg-pink-600 transition duration-300 text-lg font-semibold transform hover:scale-105 ${
                selected === item ? "bg-pink-800" : ""
              }`}
              onClick={() => handleScroll(item.replace(/\s+/g, ""))}
            >
              <span className="flex items-center">
                <span className="mr-3 text-xl text-white">▶</span>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white py-10">
          <h1 className="text-4xl font-bold">{state.name}</h1>
          <p className="text-lg mt-4">State ID: {state.id}</p>
          <p className="mt-2">{state.description || "No description available."}</p>
        </div>

        {/* Sections with useParams applied */}
        <div id="Introduction">
          <Introduction selected="Introduction" state={state} />
        </div>
        <div id="Districts">
          <Districts selected="Districts" state={state} />
        </div>
        <div id="Languages">
          <Languages selected="Languages" state={state} />
        </div>
        <div id="Religion">
          <Religion selected="Religion" state={state} />
        </div>
        <div id="TraditionalAttire">
          <Attire selected="Traditional Attire" state={state} />
        </div>
        <div id="Food">
          <Food selected="Food" state={state} />
        </div>
        <div id="Festival">
          <Festival selected="Festival" state={state} />
        </div>
        <div id="FolkDance">
          <Dance selected="Folk Dance" state={state} />
        </div>
        <div id="FolkMusic">
          <Music selected="Folk Music" state={state} />
        </div>
        <div id="FloraandFauna">
          <Floraandfauna selected="Flora and Fauna" state={state} />
        </div>
        <div id="HeritageSites">
          <Heritagesites selected="Heritage Sites" state={state} />
        </div>
      </div>
    </div>
  );
};

export default StateInfo;
