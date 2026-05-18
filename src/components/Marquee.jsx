// ReactBits-inspired Marquee component
import { useRef, useEffect, useState } from 'react';
import './Marquee.css';

const Marquee = ({
  children,
  speed = 40,
  direction = 'left',
  pauseOnHover = true,
  className = '',
  gap = 24
}) => {
  const trackRef = useRef(null);
  const [animDuration, setAnimDuration] = useState(speed);

  useEffect(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth / 2;
      const dur = trackWidth / (speed * 1.5);
      setAnimDuration(dur);
    }
  }, [speed, children]);

  const animStyle = {
    animationDuration: `${animDuration}s`,
    animationDirection: direction === 'right' ? 'reverse' : 'normal',
    gap: `${gap}px`
  };

  return (
    <div className={`marquee-container ${pauseOnHover ? 'marquee-pause-hover' : ''} ${className}`}>
      <div className="marquee-track" ref={trackRef} style={animStyle}>
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;
