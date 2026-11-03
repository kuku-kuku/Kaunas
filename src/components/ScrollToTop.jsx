import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On navigation: jump to the #anchor if the URL has one, otherwise to the top.
// Pages are lazy-loaded, so the anchor target may not exist yet; retry for a short while.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer;
    const attempt = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: 'start' });
        return;
      }
      if (tries++ < 20) timer = setTimeout(attempt, 100);
    };
    attempt();
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
