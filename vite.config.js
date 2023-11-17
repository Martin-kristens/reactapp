import { defineConfig } from 'vite'
import ViteSassPlugin from 'vite-plugin-sass'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSassPlugin()
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@images': path.resolve(__dirname, 'src/assets/images')
    }
  }
})

// HÄR KAN MAN TEX ÄNDRA PORTNUMMER OSV
// KAN SÄTTA ALIAS PÅ TEX SÖKVÄGAR