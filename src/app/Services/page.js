import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="bg-blue-900 py-8">
        <h1 className="text-3xl font-bold text-center text-white">Our Services</h1>
      </div>
      <div className="container mx-auto py-8 px-4">
        <div className="p-4 bg-white shadow-md rounded-md">
          <p className="text-xl text-gray-800 ">
            The De-addiction & Rehabilitation center operated by Adarsh Foundation is a leading De-addiction center in Uttar Pradesh, that offers a number of services in order to help people overcome addiction. With the assistance of specialist doctors and counselors, we guide individuals to reintegrate into society and lead regular lives. Some of the services we offer include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-800 text-white rounded-lg p-4 flex items-center justify-center hover:bg-blue-700 hover:text-gray-100">
              <h1 className="text-xl font-bold hover:underline">Drug De-addiction</h1>
            </div>
            <div className="bg-blue-800 text-white rounded-lg p-4 flex items-center justify-center hover:bg-blue-700 hover:text-gray-100">
              <h1 className="text-xl font-bold hover:underline">Alcohol Addiction</h1>
            </div>
            <div className="bg-blue-800 text-white rounded-lg p-4 flex items-center justify-center hover:bg-blue-700 hover:text-gray-100">
              <h1 className="text-xl font-bold hover:underline">Medicinal Addiction</h1>
            </div>
            <div className="bg-blue-800 text-white rounded-lg p-4 flex items-center justify-center hover:bg-blue-700 hover:text-gray-100">
              <h1 className="text-xl font-bold hover:underline">Behavioral Problems</h1>
            </div>
            <div className="bg-blue-800 text-white rounded-lg p-4 flex items-center justify-center hover:bg-blue-700 hover:text-gray-100">
              <h1 className="text-xl font-bold hover:underline">Paan, Tobacco, Smoking</h1>
            </div>
            <div className="bg-blue-800 text-white rounded-lg p-4 flex items-center justify-center hover:bg-blue-700 hover:text-gray-100">
              <h1 className="text-xl font-bold hover:underline">Other Addictions</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
