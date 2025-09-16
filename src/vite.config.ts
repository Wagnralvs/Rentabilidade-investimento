import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 importante para GitHub Pages:
  // substitua "meu-projeto" pelo nome do seu repositório
  base: '/Rentabilidade-investimento/',
   build: {
    outDir: 'build'   // 👈 gera a pasta "build" em vez de "dist"
  }
})
