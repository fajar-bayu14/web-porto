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
      optipng: { optimizationLevel: 7 },
      pngquant: { quality: [0.6, 0.8] },
      svgo: false,
      webp: { quality: 75 }
    }),
  ],
  base: process.env.VITE_BASE_PATH || "/"
})
