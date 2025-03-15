// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site: 'https://spiritofpsyche.com/',
  integrations: [tailwind(), mdx(), sanity({
    projectId: 'scegyxg7',
    dataset: 'production',
    useCdn: false,
    studioBasePath: '/studio',
    apiVersion: '2023-05-03', // Add API version
    // Remove studioConfig as it's not a valid property
  }), react()],
});