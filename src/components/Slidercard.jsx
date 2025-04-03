
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const data = [
  {
    image: "/images/zero.jpeg",
    title: "The Invention of Zero",
    description:
      "Ancient Indian mathematician Aryabhata and others formalized the concept of zero. The invention of zero as a numeral and the development of the decimal system revolutionized mathematics.",
  },
  {
    image: "/images/surgery.jpg",
    title: "Plastic Surgery",
    description:
      "Sushruta, an ancient Indian physician, is considered the father of plastic surgery. His techniques for reconstructive surgery, such as rhinoplasty, were documented in the Sushruta Samhita.",
  },
  {
    image: "/images/yoga.jpg",
    title: "Yoga",
    description:
      "Originating in India over 5,000 years ago, yoga is a physical, mental, and spiritual discipline that has gained global recognition for its health and wellness benefits.",
  },
  {
    image: "/images/button.jpeg",
    title: "Buttons",
    description:
      "The earliest  buttons, made from seashells, were discovered in the Indus Valley Civilization dating back to 2000 BCE,  used for ornamental purposes before becoming functional fasteners.",
  },
  {
    image: "/images/shampoo.jpeg",
    title: "Shampoo",
    description:
      "The word 'shampoo' comes from the Hindi word 'chāmpo'. Indians used herbal pastes with natural ingredients like amla and shikakai to cleanse their hair, a concept later adopted worldwide.",
  },
  {
    image: "/images/ayurveda.jpg",
    title: "Ayurveda",
    description:
      "Ayurveda, the ancient Indian system of medicine, emphasizes natural healing through herbal treatments, diet, and lifestyle changes. It remains widely practiced today.",
  },
  {
    image: "/images/Surgery .jpeg",
    title: "Cataract Surgery",
    description:
      "Indian physician Sushruta pioneered cataract surgery around 600 BCE using a technique involving a curved needle. His advancements influenced later developments in ophthalmology.",
  },
  {
    image: "/images/indusvalley.jpg",
    title: "Rulers and Measurements",
    description:
      "The Indus Valley Civilization developed precise measuring tools, including rulers made from ivory and standardized weights, crucial for construction and trade.",
  },
  {
    image: "/images/wireless.jpeg",
    title: "Radio Waves & Wireless Communication",
    description:
      "Indian scientist Jagadish Chandra Bose demonstrated the first use of radio waves for wireless communication in 1895, pioneering developments that led to modern wireless technology.",
  },
  {
    image: "/images/Serie de Fibonacci.jpeg",
    title: "Fibonacci Sequence (Vedic Mathematics)",
    description:
      "Indian mathematicians described mathematical sequences resembling the Fibonacci series centuries before it was introduced in the West, influencing number theory and computing.",
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

