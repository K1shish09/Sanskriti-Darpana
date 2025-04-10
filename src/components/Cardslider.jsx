
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const data = [
  {
    image: "/images/ramayana.jpeg",
    title: "Ramayana",
    description:
      "Composed by Sage Valmiki, the Ramayana narrates the life of Lord Rama, his exile, the abduction of Sita by Ravana, and the ultimate victory of good over evil.",
  },
  {
    image: "/images/mahabharat.jpeg",
    title: "Mahabharata",
    description:
      " The Mahabharata is the longest epic ever written, covering the Kurukshetra war and the philosophical teachings of the Bhagavad Gita.",
  },
  {
    image: "/images/bhagvadgita.jpeg",
    title: "Bhagavad Gita",
    description:
      "A sacred Hindu scripture, the Bhagavad Gita is a dialogue between Lord Krishna and Arjuna, teaching duty, righteousness, and devotion.",
  },
  {
    image: "/images/veda.jpeg",
    title: "The Vedas",
    description:
      "The four Vedas (Rigveda, Yajurveda, Samaveda, and Atharvaveda) are ancient Hindu scriptures containing hymns, rituals, and philosophical teachings.",
  },
  {
    image: "/images/upanishad.jpeg",
    title: "The Upanishads",
    description:
      "The Upanishads are philosophical texts that form the basis of Hindu thought, discussing concepts like Brahman, Atman, and Moksha.",
  },
  {
    image: "/images/aranyaka.jpeg",
    title: "The Aranyakas",
    description:
      "The Aranyakas are a set of texts within the Vedas that provide spiritual interpretations of rituals, meant for forest dwellers and ascetics.",
  },
  {
    image: "/images/brahman.jpeg",
    title: "The Brahmanas",
    description:
      "The Brahmanas are ancient Hindu texts that explain Vedic rituals and ceremonies, providing guidelines for priests and scholars.",
  },
  {
    image: "/images/puranas.jpeg",
    title: "The Puranas",
    description:
      "The Puranas contain mythological stories, cosmology, and historical narratives, preserving the cultural and religious heritage of India.",
  },
  {
    image: "/images/arth.jpeg",
    title: "Arthashastra",
    description:
      "Written by Chanakya (Kautilya), the Arthashastra is an ancient Indian treatise on statecraft, politics, military strategy, and economic policy.",
  },
  {
    image: "/images/natya.jpeg",
    title: "Natya Shastra",
    description:
      "Attributed to Sage Bharata, the Natya Shastra is an ancient Indian text on performing arts, covering drama, dance, and music in detail.",
  },
];






function Slidercard() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevButton />,
    nextArrow: <CustomNextButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="pt-10 pb-7 m-4 sm:m-8 md:m-16 lg:m-20 rounded-md shadow-xl bg-transparent"
      style={{ minHeight: "500px" }}
    >
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-3/4 mx-auto relative">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="px-2"> {/* Added padding for spacing */}
              <div className="rounded-md shadow-lg">
                <div className="rounded-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[230px] rounded-t-sm object-cover"
                  />
                </div>
                <div className="bg-gradient-to-tr from-red-700 to-pink-600 rounded-sm">
                  <div className="p-3">
                    <p className="font-semibold text-white">{item.title}</p>
                  </div>
                  <div className="p-2">
                    <p className="font-semibold text-white">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const CustomPrevButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0.5 top-1/2 transform -translate-y-1/2 text-white bg-pink-600 rounded-lg p-2 mr-5 hover:bg-pink-400 transition-all z-10"
  >
    <span className="text-xl">&lt;</span>
  </button>
);

const CustomNextButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0.5 top-1/2 transform -translate-y-1/2 text-white bg-pink-600 rounded-lg p-2 hover:bg-pink-400 transition-all z-10"
  >
    <span className="text-xl">&gt;</span>
  </button>
);

export default Slidercard;


