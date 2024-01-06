import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', 
    sourcemap: true, // Generate source maps
    minify: 'terser', // Specify minifier (e.g., 'terser', 'esbuild')
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Split vendor code into separate chunk
        },
      },
    },
  },
});
