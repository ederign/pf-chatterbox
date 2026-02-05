import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    assetsInlineLimit: 1000000, // Inline assets up to 1MB
  }
})
