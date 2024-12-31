import React from 'react';

const content = {
  "Introduction": {
    text: "Maharashtra, a state spanning west-central India, is best known for its fast-paced capital, Mumbai (formerly Bombay).",
    image: "https://example.com/path/to/introduction-image.jpg"
  },
  "Languages": {
    text: "Marathi is the official language of Maharashtra. Other languages spoken include Hindi, English, and various regional dialects.",
    image: "https://example.com/path/to/languages-image.jpg"
  },
  "Districts": {
    text: "Maharashtra is divided into 36 districts, each with its own unique culture and attractions.",
    image: "https://example.com/path/to/districts-image.jpg"
  },
  "Religion": {
    text: "Hinduism is the major religion in Maharashtra, followed by Islam, Buddhism, Jainism, Christianity, and others.",
    image: "https://example.com/path/to/religion-image.jpg"
  },
  "Traditional Attire": {
    text: "Traditional attire in Maharashtra includes the Nauvari saree for women and Dhoti-Kurta for men.",
    image: "https://example.com/path/to/traditional-attire-image.jpg"
  },
  "Food": {
    text: "Maharashtrian cuisine includes dishes like Puran Poli, Vada Pav, Misal Pav, and Bhakri.",
    image: "https://example.com/path/to/food-image.jpg"
  },
  "Festivals": {
    text: "Major festivals celebrated in Maharashtra include Ganesh Chaturthi, Diwali, Holi, and Makar Sankranti.",
    image: "https://example.com/path/to/festivals-image.jpg"
  },
  "Folk Dance": {
    text: "Lavani and Tamasha are popular folk dances of Maharashtra, known for their vibrant music and energetic movements.",
    image: "https://example.com/path/to/folk-dance-image.jpg"
  },
  "Folk Music": {
    text: "Maharashtrian folk music includes genres like Bhavageet, Powada, and Natya Sangeet.",
    image: "https://example.com/path/to/folk-music-image.jpg"
  },
  "Flora and Fauna": {
    text: "Maharashtra is home to diverse flora and fauna, including the Bengal tiger, Indian leopard, and various species of birds and plants.",
    image: "https://example.com/path/to/flora-fauna-image.jpg"
  },
  "Heritage Sites": {
    text: "Maharashtra boasts several UNESCO World Heritage Sites, including the Ajanta and Ellora Caves, and the Chhatrapati Shivaji Terminus.",
    image: "https://example.com/path/to/heritage-sites-image.jpg"
  }
};

function Introduction({ selected }) {
  return (
    <div className="flex-1 p-4 md:p-8 bg-gradient-to-r from-pink-100 to-pink-200">
      <div className="bg-pink-50 rounded-xl shadow-xl p-4 md:p-8 relative">
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-pink-300 to-pink-500 transform rotate-6 -z-10"></div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700 mb-4 md:mb-8 underline decoration-wavy">
          {selected}
        </h1>
        {content[selected] && (
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
      </div>
    </div>
  );
}

export default Introduction;