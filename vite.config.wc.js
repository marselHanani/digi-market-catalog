import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    vue(),

    cssInjectedByJsPlugin({
      topExecutionPriority: true,
    }),
  ],

  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    lib: {
      entry: 'src/catalog-element.js',
      name: 'DigiCatalog',
      fileName: 'digi-catalog',
      formats: ['es'],
    },

    cssCodeSplit: false,

    rollupOptions: {
      external: [],
    },
  },
})
