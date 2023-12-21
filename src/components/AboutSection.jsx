"use client"
import React, { useState, useEffect } from "react";

function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      heading: "Generating fancy text",
      para:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    },
    {
      heading: "Generating Colored text",
      para:
        "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font Well, the answer is actually no - rather than generating fancy fonts, this converter creates fancy symbols. The explanation starts with unicode; an industry standard which creates the specification for thousands of different symbols and characters. All the characters that you see on your electronic devices, and printed in books, are likely specified by the unicode standard.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
      style={{ height: "400px" }} // Set a fixed height for the container
    >
      {/* Carousel wrapper */}
      <div className="relative h-full overflow-hidden rounded-lg">
        {slides.map((element, index) => (
          <div
            key={index}
            className={`${
              currentSlide === index ? "opacity-100" : "opacity-0"
            } transition-opacity duration-700 ease-in-out`}
            data-carousel-item
          >
            <div className="relative">
              <h1 className="m-4  absolute font-extrabold text-[40px]">{element.heading}</h1>
            <h5 className="absolute m-6 top-12 text-[20px]">{element.para}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        {/* ... (Previous button content) */}
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        {/* ... (Next button content) */}
      </button>
    </div>
  );
}

export default AboutSection;
