// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'

// https://astro.build/config

export default defineConfig({
    site: 'https://stiv-developer.github.io',
    base: '/pa-racks-web/',
    output: 'static',
    integrations: [sitemap()]
})
