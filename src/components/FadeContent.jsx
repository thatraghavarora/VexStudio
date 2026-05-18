// ReactBits-inspired FadeContent component using Intersection Observer
import { useRef, useEffect, useState } from 'react';

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = '',
  style,
  direction = 'up',
  distance = 40,
  ...props
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return `translateY(${distance}px)`;
        case 'down': return `translateY(-${distance}px)`;
        case 'left': return `translateX(${distance}px)`;
        case 'right': return `translateX(-${distance}px)`;
        default: return `translateY(${distance}px)`;
      }
    }
    return 'translate(0)';
  };

  const combinedStyle = {
    opacity: isVisible ? 1 : initialOpacity,
    transform: getTransform(),
    filter: blur && !isVisible ? 'blur(10px)' : 'blur(0px)',
    transition: `opacity ${duration}ms ease, transform ${duration}ms ease, filter ${duration}ms ease`,
    willChange: 'opacity, transform, filter',
    ...style
  };

  return (
    <div ref={ref} className={className} style={combinedStyle} {...props}>
      {children}
    </div>
  );
};

export default FadeContent;
