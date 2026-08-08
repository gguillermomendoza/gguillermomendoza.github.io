// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site (gguillermomendoza.github.io) — no base path.
// If this ever moves to a custom domain, only `site` needs to change.
export default defineConfig({
  site: 'https://gguillermomendoza.github.io/',
  integrations: [sitemap()],
});
