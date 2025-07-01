import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About CureIndia</h1>
          <p className="text-xl text-gray-600 mb-12">Revolutionizing Healthcare Through Technology</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At CureIndia, we're committed to making quality healthcare accessible to everyone. 
              Through innovative technology and a network of dedicated healthcare professionals, 
              we're bridging the gap between patients and healthcare providers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a future where quality healthcare is accessible to all Indians, 
              regardless of their location. Our platform combines technology with medical 
              expertise to create a seamless healthcare experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Sets Us Apart</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>24/7 Virtual Consultations</li>
              <li>AI-Powered Diagnostics</li>
              <li>Secure Medical Records</li>
              <li>Experienced Healthcare Providers</li>
              <li>Comprehensive Healthcare Solutions</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Impact</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">20K+</p>
                <p className="text-gray-600">Patients Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">1000+</p>
                <p className="text-gray-600">Doctors</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">50+</p>
                <p className="text-gray-600">Cities</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">95%</p>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 