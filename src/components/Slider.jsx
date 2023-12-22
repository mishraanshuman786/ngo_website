"use client"
import React, { useEffect, useState } from "react";
import "../components/styles/Slider.css";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 10); // Adjust the number based on the number of slides
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-4">
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden md:h-[580px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <div
              key={index}
              className={`${
                currentSlide === index - 1 ? "" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              {/* Overlay to prevent right-click */}
              <div>
                <img
                  src={`/images/image${index}.jpg`}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={`image${index}`}
                  draggable="false" // Disable image dragging
                />
                
              </div>
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {[...Array(10)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-current={currentSlide === index}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide - 1 + 10) % 10)
          }
        >
          {/* ... (Previous button content) */}
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % 10)
          }
        >
          {/* ... (Next button content) */}
        </button>
      </div>
    </div>
  );
}

export default Slider;
