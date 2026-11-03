import React from 'react';
import manifest from '../../generated/images.json';

// Renders <picture> with AVIF/WebP sources at several widths when the image has been
// processed by the image pipeline (src/generated/images.json), and a plain <img> otherwise.
//
// Manifest entry shape, keyed by the original public path:
//   "/hero.jpg": { "width": 1920, "height": 756, "widths": [640, 1024, 1600],
//                  "base": "/optimized/hero", "placeholder": "#1b2430" }
//   → /optimized/hero-640.avif, /optimized/hero-640.webp, …
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
  ...rest
}) {
  const entry = manifest[src];
  const w = width ?? entry?.width;
  const h = height ?? entry?.height;

  const imgProps = {
    width: w,
    height: h,
    loading: priority ? 'eager' : 'lazy',
    decoding: priority ? 'sync' : 'async',
    fetchpriority: priority ? 'high' : undefined,
    ...rest,
  };

  if (!entry) {
    return <img src={src} alt={alt} className={`${className} ${imgClassName}`.trim()} {...imgProps} />;
  }

  const srcSet = (ext) => entry.widths.map((width) => `${entry.base}-${width}.${ext} ${width}w`).join(', ');
  const fallbackWidth = entry.widths[Math.min(1, entry.widths.length - 1)];

  return (
    <picture className={className}>
      <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
      <img
        alt={alt}
        src={`${entry.base}-${fallbackWidth}.webp`}
        className={imgClassName}
        style={entry.placeholder ? { backgroundColor: entry.placeholder } : undefined}
        {...imgProps}
      />
    </picture>
  );
}
