// Server entry used only at build time by scripts/prerender.mjs: renders a route to HTML
// (waiting for lazy-loaded pages) and collects the <head> tags set through react-helmet.
import React from 'react';
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { articles } from './content/lt/articles';

// Every route that exists without the CMS. CMS-only articles are rendered in the browser.
export const prerenderRoutes = [
  '/',
  '/apie',
  '/apie/tikslai',
  '/apie/etikos-kodeksas',
  '/akademija',
  '/akademija/ugdymo-programa',
  '/akademija/treneriai',
  '/akademija/baze',
  '/prisijunk',
  '/naujienos',
  '/kontaktai',
  '/registracija',
  '/privatumo-politika',
  ...articles.map((a) => `/naujienos/${a.slug}`),
];

export const articleDates = Object.fromEntries(articles.map((a) => [`/naujienos/${a.slug}`, a.date]));

export function render(url) {
  const helmetContext = {};
  return new Promise((resolve, reject) => {
    let html = '';
    const sink = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });
    sink.on('finish', () => resolve({ html, helmet: helmetContext.helmet }));

    const { pipe } = renderToPipeableStream(
      <React.StrictMode>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </React.StrictMode>,
      {
        onAllReady() {
          pipe(sink);
        },
        onShellError: reject,
        onError(error) {
          reject(error);
        },
      },
    );
  });
}
