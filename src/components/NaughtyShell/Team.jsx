import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const members = [
  {
    initials: 'RC',
    role: 'Founder',
    name: 'Rishabh Chobey',
    title: 'Visionary & Creative Director · Unreal Engine Indie Developer',
    accent: true,
    image: '/founders images/rishabh image.png',
    linkedin: 'https://www.linkedin.com/in/rishabh-chobey-48899137b',
    instagram: 'https://www.instagram.com/happy_guy_2006/',
    portfolio: 'https://portfolio.rishabhchobey95.workers.dev/',
  },
  {
    initials: 'SK',
    role: 'Co-Founder',
    name: 'Sahil Khan',
    title: 'Systems Designer · Sound & SFX · Artist · Story Narrator',
    accent: false,
    image: '/founders images/sahil.png',
    imageClass: 'object-cover object-[center_18%]',
    linkedin: 'https://www.linkedin.com/in/sahil-khan-82277637a/',
    instagram: 'https://www.instagram.com/_sahil_.zenin/?hl=en',
  },
  {
    initials: 'RA',
    role: 'Co-Founder',
    name: 'Raghav Arora',
    title: 'Marketing & Product Manager',
    accent: false,
    image: '/founders images/raghav image.png',
    linkedin: 'https://www.linkedin.com/in/thatraghavarora?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    instagram: 'https://www.instagram.com/thatraghavarora?igsh=MW1yNmVvajJ0ejJoOA==',
  },
];

export const hiringRoles = [
  {
    title: 'Social Media Manager',
    lead: 'Raghav Arora',
    detail: 'Hiring: we are looking for someone who can plan posts, manage community updates, and shape the public voice of Vex Studios.'
  },
  {
    title: 'Game Script Writer',
    lead: 'Sahil Khan',
    detail: 'Hiring: we are looking for a writer who can build dark stories, character moments, dialogue, objectives, and horror narrative beats.'
  },
  {
    title: 'Game UI / UX Designer',
    lead: 'Sahil Khan',
    detail: 'Hiring: we are looking for a designer who can create clean game interfaces, menus, HUD flows, and player-friendly interaction systems.'
  },
  {
    title: 'Sound / Effect Designer',
    lead: 'Sahil Khan',
    detail: 'Hiring: we are looking for a sound-focused creator who can design atmospheric audio, SFX, ambience, and tension-building moments.'
  },
  {
    title: 'Web Developer',
    lead: 'Raghav Arora',
    detail: 'Hiring: we are looking for a web developer who can build sharp, responsive, cinematic web experiences for Vex Studios.'
  },
  {
    title: 'Game Developer',
    lead: 'Raghav Arora',
    detail: 'Hiring: we are looking for a developer who can work on Unreal Engine gameplay, mechanics, Blueprints, prototyping, and systems.'
  },
];

export const departmentLeads = [
  {
    name: 'Raghav Arora',
    label: 'Growth / Web / Development',
  },
  {
    name: 'Sahil Khan',
    label: 'Narrative / UI / Sound',
  },
];

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.team-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.team-card',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="w-full py-32 bg-dark-900 relative overflow-hidden border-t border-white/5"
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04] z-0 overflow-hidden">
        <h2 className="text-[18vw] font-display font-black text-white leading-none tracking-wider uppercase whitespace-nowrap">
          TEAM
        </h2>
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Heading */}
        <div className="team-heading text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-widest text-white">
            Meet The{' '}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: '1px rgba(255,69,0,0.9)' }}
            >
              Team
            </span>
          </h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest mt-4 font-display">
            Three minds. One studio. Infinite worlds.
          </p>
        </div>

        {/* Cards — Hierarchical Pyramid */}
        <div className="team-grid flex flex-col items-center gap-0">

          {/* Row 1 — Founder */}
          <div className="flex justify-center w-full mb-0">
            {members.filter(m => m.accent).map((m) => (
              <div
                key={m.name}
                className="team-card group relative rounded-2xl overflow-hidden p-6 sm:p-8 md:p-10 flex flex-col w-full max-w-sm min-h-[420px] transition-all duration-500 cursor-default border border-accent/40 bg-gradient-to-br from-dark-800 to-dark-900 hover:border-accent hover:shadow-[0_0_60px_rgba(255,69,0,0.3)]"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl bg-accent/15 group-hover:bg-accent/25 transition-all duration-500 pointer-events-none" />
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M28 0 L28 28 L0 28" stroke="currentColor" strokeWidth="1.5" className="text-accent" /></svg>
                </div>
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full border-2 border-accent/60 overflow-hidden flex items-center justify-center mb-5 group-hover:shadow-[0_0_28px_rgba(255,69,0,0.5)] transition-all duration-300 bg-accent/10">
                    {m.image
                      ? <img src={m.image} alt={m.name} className={`w-full h-full ${m.imageClass || 'object-cover object-top'} group-hover:scale-105 transition-transform duration-500`} />
                      : <span className="font-display font-black text-2xl text-accent">{m.initials}</span>
                    }
                  </div>
                  <span className="font-display text-[10px] tracking-[0.5em] uppercase font-bold text-accent">{m.role}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-wider text-white leading-tight mb-3">{m.name}</h3>
                <div className="w-10 h-[2px] bg-accent mb-4 group-hover:w-16 transition-all duration-300" />
                <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest font-display mb-6">{m.title}</p>

                {/* Social Links */}
                {(m.linkedin || m.instagram || m.portfolio) && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-accent/20 bg-accent/5 hover:border-accent/60 hover:bg-accent/15 transition-all duration-300 group/link"
                        title="LinkedIn">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-accent/60 group-hover/link:text-accent transition-colors">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="text-[10px] uppercase tracking-widest font-display text-accent/60 group-hover/link:text-accent transition-colors">LinkedIn</span>
                      </a>
                    )}
                    {m.instagram && (
                      <a href={m.instagram} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-accent/20 bg-accent/5 hover:border-accent/60 hover:bg-accent/15 transition-all duration-300 group/link"
                        title="Instagram">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-accent/60 group-hover/link:text-accent transition-colors">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                        <span className="text-[10px] uppercase tracking-widest font-display text-accent/60 group-hover/link:text-accent transition-colors">Instagram</span>
                      </a>
                    )}
                    {m.portfolio && (
                      <a href={m.portfolio} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-accent/20 bg-accent/5 hover:border-accent/60 hover:bg-accent/15 transition-all duration-300 group/link"
                        title="Portfolio">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-accent/60 group-hover/link:text-accent transition-colors">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        <span className="text-[10px] uppercase tracking-widest font-display text-accent/60 group-hover/link:text-accent transition-colors">Portfolio</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Connector — Desktop Fork */}
          <div className="hidden md:flex flex-col items-center w-full pointer-events-none select-none">
            {/* Vertical stem from founder */}
            <div className="w-[1px] h-10 bg-accent/30" />
            {/* Horizontal bar */}
            <div className="relative flex items-center justify-center w-full max-w-2xl">
              <div className="absolute left-1/4 right-1/4 h-[1px] bg-accent/30" />
              {/* Left node */}
              <div className="absolute left-1/4 -translate-x-1/2 w-2 h-2 rounded-full bg-accent/50 border border-accent" />
              {/* Right node */}
              <div className="absolute right-1/4 translate-x-1/2 w-2 h-2 rounded-full bg-accent/50 border border-accent" />
            </div>
            {/* Two vertical drops */}
            <div className="flex w-full max-w-2xl justify-between">
              <div className="w-[1px] h-8 bg-accent/30 ml-[calc(25%-0.5px)]" />
              <div className="w-[1px] h-8 bg-accent/30 mr-[calc(25%-0.5px)]" />
            </div>
          </div>

          {/* Connector — Mobile Single Vertical Stem */}
          <div className="flex md:hidden flex-col items-center w-full pointer-events-none select-none my-2">
            <div className="w-[1px] h-8 bg-accent/30" />
            <div className="w-2 h-2 rounded-full bg-accent/50 border border-accent my-1" />
            <div className="w-[1px] h-8 bg-accent/30" />
          </div>

          {/* Row 2 — Co-Founders */}
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 w-full max-w-4xl">
            {members
              .filter(m => !m.accent)
              .sort((a, b) => (a.name === 'Raghav Arora' ? -1 : b.name === 'Raghav Arora' ? 1 : 0))
              .map((m, idx) => (
              <React.Fragment key={m.name}>
                {idx > 0 && (
                  <div className="flex md:hidden flex-col items-center w-full pointer-events-none select-none my-1">
                    <div className="w-[1px] h-8 bg-white/20" />
                  </div>
                )}
                <div
                  className="team-card group relative rounded-2xl overflow-hidden p-6 sm:p-8 md:p-10 flex flex-col w-full max-w-sm min-h-[345px] transition-all duration-500 cursor-default border border-white/10 bg-gradient-to-br from-dark-800/60 to-dark-900 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(255,69,0,0.15)]"
                >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-accent/60 transition-all duration-500" />
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl bg-white/4 group-hover:bg-accent/12 transition-all duration-500 pointer-events-none" />
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-25 transition-opacity duration-300">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M28 0 L28 28 L0 28" stroke="currentColor" strokeWidth="1.5" className="text-accent" /></svg>
                </div>
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full border border-white/20 overflow-hidden flex items-center justify-center mb-5 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(255,69,0,0.2)] transition-all duration-300 bg-white/8">
                    {m.image
                      ? <img src={m.image} alt={m.name} className={`w-full h-full ${m.imageClass || 'object-cover object-top'} group-hover:scale-105 transition-transform duration-500`} />
                      : <span className="font-display font-black text-2xl text-white">{m.initials}</span>
                    }
                  </div>
                  <span className="font-display text-[10px] tracking-[0.5em] uppercase font-bold text-gray-500 group-hover:text-accent transition-colors duration-300">{m.role}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-wider text-white leading-tight mb-3">{m.name}</h3>
                <div className="w-10 h-[2px] bg-white/20 mb-4 group-hover:bg-accent/70 group-hover:w-16 transition-all duration-300" />
                <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest font-display mb-6">{m.title}</p>

                {/* Social Links */}
                {(m.linkedin || m.instagram) && (
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group/link"
                        title="LinkedIn"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover/link:text-accent transition-colors">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="text-[10px] uppercase tracking-widest font-display text-gray-400 group-hover/link:text-accent transition-colors">LinkedIn</span>
                      </a>
                    )}
                    {m.instagram && (
                      <a
                        href={m.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group/link"
                        title="Instagram"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover/link:text-accent transition-colors">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                        <span className="text-[10px] uppercase tracking-widest font-display text-gray-400 group-hover/link:text-accent transition-colors">Instagram</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Be a Part of the Team CTA */}
        <div className="mt-20 relative">
          {/* Glow behind */}
          <div className="absolute inset-0 bg-accent/5 rounded-2xl blur-2xl pointer-events-none" />

          <div className="relative border border-accent/20 bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-md rounded-2xl px-8 md:px-16 py-12 flex flex-col items-center text-center gap-5 overflow-hidden">
            {/* Top line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {/* Corner bracket */}
            <div className="absolute top-4 left-4 opacity-20">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M0 20 L0 0 L20 0" stroke="#FF4500" strokeWidth="1.5"/></svg>
            </div>
            <div className="absolute bottom-4 right-4 opacity-20">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M20 0 L20 20 L0 20" stroke="#FF4500" strokeWidth="1.5"/></svg>
            </div>

            {/* Left text */}
            <div className="flex flex-col gap-3 items-center">
              <span className="text-accent font-display text-[10px] tracking-[0.5em] uppercase font-bold">We're Growing</span>
              <h3 className="text-2xl md:text-4xl font-display font-black uppercase tracking-widest text-white leading-tight">
                Be a Part of <br className="hidden md:block"/>
                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,69,0,0.9)' }}>The Team</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl font-sans">
                Passionate about horror games, world-building, or dark narratives? We're always looking for driven creators to join our underground studio.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/team"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-white/5 text-white font-display font-black text-sm uppercase tracking-widest rounded-xl hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
            >
              View Full Team
            </a>
          </div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
