import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.DEPLOY_ENV === 'github-pages' ? '/Portfolio/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
