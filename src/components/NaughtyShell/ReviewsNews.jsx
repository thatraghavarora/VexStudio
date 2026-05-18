import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReviewsNews = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".community-card", 
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="community" ref={sectionRef} className="w-full py-24 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* WhatsApp Community Banner Section */}
        <div className="community-card flex flex-col">
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-white mb-10 text-center md:text-left">
            COMMUNITY <span className="text-emerald-500 text-sm ml-2">(WHATSAPP NETWORK)</span>
          </h2>
          
          <div className="relative p-6 sm:p-8 md:p-12 bg-gradient-to-br from-dark-800 to-dark-900 border border-emerald-500/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.15)] group hover:border-emerald-500/60 transition-all duration-500 flex flex-col justify-between h-full min-h-[350px]">
            {/* Background Glow */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 justify-center md:justify-start truncate">
                <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs truncate">ONLINE // 95+ GAME DEVS</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-6 leading-tight text-center md:text-left">
                JOIN THE VEX STUDIOS DEVELOPER NETWORK
              </h3>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 text-center md:text-left max-w-2xl">
                Connect with 95+ passionate game developers, 3D artists, and Unreal Engine specialists on WhatsApp. Discuss mechanics, share WIPs, get instant feedback, and collaborate on cutting-edge projects.
              </p>
            </div>

            <div className="flex justify-center md:justify-start z-10 w-full">
              <a 
                href="https://chat.whatsapp.com/GHfsIF616UU2B0cPU2IU7W" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-emerald-500 text-black font-bold uppercase tracking-widest px-6 md:px-10 py-4 md:py-5 rounded font-display text-xs md:text-base shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_45px_rgba(16,185,129,0.9)] hover:bg-emerald-400 transition-all duration-300 group/btn flex items-center justify-center gap-3 w-full md:w-auto text-center"
              >
                <span>JOIN COMMUNITY ON WHATSAPP</span>
                <svg className="w-5 h-5 md:w-6 md:h-6 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.277.042-.615.08-1.953-.472-1.611-.664-2.656-2.308-2.736-2.415-.08-.107-.652-.868-.652-1.657 0-.789.414-1.18.563-1.338.149-.158.324-.198.432-.198.108 0 .216.002.307.006.104.005.244-.04.372.271.162.395.553 1.349.602 1.448.05.099.083.215.017.347-.066.132-.100.215-.199.331-.099.116-.208.257-.298.347-.100.100-.203.209-.091.403.112.194.500.827 1.071 1.336.736.657 1.357.861 1.556.96.199.099.315.083.432-.05.116-.132.500-.583.634-.783.132-.199.265-.166.448-.099.182.066 1.152.543 1.351.642.199.099.332.149.381.232.05.083.05.48-.094.885z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Discord Community Section */}
        <div className="community-card flex flex-col">
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-white mb-10 text-center md:text-left truncate">
            COMMUNITY <span className="text-indigo-400 text-sm ml-2">(DISCORD SERVER)</span>
          </h2>
          
          <div className="relative p-6 sm:p-8 md:p-12 bg-gradient-to-br from-dark-800 to-dark-900 border border-indigo-500/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.15)] group hover:border-indigo-500/60 transition-all duration-500 flex flex-col justify-between h-full min-h-[350px]">
            {/* Background Glow */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs">STATUS // IN DEVELOPMENT</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-6 leading-tight text-center md:text-left">
                VEX STUDIOS OFFICIAL DISCORD
              </h3>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 text-center md:text-left max-w-2xl">
                Get ready for our public Discord launch! Exclusive channels for Unreal Engine blueprints, 3D asset drops, live Q&As with lead developers, and community game jams.
              </p>
            </div>

            <div className="flex justify-center md:justify-start z-10 w-full">
              <div className="relative overflow-hidden border border-indigo-500/50 bg-indigo-500/10 text-indigo-300 font-bold uppercase tracking-widest px-6 md:px-10 py-4 md:py-5 rounded font-display text-xs md:text-base cursor-not-allowed flex items-center justify-center gap-3 w-full md:w-auto">
                <span>COMING SOON</span>
                <svg className="w-5 h-5 md:w-6 md:h-6 fill-current text-indigo-400 shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.37V7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReviewsNews;
