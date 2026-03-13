import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNpm, FaYarn, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiGraphql, SiMongodb, SiPostgresql, SiRedis, SiTailwindcss, SiNextdotjs, SiJest, SiRedux } from 'react-icons/si';

const InfiniteIconLoop = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  
  // Array of icons to display
  const icons = [
    <FaReact className="text-5xl text-blue-500" />,
    <FaNodeJs className="text-5xl text-green-600" />,
    <FaJs className="text-5xl text-yellow-400" />,
    <SiTypescript className="text-5xl text-blue-600" />,
    <FaHtml5 className="text-5xl text-orange-500" />,
    <FaCss3Alt className="text-5xl text-blue-400" />,
    <SiTailwindcss className="text-5xl text-cyan-400" />,
    <SiNextdotjs className="text-5xl text-black dark:text-white" />,
    <FaGitAlt className="text-5xl text-orange-600" />,
    <FaGithub className="text-5xl text-black dark:text-white" />,
    <FaNpm className="text-5xl text-red-500" />,
    <FaYarn className="text-5xl text-blue-400" />,
    <SiGraphql className="text-5xl text-pink-600" />,
    <SiMongodb className="text-5xl text-green-500" />,
    <SiPostgresql className="text-5xl text-blue-700" />,
    <SiRedis className="text-5xl text-red-600" />,
    <FaDocker className="text-5xl text-blue-400" />,
    <FaAws className="text-5xl text-orange-400" />,
    <SiJest className="text-5xl text-red-800" />,
    <SiRedux className="text-5xl text-purple-600" />,
  ];

  // Duplicate the icons multiple times to ensure full coverage
  const duplicatedIcons = [...icons, ...icons, ...icons, ...icons, ...icons];

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    // Calculate total width of all icons
    const iconCount = duplicatedIcons.length;
    const iconWidth = 80; // Approximate width of each icon with margin
    const totalWidth = iconWidth * iconCount;

    // Set initial position
    gsap.set(track, { x: -totalWidth / 3 });

    // Create animation
    const animation = gsap.to(track, {
      x: `+=${totalWidth / 3}`,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (totalWidth / 3)),
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className='bg-black'>
    <div className="relative w-[calc(100vw-200px)] mx-[100px] overflow-hidden pt-10">
      {/* Gradient fade effect - positioned inside the margins */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black dark:from-gray-900 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black dark:from-gray-900 to-transparent z-10"></div>
      
      <div 
        ref={containerRef}
        className="w-full h-20 flex items-center  "
      >
        <div 
          ref={trackRef}
          className="flex items-center space-x-12 px-4 "
        >
          {duplicatedIcons.map((Icon, index) => (
            <div key={index} className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
              {Icon}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default InfiniteIconLoop;