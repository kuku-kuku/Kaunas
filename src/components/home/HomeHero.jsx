import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { hero, trialCta } from '../../content';
import { ResponsiveImage, Container } from '../ui';
import { ease } from '../../lib/motion';

// Text stays opaque and only slides in, so the browser can count it as painted right
// away (fading from opacity 0 pushed Largest Contentful Paint back by ~1.5 s).
const rise = (delay) => ({
  initial: { y: 24 },
  animate: { y: 0 },
  transition: { duration: 0.8, delay, ease: ease.outExpo },
});

export default function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-surface">
      {/* Media: video when supplied, otherwise a slow push-in on the still */}
      <div className="absolute inset-0 -z-10">
        {hero.video && !reduce ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={hero.image}
            aria-hidden="true"
          >
            {hero.video.webm && <source src={hero.video.webm} type="video/webm" />}
            <source src={hero.video.mp4} type="video/mp4" />
          </video>
        ) : (
          <motion.div
            className="h-full w-full"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: ease.outExpo }}
          >
            <ResponsiveImage
              src={hero.image}
              alt={hero.imageAlt}
              priority
              className="block h-full w-full"
              imgClassName="h-full w-full object-cover object-[60%_30%]"
            />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/55 to-surface/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-surface/20 to-transparent" />
      </div>

      <Container className="flex flex-1 flex-col justify-end pb-12 pt-32 md:pb-16">
        <motion.p {...rise(0.05)} className="section-label mb-6 text-fg-muted">
          {hero.eyebrow}
        </motion.p>

        <h1 id="hero-title" className="text-display text-display-2xl text-white">
          {hero.title.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.04em]">
              <motion.span
                className="block"
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: ease.outExpo }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p {...rise(0.2)} className="mt-6 max-w-xl text-lead text-fg-muted">
          {hero.lead}
        </motion.p>

        <motion.div {...rise(0.3)} className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <Link to={trialCta.to} className="btn-blue">
            {hero.cta} <span className="btn-arrow" aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            to={hero.secondary.to}
            className="group inline-flex min-h-[44px] items-center gap-2 text-sm uppercase tracking-[0.15em] text-fg-muted transition-colors hover:text-white"
          >
            {hero.secondary.label}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </motion.div>

        {/* Proof points */}
        <motion.dl
          {...rise(0.4)}
          className="mt-16 hidden grid-cols-3 border-t border-white/15 md:grid"
        >
          {hero.facts.map((fact) => (
            <div key={fact.label} className="border-r border-white/15 py-5 pr-6 last:border-r-0 [&:not(:first-child)]:pl-6">
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <span className="block font-display text-2xl font-extrabold uppercase text-white">{fact.value}</span>
                <span className="mt-1 block text-eyebrow uppercase text-fg-subtle">{fact.label}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
