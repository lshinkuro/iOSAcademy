import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': { // Ganti dengan prefix API yang digunakan
        target: 'https://hon-jana-flickacademy-4e912e1a.koyeb.app', // Ganti dengan URL backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
