import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { site } from '../content';

const DEFAULT_OG_IMAGE = '/og-default.jpg'; // TODO(content): 1200×630 share image, see TODO-content.md

// Per-page <head>: title, description, canonical, Open Graph, Twitter, optional JSON-LD.
//   <Seo title="Treneriai" description="…" />
//   <Seo title="…" jsonLd={{ '@type': 'SportsClub', … }} />
export default function Seo({
  title,
  description = site.description,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
}) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} – futbolo akademija Kaune`;
  const canonical = `${site.url}${pathname === '/' ? '' : pathname.replace(/\/$/, '')}`;
  const imageUrl = image.startsWith('http') ? image : `${site.url}${image}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="lt_LT" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify({ '@context': 'https://schema.org', ...schema })}
        </script>
      ))}
    </Helmet>
  );
}
