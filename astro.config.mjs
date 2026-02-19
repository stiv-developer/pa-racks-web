// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'

// https://astro.build/config

export default defineConfig({
    // site: 'https://stiv-developer.github.io',
    site: 'pa-racks-oil1edasp-stivs-projects-07e042c8.vercel.app',
    output: 'static',
    integrations: [sitemap()]
})
