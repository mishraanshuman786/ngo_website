"use client";
import React, { useEffect, useState } from "react";
import "./styles/Slider.css";

function Slider() {
  let [currentSlide, setCurrentSlide] = useState(0);
  let imageObj = [
    {
      id: 1,
      src: "/images/image1.jpg",
    },
    {
      id: 2,
      src: "/images/image2.jpg",
    },
    {
      id: 3,
      src: "/images/image3.jpg",
    },
    {
      id: 4,
      src: "/images/image4.jpg",
    },
    {
      id: 5,
      src: "/images/image5.jpg",
    },
    {
      id: 6,
      src: "/images/image6.jpg",
    },
    {
      id: 7,
      src: "/images/image7.jpg",
    },
    {
      id: 8,
      src: "/images/image8.jpg",
    },
    {
      id: 9,
      src: "/images/image9.jpg",
    },
    {
      id: 10,
      src: "/images/image10.jpg",
    },
    {
      id: 11,
      src: "/images/image11.jpg",
    },
    {
      id: 12,
      src: "/images/image1.jpg",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      if (currentSlide === imageObj.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((currentSlide + 1) % imageObj.length);
      }
    }, 4000);
  });

  return (
      <div className="container relative h-[600px] mx-auto">
        <div className="relative bg-gray-100  h-full flex  overflow-hidden">
          {imageObj.map((image, index) => {
            return (
              <div key={index} >                             
                <img
                  src={image.src}
                  className={
                    index === currentSlide
                      ? "carousel-card carousel-card-active"
                      : "carousel-card"
                  }
                />
                <div
                  className="text-black absolute  left-6 top-60 text-[100px]"
                  onClick={() => {
                    if (currentSlide === 0) {
                      setCurrentSlide(imageObj.length - 1);
                    } else {
                      let previous = (currentSlide - 1) % imageObj.length;
                      setCurrentSlide(previous);
                    }
                  }}
                >
                  &lsaquo;
                </div>

                <div
                  className="text-black absolute right-6 top-60 text-[100px]"
                  onClick={() => {
                    if (currentSlide === imageObj.length - 1) {
                      setCurrentSlide(0);
                    } else {
                      let next = (currentSlide + 1) % imageObj.length;
                      setCurrentSlide(next);
                    }
                  }}
                >
                  &rsaquo;
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
}

export default Slider;
