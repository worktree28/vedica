import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Build optimizations
  build: {
    // Enable minification
    minify: 'terser',

    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },

    // Increase chunk size warning limit (images can be large)
    chunkSizeWarningLimit: 1000,
  }
})
