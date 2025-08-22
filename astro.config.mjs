import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server', // ← Encore plus simple : mode serveur complet
  site: 'https://booper-website.vercel.app'
});

// Vercel détectera automatiquement l'adaptateur nécessaire