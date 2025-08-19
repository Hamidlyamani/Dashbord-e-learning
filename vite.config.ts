
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: 'jsdom', // indispensable pour tester React
    globals: true,        // permet d’utiliser describe/it/expect sans importer
    setupFiles: './src/setupTests.js' // pour config globale
  },
})
