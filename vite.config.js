import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config
export default defineConfig({
  plugins: [react()],
  base: "/",  // Change this if your app is in a subdirectory
  build: {
    outDir: "dist",
  },
});