import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHomePage = window.location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Services', 'Projects', 'Portfolio', 'About', 'Team', 'Community', 'Contact Us'];
  const getLinkHref = (link) => {
    const hash = `#${link.toLowerCase().replace(' ', '-')}`;
    return isHomePage ? hash : `/${hash}`;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glassmorphism py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-display font-bold tracking-widest text-white flex items-center gap-2">
          <span className="text-accent">{'//'}</span> VEX STUDIOS
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          {links.map((link) => (
            <a 
              key={link} 
              href={getLinkHref(link)}
              className="text-xs xl:text-sm font-medium tracking-wider text-gray-300 hover:text-accent transition-colors uppercase relative group"
            >
              {link}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-dark-900/95 backdrop-blur-xl border-b border-white/10 px-6 flex flex-col gap-4 shadow-2xl transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[500px] py-6 opacity-100 pointer-events-auto' : 'max-h-0 py-0 opacity-0 pointer-events-none'}`}>
        {links.map((link) => (
          <a 
            key={link} 
            href={getLinkHref(link)}
            className="text-base font-medium tracking-widest text-gray-300 hover:text-accent transition-colors uppercase py-1"
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
