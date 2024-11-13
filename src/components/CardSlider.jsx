import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'
import surgery from './../Assets/surgery.jpg';
import indus from './../Assets/indusvalley.jpg';
import stepwell from './../Assets/stepwell.jpg';

const CardSlider = () => {
  // Slider settings
  const settings = {
    dots: true, // Display dots for navigation
    infinite: tr, // Loop through slides
     // Transition speed (1 second)
     // 3 seconds between slides
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1, // Scroll 1 card at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 card on small screens
        },
      },
    ],
  };

  return (
    <div className="slide-container">
      <Slider {...settings} className="slider-wrapper">
        <div className="card">
          <img src={surgery} alt="Surgery equipment" />
          <div className="overlay">
            <h3>Wireless Communication</h3>
            <p>Indian scientist Jagadish Chandra Bose was one of the pioneers of wireless communication...</p>
          </div>
        </div>
        <div className="card">
          <img src={indus} alt="Indus Valley Civilization" />
          <div className="overlay">
            <h3>Wireless Communication</h3>
            <p>Indian scientist Jagadish Chandra Bose was one of the pioneers of wireless communication...</p>
          </div>
        </div>
        <div className="card">
          <img src={stepwell} alt="Stepwell architecture" />
          <div className="overlay">
            <h3>Wireless Communication</h3>
            <p>Indian scientist Jagadish Chandra Bose was one of the pioneers of wireless communication...</p>
          </div>
        </div>
      </Slider>

  
    </div>
  );
};

export default CardSlider;

