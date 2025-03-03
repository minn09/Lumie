import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  root: 'app/client',
  resolve: {
    alias: {
      '@': resolve(__dirname, './app/client/src'),
      '@shared': resolve(__dirname, './app/shared')
    }
  }
})
