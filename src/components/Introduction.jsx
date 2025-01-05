import React from 'react';
import stateInfo from '../components/state-info'; // Adjust the path as needed

function Information({ selected }) {
  const tempId = 'IN-MH'; // Replace with the ID you want to test
  const content = stateInfo.find((info) => info.id === tempId);

  if (!content) {
    return <div>No data found for the selected state.</div>;
  }

  return (
    <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-100 to-pink-200">
      <div className="bg-pink-50 rounded-xl shadow-xl p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-pink-700 mb-4 md:mb-8 underline">
          {selected}
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex-1">
            <img
              src={content.layout}
              alt={selected}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 text-pink-700">{selected}</h2>
            <p className="text-base text-gray-700">{content.state_info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;

