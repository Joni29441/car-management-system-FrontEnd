import React from "react-router-dom";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
      <footer className="bg-black text-white py-4">
        <div className="container mt-auto px-4 flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
            <span className="text-sm">&copy; 2023 <a href="https://seeu.edu.mk" className="hover:underline">South East European University</a>. All Rights Reserved.</span>
          </div>
          <ul className="flex flex-wrap justify-center sm:justify-start items-center text-sm">
            <li className="mr-4 md:mr-6">
              <a href="#" className="hover:underline">About</a>
            </li>
            <li className="mr-4 md:mr-6">
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li className="mr-4 md:mr-6">
              <a href="#" className="hover:underline">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }

export default Footer;