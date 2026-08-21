/**
 * Vue Router — Rutas limpias sin .html
 * Incluye redirects para URLs antiguas y scroll behavior
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  // Scroll al inicio al navegar, excepto con hash
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },

  routes: [
    // — Páginas principales —
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: () => import('@/views/NosotrosView.vue'),
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('@/views/ContactoView.vue'),
    },
    {
      path: '/casos-de-exito',
      name: 'casos-exito',
      component: () => import('@/views/CasosExitoView.vue'),
    },
    {
      path: '/aviso-de-privacidad',
      name: 'aviso',
      component: () => import('@/views/AvisoView.vue'),
    },

    // — Páginas dinámicas de marcas —
    {
      path: '/marcas/:slug',
      name: 'marca',
      component: () => import('@/views/MarcaView.vue'),
      props: true,
    },

    // — Páginas dinámicas de divisiones —
    {
      path: '/divisiones/:slug',
      name: 'division',
      component: () => import('@/views/DivisionView.vue'),
      props: true,
    },

    // — Redirects de URLs antiguas (.html) para no perder SEO —
    { path: '/index.html', redirect: '/' },
    { path: '/nosotros.html', redirect: '/nosotros' },
    { path: '/contacto.html', redirect: '/contacto' },
    { path: '/contact.html', redirect: '/contacto' },
    { path: '/exito.html', redirect: '/casos-de-exito' },
    { path: '/exito2.html', redirect: '/casos-de-exito' },
    { path: '/exito3.html', redirect: '/casos-de-exito' },
    { path: '/aviso.html', redirect: '/aviso-de-privacidad' },
    { path: '/tarkett.html', redirect: '/marcas/tarkett' },
    { path: '/ardex.html', redirect: '/marcas/ardex' },
    { path: '/ultralam.html', redirect: '/marcas/ultralam' },
    { path: '/divisiones/salud.html', redirect: '/divisiones/salud' },
    { path: '/divisiones/comercio.html', redirect: '/divisiones/comercio' },
    { path: '/divisiones/industrial.html', redirect: '/divisiones/industrial' },
    { path: '/divisiones/residencial.html', redirect: '/divisiones/residencial' },
    { path: '/divisiones/tapetes.html', redirect: '/divisiones/tapetes' },

    // — 404 —
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
