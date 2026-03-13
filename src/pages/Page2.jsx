import React, {useRef} from 'react'
import TextOverlayImageCard from '../components/TextOverlayImageCard'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Page2 = () => {

  const formRef = useRef(null);

  useGSAP(() => {
    // Initial state - hidden below the viewport
    gsap.set(formRef.current, { y: '100%', opacity: 0 });

    // Animation for when scrolling down
    ScrollTrigger.create({
      trigger: formRef.current,
      start: '-80% bottom', // when the top of the form hits the bottom of the viewport 
      end: 'bottom bottom',
      onEnter: () => {
        gsap.to(formRef.current, {
          y: '0%',
          opacity: 1,
          duration: 1,
          ease: 'power1.inOut'
        });
      },
      onLeaveBack: () => {
        gsap.to(formRef.current, {
          y: '110%',
          opacity: 0,
          duration: 0.5,
          ease: 'power1.inOut'
        });
      }
    });
  }, []);

  return (
    <div id='about' className='h-screen bg-black'>
      <div 
        ref={formRef}
        className="flex items-center justify-center gap-10 h-screen px-7  text-white "
        >
        <TextOverlayImageCard />
        <div className="max-w-2xl p-8">
            <h2 className="text-gray-400 text-sm mb-2">ABOUT ME</h2>
            <h1 className="text-5xl font-bold mb-4">Hi there! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500">Ujjwal</span></h1>
            <p className="text-lg mb-4">
              I'm Ujjwal Mishra, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
            </p>
            <p className="text-lg mb-4">
              When I'm not coding, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
            </p>
            <p className="text-lg">
              I believe in waking up each day eager to make a difference!
            </p>
        </div>
    </div>
    </div>
  )
}

export default Page2
