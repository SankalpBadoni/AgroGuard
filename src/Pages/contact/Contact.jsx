import React from 'react';

function Contact() {
  return (
    <div className="bg-green-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-4">
          Contact Us
        </h1>
        <p className="text-green-600 text-center mb-8">
          Have any questions? We’d love to hear from you!
        </p>

    
        <form className="space-y-4">
          <div>
            <label className="block text-green-700 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-green-700 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-green-700 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Send Message
          </button>
        </form>

       
        <div className="mt-8 text-center text-green-600">
          <p>Email: <a href="mailto:support@agroguard.com" className="text-green-700 font-semibold">support@agroguard.com</a></p>
          <p className="text-green-700 font-semibold">Phone: +91-83865432</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
