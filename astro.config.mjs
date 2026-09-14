// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL: origen público (para que og:image sea absoluto). BASE_PATH: "/legacy-demo" en GitHub Pages, "/" en Vercel.
const site = process.env.SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:4321');
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'never',
});
