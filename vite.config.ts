import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig(() => {
  return {
    base: '/avijit/',
    plugins: [
      react(), 
      tailwindcss(),
      Sitemap({
        hostname: 'https://avijit-990.github.io',
        dynamicRoutes: [
          '/avijit/' // Forces the correct GitHub Pages subfolder path
        ],
        exclude: [
          '/', // Removes the incorrect root URL
          '/google4801c7141dc24df1' // Prevents indexing the Google verification file
        ]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
