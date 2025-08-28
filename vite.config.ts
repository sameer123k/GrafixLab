import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: ['canvas-capture'], // prevent SSR from bundling canvas-capture
  },
  define: {
    self: 'window', // fallback for `self` usage in browser libs
  },
});
