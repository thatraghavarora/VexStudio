import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });
  const footerRef = useRef(null);
  const isHomePage = window.location.pathname === '/';
  const contactEmail = 'vexstd.org@gmail.com';
  const getSectionHref = (link) => {
    if (link === 'Internship') return '/internship';
    const hash = `#${link.toLowerCase().replace(' ', '-')}`;
    return isHomePage ? hash : `/${hash}`;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".footer-anim", 
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%"
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "3adc978e-80fb-4332-b199-fd9c3805b112",
          subject: `Vex Studios Contact Form Submission from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback to mailto if the form service is rate limited.
        window.location.href = `mailto:${contactEmail}?subject=Vex Studios Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent("From: " + formData.email + "\n\nMessage:\n" + formData.message)}`;
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      // Fallback to mailto on network error
      window.location.href = `mailto:${contactEmail}?subject=Vex Studios Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent("From: " + formData.email + "\n\nMessage:\n" + formData.message)}`;
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <footer id="contact-us" ref={footerRef} className="w-full bg-dark-900 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
          
          {/* Left Form Section */}
          <div className="footer-anim flex-1 w-full max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-widest text-white mb-12">
              GET IN TOUCH <br/> WITH <span className="text-accent">US</span>
            </h2>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex mb-10 text-accent hover:text-white font-display text-xs uppercase tracking-[0.35em] transition-colors"
            >
              {contactEmail}
            </a>
            
            {status.submitted ? (
              <div className="p-8 bg-gradient-to-br from-dark-800 to-dark-900 border border-accent/40 rounded-xl text-white flex flex-col gap-4 shadow-[0_0_30px_rgba(255,69,0,0.15)] animate-fade-in">
                <div className="flex items-center gap-3 text-accent font-display font-bold uppercase tracking-widest text-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <span>Intel Transmitted Successfully!</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed font-sans">
                  Your secure message has been routed to Vex Studios core servers. Our team will review your inquiry and respond via commlink shortly.
                </p>
                <button 
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })} 
                  className="self-start mt-2 text-xs font-display uppercase tracking-widest text-accent hover:underline flex items-center gap-2"
                >
                  <span>Send another message</span>
                  <span>→</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    required
                    placeholder="NAME // ALIAS"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600 font-display tracking-widest uppercase text-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={status.submitting}
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    required
                    placeholder="EMAIL // COMMLINK"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600 font-display tracking-widest uppercase text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={status.submitting}
                  />
                </div>
                <div className="relative group mb-4">
                  <textarea 
                    required
                    rows={4}
                    placeholder="MESSAGE // DECRYPTED INTEL"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600 font-display tracking-widest uppercase text-sm resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    disabled={status.submitting}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status.submitting}
                  className="self-start relative overflow-hidden bg-white text-black font-display font-bold uppercase tracking-widest px-8 md:px-10 py-4 clip-diagonal clip-diagonal-hover transition-all duration-300 group disabled:opacity-50 disabled:cursor-wait w-full sm:w-auto text-center"
                >
                  <span className="relative z-10">{status.submitting ? "TRANSMITTING..." : "INITIATE UPLOAD"}</span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                </button>
              </form>
            )}
          </div>

          {/* Right Links & Info */}
          <div className="footer-anim flex-1 flex flex-col md:flex-row gap-12 lg:gap-24 lg:justify-end">
            <div className="flex flex-col gap-4">
              <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">NAVIGATE</h4>
              {['Home', 'Services', 'Portfolio', 'About', 'Team', 'Community', 'Internship'].map(link => (
                <a key={link} href={getSectionHref(link)} className="text-gray-400 hover:text-white uppercase tracking-wider text-sm transition-colors">
                  {link}
                </a>
              ))}
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">NETWORK</h4>
              <a href="https://www.linkedin.com/company/officialvexstudio/about/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white uppercase tracking-wider text-sm transition-colors flex items-center gap-2 group">
                <span className="text-accent group-hover:translate-x-1 transition-transform">↗</span> LinkedIn
              </a>
              <a href="https://www.instagram.com/vexstudio.xyz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white uppercase tracking-wider text-sm transition-colors flex items-center gap-2 group">
                <span className="text-accent group-hover:translate-x-1 transition-transform">↗</span> Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white uppercase tracking-wider text-sm transition-colors flex items-center gap-2 group">
                <span className="text-accent group-hover:translate-x-1 transition-transform">↗</span> YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-medium uppercase tracking-widest text-gray-500 gap-4">
          <p>© 2026 VEX STUDIOS. ALL PROTOCOLS OBSERVED.</p>
          <div className="flex gap-8">
            <a href="/privacy" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="/terms" className="hover:text-white transition-colors">TERMS</a>
          </div>
        </div>
      </div>

      {/* Massive Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none translate-x-[20%] translate-y-[20%] opacity-5 z-0">
        <h1 className="text-[25vw] font-display font-black leading-none text-white whitespace-nowrap">
          VEX
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
