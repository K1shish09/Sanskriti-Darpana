import React from 'react';
import stateDistrict from '../components/state-districts'; // Adjust the path as needed

function Districts({ selected }) {
  const tempId = 'IN-MH'; // Example: replace 'IN-AN' with the ID you want to display
  const content = stateDistrict.find(district => district.id === tempId);

  if (!content) {
    return <div>No data found for the selected state/district.</div>;
  }

  return (
    <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-100 to-pink-200">
      <div className="bg-pink-50 rounded-xl shadow-xl p-4 md:p-8 relative">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700 mb-4 md:mb-8 underline decoration-wavy">
          {selected}
        </h1>
        <div>
          <h2 className="text-2xl font-bold text-pink-700 mb-4">Details</h2>
          <p className="text-lg text-gray-700 mb-4">{content.dist_info}</p>
          <h3 className="text-xl font-semibold text-pink-700 mb-2">Capital:</h3>
          <p className="text-gray-700">{content.Capital.join(', ')}</p>
          <h3 className="text-xl font-semibold text-pink-700 mb-2">Total Districts:</h3>
          <p className="text-gray-700">{content.Total_Districts}</p>
          <h3 className="text-xl font-semibold text-pink-700 mb-2">Districts:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {content.Districts.map((district, index) => (
              <li key={index}>{district}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Districts;
