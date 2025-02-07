import React from 'react';
import stateDistrict from '../components/state-districts'; // Adjust the path as needed

function Districts({ selected }) {
  const tempId = 'IN-MH'; // Example: replace 'IN-AN' with the ID you want to display
  const content = stateDistrict.find(district => district.id === tempId);

  if (!content) {
    return <div>No data found for the selected state/district.</div>;
  }

  return (
    <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-50 to-pink-100">
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700 mb-8 underline decoration-dotted">
          {selected}
        </h1>
        <div>
          <h2 className="text-2xl font-bold text-pink-700 mb-4">Details</h2>
          <p className="text-lg text-gray-700 mb-4">{content.dist_info}</p>
          <h3 className="text-xl font-semibold text-pink-700 mb-2">Capital:</h3>
          <p className="text-gray-700 mb-4">{content.Capital.join(', ')}</p>
          <h3 className="text-xl font-semibold text-pink-700 mb-2">Total Districts:</h3>
          <p className="text-gray-700 mb-6">{content.Total_Districts}</p>

          <h3 className="text-xl font-semibold text-pink-700 mb-4">Districts:</h3>

          {/* Pill Buttons for Districts */}
          <div className="flex flex-wrap gap-3 justify-center">
            {content.Districts.map((district, index) => (
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
    </div>
  );
}

export default Districts;
