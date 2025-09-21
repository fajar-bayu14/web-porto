import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      optipng: { optimizationLevel: 7 }, // compress PNG
      pngquant: { quality: [0.6, 0.8] }, // quality range 60% - 80%
      svgo: false, // skip SVG kalau ga perlu
    }),
  ],
  base: process.env.VITE_BASE_PATH || "/"
})
