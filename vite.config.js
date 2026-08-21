import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Configuración de Vite para el proyecto Soluciona Recubrimientos
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Optimización de build para rendimiento en Lighthouse
  build: {
    // Dividir CSS en chunks para carga diferida
    cssCodeSplit: true,
    // Generar sourcemaps solo en desarrollo
    sourcemap: false,
    // Configuración de rollup para code splitting
    rollupOptions: {
      output: {
        // Separar vendor chunks para mejor caché
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
        }
      }
    }
  }
})
