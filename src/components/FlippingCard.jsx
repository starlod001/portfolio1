import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FlippingCard = () => {
  const cardRef = useRef(null);
  const isFlipped = useRef(false);
  const isHovering = useRef(false);
  
  // Initialize GSAP
  useEffect(() => {
    gsap.set(cardRef.current, { transformStyle: "preserve-3d" });
    gsap.set(cardRef.current.querySelector(".front"), { backfaceVisibility: "hidden" });
    gsap.set(cardRef.current.querySelector(".back"), { 
      backfaceVisibility: "hidden", 
      rotationY: 180 
    });
  }, []);

  const flipCard = (toFront) => {
    const targetRotation = toFront ? 0 : 180;
    gsap.to(cardRef.current, {
      rotationY: targetRotation,
      duration: 3,
      ease: "power2.out"
    });
    isFlipped.current = !toFront;
  };

  const handleClick = () => {
    flipCard(isFlipped.current);
  };

  const handleMouseEnter = () => {
    isHovering.current = true;
    if (!isFlipped.current) {
      flipCard(false);
    }
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    if (isFlipped.current) {
      flipCard(true);
    }
  };

  return (
    <div className="perspective-1000 w-72 h-100 mx-auto my-12">
      <div 
        ref={cardRef}
        className="w-full h-full relative transform-style-preserve-3d cursor-pointer"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Front of card */}
        <div className="front absolute w-full h-full backface-hidden flex flex-col justify-center items-center rounded-xl p-5 bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Frontend Tools</h2>
          <p className="text-lg">Hover or click to flip</p>
          <div className="mt-4 text-sm opacity-80">(Hover effect works on desktop)</div>
        </div>
        
        {/* Back of card */}
        <div className="back absolute w-full h-full backface-hidden flex flex-col justify-center items-center rounded-xl p-5 bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Back Side</h2>
          <p className="text-lg">Hover out or click to flip back</p>
          <div className="mt-4 text-sm opacity-80">Cool, right?</div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;