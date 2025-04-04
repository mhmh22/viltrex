import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd())
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    build: {
      sourcemap: mode === 'development',
      minify: 'terser',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-components': ['@radix-ui/react-dialog', '@radix-ui/react-form', '@radix-ui/react-select', '@radix-ui/react-label'],
            'charts': ['recharts'],
            'flow': ['reactflow']
          }
        }
      },
      target: 'esnext',
      outDir: 'dist',
      assetsDir: 'assets',
      chunkSizeWarningLimit: 1000
    },
    server: {
      port: 3000,
      strictPort: true,
      host: true
    }
  }
})
