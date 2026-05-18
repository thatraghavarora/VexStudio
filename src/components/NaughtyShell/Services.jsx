import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 'ue5',
    title: 'Unreal Engine 5',
    description: 'We leverage the full power of UE5 to build immersive worlds. Specializing in advanced Blueprint visual scripting and intricate AI integration, including custom tension and anxiety systems that adapt to player behavior.',
    image: '/images/hollow-veil-bp-1.png'
  },
  {
    id: '3d',
    title: '3D Modeling',
    description: 'Crafting high-fidelity, optimized assets and breathtaking environments using Blender. From stylized props to hyper-realistic character models, we ensure every asset fits your aesthetic perfectly.',
    image: '/images/hollow-veil-env-1.png'
  },
  {
    id: 'mechanics',
    title: 'Game Mechanics',
    description: 'Engineering responsive, satisfying gameplay loops. We focus on complex locomotion, tight combat systems, and unique interactions that make your game feel incredibly polished and fun to play.',
    image: '/images/3d-asset-2.png'
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal animation
      gsap.fromTo('.services-header', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#services',
            start: 'top 80%',
          }
        }
      );

      // Grid content reveal
      gsap.fromTo('.services-content-anim',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Content swap animation
    const tl = gsap.timeline();
    
    tl.to(contentRef.current, { opacity: 0, y: 10, duration: 0.2 })
      .to(imageRef.current, { opacity: 0, scale: 0.95, duration: 0.2 }, '<')
      .set(contentRef.current, { clearProps: 'all' })
      .set(imageRef.current, { clearProps: 'all' })
      .fromTo(contentRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' })
      .fromTo(imageRef.current, { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, '<');
      
  }, [activeTab]);

  return (
    <section id="services" className="w-full py-24 md:py-32 bg-dark-800 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="services-header mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-transparent" style={{ WebkitTextStroke: '1px var(--color-accent)' }}>
            OUR <span className="text-white" style={{ WebkitTextStroke: '0px' }}>SERVICES</span>
          </h2>
          
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar scrollbar-hide">
            {servicesData.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`whitespace-nowrap px-6 py-3 font-display uppercase tracking-wider text-sm transition-all duration-300 border-b-2 ${
                  activeTab === index 
                    ? 'border-accent text-accent bg-accent/10' 
                    : 'border-transparent text-gray-500 hover:text-white'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        <div className="services-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div ref={contentRef} className="services-content-anim flex flex-col gap-8 order-2 lg:order-1">
            <h3 className="text-3xl font-display font-bold text-white uppercase tracking-wide">
              {servicesData[activeTab].title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              {servicesData[activeTab].description}
            </p>
            
            <div className="mt-4">
              <a 
                href="#contact-us" 
                className="inline-block relative overflow-hidden bg-white text-black font-bold uppercase tracking-widest px-8 py-4 clip-diagonal clip-diagonal-hover transition-all duration-300 group"
              >
                <span className="relative z-10">Get A Quote</span>
                {/* Diagonal hover sweep effect */}
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
              </a>
            </div>
          </div>

          {/* Visual Content */}
          <div className="services-content-anim order-1 lg:order-2 w-full aspect-video lg:aspect-square max-h-[500px] relative">
            <div className="absolute inset-0 bg-accent/20 blur-3xl -z-10 rounded-full transform scale-75"></div>
            <div ref={imageRef} className="w-full h-full border border-white/10 bg-dark-900 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
              <img 
                src={servicesData[activeTab].image} 
                alt={servicesData[activeTab].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
