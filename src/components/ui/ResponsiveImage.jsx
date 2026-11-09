import React from 'react';
import manifest from '../../generated/images.json';

// Renders <picture> with AVIF sources at several widths when the image has been processed
// by the image pipeline (`npm run images` → src/generated/images.json). Browsers without
// AVIF get the original file, which the pipeline has already shrunk to ≤1920px.
// Images not in the manifest (CMS / Cloudinary URLs) render as a plain <img>; pass `srcSet`
// (e.g. from cmsSrcSet) so the browser can pick a smaller CMS format instead of the original.
//
// Manifest entry, keyed by public path:
//   "/hero.jpg": { width, height, widths: [640, 1280, 1920], base: "/optimized/hero", placeholder: "#1b2430" }
//   → /optimized/hero-640.avif, /optimized/hero-1280.avif, …
//
// `priority` is for the LCP image (hero): eager load + high fetch priority.
export default function ResponsiveImage({
  src,
  alt,
  sizes = '100vw',
  priority = false,
  width,
  height,
  className = '',
  imgClassName = '',
  style,
  srcSet: externalSrcSet,
  ...rest
}) {
  const entry = manifest[src];

  const imgProps = {
    width: width ?? entry?.width,
    height: height ?? entry?.height,
    loading: priority ? 'eager' : 'lazy',
    // Always async: "sync" made the browser hold the whole first paint until the hero
    // image was decoded (≈1 s on a throttled phone).
    decoding: 'async',
    fetchpriority: priority ? 'high' : undefined,
    ...rest,
  };

  if (!entry) {
    return (
      <img
        src={src}
        srcSet={externalSrcSet}
        sizes={externalSrcSet ? sizes : undefined}
        alt={alt}
        className={`${className} ${imgClassName}`.trim()}
        style={style}
        {...imgProps}
      />
    );
  }

  const srcSet = entry.widths.map((w) => `${entry.base}-${w}.avif ${w}w`).join(', ');

  return (
    <picture className={className}>
      <source type="image/avif" srcSet={srcSet} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        style={{ backgroundColor: entry.placeholder, ...style }}
        {...imgProps}
      />
    </picture>
  );
}
