'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
  }, [currentSlide, slides.length]);

  return (
    <div className="w-full -z-10">
      <img
        className="w-full object-cover max-h-[600px]"
        src={'/images/' + slides[currentSlide]}
        alt="Hero Image"
      />
    </div>
  );
};

export default HomeSlider;
