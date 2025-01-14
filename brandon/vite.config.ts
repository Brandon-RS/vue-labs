import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@about': fileURLToPath(new URL('./src/features/about', import.meta.url)),
      '@common': fileURLToPath(new URL('./src/common', import.meta.url)),
      '@contact': fileURLToPath(new URL('./src/features/contact', import.meta.url)),
      '@home': fileURLToPath(new URL('./src/features/home', import.meta.url)),
      '@projects': fileURLToPath(new URL('./src/features/projects', import.meta.url)),
    },
  },
})
