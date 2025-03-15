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
  vite: {
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      },
    },
  },
});