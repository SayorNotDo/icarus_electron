import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    proxy: {
      '/v1/api/user': {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      '/v1/inner': {
        target: "http://0.0.0.0:80",
        changeOrigin: true,
      }
    }
  },
})
