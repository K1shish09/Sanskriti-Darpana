import React from "react";
import stateDress from "./state-dress";

function Dress({ selected }) {
  const tempId = "IN-AN"; // Example state ID
  const content = stateDress.find((info) => info.id === tempId);

  if (!content) {
    return <div>No data found for the selected state.</div>;
  }

  return (
    <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-green-100 to-green-200">
      <div className="bg-green-50 rounded-xl shadow-xl p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-green-700 mb-4 md:mb-8 underline">
          {selected}
        </h1>
        <div className="flex flex-col gap-8">
          {content.Dresses.map((dress, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              {/* Image Section */}
              <div className="flex-1 mb-6">
                <img
                  src={dress.layout}
                  alt={dress.name}
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              {/* Dress Details */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2 text-green-700">
                  {dress.name}
                </h2>
                <p className="text-base text-gray-700">{dress.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dress;
