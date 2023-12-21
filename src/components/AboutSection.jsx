"use client"
import React,{useState,useEffect} from 'react';

function AboutSection() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Adjust the number based on the number of slides
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  return (

 
    <div>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden md:h-[580px]">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`${
                currentSlide === index - 1 ? "" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              {/* Overlay to prevent right-click */}
              <div>
                  <h2 className='text-black'>How are you.</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {[...Array(3)].map((_, index) => (
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
  )
}

export default AboutSection;