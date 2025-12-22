import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fetchNewsBySlug, cmsUrl } from "../../lib/cms";

// Minimalus Strapi Blocks rendereris (kad pastraipos atrodytų normaliai)
function Blocks({ blocks }) {
  if (!Array.isArray(blocks)) return null;

  const renderChildrenText = (children) =>
    (children || []).map((c, i) => {
      if (c.type === "text") {
        const text = c.text || "";
        if (c.bold) return <strong key={i}>{text}</strong>;
        if (c.italic) return <em key={i}>{text}</em>;
        return <React.Fragment key={i}>{text}</React.Fragment>;
      }
      return null;
    });

  return (
    <div className="space-y-4">
      {blocks.map((b, idx) => {
        if (b.type === "paragraph") {
          return (
            <p key={idx} className="text-lg text-gray-800 leading-relaxed">
              {renderChildrenText(b.children)}
            </p>
          );
        }

        if (b.type === "heading") {
          const level = b.level || 2;
          const Tag = `h${Math.min(Math.max(level, 2), 4)}`;
          const cls =
            level <= 2
              ? "text-xl font-bold text-gray-900"
              : "text-lg font-semibold text-gray-900";
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

  // Karuselė
  const [current, setCurrent] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    let alive = true;

    // išvalom intervalą, jei persijungia slug
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setLoading(true);
    fetchNewsBySlug(slug)
      .then((item) => {
        if (!alive) return;
        setNews(item);
        setCurrent(0);
        setIsManual(false);
      })
      .catch((e) => console.error(e))
      .finally(() => {
        if (!alive) return;
        setLoading(false);
      });

    return () => {
      alive = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [slug]);

  // images iš gallery, jei nėra – fallback į coverImage
  const images = (() => {
    const g = (news?.gallery || []).map((img) => cmsUrl(img.url));
    if (g.length) return g;
    const cover = cmsUrl(news?.coverImage?.url);
    return cover ? [cover] : [];
  })();

  useEffect(() => {
    if (!news) return;
    if (isManual) return;
    if (images.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [news, isManual, images.length]);

  const handleManualChange = (newIndex) => {
    if (images.length <= 1) return;
    setIsManual(true);
    setCurrent(newIndex);
  };

  const handlePrev = () => {
    if (images.length <= 1) return;
    setIsManual(true);
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const handleNext = () => {
    if (images.length <= 1) return;
    setIsManual(true);
    setCurrent((current + 1) % images.length);
  };

  if (loading) {
    return (
      <section className="w-full min-h-screen bg-white pt-28 px-4">
        Kraunama...
      </section>
    );
  }

  if (!news) {
    return (
      <section className="w-full min-h-screen bg-white pt-28 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700">Naujiena nerasta.</p>
          <Link
            to="/naujienos"
            className="inline-block mt-4 text-sky-600 hover:underline font-medium"
          >
            ← Grįžti į naujienas
          </Link>
        </div>
      </section>
    );
  }

  const isSingle = images.length <= 1;

  // 🔵 Mėlynas tekstukas (kol kas naudojam badgeTitle; vėliau galėsi pakeisti į news.highlight)
  const blueLabel = news.badgeTitle; // arba: news.highlight || news.badgeTitle

  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 pb-12 sm:pb-16 pt-28 md:pt-36 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* 🔵 Mėlynas blokas virš visko (nebe kairėj kolonoje) */}
        {blueLabel ? (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="w-full bg-gradient-to-r from-sky-500 to-sky-300 text-white font-semibold rounded-2xl shadow-md px-6 py-4">
              {blueLabel}
            </div>
          </motion.div>
        ) : null}

        {/* ✅ Čia prasideda tik tekstas + karuselė */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-stretch">
          {/* Tekstas */}
          <motion.div
            className="space-y-6 flex flex-col justify-center"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.h1
              variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
            >
              {news.title}
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: -5 }, visible: { opacity: 1, y: 0 } }}
              className="text-gray-500 font-medium -mt-2"
            >
              {news.date ? new Date(news.date).toLocaleDateString("lt-LT") : ""}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-gray-100 p-5 rounded-lg shadow-sm space-y-4"
            >
              <Blocks blocks={news.content} />
            </motion.div>

            {news.highlightQuote ? (
              <motion.p
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="text-xl text-black font-semibold"
              >
                {news.highlightQuote}
              </motion.p>
            ) : null}
          </motion.div>

          {/* Karuselė */}
          <div className="h-full flex flex-col justify-center">
            <div className="flex flex-col items-center gap-6 h-full">
              {/* 👇 Svarbiausia dalis: h-full + min-h, kad galėtų išsitempti iki teksto aukščio */}
              <div className="relative w-full h-full min-h-64 sm:min-h-96 md:min-h-[500px] overflow-hidden rounded-xl shadow-md flex items-center justify-center bg-gray-200">
                {images.length ? (
                  images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={news.title}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === current ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))
                ) : (
                  <div className="text-gray-600">Nėra nuotraukų</div>
                )}

                <button
                  onClick={handlePrev}
                  disabled={isSingle}
                  aria-disabled={isSingle}
                  className={`absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-md transition ${
                    isSingle ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
                  }`}
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={handleNext}
                  disabled={isSingle}
                  aria-disabled={isSingle}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-md transition ${
                    isSingle ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
                  }`}
                >
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-4 w-full flex justify-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleManualChange(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === current ? "bg-white" : "bg-transparent border border-white"
                      } transition transform ${
                        isSingle ? "opacity-50 cursor-default" : "hover:scale-110"
                      }`}
                      disabled={isSingle}
                      aria-disabled={isSingle}
                    />
                  ))}
                </div>
              </div>

              <Link to="/naujienos" className="inline-block text-sky-600 hover:underline font-medium">
                ← Grįžti į naujienas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
