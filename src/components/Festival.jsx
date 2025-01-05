

import React from 'react';
import stateFestivals from './state-festival'; // Import the stateFestivals data

function Festival({ selected }) {
  const tempId = 'IN-MH'; // Example state ID, you can change this as needed
  const content = stateFestivals.find((info) => info.id === tempId);

  if (!content) {
    return <div>No data found for the selected state.</div>;
  }

  return (
    <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-100 to-pink-200">
      <div className="bg-pink-50 rounded-xl shadow-xl p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-pink-700 mb-4 md:mb-8 underline">
          {selected}
        </h1>
        <div className="flex flex-col gap-8"> {/* Change to flex column */}
          {/* Loop through the festivals and display each one */}
          {content.festivals.map((festival, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8">
              {/* Image on the left */}
              <div className="flex-1 mb-6">
                <img
                  src={festival.layout}
                  alt={festival.name}
                  className="rounded-lg shadow-lg w-full h-64 object-cover" // Adjust image size to fit
                />
              </div>
              {/* Festival details on the right */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2 text-pink-700">{festival.name}</h2>
                <p className="text-base text-gray-700">{festival.description}</p>
                <p className="text-sm text-gray-500">{festival.month}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Festival;
