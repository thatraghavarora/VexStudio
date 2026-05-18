import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/NaughtyShell/Navbar';
import Hero from './components/NaughtyShell/Hero';
import Services from './components/NaughtyShell/Services';
import TechMarquee from './components/NaughtyShell/TechMarquee';
import ProjectCarousel from './components/NaughtyShell/ProjectCarousel';
import Portfolio from './components/NaughtyShell/Portfolio';
import AboutUs from './components/NaughtyShell/AboutUs';
import Team from './components/NaughtyShell/Team';
import ReviewsNews from './components/NaughtyShell/ReviewsNews';
import Footer from './components/NaughtyShell/Footer';
import CustomCursor from './components/NaughtyShell/CustomCursor';
import LegalPage from './components/NaughtyShell/LegalPage';
import InternshipPage from './components/NaughtyShell/InternshipPage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const path = window.location.pathname.replace(/\/$/, '');
  const legalPage = path === '/privacy' ? 'privacy' : path === '/terms' ? 'terms' : null;
  const isInternshipPage = path === '/internship';

  useEffect(() => {
    // Noise overlay setup is handled in CSS, GSAP global defaults can go here
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white bg-dark-900 overflow-x-hidden font-sans">
      <CustomCursor />
      <div className="noise-overlay"></div>
      
      <Navbar />

      {isInternshipPage ? (
        <InternshipPage />
      ) : legalPage ? (
        <LegalPage type={legalPage} />
      ) : (
        <main>
          <Hero />
          <Services />
          <TechMarquee />
          <ProjectCarousel />
          <Portfolio />
          <AboutUs />
          <Team />
          <ReviewsNews />
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
