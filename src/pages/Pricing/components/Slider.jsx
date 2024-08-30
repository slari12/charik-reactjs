import React, { useState, useEffect } from "react";

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      img: "https://i.pravatar.cc/150?img=24",
      title: "Lorem P. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      img: "https://i.pravatar.cc/150?img=8",
      title: "Mr. Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      img: "https://i.pravatar.cc/150?img=12",
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      img: "https://i.pravatar.cc/150?img=18",
      title: "Lorem De Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      img: "https://i.pravatar.cc/150?img=32",
      title: "Ms. Lorem R. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="container">
      <section id="testim" className="testim">
        <div className="testim-cover text-white">
          <div className="wrap">
            <span
              id="right-arrow"
              className="arrow right fa fa-chevron-right"
              onClick={nextSlide}
            ></span>
            <span
              id="left-arrow"
              className="arrow left fa fa-chevron-left"
              onClick={prevSlide}
            ></span>
            <ul id="testim-dots" className="dots">
              {slides.map((_, index) => (
                <li
                  key={index}
                  className={`dot ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                ></li>
              ))}
            </ul>
            <div id="testim-content" className="cont">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`slide ${activeIndex === index ? "active" : ""}`}
                >
                  <div className="img">
                    <img src={slide.img} alt={slide.title} />
                  </div>
                  <h2>{slide.title}</h2>
                  <p>{slide.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slider;
