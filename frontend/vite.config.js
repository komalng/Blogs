import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure all code is bundled into a single file for better compatibility
    rollupOptions: {
      output: {
        // Bundle everything into a single file to avoid module resolution issues
        manualChunks: undefined,
        // Use ES modules
        format: 'es',
        // Simple naming to avoid issues
        chunkFileNames: 'js/[name].js',
        entryFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name].[ext]`
          }
          if (/css/i.test(ext)) {
            return `css/[name].[ext]`
          }
          return `assets/[name].[ext]`
        }
      }
    },
    // Target modern browsers
    target: 'esnext',
    // Use terser for better minification
    minify: 'terser',
    // Disable source maps for production
    sourcemap: false,
    // Ensure proper module resolution
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  base: '/',
  // Optimize dependencies
  optimizeDeps: {
    include: ['vue', 'vue-router', 'axios']
  },
  // Ensure proper module resolution
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}) 