import React from "react";
import image1 from "../components/../../public/logo.png"; // Import your image here

function AboutSection() {
  return (
    <div className="bg-blue-900 flex justify-center">
      <div className="py-4 w-[90%] flex flex-col lg:flex-row justify-center items-center gap-2 lg:py-0 lg:h-[500px]">
        {/* Content Section 1 */}
        <div className="flex lg:h-[420px] w-[90%] lg:w-[20%] flex-col items-center rounded-lg p-4 text-white bg-red-900 hover:bg-white hover:text-red-900 hover:border-red-900 transition duration-300 relative overflow-hidden">
          <div className="hover-transition absolute top-0 left-0 right-0 bottom-full bg-red-900"></div>
          <img src="https://cdn-icons-png.flaticon.com/512/2666/2666093.png" alt="Image 1" className="w-24 h-24  mb-4" />
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm text-center">
            Adarsh Foundation, established in 1993, is a non-governmental
            organization (NGO) committed to creating positive and sustainable
            change in society. Over the past three decades, we have evolved and
            expanded our reach to make a significant impact on the lives of
            individuals and communities.
          </p>
        </div>

        {/* Content Section 2 */}
        <div className="flex w-[90%] lg:w-[20%] lg:h-[420px] flex-col items-center rounded-lg p-4 text-white bg-orange-700 hover:bg-white hover:text-orange-900 hover:border-orange-900 transition duration-300 relative overflow-hidden">
          <div className="hover-transition absolute top-0 left-0 right-0 bottom-full bg-orange-700"></div>
          <img src="https://cdn-icons-png.flaticon.com/512/4497/4497146.png" alt="Image 2" className="w-24 h-24  mb-4" />
          <h2 className="text-xl font-bold mb-4">Our Journey</h2>
          <p className="text-sm text-center">
            Adarsh Foundation embarked on its mission in the state of Punjab,
            dedicating its initial ten years to addressing critical social
            issues and fostering development in the region. During this period,
            we laid the foundation for our commitment to social welfare,
            community development, and healthcare.
          </p>
        </div>

        {/* Content Section 3 */}
        <div className="flex w-[90%] lg:w-[20%] lg:h-[420px] flex-col items-center rounded-lg p-4 text-white bg-green-600 hover:bg-white hover:text-green-900 hover:border-green-900 transition duration-300 relative overflow-hidden">
          <div className="hover-transition absolute top-0 left-0 right-0 bottom-full bg-green-600"></div>
          <img src="https://cdn-icons-png.flaticon.com/512/10506/10506823.png" alt="Image 3" className="w-24 h-24  mb-4" />
          <h2 className="text-xl font-bold mb-4">Expanding Horizons</h2>
          <p className="text-sm text-center">
            In the year 2003, driven by the desire to address a pressing issue
            affecting many lives, Adarsh Foundation shifted its focus to
            Varanasi. This transition marked a pivotal moment as we redirected
            our efforts towards helping those grappling with alcohol addiction.
          </p>
        </div>

        {/* Content Section 4 */}
        <div className="flex w-[90%] lg:w-[20%] lg:h-[420px] flex-col items-center rounded-lg p-4 text-white bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 transition duration-300 relative overflow-hidden">
          <div className="hover-transition absolute top-0 left-0 right-0 bottom-full bg-red-600"></div>
          <img src="https://cdn-icons-png.flaticon.com/512/3721/3721184.png" alt="Image 4" className="w-24 h-24  mb-4" />
          <h2 className="text-xl font-bold mb-4">Our Mission</h2>
          <p className="text-sm text-center">
            Transforming Lives: We believe in the power of transformation.
            Adarsh Foundation is committed to helping individuals break free
            from the shackles of alcohol addiction and regain control of their
            lives. 
          </p>
        </div>

        {/* Content Section 5 */}
        <div className="flex w-[90%] lg:w-[20%] lg:h-[420px] flex-col items-center rounded-lg p-4 text-white bg-yellow-600 hover:bg-white hover:text-yellow-600 hover:border-yellow-600 transition duration-300 relative overflow-hidden">
          <div className="hover-transition absolute top-0 left-0 right-0 bottom-full bg-yellow-600"></div>
          <img src="https://cdn-icons-png.flaticon.com/512/2114/2114951.png" alt="Image 5" className="w-24 h-24  mb-4" />
          <h2 className="text-xl font-bold mb-4">Our Approach</h2>
          <p className="text-sm text-center">
            At Adarsh Foundation, we employ a holistic approach to address the
            complexities of alcohol addiction. Our programs encompass medical
            intervention, counseling, vocational training, and community
            integration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
