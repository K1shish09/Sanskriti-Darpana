import React from 'react';

const content = {
  "Attire": {
    festivals: [
      { name: "Minicoy Festival", month: "December", description: "A vibrant celebration of Minicoy Island’s rich culture. The festival features local music, dance, and traditional performances. It highlights the unique Maldivian influence on the island’s culture and cuisine. Visitors can experience the island’s distinctive lifestyle and traditions." },
      { name: "Lakshadweep Festival", month: "November", description: "A major festival that brings together the diverse cultures of all the islands in Lakshadweep. It includes folk music, traditional dances, and craft exhibitions. The event celebrates the beauty and heritage of the islands while promoting tourism. Local communities come together to showcase their cultural identity." },
      { name: "Beach Festival", month: "April", description: "A fun and adventurous festival celebrated with beach activities like volleyball, sand art, and water sports. The festival is a celebration of Lakshadweep’s coastal beauty and marine ecosystem. Cultural performances, local cuisine, and handicrafts are also part of the event. It’s a perfect time for locals and tourists to enjoy the beaches." },
      { name: "Monsoon Festival", month: "June", description: "A festival celebrating the onset of the monsoon season, which brings new life to the islands. It includes traditional rituals, prayers, and performances to honor the rains. Locals express gratitude for the water that nourishes their crops and environment. The event marks a time of renewal and joy in the community." },
      { name: "Eid-ul-Fitr", month: "Varies (Based on the Islamic calendar)", description: "A major religious festival marking the end of Ramadan. Eid-ul-Fitr is celebrated with special prayers, feasts, and community gatherings. Locals exchange gifts and visit family members. The festival fosters unity, charity, and communal harmony across the islands." }
    ]
  },
};

function Attire({ selected }) {
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

export default Attire;