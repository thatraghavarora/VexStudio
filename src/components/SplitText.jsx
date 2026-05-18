import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

const SplitText = ({
  text,
  className = '',
  delay = 50,
  rootMargin = '-50px',
  textAlign = 'center'
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
      { rootMargin, threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
      to: inView
        ? { opacity: 1, transform: 'translate3d(0,0px,0)' }
        : { opacity: 0, transform: 'translate3d(0,40px,0)' },
      delay: i * delay,
      config: { mass: 1, tension: 250, friction: 30 },
    }))
  );

  return (
    <div className={className} ref={ref} style={{ textAlign, display: 'inline-block', overflow: 'hidden' }}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: 'inline-block',
            willChange: 'transform, opacity',
            marginRight: '0.2em' // adding realistic space between words
          }}
        >
          {words[index]}
        </animated.span>
      ))}
    </div>
  );
};

export default SplitText;
