import React from "react";
import statereligions from "../components/state-religion"; // Adjust the path as needed

function Religion({ selected }) {
  const tempId = "IN-AN"; // Replace with the ID you want to test
  const content = statereligions.find((religion) => religion.id === tempId);

  if (!content) {
    return <div>No data found for the selected state.</div>;
  }

  return (
    <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-100 to-pink-200">
      <div className="bg-pink-50 rounded-xl shadow-xl p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-pink-700 mb-4 md:mb-8 underline">
          {selected}
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-9 md:gap-2">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={content.image}
              alt={selected}
              className="w-full h-auto md:w-4/5 lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg object-cover"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 text-pink-700">{selected}</h2>
            <p className="text-base text-gray-700">{content.religions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Religion;
