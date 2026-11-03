import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ease, duration, revealOffset } from '../../lib/motion';

const offsets = {
  up: { y: revealOffset },
  down: { y: -revealOffset },
  left: { x: revealOffset },
  right: { x: -revealOffset },
  none: {},
};

// Fades content in once it scrolls into view. With prefers-reduced-motion the content
// renders immediately with no transform.
export default function Reveal({
  as = 'div',
  from = 'up',
  delay = 0,
  amount = 0.25,
  className,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  if (reduce) {
    const Plain = as;
    return <Plain className={className} {...rest}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: duration.base, delay, ease: ease.outExpo }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
