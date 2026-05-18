import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef(null);
  const propRef = useRef(null);

  useEffect(() => {
    // Reveal text
    gsap.fromTo('.about-text-reveal',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      }
    );

    // Prop floating animation
    gsap.to(propRef.current, {
      y: 20,
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    });

    // Background watermark parallax
    gsap.to('.bg-watermark', {
      y: 80,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

  }, []);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="w-full py-32 bg-dark-800 relative overflow-hidden flex items-center min-h-[80vh] border-y border-white/5"
    >
      {/* Massive Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none opacity-5 md:opacity-10 z-0">
        <h2 className="bg-watermark text-[16vw] font-display font-black text-white leading-none tracking-wider uppercase">
          POWERHOUSE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center relative z-10">
        
        {/* Central 3D Prop Render / Showcase Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-16 md:mb-0 px-4">
          <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[350px] md:max-w-[500px]">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-accent/30 rounded-3xl blur-[80px] -z-10 animate-pulse"></div>
            
            <div 
              ref={propRef}
              className="w-full h-full rounded-2xl overflow-hidden border border-accent/30 shadow-[0_0_50px_rgba(255,69,0,0.25)] bg-dark-900/80 backdrop-blur-sm relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none"></div>
              <img 
                src="/images/hollow-veil-env-1.png" 
                alt="Vex Studios High-Fidelity Atmosphere" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 max-w-[90%] truncate">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse shrink-0"></span>
                <span className="text-white uppercase font-display text-[10px] md:text-xs tracking-widest font-bold truncate">UNREAL ENGINE 5 CAPTURE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Block on right */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:pl-12">
          <div className="about-text-reveal">
            <h3 className="text-xl font-display uppercase tracking-[0.2em] text-accent font-bold mb-4">Who We Are</h3>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight uppercase">
              Independent Development <br/> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Powerhouse</span>
            </h2>
          </div>
          
          <p className="about-text-reveal text-gray-400 text-lg leading-relaxed mt-4">
            Based in the vibrant city of Jaipur, Vex Studios is an elite game development studio specializing in crafting immersive, high-fidelity experiences.
          </p>

          <p className="about-text-reveal text-gray-400 text-lg leading-relaxed">
            We merge cutting-edge technology with dark, atmospheric design. Focused on psychological horror and deeply systemic RPGs, our team utilizes state-of-the-art agentic AI workflows to rapidly prototype, iterate, and build worlds that feel alive and terrifyingly responsive.
          </p>

          <div className="about-text-reveal mt-8">
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-dark-900 border border-white/10 text-sm uppercase tracking-widest text-gray-300">Unreal Engine 5</span>
              <span className="px-4 py-2 bg-dark-900 border border-white/10 text-sm uppercase tracking-widest text-gray-300">Agentic AI</span>
              <span className="px-4 py-2 bg-dark-900 border border-white/10 text-sm uppercase tracking-widest text-gray-300">Jaipur Based</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;

