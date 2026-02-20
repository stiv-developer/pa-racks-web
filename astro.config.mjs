// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'

// https://astro.build/config

export default defineConfig({
    site: 'https://www.pya-racks.pe',
    output: 'static',
    integrations: [sitemap()]
})
