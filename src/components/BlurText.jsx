import { useRef, useEffect, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';

const BlurText = ({
  text,
  delay = 100,
  className = '',
  rootMargin = '-50px'
}) => {
  const words = text.split(' ');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      from: { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,30px,0)' },
      to: inView
        ? { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' }
        : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,30px,0)' },
      delay: i * delay,
      config: { mass: 1, tension: 200, friction: 25 }
    }))
  );

  return (
    <h2 ref={ref} className={`${className}`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: 'inline-block',
            willChange: 'transform, filter, opacity',
          }}
        >
          {words[index]}&nbsp;
        </animated.span>
      ))}
    </h2>
  );
};

export default BlurText;
