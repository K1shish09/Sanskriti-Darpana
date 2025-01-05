


import React from 'react';
import langInfo  from './state-language';
// Import the langInfo data

function Languages({ selected }) {
  const tempId = 'IN-AN'; // Replace with the ID you want to test
  const content = langInfo.find((info) => info.id === tempId); // Use langInfo here

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
            <h2 className="text-2xl font-bold mb-2 text-pink-700">{selected}</h2>
            <p className="text-base text-gray-700">{content.lang_info}</p> {/* Use lang_info here */}
            <h3 className="text-xl font-semibold mt-4 text-pink-700">Most Spoken Languages</h3>
            <ul className="list-disc pl-6 text-gray-700">
              {content.most_spoken_languages.map((language, index) => (
                <li key={index}>
                  <strong>{language.language}:</strong> {language.percentage}, {language.population}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;

