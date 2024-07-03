import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/primera-entrega-react/',
  plugins: [react()],
  server: {
    port: 1234
  }
})
