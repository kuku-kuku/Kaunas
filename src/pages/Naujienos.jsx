import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { Container, ResponsiveImage, SectionHeader } from "../components/ui";
import { useNews, formatNewsDate, newsHref } from "../lib/useNews";

function Featured({ item }) {
  return (
    <Link to={newsHref(item)} className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-surface-raised lg:col-span-7">
        {item.image && (
          <ResponsiveImage
            src={item.image}
            srcSet={item.imageSrcSet}
            alt=""
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="block h-full w-full"
            imgClassName="h-full w-full object-cover object-[50%_30%] transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-eyebrow font-semibold uppercase text-white">
          Naujausia
        </span>
      </div>
      <div className="lg:col-span-5">
        <time dateTime={item.date} className="font-mono text-xs text-fg-subtle">{formatNewsDate(item.date)}</time>
        <h2 className="mt-3 font-display text-display-sm font-extrabold uppercase leading-[1.05] text-fg transition-colors group-hover:text-accent-bright md:text-display-md">
          {item.title}
        </h2>
        {item.summary && <p className="mt-4 line-clamp-3 text-fg-muted">{item.summary}</p>}
        <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-accent-bright">
          Skaityti <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}

// Phones: compact row (thumbnail + title) so 20+ items don't turn into a very long scroll.
// md+: card grid.
function Card({ item }) {
  return (
    <Link to={newsHref(item)} className="group flex gap-4 md:block">
      <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-lg bg-surface-raised md:aspect-[16/10] md:w-full">
        {item.image && (
          <ResponsiveImage
            src={item.image}
            srcSet={item.imageSrcSet}
            alt=""
            sizes="(min-width: 768px) 33vw, 112px"
            className="block h-full w-full"
            imgClassName="h-full w-full object-cover object-[50%_30%] transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
          />
        )}
      </div>
      <div className="min-w-0">
        <time dateTime={item.date} className="block font-mono text-xs text-fg-subtle md:mt-4">{formatNewsDate(item.date)}</time>
        <h3 className="mt-1.5 font-display text-lg font-extrabold uppercase leading-tight text-fg transition-colors group-hover:text-accent-bright md:mt-2 md:text-xl">
          {item.title}
        </h3>
        {item.summary && <p className="mt-2 line-clamp-2 hidden text-sm text-fg-muted md:block">{item.summary}</p>}
      </div>
    </Link>
  );
}

export default function Naujienos() {
  const { items, loading } = useNews();
  const [featured, ...rest] = items;

  return (
    <main>
      <Seo
        title="Naujienos"
        description="FA Kaunas naujienos: turnyrai Lietuvoje ir užsienyje, stovyklos, trenerių komentarai ir akademijos gyvenimas."
      />

      <section aria-labelledby="page-title" className="pb-section-sm pt-32 md:pt-40">
        <Container>
          <SectionHeader level={1} id="page-title" eyebrow="Akademijos gyvenimas" title="Naujienos" intro="Turnyrai, stovyklos ir trenerių komentarai iš aikštės." size="xl" animate={false} />
        </Container>
      </section>

      {featured && (
        <section aria-label="Naujausia naujiena" className="border-t border-line py-section-sm">
          <Container>
            <Featured item={featured} />
          </Container>
        </section>
      )}

      <section aria-labelledby="archive-title" className="border-t border-line py-section-sm" aria-busy={loading}>
        <Container>
          <h2 id="archive-title" className="section-label mb-10">Visos naujienos</h2>
          <ul className="grid gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-12 lg:grid-cols-3">
            {rest.map((item) => (
              <li key={newsHref(item)} className="border-b border-line pb-6 md:border-0 md:pb-0">
                <Card item={item} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
