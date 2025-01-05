import React from 'react';

const content = {

  "Religion": {
    text: "Hinduism is the major religion in Maharashtra, followed by Islam, Buddhism, Jainism, Christianity, and others.",
    image: "https://example.com/path/to/religion-image.jpg"
  },
 

};

function Religion({ selected }) {
  return (
    <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-100 to-pink-200">
      <div className="bg-pink-50 rounded-xl shadow-xl p-4 md:p-8 relative">
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-pink-300 to-pink-500 transform rotate-6 -z-10"></div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700 mb-4 md:mb-8 underline decoration-wavy">
          {selected}
        </h1>
        {content[selected] && content[selected].text && (
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 order-1 md:order-1">
              <img
                src={content[selected].image}
                alt={selected}
                className="rounded-lg shadow-lg w-full h-auto border border-gray-300"
              />
            </div>
            <div className="flex-1 order-2 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-pink-700">{selected}</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                {content[selected].text}
              </p>
            </div>
          </div>
        )}
        {content[selected] && content[selected].festivals && (
          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-700">{selected} </h2>
            <div className="space-y-4">
              {content[selected].festivals.map((festival, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-pink-700">{festival.name}</h3>
                  <p className="text-sm text-gray-500">{festival.month}</p>
                  <p className="text-base text-gray-700">{festival.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Religion;