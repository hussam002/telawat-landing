import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

/**
 * Vite configuration for Telawat Landing Page.
 *
 * Base URL is configurable via the VITE_BASE_URL environment variable,
 * which allows the same build config to work locally (base="/") and
 * on GitHub Pages (base="/telawat-landing/").
 *
 * @see https://vite.dev/config/
 */
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  base: process.env.VITE_BASE_URL ?? '/',
})
