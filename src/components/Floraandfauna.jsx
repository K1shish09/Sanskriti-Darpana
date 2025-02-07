import React from 'react';
import stateFlora from '../components/state-flora'; // Import the stateFlora data

function FloraandFauna({ selected }) {
  const tempId = 'IN-MH'; // Example state ID, you can change this as needed
  const content = stateFlora.find((info) => info.id === tempId);

  if (!content) {
    return <div>No data found for the selected state.</div>;
  }

  return (
    <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-100 to-pink-200">
      <div className="bg-pink-50 rounded-xl shadow-xl p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-pink-700 mb-4 md:mb-8 underline">
          {selected}
        </h1>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl text-pink-700 font-extrabold mb-4">Flora</h2>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {content.flora.map((plant, index) => (
              <div key={index} className="flex-1 mb-6">
                <img
                  src={plant.layout}
                  alt={plant.name}
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <h3 className="text-xl font-semibold text-pink-700 mt-2">{plant.name}</h3>
                <p className="text-base text-gray-700">{plant.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl text-pink-700 font-extrabold mb-4">Fauna</h2>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {content.fauna.map((animal, index) => (
              <div key={index} className="flex-1 mb-6">
                <img
                  src={animal.layout}
                  alt={animal.name}
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <h3 className="text-xl font-semibold text-pink-700 mt-2">{animal.name}</h3>
                <p className="text-base text-gray-700">{animal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloraandFauna;


