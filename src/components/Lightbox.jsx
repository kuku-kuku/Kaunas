import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ResponsiveImage } from './ui';

// Full-screen photo viewer on the native <dialog> element: the browser handles the focus
// trap, Escape and the backdrop. Arrow keys move between photos.
export default function Lightbox({ images, index, alt, onIndexChange, onClose }) {
  const ref = useRef(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') onIndexChange((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onIndexChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, index, images.length, onIndexChange]);

  return (
    // Clicking the backdrop (the dialog element itself) closes it; keyboard users have
    // Escape and the close button.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-label="Nuotraukų peržiūra"
      className="m-0 h-[100dvh] max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-black/90"
    >
      {open && (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4 md:p-10">
          <div className="flex w-full max-w-6xl items-center justify-between text-fg">
            <span className="font-mono text-sm" aria-live="polite">
              {index + 1} / {images.length}
            </span>
            <button type="button" onClick={onClose} aria-label="Uždaryti" className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/10">
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex min-h-0 w-full max-w-6xl flex-1 items-center justify-center">
            <ResponsiveImage
              key={images[index]}
              src={images[index]}
              alt={`${alt} (${index + 1} iš ${images.length})`}
              sizes="(min-width: 1152px) 1152px, 100vw"
              priority
              className="flex h-full w-full items-center justify-center"
              imgClassName="max-h-full max-w-full rounded-lg object-contain"
              style={{ backgroundColor: 'transparent' }}
            />
          </div>

          {images.length > 1 && (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => onIndexChange((index - 1 + images.length) % images.length)}
                aria-label="Ankstesnė nuotrauka"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-fg hover:bg-white/10"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onIndexChange((index + 1) % images.length)}
                aria-label="Kita nuotrauka"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-fg hover:bg-white/10"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}
