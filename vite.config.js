import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    // CommonJS packages without proper ESM named exports: bundle them into the
    // build-time server bundle (scripts/prerender.mjs) instead of importing from Node.
    noExternal: ['react-helmet-async'],
  },
});
