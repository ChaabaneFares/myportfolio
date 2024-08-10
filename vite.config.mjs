import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public',  // Keep this if your index.html is in the public folder
  build: {
    outDir: '../dist',  // Ensure this is pointing to where you want the build files
  },

});
