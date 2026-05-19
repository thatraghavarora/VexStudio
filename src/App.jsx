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
import FullTeamPage from './components/NaughtyShell/FullTeamPage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const redirectedRoute = new URLSearchParams(window.location.search).get('route');
  const rawPath = redirectedRoute ? decodeURIComponent(redirectedRoute).split(/[?#]/)[0] : window.location.pathname;
  const path = rawPath.replace(/\/$/, '');
  const routeKey = path.split('/').filter(Boolean).pop();
  const isFullTeamPage = path === '/team' || routeKey === 'team';

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

      {isFullTeamPage ? (
        <FullTeamPage />
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
