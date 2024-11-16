import React from 'react';

function Home() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/heroimg.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className="text-center p-6 md:p-12">
        <h1 className="text-4xl md:text-6xl font-bold text-green-700">
          Welcome to AgroGuard
        </h1>
        <p className="mt-5 text-lg md:text-xl text-black max-w-2xl mx-auto">
          Empowering farmers to detect and prevent crop diseases early. Let's protect your crops and ensure a healthy harvest!
        </p>

      
        <div className="mt-8">
          <a 
            href="" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-700 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
          >
            GET STARTED
          </a>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-green-200 opacity-10 pointer-events-none"></div>
    </div>
  );
}

export default Home;
