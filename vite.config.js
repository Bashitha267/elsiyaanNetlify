import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Optional: Opens browser automatically
  },
  build: {
    outDir: "dist", // Ensures Netlify uses the correct folder
  },
});
