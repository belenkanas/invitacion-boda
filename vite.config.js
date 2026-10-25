import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" hace que funcione en cualquier URL (GitHub Pages, Netlify, dominio propio)
export default defineConfig({
  plugins: [react()],
  base: "./",
});
