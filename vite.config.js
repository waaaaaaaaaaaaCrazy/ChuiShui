import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  //解决跨域问题
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:80', // 后端地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 移除路径中的 /api 前缀
      }
    }
  }
})
