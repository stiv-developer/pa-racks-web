// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'

// https://astro.build/config

export default defineConfig({
    // site: 'https://stiv-developer.github.io',
    site: 'pa-racks-web.vercel.app',
    output: 'static',
    integrations: [sitemap()]
})
