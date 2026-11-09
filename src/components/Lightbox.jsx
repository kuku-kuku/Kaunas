import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ResponsiveImage } from './ui';
import { ease } from '../lib/motion';

const CLOSE_MS = 220;

// Photos slide in from the side you're moving towards
const slide = {
  enter: (dir) => ({ opacity: 0, x: dir * 60, scale: 0.98 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir) => ({ opacity: 0, x: dir * -60, scale: 0.98 }),
};

// Full-screen photo viewer on the native <dialog> element: the browser handles the focus
// trap and the top layer. Closes on Escape, the × button, or a click anywhere except the
// photo and the controls. Arrow keys and swipes move between photos.
//   srcSets: optional { [src]: srcset } for images from the CMS (lets the browser pick a
//            large-but-reasonable size instead of the multi-MB original)
export default function Lightbox({ images, index, alt, onIndexChange, onClose, srcSets = {} }) {
  const ref = useRef(null);
  const open = index !== null;
  const [closing, setClosing] = useState(false);
  const [direction, setDirection] = useState(1);
  const touchX = useRef(null);

  // Animate out, then actually close
  const requestClose = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      setClosing(false);
      onClose();
    }, CLOSE_MS);
  }, [onClose]);

  const go = useCallback(
    (delta) => {
      setDirection(delta);
      onIndexChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // A modal <dialog> doesn't stop the page behind it from scrolling, so lock it while the
  // viewer is open. Padding replaces the hidden scrollbar so the page doesn't shift sideways.
  useEffect(() => {
    if (!open) return undefined;
    const html = document.documentElement;
    const scrollbar = window.innerWidth - html.clientWidth;
    const prev = { overflow: html.style.overflow, paddingRight: html.style.paddingRight };
    html.style.overflow = 'hidden';
    if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`;
    return () => {
      html.style.overflow = prev.overflow;
      html.style.paddingRight = prev.paddingRight;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, go]);

  // Load the neighbouring photos in advance so switching is instant
  useEffect(() => {
    if (!open || images.length < 2) return;
    for (const i of [index + 1, index - 1]) {
      const src = images[(i + images.length) % images.length];
      const img = new Image();
      if (srcSets[src]) {
        img.srcset = srcSets[src];
        img.sizes = '100vw';
      }
      img.src = src;
    }
  }, [open, index, images, srcSets]);

  // Anything that isn't the photo or a control counts as "outside"
  const onClick = (e) => {
    if (!e.target.closest('[data-lightbox-keep]')) requestClose();
  };

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50 && images.length > 1) go(dx < 0 ? 1 : -1);
  };

  const src = open ? images[index] : null;
  const many = images.length > 1;
  const control =
    'flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md ring-1 ring-white/15 transition hover:bg-white/20 md:h-14 md:w-14';

  return (
    // Click/touch handlers close the viewer or swipe; keyboard users have Escape, ← → and buttons.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={ref}
      onCancel={(e) => {
        // Escape: run the closing animation instead of closing instantly
        e.preventDefault();
        requestClose();
      }}
      onClose={onClose}
      onClick={onClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      data-closing={closing || undefined}
      aria-label="Nuotraukų peržiūra"
      className="lightbox m-0 h-[100dvh] max-h-none w-screen max-w-none overscroll-contain bg-transparent p-0"
    >
      {open && (
        <m.div
          className="relative flex h-full w-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={closing ? { opacity: 0, scale: 0.97 } : { opacity: 1, scale: 1 }}
          transition={{ duration: closing ? CLOSE_MS / 1000 : 0.3, ease: ease.outExpo }}
        >
          {/* Top bar: counter + close */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 md:p-6">
            <span className="rounded-full bg-white/10 px-3 py-1.5 font-mono text-sm text-white backdrop-blur-md" aria-live="polite">
              {index + 1} / {images.length}
            </span>
            <button type="button" data-lightbox-keep onClick={requestClose} aria-label="Uždaryti" className={control}>
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          {/* Photo */}
          <div className="relative flex h-full w-full items-center justify-center px-4 py-20 md:px-24 md:py-24">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <m.div
                key={src}
                custom={direction}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: ease.outExpo }}
                // [&_picture]:contents lets the <img> inside an AVIF <picture> size against this box
                className="flex h-full w-full items-center justify-center [&_picture]:contents"
              >
                <ResponsiveImage
                  src={src}
                  srcSet={srcSets[src]}
                  alt={`${alt} (${index + 1} iš ${images.length})`}
                  sizes="100vw"
                  priority
                  data-lightbox-keep
                  imgClassName="max-h-full max-w-full rounded-lg object-contain shadow-2xl shadow-black/60"
                  style={{ backgroundColor: 'transparent' }}
                />
              </m.div>
            </AnimatePresence>
          </div>

          {/* Previous / next, at the sides so they're always on screen */}
          {many && (
            <>
              <button
                type="button"
                data-lightbox-keep
                onClick={() => go(-1)}
                aria-label="Ankstesnė nuotrauka"
                className={`${control} absolute left-3 top-1/2 z-10 -translate-y-1/2 md:left-6`}
              >
                <ChevronLeft size={26} aria-hidden="true" />
              </button>
              <button
                type="button"
                data-lightbox-keep
                onClick={() => go(1)}
                aria-label="Kita nuotrauka"
                className={`${control} absolute right-3 top-1/2 z-10 -translate-y-1/2 md:right-6`}
              >
                <ChevronRight size={26} aria-hidden="true" />
              </button>
            </>
          )}
        </m.div>
      )}
    </dialog>
  );
}
