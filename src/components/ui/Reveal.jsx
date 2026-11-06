import React from 'react';
import { m } from 'framer-motion';
import { ease, duration, revealOffset } from '../../lib/motion';

const offsets = {
  up: { y: revealOffset },
  down: { y: -revealOffset },
  left: { x: revealOffset },
  right: { x: -revealOffset },
  none: {},
};

// Fades content in once it scrolls into view. Reduced motion is handled globally by
// <MotionConfig reducedMotion="user"> (no movement, fade only), which keeps the markup
// identical on the server and the client.
export default function Reveal({
  as = 'div',
  from = 'up',
  delay = 0,
  amount = 0.25,
  className,
  children,
  ...rest
}) {
  const Tag = m[as] ?? m.div;

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
