import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNews, formatNewsDate, newsHref } from "../lib/useNews";
import { ResponsiveImage } from "../components/ui";

export default function Naujienos() {
  const { items, cmsError } = useNews();

  const featured = items[0];
  const rest = items.slice(1);

  return (
    <main className="bg-academy-black min-h-screen">
      {/* ═══ HERO HEADER ═══ */}
      <section className="pt-28 md:pt-36 pb-12 px-6 md:px-12 lg:px-24 border-b border-academy-line">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">Naujienos / {new Date().getFullYear()}</p>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4">
              Naujienos
            </h1>
            <p className="text-lg text-fg-subtle font-light max-w-xl">
              Naujausia informacija iš FA KAUNAS gyvenimo
            </p>
            {cmsError && (
              <p className="mt-4 text-[12px] text-fg-subtle uppercase tracking-wider">
                Šiuo metu rodomos statinės naujienos (CMS nepasiekiamas).
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══ FEATURED ARTICLE ═══ */}
      {featured && (
        <section className="px-6 md:px-12 lg:px-24 py-12 border-b border-academy-line">
          <div className="max-w-7xl mx-auto">
            <Link
              to={newsHref(featured)}
              className="group block"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-[4/3] overflow-hidden bg-academy-dark rounded-lg"
                >
                  {featured.image && (
                    <ResponsiveImage
                      src={featured.image}
                      alt={featured.title}
                      priority
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="block w-full h-full"
                      imgClassName="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] bg-academy-blue text-white px-3 py-1 font-medium">
                      Naujausia
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-[12px] uppercase tracking-[0.15em] text-fg-subtle font-mono">
                    {formatNewsDate(featured.date)}
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white group-hover:text-accent-bright transition-colors duration-300 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-fg-subtle leading-relaxed line-clamp-3">
                    {featured.summary}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-accent-bright font-medium pt-2">
                    Skaityti daugiau <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                  </span>
                </motion.div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ═══ NEWS ARCHIVE ═══ */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          {rest.map((item, i) => {
            const link = newsHref(item);
            const num = String(i + 2).padStart(2, '0');
            const isReversed = i % 2 === 1;
            const isFullWidth = i % 5 === 2;

            if (isFullWidth) {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="border-b border-academy-line"
                >
                  <Link to={link} className="group block py-8">
                    <div className="relative aspect-video overflow-hidden bg-academy-dark rounded-lg mb-6">
                      {item.image && (
                        <ResponsiveImage
                          src={item.image}
                          alt={item.title}
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="block w-full h-full"
                          imgClassName="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-academy-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <span className="section-number">{num}</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1">
                        <p className="text-[11px] uppercase tracking-[0.15em] text-fg-subtle font-mono mb-2">
                          {formatNewsDate(item.date)}
                        </p>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white group-hover:text-accent-bright transition-colors duration-300 leading-tight">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-fg-subtle group-hover:text-accent-bright group-hover:translate-x-1 transition-all duration-200 mt-2 flex-shrink-0">
                        &rarr;
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="border-b border-academy-line"
              >
                <Link to={link} className="group block py-8">
                  <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center ${isReversed ? '' : ''}`}>
                    <div className={`${isReversed ? 'md:col-start-7 md:col-span-6 md:order-2' : 'md:col-span-5'}`}>
                      <div className="relative aspect-[4/3] overflow-hidden bg-academy-dark rounded-lg">
                        {item.image && (
                          <ResponsiveImage
                            src={item.image}
                            alt={item.title}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="block w-full h-full"
                            imgClassName="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                          />
                        )}
                      </div>
                    </div>

                    <div className={`${isReversed ? 'md:col-start-1 md:col-span-5 md:order-1' : 'md:col-start-7 md:col-span-6'} space-y-3`}>
                      <div className="flex items-center gap-4">
                        <span className="section-number">{num}</span>
                        <div className="h-px flex-1 bg-academy-line" />
                        <span className="text-[11px] uppercase tracking-[0.12em] text-fg-subtle font-mono">
                          {formatNewsDate(item.date)}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white group-hover:text-accent-bright transition-colors duration-300 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-fg-subtle leading-relaxed line-clamp-2 hidden md:block">
                        {item.summary}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-fg-subtle group-hover:text-accent-bright font-medium transition-colors duration-200">
                        Skaityti daugiau <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
