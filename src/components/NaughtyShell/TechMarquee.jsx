import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  "UNREAL ENGINE 5",
  "BLENDER",
  "MIXAMO",
  "BLUEPRINTS",
  "C++",
  "NIAGARA VFX",
  "SUBSTANCE PAINTER",
  "QUIXEL MEGASCANS",
  // duplicate for seamless scrolling
  "UNREAL ENGINE 5",
  "BLENDER",
  "MIXAMO",
  "BLUEPRINTS",
  "C++",
  "NIAGARA VFX",
  "SUBSTANCE PAINTER",
  "QUIXEL MEGASCANS"
];

const TechMarquee = () => {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite Marquee Animation
      const marquee = marqueeRef.current;
      
      gsap.to(marquee, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      // Scroll reveal
      gsap.fromTo(sectionRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-12 bg-accent/5 border-y border-accent/20 overflow-hidden relative">
      {/* Gradient Fades */}
      <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none"></div>

      <div ref={marqueeRef} className="flex whitespace-nowrap items-center w-max">
        {techStack.map((tech, index) => (
          <div 
            key={index} 
            className="px-6 md:px-12 flex items-center gap-6 md:gap-12 group cursor-default"
          >
            <span className="text-2xl sm:text-3xl md:text-5xl font-display font-bold uppercase tracking-widest text-transparent transition-all duration-300" 
                  style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.WebkitTextStroke = '0px';
                    e.currentTarget.style.color = 'var(--color-accent)';
                    e.currentTarget.style.textShadow = '0 0 20px var(--color-accent-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.WebkitTextStroke = '1px rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.color = 'transparent';
                    e.currentTarget.style.textShadow = 'none';
                  }}
            >
              {tech}
            </span>
            {/* Dot separator */}
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/20 rounded-full group-hover:bg-accent transition-colors duration-300"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechMarquee;
