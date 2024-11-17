import React, { useState } from 'react';

const heritageSites = [
  { name: 'Taj Mahal', location: 'Agra, Uttar Pradesh', image: 'path/to/tajmahal.jpg', description: 'A symbol of love built by Mughal Emperor Shah Jahan.' },
  { name: 'Qutub Minar', location: 'Delhi', image: 'path/to/qutubminar.jpg', description: 'The tallest brick minaret in the world, built in 1193.' },
  { name: 'Red Fort Complex', location: 'Delhi', image: 'path/to/redfort.jpg', description: 'A symbol of Mughal power and architecture in Delhi.' },
  // Add other heritage sites here up to 47
];

function HeritageAccordionWithImages() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-white">UNESCO World Heritage Sites in India</h1>
      <div className="space-y-6">
        {heritageSites.map((site, index) => (
          <div key={index} className="bg-white bg-opacity-80 rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-6 flex justify-between items-center bg-indigo-100 hover:bg-indigo-200 rounded-lg transition-all duration-300">
              <span className="text-xl font-semibold text-indigo-700">{site.name}</span>
              <span className="text-gray-600">{site.location}</span>
            </button>
            {activeIndex === index && (
              <div className="p-6 border-t border-gray-200 text-gray-700 flex">
                <img src={site.image} alt={site.name} className="w-40 h-40 object-cover rounded-xl shadow-lg mr-6 transform transition-all duration-300 hover:scale-105" />
                <div>
                  <p>{site.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeritageAccordionWithImages;
