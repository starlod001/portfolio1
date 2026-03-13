import React from "react";
import { motion } from 'framer-motion';

const TextOverlayImageCard = () => {
  return (
    <motion.div 
        className="h-screen flex justify-center items-center"
        whileHover={{ scale: 1.1}}
        whileTap={{ scale: 0.95 }}
        >
      <div className="relative max-w-xl mx-auto w-full">
        <img
          className="h-100 w-full object-cover rounded-md"
          src="./src/assets/images/ujju3.jpg"
          alt="Random image"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-17 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">
            Get Lost in Mountains
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default TextOverlayImageCard;
