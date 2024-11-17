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
    <div className=" pt-10 pb-7 " style={{ minHeight: "500px" }}>
      <div style={{ width: "75%", margin: "0 auto", border:"20px"}}>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className=" rounded-md">
              <div className="rounded-md ">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "230px", 
                    
                    
                   
                  }}
                />
              </div >
              <div className="bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 "> 
              <div className="p-3   ">
                <p className="font-semibold text-white">{item.title}</p>
              </div>
              <div className="p-2 ">
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

export default Slidercard;







