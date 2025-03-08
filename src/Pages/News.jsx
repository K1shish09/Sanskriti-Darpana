
import Navbar from './../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

// Individual News Card Component
function NewsCard({ imageUrl, title, description }) {
  return (
    <div className="relative w-full p-6 bg-gradient-to-tr from-red-700 to-pink-600 rounded-xl text-white shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:opacity-90">
      <img
        src={imageUrl}
        alt="News"
        className="w-full h-40 object-cover rounded-lg mb-4 transform transition duration-500 hover:scale-110"
      />
      <h3 className="font-semibold text-xl mb-2 tracking-wide">{title}</h3>
      <p className="text-md text-white/90 mb-6 font-montserrat leading-relaxed overflow-hidden text-ellipsis">
        {description}
      </p>

      {/* Read More Button */}
      <div className="absolute bottom-4 left-4 text-pink-200 text-sm hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-105">
        Read More
      </div>
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
        'Nirmala Sitharaman Union Finance Ministers inaugurated three-day Mysuru Sangeetha Suganda Music Festival that celebrates the Dasa tradition of Carnatic music.',
    },
    {

      title: 'Tulsi Vivah is a sacred Hindu ritual',
      imageUrl:
        'https://www.bing.com/th?id=OVFT.lA1xd1b9QXaV5-hzMhKVqi&pid=News&w=234&h=132&c=14&rs=2&qlt=90',

      description:
        'Tulsi Vivah is a sacred Hindu ritual that symbolizes the ceremonial marriages of the Tulsi plant (holy basil) with Lord Vishnu, usually in his avatar as Shaligram or Lord Krishna.',
    },
    {
      imageUrl:
        'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1tV8GW.img?w=768&h=432&m=6',
      title: 'Kartiki Ekadashi celebrations at Pandharpurs',
      description:
        'Kartiki Ekadashi celebrations at Pandharpur: Vitthala and Rukminis Mata temple offers 24-hour darshan, symbolizing the ceremonial marriage of the Tulsi plant with Lord Vishnu.',
    },
    {
      imageUrl:
        'https://www.bing.com/th?id=OVFT.twHxRta2Dkj2l0GH0_hZbC&pid=News&w=234&h=132&c=14&rs=2&qlt=90',
      title: 'Nagaraj Rao Havaldar says',
      description:
        'Music is a great unifying and connecting factors, says Nagaraj Rao Havaldar, highlighting Karnataka’s unique status as a state that has nurtured both Hindustani and Carnatic traditions.',
    },
    {
      title: 'Mohiniyattam pan-Indian traditions and fusion:',
      imageUrl: 'https://www.bing.com/th?id=OVFT.8l97vUkSXm9kJapxXuVqIS&pid=News&w=234&h=132&c=14&rs=2&qlt=90',
      description:
        'Mohiniyattam pioneer Vijayalakshmi brings to towns a medley of pan-Indian traditions, blending tradition with contemporary themes.',
    },
    {
      imageUrl:
        'https://www.bing.com/th?id=OVFT.-uJBbIrbI-ZXwiI0Fb8QZy&pid=News&w=234&h=132&c=14&rs=2&qlt=90',
      title: 'Chhath Puja is more than just a festival',
      description:
        'Chhath Puja is more than just a festivals; it embodies a vivid display of devotions, tradition, and respect for nature, predominantly celebrated in Bihar and Jharkhand.',
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 bg-gray-50">
      {/* Navbar - Normal flow, no fixed positioning */}

      {/* Latest News Header - Add margin-top */}
      <div className="relative text-center mt-32 mb-6">
        <h2 className="text-white font-bold text-4xl px-4 py-2 bg-gradient-to-tr from-red-700 to-pink-600 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
          Latest News
        </h2>
        <div className="flex items-center justify-center mt-4">
          <p className="text-white font-medium text-lg px-4 py-3 bg-gradient-to-tr from-red-700 to-pink-600 rounded-full shadow-lg transform transition duration-200 hover:scale-105">
            Discover the latest events and cultural highlighted through Sanskriti Darpan.
          </p>
        </div>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 w-full max-w-screen-lg mb-12">
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            imageUrl={news.imageUrl}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>

      {/* Footer */}
    </div>
  );
}

export default NewsSection;