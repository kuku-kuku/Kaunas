import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

// Counts up to `value` the first time it scrolls into view. Screen readers and
// reduced-motion visitors get the final number straight away.
export default function StatCounter({ value, suffix = '', animate = true, duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduce = useReducedMotion();
  // Initial value depends only on props, so prerendered HTML matches the first client render
  const [display, setDisplay] = useState(animate ? 0 : value);

  useEffect(() => {
    if (!animate || !inView) return undefined;
    if (reduce) {
      setDisplay(value);
      return undefined;
    }
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, animate, reduce, value, duration]);

  return (
    <span ref={ref} className="tabular">
      <span aria-hidden="true">{display}{suffix}</span>
      <span className="sr-only">{value}{suffix}</span>
    </span>
  );
}
