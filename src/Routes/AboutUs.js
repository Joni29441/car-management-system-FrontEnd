import React from 'react';
import HonmeNavbar from '../components/HomeNavbar';
import '../styles/Home.css';

function AboutUs() {
  return (
    <>
    <HonmeNavbar/>
    <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <h1 className="text-4xl font-extrabold text-center">About Us</h1>
        <p className="mt-4 text-center text-lg">
          We are two passionate students dedicated to developing innovative solutions.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-gray-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="text-2xl font-bold text-center">Our Team</h2>
          <div className="mt-4 space-y-6 text-center">
            <div className="flex justify-center">
              <img
                className="h-48 w-48 rounded-full"
                src="https://via.placeholder.com/300"
                alt="Our Team"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium">Jon Fetahi & Semin Amiti</h3>
              <p className="text-sm">Software Developers</p>
              <p className="text-sm">Our combined expertise and dedication drive our success.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-gray-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="text-2xl font-bold text-center">Contact Us</h2>
          <p className="mt-4 text-lg text-center">
            Feel free to reach out to us for any inquiries or collaboration opportunities.
          </p>
          <div className="mt-4 text-center">
            <p className="text-sm">Email: contact@example.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutUs;
