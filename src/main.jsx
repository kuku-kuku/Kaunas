import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);

const root = document.getElementById('root');

// Pages prerendered at build time (scripts/prerender.mjs) arrive with HTML inside #root:
// hydrate it. The SPA fallback (spa.html, used for CMS articles) has an empty root.
if (root.hasChildNodes()) {
  // Let the browser paint the prerendered HTML first, then hydrate on the next frame.
  // Hydrating straight away (the script often arrives before the first paint) held the
  // first paint back until React had finished.
  requestAnimationFrame(() => setTimeout(() => ReactDOM.hydrateRoot(root, app), 0));
} else {
  ReactDOM.createRoot(root).render(app);
}
