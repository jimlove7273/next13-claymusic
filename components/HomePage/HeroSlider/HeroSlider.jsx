'use client';
import React, { useState, useEffect } from 'react';

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let slides = ['banner-1-6.jpg', 'slide3.jpg'];

  useEffect(() => {
    const intervalImage = setInterval(() => {
      currentSlide === slides.length - 1
        ? setCurrentSlide(0)
        : setCurrentSlide(currentSlide + 1);
    }, 10000);
    return () => clearInterval(intervalImage);
  }, [currentSlide]);

  return (
    <div>
      <img
        className="w-full object-cover"
        src={'/images/' + slides[currentSlide]}
      />
    </div>
  );
};

export default HomeSlider;
