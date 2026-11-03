import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../../components/Seo';
import Lightbox from '../../components/Lightbox';
import { Container, Reveal, ResponsiveImage } from '../../components/ui';
import { articles } from '../../content/lt/articles';
import { site } from '../../content';
import { fetchNewsBySlug, cmsUrl } from '../../lib/cms';
import { useNews, formatNewsDate, newsHref } from '../../lib/useNews';

const SIGN_OFF = 'FA Kaunas – nuo svajonės iki realybės!';

// **bold** → <strong>
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="font-semibold text-fg">{part.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
}

// Strapi rich-text children → inline nodes
function StrapiInline({ nodes }) {
  return (nodes || []).map((c, i) => {
    if (c.type !== 'text') return null;
    if (c.bold) return <strong key={i} className="font-semibold text-fg">{c.text}</strong>;
    if (c.italic) return <em key={i}>{c.text}</em>;
    return <React.Fragment key={i}>{c.text}</React.Fragment>;
  });
}

function Body({ blocks }) {
  return (
    <div className="space-y-6 text-lg leading-relaxed text-fg-muted">
      {blocks.map((b, i) => {
        if (b.type === 'p') return <p key={i}><Rich text={b.text} /></p>;
        if (b.type === 'quote') {
          return (
            <figure key={i} className="my-10 border-l-2 border-accent pl-6 md:pl-8">
              <figcaption className="text-eyebrow uppercase text-accent-bright">{b.by}</figcaption>
              <blockquote className="mt-4 space-y-4 text-lg leading-relaxed text-fg md:text-xl">
                {b.paragraphs.map((p) => <p key={p}><Rich text={p} /></p>)}
              </blockquote>
            </figure>
          );
        }
        if (b.type === 'strapi') {
          const block = b.block;
          if (block.type === 'heading') {
            return (
              <h2 key={i} className="pt-4 font-display text-display-sm font-extrabold uppercase text-fg">
                <StrapiInline nodes={block.children} />
              </h2>
            );
          }
          if (block.type === 'paragraph') return <p key={i}><StrapiInline nodes={block.children} /></p>;
        }
        return null;
      })}
    </div>
  );
}

function fromCms(n) {
  const gallery = (n.gallery || []).map((g) => cmsUrl(g.url)).filter(Boolean);
  const cover = cmsUrl(n.coverImage?.url);
  return {
    slug: n.slug,
    date: n.date,
    badge: n.badgeTitle || n.highlight || null,
    title: n.title,
    images: gallery.length ? gallery : cover ? [cover] : [],
    imageAlt: n.title,
    blocks: (n.content || []).map((block) => ({ type: 'strapi', block })),
    description: n.excerpt || null,
    signOff: n.highlightQuote || null,
  };
}

function useArticle(slug) {
  const local = useMemo(() => articles.find((a) => a.slug === slug) ?? null, [slug]);
  const [cms, setCms] = useState({ slug: null, article: null, loading: !local });

  useEffect(() => {
    if (local) return undefined;
    let alive = true;
    setCms({ slug, article: null, loading: true });
    fetchNewsBySlug(slug)
      .then((n) => alive && setCms({ slug, article: n ? fromCms(n) : null, loading: false }))
      .catch((e) => {
        console.error(e);
        if (alive) setCms({ slug, article: null, loading: false });
      });
    return () => { alive = false; };
  }, [slug, local]);

  if (local) return { article: local, loading: false };
  return { article: cms.slug === slug ? cms.article : null, loading: cms.slug !== slug || cms.loading };
}

function plainText(blocks) {
  return blocks
    .map((b) => (b.type === 'p' ? b.text : b.type === 'quote' ? b.paragraphs.join(' ') : (b.block?.children || []).map((c) => c.text || '').join('')))
    .join(' ')
    .replace(/\*\*/g, '');
}

function excerpt(text, max = 155) {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(' ', max)).replace(/[,.;:–-]$/, '') + '…';
}

export default function NewsArticle() {
  const { slug } = useParams();
  const { article, loading } = useArticle(slug);
  const { items } = useNews();
  const [lightbox, setLightbox] = useState(null);

  if (loading) {
    return <main className="min-h-screen bg-surface pt-40" aria-busy="true" />;
  }

  if (!article) {
    return (
      <main className="min-h-[70vh] pt-40">
        <Seo title="Naujiena nerasta" noindex />
        <Container>
          <h1 className="text-display text-display-md text-fg">Naujiena nerasta</h1>
          <Link to="/naujienos" className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm uppercase tracking-[0.15em] text-accent-bright hover:text-white">
            <span aria-hidden="true">&larr;</span> Visos naujienos
          </Link>
        </Container>
      </main>
    );
  }

  const [cover, ...gallery] = article.images;
  const description = article.description || excerpt(plainText(article.blocks));
  const related = items.filter((n) => newsHref(n) !== `/naujienos/${slug}`).slice(0, 3);
  const alt = article.imageAlt || article.title;

  return (
    <main>
      <Seo
        title={article.title}
        description={description}
        image={cover && cover.startsWith('/') ? cover : undefined}
        type="article"
        jsonLd={{
          '@type': 'NewsArticle',
          headline: article.title,
          datePublished: article.date,
          image: cover ? [cover.startsWith('http') ? cover : `${site.url}${cover}`] : undefined,
          publisher: { '@type': 'SportsOrganization', name: site.name, logo: { '@type': 'ImageObject', url: `${site.url}${site.logo}` } },
          mainEntityOfPage: `${site.url}/naujienos/${slug}`,
        }}
      />

      <article aria-labelledby="article-title">
        {/* ─── Header ─── */}
        <header className="pt-32 md:pt-40">
          <Container>
            <Link to="/naujienos" className="inline-flex min-h-[44px] items-center gap-2 text-sm uppercase tracking-[0.15em] text-fg-muted hover:text-white">
              <span aria-hidden="true">&larr;</span> Naujienos
            </Link>
            <Reveal className="mt-8 max-w-4xl">
              <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-eyebrow uppercase text-fg-subtle">
                {article.badge && <span className="text-accent-bright">{article.badge}</span>}
                <time dateTime={article.date} className="font-mono normal-case tracking-normal">{formatNewsDate(article.date)}</time>
              </p>
              <h1 id="article-title" className="mt-5 text-display text-display-md text-fg md:text-display-lg">
                {article.title}
              </h1>
            </Reveal>
          </Container>
        </header>

        {/* ─── Cover ─── */}
        {cover && (
          <Container className="mt-12 md:mt-16">
            <button
              type="button"
              onClick={() => setLightbox(0)}
              className="group block w-full overflow-hidden rounded-lg"
              aria-label={`Didinti nuotrauką: ${alt}`}
            >
              <ResponsiveImage
                src={cover}
                alt={alt}
                priority
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="block aspect-[16/10] w-full md:aspect-[16/8]"
                imgClassName="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
              />
            </button>
          </Container>
        )}

        {/* ─── Body ─── */}
        <Container className="py-section-sm">
          <div className="mx-auto max-w-prose">
            <Body blocks={article.blocks} />
            <p className="mt-12 border-t border-line pt-8 font-display text-xl font-extrabold uppercase text-fg">
              {article.signOff || SIGN_OFF}
            </p>
          </div>
        </Container>

        {/* ─── Gallery ─── */}
        {gallery.length > 0 && (
          <section aria-labelledby="gallery-title" className="pb-section-sm">
            <Container>
              <h2 id="gallery-title" className="section-label mb-6">
                Nuotraukos <span className="font-mono">({article.images.length})</span>
              </h2>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                {gallery.map((src, i) => (
                  <li key={src}>
                    <button
                      type="button"
                      onClick={() => setLightbox(i + 1)}
                      className="group block w-full overflow-hidden rounded-lg"
                      aria-label={`Didinti nuotrauką ${i + 2} iš ${article.images.length}`}
                    >
                      <ResponsiveImage
                        src={src}
                        alt=""
                        sizes="(min-width: 768px) 33vw, 50vw"
                        className="block aspect-[4/3] w-full"
                        imgClassName="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        )}
      </article>

      {/* ─── More news ─── */}
      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-line py-section-sm">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <h2 id="related-title" className="text-display text-display-sm text-fg">Kitos naujienos</h2>
              <Link to="/naujienos" className="inline-flex min-h-[44px] shrink-0 items-center gap-2 text-sm uppercase tracking-[0.15em] text-fg-muted hover:text-white">
                Visos <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6">
              {related.map((n) => (
                <li key={newsHref(n)}>
                  <Link to={newsHref(n)} className="group block">
                    <div className="aspect-[16/10] overflow-hidden rounded-lg bg-surface-raised">
                      {n.image && (
                        <ResponsiveImage
                          src={n.image}
                          alt=""
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="block h-full w-full"
                          imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      )}
                    </div>
                    <time dateTime={n.date} className="mt-4 block font-mono text-xs text-fg-subtle">{formatNewsDate(n.date)}</time>
                    <h3 className="mt-2 font-display text-xl font-extrabold uppercase leading-tight text-fg group-hover:text-accent-bright">{n.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <Lightbox images={article.images} index={lightbox} alt={alt} onIndexChange={setLightbox} onClose={() => setLightbox(null)} />
    </main>
  );
}
