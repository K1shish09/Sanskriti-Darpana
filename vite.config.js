import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure the correct base path
  build: {
    outDir: "dist", // Vercel serves from "dist" by default
  },
});