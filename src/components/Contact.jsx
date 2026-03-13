import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {
  const formRef = useRef(null);

  useGSAP(() => {
    // Initial state - hidden below the viewport
    gsap.set(formRef.current, { y: '100%', opacity: 0 });

    // Animation for when scrolling down
    ScrollTrigger.create({
      trigger: formRef.current,
      start: 'top bottom', // when the top of the form hits the bottom of the viewport 
      end: 'bottom bottom',
      onEnter: () => {
        gsap.to(formRef.current, {
          y: '0%',
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out'
        });
      },
      onLeaveBack: () => {
        gsap.to(formRef.current, {
          y: '110%',
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out'
        });
      }
    });
  }, []);

  return (
    <div className="h-auto bg-black flex items-center  justify-center pt-25 pb-10">
      <div 
        ref={formRef}
        className="w-full max-w-md bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-0.5 transform transition-all duration-800"
        >
        <div className="bg-black rounded-xl p-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500 ">Let's Talk About Your Project</h2>

          <form className="space-y-1">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-1 text-white border border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-1 text-white border border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-1 text-white border border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition"
                placeholder="What's this about?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-1 text-white border border-gray-800 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500 text-black font-medium py-1 px-4 rounded-lg transition duration-300 transform hover:scale-105 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>  
        
      </div>
    </div>
  );
};

export default Contact;