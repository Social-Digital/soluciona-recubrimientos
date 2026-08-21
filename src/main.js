import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import router from './router'

// Importar estilos base del sistema de diseño
import '@/assets/styles/variables.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/base.css'
import '@/assets/styles/layout.css'
import '@/assets/styles/animations.css'

const app = createApp(App)

// Plugin para gestión de meta tags SEO dinámicos
const head = createHead()
app.use(head)

// Router con rutas limpias sin .html
app.use(router)

app.mount('#app')
