import React from 'react';
import { Link } from 'react-router-dom';
import { newsSection } from '../../content';
import { useNews, formatNewsDate, newsHref } from '../../lib/useNews';
import { Section, SectionHeader, Reveal, ResponsiveImage } from '../ui';

function NewsCard({ item, large = false }) {
  return (
    <Link to={newsHref(item)} className="group block">
      <div className={`relative overflow-hidden rounded-lg bg-surface-raised ${large ? 'aspect-[4/3] lg:aspect-[16/11]' : 'aspect-[16/10]'}`}>
        {item.image && (
          <ResponsiveImage
            src={item.image}
            srcSet={item.imageSrcSet}
            alt=""
            sizes={large ? '(min-width: 1024px) 58vw, 100vw' : '(min-width: 1024px) 34vw, 100vw'}
            className="block h-full w-full"
            imgClassName="h-full w-full object-cover object-[50%_30%] transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          />
        )}
      </div>
      <time dateTime={item.date} className="mt-5 block font-mono text-xs text-fg-subtle">
        {formatNewsDate(item.date)}
      </time>
      <h3
        className={`mt-2 font-display font-extrabold uppercase leading-[1.05] text-fg transition-colors group-hover:text-accent-bright ${
          large ? 'text-display-sm' : 'text-xl'
        }`}
      >
        {item.title}
      </h3>
      {large && item.summary && <p className="mt-3 line-clamp-2 max-w-prose text-fg-muted">{item.summary}</p>}
    </Link>
  );
}

export default function LatestNews() {
  const { items } = useNews();
  const [first, ...rest] = items.slice(0, 3);
  if (!first) return null;

  return (
    <Section labelledBy="news-title" divider>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          id="news-title"
          index={newsSection.index}
          eyebrow={newsSection.eyebrow}
          title={newsSection.title}
          size="lg"
        />
        <Link
          to={newsSection.link.to}
          className="group inline-flex min-h-[44px] shrink-0 items-center gap-2 text-sm uppercase tracking-[0.15em] text-fg-muted transition-colors hover:text-white"
        >
          {newsSection.link.label}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>

      <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <NewsCard item={first} large />
        </Reveal>
        <div className="grid gap-12 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-10">
          {rest.map((item, i) => (
            <Reveal key={newsHref(item)} delay={0.1 + i * 0.08}>
              <NewsCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
