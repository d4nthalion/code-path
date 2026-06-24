import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/piston': {
        target: 'http://localhost:2000/api/v2',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/piston/, ''),
      },
    },
  },
})
