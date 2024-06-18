import React from "react";
import '../styles/Home.css';
import HomeNavbar from '../components/HomeNavbar';

function Home () {
  return (
    <>
    <HomeNavbar />
    <div className="hero-backgroundHome">
      <div className="hero-content">
        <h1 className="text-3xl font-bold mx-auto text-white">Best Cars For The Best Journey</h1>
        <p className="text-m font-bold mx-auto text-white">We provide the best cars with the best prices. We are experts in car rental. Enjoy your holidays with us. We make your drive memorable. We care for your safety.</p>
      </div>
    </div>
     <section className="py-28 mb-10 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center ">
          <h2 className="text-3xl font-bold mx-auto text-white">Our Fleet</h2>
          <p className="mb-6 text-white">Explore our wide range of cars available for rent. From compact cars to luxury vehicles, we have something for everyone.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Compact Cars</h3>
              <p>Perfect for city driving and fuel efficiency.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">SUVs</h3>
              <p>Spacious and comfortable for family trips.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Luxury Cars</h3>
              <p>Experience the ultimate in comfort and style.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 mt-10 bg-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Best Prices</h3>
              <p>We offer competitive pricing on all our vehicles.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">24/7 Customer Support</h3>
              <p>Our team is here to assist you around the clock.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Wide Selection</h3>
              <p>Choose from a wide variety of vehicles to suit your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 mt-9 dark:bg-gray-800">
        <div className="container mx-auto text-center px-6 text-white ">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-6">Have questions or need assistance? Reach out to our support team, and we’ll be happy to help you.</p>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-white">Contact Us</button>
        </div>
      </section>
    </>
  );
};

export default Home;