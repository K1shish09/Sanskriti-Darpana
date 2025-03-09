export default defineConfig({
  plugins: [react()],
  base: "/",  // Change this if your app is in a subdirectory
  build: {
    outDir: "dist",
  },
});
