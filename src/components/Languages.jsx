import React from 'react';
import langInfo from './state-language'; // Import the langInfo data

function Languages({ selected }) {
  const tempId = 'IN-AN'; // Replace with the ID you want to test
  const content = langInfo.find((info) => info.id === tempId); // Use langInfo here

  if (!content) {
    return <div className="text-center text-gray-500 mt-8">No data found for the selected state.</div>;
  }

  return (
    <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-50 to-pink-100">
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-pink-700 mb-6 underline decoration-wavy">
          {selected}
        </h1>
        <div>
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">About {selected}</h2>
          <p className="text-lg text-gray-700 mb-6">{content.lang_info}</p>

          <h3 className="text-xl font-semibold text-pink-700 mb-4">Most Spoken Languages</h3>

          {/* Minimal Table Layout */}
          <table className="min-w-full text-left table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 text-pink-700 font-semibold">Language</th>
                <th className="py-2 px-4 text-pink-700 font-semibold">Percentage</th>
                <th className="py-2 px-4 text-pink-700 font-semibold">Population</th>
              </tr>
            </thead>
            <tbody>
              {content.most_spoken_languages.map((language, index) => (
                <tr key={index} className="border-t border-pink-200">
                  <td className="py-2 px-4 text-gray-700">{language.language}</td>
                  <td className="py-2 px-4 text-gray-700">{language.percentage}%</td>
                  <td className="py-2 px-4 text-gray-700">{language.population}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Languages;
