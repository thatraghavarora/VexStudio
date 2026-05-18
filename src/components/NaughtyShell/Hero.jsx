import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 192;

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const characterRef = useRef(null);
  const imagesRef = useRef([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext('2d') : null;
    if (!canvas || !ctx) return;

    // Resize Canvas to fill screen exactly
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(Math.round(progress * (TOTAL_FRAMES - 1)));
    };
    window.addEventListener('resize', handleResize);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Preload Images
    const preloadedImages = [];
    let firstLoaded = false;

    const renderFrame = (frameIndex) => {
      const img = preloadedImages[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.width || img.naturalWidth;
      const ih = img.height || img.naturalHeight;
      if (!iw || !ih) return;

      const ratio = Math.max(cw / iw, ch / ih);
      const nw = iw * ratio;
      const nh = ih * ratio;
      const x = (cw - nw) / 2;
      const y = (ch - nh) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, x, y, nw, nh);
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/frames/frames/ezgif-frame-${frameNum}.jpg`;
      
      img.onload = () => {
        if (!firstLoaded && i === 1) {
          firstLoaded = true;
          renderFrame(0);
        }
      };
      preloadedImages.push(img);
    }
    imagesRef.current = preloadedImages;

    // Parallax Effect on mouse move
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(characterRef.current, {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: 'power2.out',
      });
      
      gsap.to(textRef.current, {
        x: -xPos * 0.5,
        y: -yPos * 0.5,
        duration: 1.5,
        ease: 'power2.out',
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Initial Reveal Animations
    gsap.fromTo('.glitch-text', 
      { y: 100, opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      { y: 0, opacity: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', duration: 1.2, ease: 'power4.out', delay: 0.2 }
    );
    
    gsap.fromTo(characterRef.current,
      { scale: 1.1, opacity: 0, y: 50 },
      { scale: 1, opacity: 1, y: 0, duration: 2, ease: 'power3.out', delay: 0.5 }
    );

    // Scroll Scrubbing Animation for Frames
    const frameObj = { frame: 0 };
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=4000',
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        setProgress(self.progress);
        const currentFrame = Math.round(self.progress * (TOTAL_FRAMES - 1));
        renderFrame(currentFrame);

        // Fade out text and logo after 15% scroll
        if (self.progress > 0.1) {
          gsap.to('.hero-overlay-content', { opacity: Math.max(0, 1 - (self.progress - 0.1) * 5), duration: 0.3 });
        } else {
          gsap.to('.hero-overlay-content', { opacity: 1, duration: 0.3 });
        }
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (st) st.kill();
    };
  }, []);

  const handleSkip = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef} 
      id="home"
      className="relative w-full h-screen overflow-hidden bg-dark-900"
    >
      {/* Scrubbing Canvas Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
        <canvas ref={canvasRef} className="w-full h-full object-cover block"></canvas>
        <div className="absolute inset-0 bg-dark-900/40 pointer-events-none"></div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Main Content Container */}
      <div className="hero-overlay-content relative w-full h-full max-w-7xl mx-auto flex flex-col items-center justify-center z-10 px-6" ref={textRef}>
        
        {/* Welcome Message Badge */}
        <div className="glitch-text mb-4 md:mb-6 w-full px-2 flex justify-center">
          <span className="px-3 md:px-5 py-2 border border-accent/40 bg-accent/10 text-accent font-display text-[10px] md:text-sm font-bold tracking-[0.15em] md:tracking-[0.4em] uppercase rounded-full inline-block backdrop-blur-md shadow-[0_0_20px_rgba(255,69,0,0.3)] text-center max-w-full truncate sm:overflow-visible sm:whitespace-normal">
            WELCOME TO THE DARKNESS // VEX STUDIOS
          </span>
        </div>

        {/* Vex Studio Logo */}
        <div 
          ref={characterRef}
          className="relative z-10 w-full flex flex-col items-center justify-center mb-6 md:mb-8"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-accent flex items-center justify-center bg-dark-900 shadow-[0_0_40px_rgba(255,69,0,0.5)] group">
            <img src="/vex%20studio%20logo.jpeg" alt="Vex Studio Logo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>

        {/* Full Text */}
        <h1 className="glitch-text text-[13vw] sm:text-[10vw] md:text-[8vw] font-display font-black leading-tight text-white tracking-tighter text-glow z-20 text-center uppercase mb-4 max-w-full px-2">
          VEX STUDIOS
        </h1>
        
        {/* Sub-Headline */}
        <p className="glitch-text text-gray-300 font-display text-[11px] md:text-base tracking-[0.2em] md:tracking-[0.5em] uppercase text-center max-w-2xl leading-relaxed opacity-90 px-4">
          Crafting Next-Gen Psychological Horror & Systemic RPGs
        </p>

      </div>

      {/* Skip Button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
        <button 
          onClick={handleSkip}
          className="px-8 py-3 bg-black/70 hover:bg-accent hover:text-dark-900 text-white border border-white/20 hover:border-accent transition-all duration-300 rounded-full font-display text-xs tracking-[0.25em] uppercase font-bold flex items-center gap-3 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.8)] group cursor-pointer"
        >
          <span>Skip Intro</span>
          <span className="group-hover:translate-y-1 transition-transform duration-300 text-accent group-hover:text-dark-900">↓</span>
        </button>
      </div>

    </section>
  );
};

export default Hero;
