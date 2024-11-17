import React from 'react';
import Footer from '../components/Footer.jsx';

// Individual News Card Component
function NewsCard({ imageUrl, title, description }) {
  return (
    <div className="w-full p-4 bg-gradient-to-b from-red-600 to-pink-600 rounded-xl text-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={imageUrl}
        alt="News"
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="font-semibold text-xl mb-2 tracking-wide">{title}</h3>
      <p className="text-md text-white/90 mb-7 font-montserrat leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Main News Section Component
function NewsSection() {
  // Data for the cards (including unique images, titles, and descriptions)
  const newsData = [
    {
      imageUrl:
        'https://th-i.thgim.com/public/incoming/sjzla0/article68845885.ece/alternates/LANDSCAPE_1200/2303_8_11_2024_18_24_58_1_FMMUSICFEST.JPG',
      title: 'Kannada language through Bhakti Sangeetha touches core of your heart',
      description:
        'Nirmala Sitharaman Union Finance Minister inaugurates three-day Mysuru Sangeetha Suganda Music Festival that celebrates the Dasa tradition of Carnatic music.',
    },
    {
      imageUrl:
        'https://www.bing.com/th?id=OVFT.lA1xd1b9QXaV5-hzMhKVqi&pid=News&w=234&h=132&c=14&rs=2&qlt=90',
      title: 'Tulsi Vivah is a sacred Hindu ritual',
      description:
        'Tulsi Vivah is a sacred Hindu ritual that symbolizes the ceremonial marriage of the Tulsi plant (holy basil) with Lord Vishnu, usually in his avatar as Shaligram or Lord Krishna.',
    },
    {
      imageUrl:
        'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1tV8GW.img?w=768&h=432&m=6',
      title: 'Kartiki Ekadashi celebrations at Pandharpur',
      description:
        'Kartiki Ekadashi celebrations at Pandharpur: Vitthala and Rukmini Mata temple offers 24-hour darshan, symbolizing the ceremonial marriage of the Tulsi plant with Lord Vishnu.',
    },
    {
      imageUrl:
        'https://www.bing.com/th?id=OVFT.twHxRta2Dkj2l0GH0_hZbC&pid=News&w=234&h=132&c=14&rs=2&qlt=90',
      title: 'Nagaraj Rao Havaldar says',
      description:
        'Music is a great unifying and connecting factor, says Nagaraj Rao Havaldar, highlighting Karnataka’s unique status as a state that has nurtured both Hindustani and Carnatic traditions.',
    },
    {
      title: 'Mohiniyattam pan-Indian traditions and fusion :',
      imageUrl: 'https://www.bing.com/th?id=OVFT.8l97vUkSXm9kJapxXuVqIS&pid=News&w=234&h=132&c=14&rs=2&qlt=90',
      description:
        'Mohiniyattam pioneer Vijayalakshmi brings to town a medley of pan-Indian traditions, blending tradition with contemporary themes.',
    },
    {
      imageUrl:
        'https://www.bing.com/th?id=OVFT.-uJBbIrbI-ZXwiI0Fb8QZy&pid=News&w=234&h=132&c=14&rs=2&qlt=90',
      title: 'Chhath Puja is more than just a festival',
      description:
        'Chhath Puja is more than just a festival; it embodies a vivid display of devotion, tradition, and respect for nature, predominantly celebrated in Bihar and Jharkhand.',
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-8 py-12 bg-gray-50">
      {/* Latest News Header */}
      <div className="relative text-center mb-3">
        <h2 className="text-white font-bold text-4xl px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg transform transition duration-300 hover:scale-85">
          Latest News
        </h2>
        <div className="flex items-center justify-center mt-4">
          <p className="text-white font-medium text-lg px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg transform transition duration-200 hover:scale-105">
            Discover the latest events and cultural highlights through Sanskriti Darpan.
          </p>
        </div>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 w-full max-w-screen-lg">
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            imageUrl={news.imageUrl}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default NewsSection;
