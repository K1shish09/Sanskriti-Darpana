import React from 'react';
import stateAttire from './Attire'; // Import the attire data

function Attire({ selectedId }) {
  const Content = stateAttire.find((info) => info.id === selectedId);

  if (!attireContent) {
    return <div>No attire data found for the selected state.</div>;
  }

  return (
    <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="bg-blue-50 rounded-xl shadow-xl p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-blue-700 mb-4 md:mb-8 underline">
          Traditional Attires
        </h1>
        <div className="flex flex-wrap gap-8">
          {attireContent.attires.map((attire, index) => (
            <div key={index} className="flex flex-col items-center gap-4 w-64">
              <img
                src={attire.layout}
                alt={attire.name}
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <h3 className="text-xl font-bold text-blue-700">{attire.name}</h3>
              <p className="text-sm text-gray-700 text-center">{attire.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Attire;
