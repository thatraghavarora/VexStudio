import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const finePointerQuery = window.matchMedia('(pointer: fine)');

    const syncCursorMode = () => {
      const enabled = finePointerQuery.matches;
      setIsEnabled(enabled);
      document.body.classList.toggle('custom-cursor-active', enabled);
    };

    syncCursorMode();
    finePointerQuery.addEventListener('change', syncCursorMode);

    return () => {
      finePointerQuery.removeEventListener('change', syncCursorMode);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return undefined;

    document.body.classList.add('custom-cursor-active');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let reqId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorRef.current.style.opacity = '1';
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.25;
      ringY += (mouseY - ringY) * 0.25;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        ringRef.current.style.opacity = '1';
      }

      reqId = requestAnimationFrame(animateRing);
    };

    reqId = requestAnimationFrame(animateRing);

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2147483647 }}>
      {/* Sci-Fi HUD Target Reticle */}
      <div 
        ref={ringRef} 
        className="absolute top-0 left-0 pointer-events-none will-change-transform opacity-0 transition-opacity duration-300"
        style={{ transform: 'translate3d(-500px, -500px, 0)' }}
      >
        <div 
          className={`absolute rounded-full border-[1.5px] transition-all duration-300 ease-out flex items-center justify-center ${
            isHovered 
              ? 'w-24 h-24 -top-12 -left-12 border-accent bg-accent/20 shadow-[0_0_40px_rgba(255,69,0,0.9)] rotate-45' 
              : isClicked
              ? 'w-12 h-12 -top-6 -left-6 border-accent bg-accent/40 shadow-[0_0_35px_rgba(255,69,0,1)] scale-90'
              : 'w-16 h-16 -top-8 -left-8 border-accent/80 bg-accent/10 shadow-[0_0_25px_rgba(255,69,0,0.6)]'
          }`}
        >
          {/* Inner Dashed Targeting Ring */}
          <div className="absolute inset-2 border border-accent/40 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>

          {/* 4 Crisp Crosshair Ticks */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-accent shadow-[0_0_8px_#FF4500]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-accent shadow-[0_0_8px_#FF4500]"></div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-0.5 bg-accent shadow-[0_0_8px_#FF4500]"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-0.5 bg-accent shadow-[0_0_8px_#FF4500]"></div>

          {/* Central Target Lock Indicator */}
          <div className={`absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff] transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
      </div>

      {/* Sukuna Cursed Fire Arrowhead */}
      <div 
        ref={cursorRef} 
        className="absolute top-0 left-0 pointer-events-none will-change-transform opacity-0 transition-opacity duration-300"
        style={{ transform: 'translate3d(-500px, -500px, 0)' }}
      >
        <div className={`relative -top-1 -left-1 transition-transform duration-150 ${isHovered ? 'scale-90 rotate-12' : isClicked ? 'scale-110 -rotate-12' : 'scale-100'}`}>
          <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_12px_#FF4500]">
            {/* Outer Cursed Fire Glow */}
            <path d="M0 0 L26 8 L15 15 L8 26 Z" fill="url(#sukunaFire)" className="animate-pulse" />
            {/* Obsidian/Fiery Blade Core */}
            <path d="M1 1 L24 8 L13 13 L8 24 Z" fill="#050505" stroke="#FF4500" strokeWidth="1.5" />
            <path d="M2 2 L19 7 L11 11 L7 19 Z" fill="#FF4500" />
            <defs>
              <linearGradient id="sukunaFire" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF4500" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#8B0000" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
