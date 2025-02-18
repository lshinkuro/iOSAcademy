import React from 'react';

export const Contact = () => {
  return (
    <div id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Ready to Start Your Journey?</h2>
          <p className="mt-4 text-xl text-gray-600">
            Contact us today and take the first step towards becoming an iOS developer
          </p>
          <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};