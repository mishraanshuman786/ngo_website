"use client";
import React, { useState, useEffect } from "react";

function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      content: (
        <h1 className="md:text-[40px] text-[30px] text-center font-bold">
          *Welcome to Adarsh Foundation: Transforming Lives, Empowering
          Communities*
        </h1>
      ), // your content
    },
    {
      content: (
        <div>
          <h1 className="text-[30px] font-bold">About Us</h1>
          <p className="text-[22px]">
            Adarsh Foundation, established in 1993, is a non-governmental
            organization (NGO) committed to creating positive and sustainable
            change in society. Over the past three decades, we have evolved and
            expanded our reach to make a significant impact on the lives of
            individuals and communities.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div>
          <h1 className="text-[30px] font-bold">Our Journey</h1>
          <p className="text-[22px]">
            Adarsh Foundation embarked on its mission in the state of Punjab,
            dedicating its initial ten years to addressing critical social
            issues and fostering development in the region. During this period,
            we laid the foundation for our commitment to social welfare,
            community development, and healthcare.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div>
          <h1 className="text-[30px] font-bold">Expanding Horizons</h1>
          <p className="text-[22px]">
            In the year 2003, driven by the desire to address a pressing issue
            affecting many lives, Adarsh Foundation shifted its focus to
            Varanasi. This transition marked a pivotal moment as we redirected
            our efforts towards helping those grappling with alcohol addiction.
          </p>
        </div>
      ), // your content
    },
    {
      content: (
        <div>
          <h1 className="text-[30px] font-bold">A Decade of Dedication</h1>
          <p className="text-[22px]">
            For the past ten years, Adarsh Foundation has been tirelessly
            working in Varanasi to provide support, rehabilitation, and hope to
            individuals battling alcoholism. Our dedicated team of
            professionals, including counselors, healthcare experts, and social
            workers, collaborate to bring about a positive change in the lives
            of those affected by alcohol addiction.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div>
          <h1 className="text-[30px] font-bold">Our Mission</h1>
          <p className="text-[22px]">
            *Transforming Lives:* We believe in the power of transformation.
            Adarsh Foundation is committed to helping individuals break free
            from the shackles of alcohol addiction and regain control of their
            lives. *Empowering Communities:* We recognize the importance of
            community support in the recovery process. Our programs aim to
            empower not just individuals but entire communities, fostering a
            culture of understanding and acceptance. *Prevention and Education:*
            Beyond rehabilitation, we actively engage in preventive measures and
            educational initiatives to raise awareness about the consequences of
            alcohol abuse and addiction.
          </p>
        </div>
      ), // your content
    },
    {
      content: (
        <div>
          <h1 className="text-[30px] font-semibold"> Our Approach</h1>
          <p className="text-[22px]">
            At Adarsh Foundation, we employ a holistic approach to address the
            complexities of alcohol addiction. Our programs encompass medical
            intervention, counseling, vocational training, and community
            integration. We believe in treating the individual as a whole,
            addressing both the physical and psychological aspects of addiction.
            Adarsh Foundation welcomes support from individuals, businesses, and
            organizations that share our commitment to creating a healthier and
            more compassionate society. Whether through donations, volunteering,
            or spreading awareness, your involvement can make a significant
            difference in the lives of those we aim to help.
          </p>
        </div>
      ), // your content
    },
    {
      content: (
        <div>
          <h4 className="text-[28px] font-semibold text-center">
            Join us in our journey to bring about positive change, one life at a
            time.
          </h4>
        </div>
      ), // your content
    },
    {
      content: (
        <h1 className="md:text-[40px] text-[30px] font-semibold text-center">
          *Together, let&apos;s build a future free from the
          chains of addiction.*
        </h1>
      ),
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
      className="relative w-full h-[500px] md:h-[300px] mt-4 mb-4  "
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div
        style={{
          backgroundImage: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
        }}
        className="relative h-full flex justify-center items-center  text-white overflow-hidden rounded-lg border order-gray-600 md:mx-10 mx-4 "
      >
        {slides.map((element, index) => (
          <div
            key={index}
            className={`absolute w-full  transition-transform duration-700 ease-in-out transform ${
              currentSlide === index ? "translate-x-0" : "translate-x-full"
            }`}
            data-carousel-item
          >
            <div className="my-4 mx-10 font-semibold ">{element.content}</div>
          </div>
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
