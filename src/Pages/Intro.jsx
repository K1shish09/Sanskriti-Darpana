import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Intro = () => {
  const [selected, setSelected] = useState("Introduction");

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
    "Quiz",
  ];

  const content = {
    Introduction: {
      text:
        "History of Madhya Pradesh is rich and diverse, with a legacy spanning thousands of years. Maharashtra is known for its historical forts, vibrant cities, and cultural heritage.",
      image: "https://via.placeholder.com/400x250?text=Introduction+of+Maharashtra",
    },
    Languages: {
      text:
        "Madhya Pradesh, state of India. As its name implies—madhya means “central” and pradesh means “region” or “state”—it is situated in the heart of the country. The state has no coastline and no international frontier. It is bounded by the states of Uttar Pradesh to the northeast, Chhattisgarh to the southeast, Maharashtra to the south, Gujarat to the southwest, and Rajasthan to the northwest. The capital is Bhopal, in the west-central part of the state. Area 119,016 square miles (308,252 square km). Pop. (2011) 72,597,565.. Hindi and English are also widely spoken.",
      image: "https://via.placeholder.com/400x250?text=Languages+of+Maharashtra",
    },
    Districts: {
      text:
        "Madhya Pradesh consists of 36 districts categorized under divisions such as Konkan, Pune, Nashik, Aurangabad, Amravati, and Nagpur.",
      image: "https://via.placeholder.com/400x250?text=Districts+of+Maharashtra",
    },
    Religion: {
      text:
        "The state celebrates religious harmony and is home to Hinduism, Islam, Buddhism, Christianity, and other faiths.",
      image: "https://via.placeholder.com/400x250?text=Religions+of+Maharashtra",
    },
    Food: {
      text:
        "From Vada Pav to Puran Poli, Maharashtra offers a delectable range of traditional dishes loved across the globe.",
      image: "https://via.placeholder.com/400x250?text=Food+of+Maharashtra",
    },
    Festivals: {
      text:
        "From Vada Pav to Puran Poli, Maharashtra offers a delectable range of traditional dishes loved across the globe.",
      image: "https://via.placeholder.com/400x250?text=Food+of+Maharashtra",
    },
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <div className="bg-gradient-to-b from-pink-500 to-pink-700 text-white w-64 h-full p-6 shadow-xl relative rounded-lg overflow-y-auto">
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-pink-600 to-pink-500 transform rotate-12 -z-10"></div>
        <h2 className="text-3xl font-extrabold mb-6 relative z-10">Explore Maharashtra</h2>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer p-3 rounded-lg hover:bg-pink-600 transition duration-300 text-lg font-semibold transform hover:scale-105 ${selected === item ? "bg-pink-800" : ""
                }`}
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

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gradient-to-r from-pink-100 to-pink-200">
        <div className="bg-pink-50 rounded-xl shadow-xl p-8 relative">
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-pink-300 to-pink-500 transform rotate-6 -z-10"></div>
          <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700 mb-8 underline decoration-wavy">
            Madhya Pradesh- {selected}
          </h1>
          {content[selected] && (
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 order-1 md:order-2">
                <p className="text-lg leading-relaxed bg-gradient-to-r-from-pink500 to-pink-700">
                  {content[selected].text}
                </p>
              </div>
              <div className="flex-1 order-2 md:order-1">
                <img
                  src={content[selected].image}
                  alt={selected}
                  className="rounded-lg shadow-lg w-full border border-gray-300"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
