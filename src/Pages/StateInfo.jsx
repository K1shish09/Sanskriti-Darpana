import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { states } from "../components/states-data"; // Assuming state data is stored here
import Attire from "../components/Attire.jsx";
import Food from "../components/Food.jsx";
import Festival from "../components/Festival.jsx";
import Dance from "../components/Dance.jsx";
import Music from "../components/Music.jsx";
import Floraandfauna from "../components/Floraandfauna.jsx";
import Heritagesites from "../components/Heritagesites.jsx";
import stateIntro from "../components/state-info.js";
import stateDistrict from "../components/state-districts.js";
import stateLanguage from "../components/state-language.js";
import stateReligions from "../components/state-religion.js";

const StateInfo = () => {
  const { id } = useParams(); // Get state ID from URL
  const state = states.find((s) => s.id === id); // Find state details
  const Intro = stateIntro.find((intro) => intro.id === id);
  const District = stateDistrict.find(district => district.id === id);
  const Language = stateLanguage.find((lang) => lang.id === id); // Use langInfo here
  const Religion = stateReligions.find((religion) => religion.id === id);

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
        className={`bg-gradient-to-b from-pink-500 to-pink-700 text-white w-full md:w-64 h-full p-6 shadow-xl relative rounded-lg overflow-y-auto transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out scrollbar-hide`}
      >
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-pink-600 to-pink-500 transform rotate-12 -z-10"></div>
        <h2 className="text-3xl font-extrabold mb-6 relative z-10 animate-text-glow">
          Explore
        </h2>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer p-3 rounded-lg hover:bg-pink-600 transition duration-300 text-lg font-semibold transform hover:scale-105 ${selected === item ? "bg-pink-800" : ""
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
      <div className="flex-1 p-6 overflow-y-auto mt-10" selected="Introduction">
        {/* <div className="flex flex-col items-center justify-center bg-gray-900 text-white py-10">
          <h1 className="text-4xl font-bold">{state.name}</h1>
          <p className="text-lg mt-4">State ID: {state.id}</p>
          <p className="mt-2">{state.description || "No description available."}</p>
        </div> */}

        {/* Sections */}
        <div id="Introduction">
          <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-100 to-pink-200">
            <div className="bg-pink-50 rounded-xl shadow-xl p-4 md:p-8">
              <h1 className="text-3xl md:text-5xl font-extrabold text-center text-pink-700 mb-4 md:mb-8 underline">
                Introduction
              </h1>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex-1">
                  <img
                    src={Intro.layout}
                    alt={selected}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">Introduction</h2>
                  <p className="text-base text-gray-700">{Intro.state_info}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <Introduction  /> */}
        </div>
        <div id="Districts" selected="Districts">
          <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-50 to-pink-100">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
              <h1 className="text-3xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700 mb-8 underline decoration-dotted">
                Districts
              </h1>
              <div>
                <h2 className="text-2xl font-bold text-pink-700 mb-4">Details</h2>
                <p className="text-lg text-gray-700 mb-4">{District.dist_info}</p>
                <h3 className="text-xl font-semibold text-pink-700 mb-2">Capital:</h3>
                <p className="text-gray-700 mb-4">{District.Capital.join(', ')}</p>
                <h3 className="text-xl font-semibold text-pink-700 mb-2">Total Districts:</h3>
                <p className="text-gray-700 mb-6">{District.Total_Districts}</p>

                <h3 className="text-xl font-semibold text-pink-700 mb-4">Districts:</h3>

                <div className="flex flex-wrap gap-3 justify-center">
                  {District.Districts.map((district, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-pink-200 text-pink-800 font-semibold text-sm shadow-sm hover:bg-pink-300 hover:shadow-md transition-all duration-200"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div >
          {/* <Districts /> */}
        </div >
        <div id="Languages" selected="Languages">
          <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-50 to-pink-100">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
              <h1 className="text-3xl md:text-5xl font-extrabold text-center text-pink-700 mb-6 underline decoration-wavy">
                Languages
              </h1>
              <div>
                <h2 className="text-2xl font-semibold text-pink-700 mb-4">About {selected}</h2>
                <p className="text-lg text-gray-700 mb-6">{Language.lang_info}</p>

                <h3 className="text-xl font-semibold text-pink-700 mb-4">Most Spoken Languages</h3>

                {/* Minimal Table Layout */}
                <table className="min-w-full text-left table-auto">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 text-pink-700 font-semibold">Language</th>
                      <th className="py-2 px-4 text-pink-700 font-semibold">Percentage</th>
                      <th className="py-2 px-4 text-pink-700 font-semibold">Population</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Language.most_spoken_languages.map((language, index) => (
                      <tr key={index} className="border-t border-pink-200">
                        <td className="py-2 px-4 text-gray-700">{language.language}</td>
                        <td className="py-2 px-4 text-gray-700">{language.percentage}%</td>
                        <td className="py-2 px-4 text-gray-700">{language.population}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <Languages selected="Languages" /> */}
        </div>
        <div id="Religion">
          <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-100 to-pink-200">
            <div className="bg-pink-50 rounded-xl shadow-xl p-4 md:p-8">
              <h1 className="text-3xl md:text-5xl font-extrabold text-center text-pink-700 mb-4 md:mb-8 underline">
                Religion
              </h1>
              <div className="flex flex-col md:flex-row items-center gap-9 md:gap-2">
                {/* Image Section */}
                <div className="flex-1">
                  <img
                    src={Religion.image}
                    alt={selected}
                    className="w-full h-auto md:w-4/5 lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg object-cover"
                  />
                </div>
                {/* Text Section */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">Religion</h2>
                  <p className="text-base text-gray-700">{Religion.religions}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <Religion selected="Religion" /> */}
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
      </div >
    </div >
  );
};

export default StateInfo;
