import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'hybrid', // hybrid au lieu de server
  site: 'https://booper-website.vercel.app',
  vite: {
    ssr: {
      external: ['node:fs', 'node:path']
    }
  }
});

// Vercel détectera automatiquement qu'il faut utiliser l'adaptateur