import React from 'react';

function About() {
  return (
    <div className="bg-green-50 min-h-screen py-10 px-4 md:px-12 lg:px-24 text-green-900">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700">About AgroGuard</h1>
        <p className="mt-4 text-lg text-green-600">
          At AgroGuard, we are dedicated to empowering farmers by providing insights and solutions for crop health.
          Our platform uses advanced technology to help you understand and treat crop diseases effectively.
        </p>
      </div>

      <div className="mt-10 space-y-8 max-w-3xl mx-auto">
        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700">1) Detect the Disease of Your Crop</h2>
          <p className="mt-2 text-green-600">
            Simply upload an image or provide information about your crop symptoms, and we’ll help identify the disease affecting your plants.
          </p>
        </div>

        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700">2) Disease Impact Analysis</h2>
          <p className="mt-2 text-green-600">
            We estimate how many crops could be impacted by the disease, helping you assess and manage risks to your entire crop yield.
          </p>
        </div>

        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700">3) Treatment Recommendations</h2>
          <p className="mt-2 text-green-600">
            We provide detailed guidance on how to treat the disease and protect your crops, ensuring you have the tools to act quickly.
          </p>
        </div>

        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700">4) Nearest Shops for Treatment Supplies</h2>
          <p className="mt-2 text-green-600">
            Our platform locates nearby shops where you can buy the necessary items to treat your crops, so you’re never far from what you need.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
