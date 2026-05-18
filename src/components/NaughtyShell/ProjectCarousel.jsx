import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  '/images/hollow-veil-env-3.png',
  '/images/night-system.png',
  '/images/andhkaar-splash-2.png',
  '/images/hollow-veil-env-1.png',
  '/images/3d-asset-4.png',
  '/images/hollow-veil-env-5.png',
  '/images/3d-asset-1.png',
  '/images/hollow-veil-env-2.png',
  '/images/3d-asset-2.png',
  '/images/andhkaar-splash-3.png',
  '/images/hollow-veil-env-4.png',
  '/images/3d-asset-5.png',
  '/images/hollow-veil-env-6.png',
  '/images/3d-asset-3.png',
  '/images/hollow-veil-env-8.png',
  '/images/hollow-veil-env-9.png'
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".carousel-header",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%"
          }
        }
      );
      gsap.fromTo(carouselRef.current,
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 40;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="w-full py-32 bg-dark-900 relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-accent/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="carousel-header text-center mb-16">
        <h2 className="text-xl md:text-2xl font-display font-medium tracking-[0.3em] text-gray-400 mb-2">FEATURED</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white tracking-widest text-glow">PROJECTS</h3>
      </div>

      <div 
        ref={carouselRef} 
        className="relative w-full max-w-[1200px] h-[260px] sm:h-[300px] md:h-[500px] flex justify-center items-center perspective-[1000px] touch-pan-y px-4"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.map((src, i) => {
          // Robust modular offset calculation for any number of images
          let offset = (i - currentIndex + images.length) % images.length;
          if (offset > images.length / 2) {
            offset -= images.length;
          }

          // Determine styles based on offset
          let xTransform = offset * 25; // percentage
          let zTransform = Math.abs(offset) * -200; // pixels back
          let opacity = offset === 0 ? 1 : Math.max(0, 1 - Math.abs(offset) * 0.4);
          let zIndex = 100 - Math.abs(offset);
          let isVisible = Math.abs(offset) <= 2;

          return (
            <div
              key={i}
              className={`absolute w-[75%] sm:w-[60%] md:w-[50%] h-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
              style={{
                transform: `translateX(${xTransform}%) translateZ(${zTransform}px) rotateY(${offset * -15}deg)`,
                opacity: opacity,
                zIndex: zIndex,
              }}
              onClick={() => isVisible && setCurrentIndex(i)}
            >
              <div className={`w-full h-full border ${offset === 0 ? 'border-accent box-glow shadow-2xl' : 'border-white/10'} rounded-lg overflow-hidden relative cursor-pointer group`}>
                <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${offset === 0 ? 'opacity-0' : 'opacity-60 group-hover:opacity-40'}`}></div>
                <img src={src} alt={`Project ${i}`} className="w-full h-full object-cover" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-8 mt-12">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-accent hover:text-accent hover:bg-accent/10 transition-colors"
        >
          ←
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-accent hover:text-accent hover:bg-accent/10 transition-colors"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default ProjectCarousel;
