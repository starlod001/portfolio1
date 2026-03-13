import React from 'react';
import { TfiLinkedin } from "react-icons/tfi";
import { SiWhatsapp } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { SiRefinedgithub } from "react-icons/si";
import { IoMailOpenOutline } from "react-icons/io5";

const Footer = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
   <div className="bg-black text-white flex flex-col">
      <div className="flex-grow" />
      <footer className="bg-black text-gray-400 py-12 w-full">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500">Ujjwal Mishra</h2>
            <p className="mt-2">Help you create experiences where aesthetics &amp;<br /> functionality seamlessly come together.</p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><SiRefinedgithub /></a>
              <a href="#" className="text-gray-400 hover:text-white"><TfiLinkedin/></a>
              <a href="#" className="text-gray-400 hover:text-white"><GrInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white" ><SiWhatsapp/></a>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Projects</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Projects</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500">Feel free to reach out to me for any inquiries or<br /> collaboration opportunities.</h3>
            <div className="mt-2 flex items-center">
              <IoMailOpenOutline />
              <a href="mailto:hello@aayushbharti.in" className="ml-2 text-blue-500 hover:underline">hello@ujjwalmishra.in</a>
            </div>
          </div>
        </div>
        <div className="w-full h-1 mt-10 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <div className="mt-10 text-center text-gray-600">
          <p>Copyright © {currentYear} Ujjwal Mishra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
