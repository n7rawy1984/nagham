import React, { useState } from "react";
import "../styles/BannerCarousel.css";

const banners = ["https://picsum.photos/153"];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevSlide}>
        ⬅
      </button>
      <img
        src={banners[currentIndex]}
        alt="Banner"
        className="carousel-image"
      />
      <button className="carousel-button right" onClick={nextSlide}>
        ➡
      </button>
    </div>
  );
};

export default BannerCarousel;
