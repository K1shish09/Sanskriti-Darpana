


import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/images/ayurveda.jpg",
    title: "Iphone User Plus",
    description:
      "Ancient Indian mathematician Aryabhata and others formalized the concept of zero. The invention of zero as a numeral and the development of the decimal system revolutionized mathematics",
  },
  {
    image: "/images/ayurveda.jpg",
    title: "Iphone User Plus",
    description:
      "Ancient Indian mathematician Aryabhata and others formalized the concept of zero. The invention of zero as a numeral and the development of the decimal system revolutionized mathematics",
  },
  {
    image: "/images/ayurveda.jpg",
    title: "Iphone User Plus",
    description:
      "Ancient Indian mathematician Aryabhata and others formalized the concept of zero. The invention of zero as a numeral and the development of the decimal system revolutionized mathematics",
  },
  {
    image: "/images/ayurveda.jpg",
    title: "Iphone User Plus",
    description:
      "Ancient Indian mathematician Aryabhata and others formalized the concept of zero. The invention of zero as a numeral and the development of the decimal system revolutionized mathematics",
  },
  {
    image: "/images/surgery.jpg",
    title: "Iphone User Plus",
    description:
      "Ancient Indian mathematician Aryabhata and others formalized the concept of zero. The invention of zero as a numeral and the development of the decimal system revolutionized mathematics",
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
    
    <div className="pt-10 pb-7 m-5 sm:m-8 md:m-16 lg:m-20 rounded-md shadow-xl " style={{ minHeight: "400px" }}>
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-3/4 mx-auto relative shadow-lg">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="rounded-md shadow-lg">
              <div className="rounded-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[230px] rounded-t-lg object-cover"
                />
              </div>
              <div className="bg-gradient-to-tr from-red-700 to-pink-600 rounded-lg">
                <div className="p-3">
                  <p className="font-semibold text-white">{item.title}</p>
                </div>
                <div className="p-2">
                  <p className="font-semibold text-white">{item.description}</p>
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
    <span className="text-sm">&gt;</span>
  </button>
);

export default Slidercard;


