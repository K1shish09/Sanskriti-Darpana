import React from "react";
import stateFolkdances from "./state-folkdance";

function Dance({ selected }) {
  const tempId = "IN-AN"; // Example state ID, you can change this as needed
  const content = stateFolkdances.find((info) => info.id === tempId);

  if (!content) {
    return <div>No data found for the selected state.</div>;
  }

  return (
    <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-100 to-pink-200">
      <div className="bg-pink-50 rounded-xl shadow-xl p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-pink-700 mb-4 md:mb-8 underline">
          {selected}
        </h1>
        <div className="flex flex-col gap-8">
          {content.Folkdances.map((dance, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              {/* Image Section */}
              <div className="flex-1 mb-6">
                <img
                  src={dance.layout}
                  alt={dance.name}
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              {/* Dance Details */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2 text-pink-700">
                  {dance.name}
                </h2>
                <p className="text-base text-gray-700">{dance.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dance;
