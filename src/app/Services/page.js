import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-blue-200" style={{backgroundImage: 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)'}}>
      <div className="container mx-auto py-8" >
        <h1 className="text-3xl font-bold text-center text-white mb-8">Our Services</h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md" >
          <p className="text-lg text-gray-800">
            The De-addiction & Rehabilitation center operated by Adarsh Foundation is a leading De-addiction center in Uttar Pradesh, that offers a number of services in order to help people overcome addiction. With the assistance of specialist doctors and counselors, we guide individuals to reintegrate into society and lead regular lives. Some of the services we offer include:
          </p>
          <ul className="list-disc ml-8 mt-4">
            <li>Drug De-addiction</li>
            <li>Alcohol Addiction</li>
            <li>Medicinal Addiction</li>
            <li>Behavioral Problems</li>
            <li>Paan, Tobacco, Smoking, and other Addictions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
