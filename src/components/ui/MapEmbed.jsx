import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

// Google Maps costs ~1 MB of scripts, so the iframe only loads after the visitor asks for
// it. Until then a lightweight panel shows the address and a link to open Maps directly.
export default function MapEmbed({ src, title, address, mapsLink, className = '' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-lg border border-line bg-surface-raised ${className}`}>
      {loaded ? (
        <iframe
          title={title}
          src={src}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-start justify-end gap-5 p-6 md:p-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
          />
          <MapPin aria-hidden="true" className="relative text-accent-bright" size={28} />
          <p className="relative text-display text-display-sm text-fg">{address}</p>
          <div className="relative flex flex-wrap gap-3">
            <button type="button" onClick={() => setLoaded(true)} className="btn-academy">
              Rodyti žemėlapį
            </button>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn-academy">
              Google Maps <span className="sr-only">(atsidaro naujame lange)</span>
              <span className="btn-arrow" aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
