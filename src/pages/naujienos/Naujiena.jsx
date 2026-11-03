import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fetchNewsBySlug, cmsUrl } from "../../lib/cms";

const DEFAULT_HIGHLIGHT_QUOTE = "FA Kaunas - Nuo svajonės iki realybės";

function Blocks({ blocks }) {
  if (!Array.isArray(blocks)) return null;

  const renderChildrenText = (children) =>
    (children || []).map((c, i) => {
      if (c.type === "text") {
        const text = c.text || "";
        if (c.bold) return <strong key={i} className="text-white font-semibold">{text}</strong>;
        if (c.italic) return <em key={i}>{text}</em>;
        return <React.Fragment key={i}>{text}</React.Fragment>;
      }
      return null;
    });

  return (
    <div className="space-y-5">
      {blocks.map((b, idx) => {
        if (b.type === "paragraph") {
          return (
            <p key={idx} className="text-lg text-white/70 leading-relaxed">
              {renderChildrenText(b.children)}
            </p>
          );
        }
        if (b.type === "heading") {
          const level = b.level || 2;
          const Tag = `h${Math.min(Math.max(level, 2), 4)}`;
          const cls = level <= 2
            ? "text-2xl font-display font-bold text-white uppercase tracking-tight"
            : "text-xl font-display font-semibold text-white";
          return (
            <Tag key={idx} className={cls}>
              {renderChildrenText(b.children)}
            </Tag>
          );
        }
        return null;
      })}
    </div>
  );
}

export default function Naujiena() {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const intervalRef = useRef(null);
  const articleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!articleRef.current) return;
      const rect = articleRef.current.getBoundingClientRect();
      const total = articleRef.current.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      setScrollProgress(Math.min(1, Math.max(0, scrolled / total)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let alive = true;
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    setLoading(true);
    fetchNewsBySlug(slug)
      .then((item) => { if (alive) { setNews(item); setCurrent(0); setIsManual(false); } })
      .catch((e) => console.error(e))
      .finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [slug]);

  const images = (() => {
    const g = (news?.gallery || []).map((img) => cmsUrl(img.url));
    if (g.length) return g;
    const cover = cmsUrl(news?.coverImage?.url);
    return cover ? [cover] : [];
  })();

  useEffect(() => {
    if (!news || isManual || images.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [news, isManual, images.length]);

  const isSingle = images.length <= 1;

  if (loading) {
    return (
      <div className="min-h-screen bg-academy-black flex items-center justify-center">
        <div className="w-8 h-px bg-academy-blue animate-pulse" />
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-academy-black pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/50">Naujiena nerasta.</p>
          <Link to="/naujienos" className="inline-flex items-center gap-2 text-accent-bright text-sm uppercase tracking-wider mt-4 hover:underline">
            &larr; Grįžti į naujienas
          </Link>
        </div>
      </div>
    );
  }

  const blueLabel = news.highlight;

  return (
    <article ref={articleRef} className="min-h-screen bg-academy-black">
      {/* Reading progress indicator */}
      <div className="fixed top-0 left-0 w-full h-px z-[60]">
        <motion.div className="h-full bg-academy-blue origin-left" style={{ scaleX: scrollProgress }} />
      </div>

      {/* Side progress (desktop) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2">
        <div className="relative w-px h-24 bg-academy-line">
          <motion.div
            className="absolute top-0 left-0 w-full bg-academy-blue origin-top"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
        <span className="text-[10px] font-mono text-fg-subtle">{Math.round(scrollProgress * 100)}%</span>
      </div>

      {/* ═══ HEADER ═══ */}
      <div className="pt-28 md:pt-36 pb-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Link to="/naujienos" className="text-[11px] uppercase tracking-[0.15em] text-fg-subtle hover:text-white transition-colors">
                Naujienos
              </Link>
              <span className="text-white/15">/</span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-fg-subtle font-mono">
                {news.date ? new Date(news.date).toLocaleDateString("lt-LT") : ""}
              </span>
            </div>

            {blueLabel && (
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] bg-academy-blue text-white px-3 py-1 font-medium mb-5">
                {blueLabel}
              </span>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-display text-white leading-[0.95] mb-6">
              {news.title}
            </h1>

            <div className="h-px bg-academy-line mt-8" />
          </motion.div>
        </div>
      </div>

      {/* ═══ HERO IMAGE / GALLERY ═══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative px-6 md:px-12 lg:px-24 mb-12"
      >
        <div className="max-w-6xl mx-auto relative aspect-[16/9] overflow-hidden bg-academy-dark">
          {images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={news.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))
          ) : (
            <div className="flex items-center justify-center h-full text-fg-subtle">Nėra nuotraukų</div>
          )}

          {!isSingle && (
            <>
              <button
                onClick={() => { setIsManual(true); setCurrent(current === 0 ? images.length - 1 : current - 1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all bg-black/20 backdrop-blur-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => { setIsManual(true); setCurrent((current + 1) % images.length); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all bg-black/20 backdrop-blur-sm"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setIsManual(true); setCurrent(index); }}
                  className={`h-px transition-all duration-400 ${
                    index === current ? 'w-8 bg-white' : 'w-4 bg-white/30'
                  }`}
                />
              ))}
              <span className="text-[10px] font-mono text-fg-subtle ml-2">
                {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* ═══ CONTENT ═══ */}
      <div className="px-6 md:px-12 lg:px-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Blocks blocks={news.content} />
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-academy-line"
          >
            <div className="flex items-start gap-4">
              <div className="w-1 h-12 bg-academy-blue flex-shrink-0" />
              <p className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight">
                {news.highlightQuote || DEFAULT_HIGHLIGHT_QUOTE}
              </p>
            </div>
          </motion.div>

          {/* Back to news */}
          <div className="mt-16 pt-8 border-t border-academy-line">
            <Link
              to="/naujienos"
              className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.15em] text-fg-subtle hover:text-accent-bright transition-colors duration-200 font-medium"
            >
              &larr; Grįžti į naujienas
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
