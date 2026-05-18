import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../../data/portfolioData';
import ProjectDetailsModal from './ProjectDetailsModal';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    id: 'hollow-veil',
    title: 'Hollow Veil: Ascension of the Lost',
    tag: 'Souls-like RPG',
    focus: 'Vikhand Astra mechanics',
    description: 'An action RPG with complex combat mechanics engineered from scratch — stamina-based attacking, dodging mechanics, and challenging enemy AI using Blueprints.',
    image: '/images/hollow-veil-env-3.png',
    video: '/videos/hollow-veil.mp4',
    gddLink: '/gdds/gdd-hollow-veil.html'
  },
  {
    id: 'the-good-son',
    title: 'The Good Son',
    tag: 'Psychological Horror',
    focus: 'PS1 Aesthetic & Anxiety Meter',
    description: 'A complete horror experience focusing on psychological tension with atmospheric lighting, narrative-driven events, and custom 3D assets modeled in Blender.',
    image: '/images/night-system.png',
    video: '/videos/good-son.mp4',
    gddLink: '/gdds/gdd-the-good-son.html'
  },
  {
    id: 'andhkaar',
    title: 'Andhakaar',
    tag: 'Horror Puzzle Game',
    badge: 'Under Development',
    focus: 'Atmosphere & Mechanics',
    description: 'A horror puzzle game featuring intricate puzzle mechanics, inventory systems, suspenseful level design, and immersive problem-solving gameplay.',
    image: '/images/andhkaar-splash-1.png', 
    video: '/videos/andhkaar.mp4',
    gddLink: '/gdds/gdd-andhkaar.html'
  },
  {
    id: 'teaser',
    teaserOnly: true,
    title: 'MORE PROJECTS COMING SOON',
    image: '/images/andhkaar-splash-2.png'
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.portfolio-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#portfolio',
            start: 'top 80%',
          }
        }
      );

      gsap.utils.toArray('.portfolio-banner').forEach((banner, i) => {
        gsap.fromTo(banner, 
          { opacity: 0, y: 60, scale: 0.96 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: banner,
              start: 'top 85%',
            }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" className="w-full py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="portfolio-header text-4xl md:text-5xl font-display font-bold uppercase tracking-widest text-white mb-12">
          OUR <span className="text-accent">PORTFOLIO</span>
        </h2>

        <div className="flex flex-col gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              onClick={() => item.teaserOnly ? null : setSelectedProject(portfolioData[item.id])}
              className={`portfolio-banner group relative w-full h-auto min-h-[280px] md:h-[350px] rounded-lg overflow-hidden border ${item.teaserOnly ? 'border-amber-500/30 hover:border-amber-500 cursor-default flex items-center justify-center py-12' : 'border-white/10 hover:border-accent cursor-pointer'} transition-colors duration-500`}
            >
              {/* Background Media with Parallax Zoom */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                {item.video ? (
                  <video 
                    src={item.video} 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-90"
                  />
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-full h-full object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110 ${item.teaserOnly ? 'opacity-30 blur-sm' : 'opacity-70 group-hover:opacity-90'}`}
                  />
                )}
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 ${item.teaserOnly ? 'bg-dark-900/80 group-hover:bg-dark-900/70' : 'bg-gradient-to-r from-dark-900 via-dark-900/85 to-transparent'} transition-colors duration-500`}></div>
              </div>

              {/* Content */}
              {item.teaserOnly ? (
                <div className="relative z-10 text-center px-6">
                  <span className="inline-block px-4 py-1.5 border border-amber-500/50 text-amber-400 text-xs font-bold uppercase tracking-[0.3em] bg-amber-500/10 animate-pulse mb-4 rounded">
                    VEX STUDIOS // PIPELINE
                  </span>
                  <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-wider text-white text-glow">
                    MORE PROJECTS COMING SOON
                  </h3>
                </div>
              ) : (
                <div className="relative z-10 w-full h-full flex flex-col justify-center p-6 sm:p-8 md:p-12">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="inline-block px-3 py-1 border border-accent text-accent text-xs font-bold uppercase tracking-wider bg-accent/10">
                      {item.tag}
                    </span>
                    {item.badge && (
                      <span className="inline-block px-3 py-1 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest bg-white/5">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 max-w-2xl">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-medium tracking-wide mb-3">
                    <span className="text-white/60 uppercase text-xs tracking-widest">Focus:</span> {item.focus}
                  </p>
                  <p className="text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed">
                    {item.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-wrap gap-4 md:absolute md:bottom-8 md:right-8 md:opacity-0 md:transform md:translate-y-4 md:transition-all md:duration-500 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                    <button 
                      className="px-6 py-2.5 bg-dark-900/80 md:bg-transparent border border-white/20 md:border-white/20 text-white font-medium text-xs md:text-sm tracking-wider uppercase hover:border-accent hover:text-accent transition-colors rounded" 
                      onClick={(e) => { e.stopPropagation(); setSelectedProject(portfolioData[item.id]); }}
                    >
                      Details
                    </button>
                    {item.gddLink ? (
                      <a 
                        href={item.gddLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-6 py-2.5 bg-accent text-dark-900 font-bold text-xs md:text-sm tracking-wider uppercase hover:bg-white transition-colors flex items-center gap-2 rounded" 
                        onClick={(e) => e.stopPropagation()}
                      >
                        View GDD
                      </a>
                    ) : (
                      <span className="px-6 py-2.5 border border-white/20 text-white/50 text-xs md:text-sm tracking-wider uppercase bg-white/5 cursor-not-allowed rounded">
                        GDD In Dev
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailsModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Portfolio;
