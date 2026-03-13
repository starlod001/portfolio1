// src/LandingPage.js
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
    <div className=" flex flex-col items-center h-screen justify-center bg-transparent px-5 text-white font-[font3]">
      <motion.h1
        className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hello,
      </motion.h1>
      <motion.h1
        className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        I'm a Software Developer.
      </motion.h1>

      <motion.p
        className="text-lg mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Crafting solutions with code and creativity.
      </motion.p>
      <motion.button
        className="px-6 py-3 bg-zinc-950 cursor-pointer text-white rounded-full shadow-lg hover:bg-zinc-900 transition duration-300 ease-in-out"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        
      >
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500'>View My Work </span>
      </motion.button>
    </div>
    </>
    
  );
};

export default Home;