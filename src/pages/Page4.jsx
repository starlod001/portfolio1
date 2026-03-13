import React, {useRef} from 'react'
import FlippingCard from '../components/FlippingCard'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Page4 = () => {

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
    <div id='work' className=' bg-black px-20 pt-20 pb-10'>
      <div ref={formRef}
        className='flex items-center justify-center'
        >
      <FlippingCard />
      <FlippingCard />
      </div>
    </div>
    
  )
}

export default Page4
