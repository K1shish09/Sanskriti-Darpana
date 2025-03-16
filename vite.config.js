import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/",  // Change this if your app is in a subdirectory
  build: {
    outDir: "dist",
  },
});