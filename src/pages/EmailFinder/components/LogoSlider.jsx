// PartnerCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div>
      <div className="lg:pt-[60px] mx-auto px-4 pt-8">
        <Slider {...settings} className="customer-logos items-center">
          <div className="slide">
            <img
              src="https://www.charik.fr/hubfs/logo-ouest%20croissance.svg"
              alt="Partner 1"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.charik.fr/hs-fs/hubfs/logo%20digitaweb%20horizontal.png?width=700&name=logo%20digitaweb%20horizontal.png"
              alt="Partner 2"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.charik.fr/hs-fs/hubfs/logo%20ticket%20fond%20blanc%20horizontal.png?width=700&name=logo%20ticket%20fond%20blanc%20horizontal.png"
              alt="Partner 3"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.charik.fr/hs-fs/hubfs/logo%20digitaweb%20horizontal.png?width=700&name=logo%20digitaweb%20horizontal.png"
              alt="Partner 4"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.charik.fr/hs-fs/hubfs/logo%20ticket%20fond%20blanc%20horizontal.png?width=700&name=logo%20ticket%20fond%20blanc%20horizontal.png"
              alt="Partner 5"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.charik.fr/hs-fs/hubfs/logo%20digitaweb%20horizontal.png?width=700&name=logo%20digitaweb%20horizontal.png"
              alt="Partner 6"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.charik.fr/hs-fs/hubfs/logo%20digitaweb%20horizontal.png?width=700&name=logo%20digitaweb%20horizontal.png"
              alt="Partner 6"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider;
