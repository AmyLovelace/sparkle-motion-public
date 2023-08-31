import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: './runtimeConfig', replacement: './runtimeConfig.browser' },
    ],
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173, 
  },
});