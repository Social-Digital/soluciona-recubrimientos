/**
 * Composable para gestionar meta tags SEO dinámicos
 * Usa @unhead/vue para inyectar title, description, OG, Twitter Cards y canonical
 */
import { unref, computed } from 'vue'
import { useHead } from '@unhead/vue'
import siteConfig from '@/data/siteConfig'

/**
 * @param {Object} opciones - Opciones de meta SEO
 */
export function useSeoMeta({ titulo, descripcion, ruta, imagen, tipo = 'website' }) {
  const getTitulo = () => {
    const val = unref(titulo) || ''
    return `${val} | ${siteConfig.nombre}`
  }

  const getDescripcion = () => unref(descripcion) || ''
  
  const getUrlCompleta = () => `${siteConfig.url}${unref(ruta) || ''}`

  const getImagenCompleta = () => {
    const img = unref(imagen)
    if (!img) return `${siteConfig.url}/images/og-default.jpg`
    return img.startsWith('http') ? img : `${siteConfig.url}${img}`
  }

  useHead({
    title: computed(getTitulo),
    meta: [
      { name: 'description', content: computed(getDescripcion) },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: siteConfig.nombre },

      // Open Graph
      { property: 'og:title', content: computed(getTitulo) },
      { property: 'og:description', content: computed(getDescripcion) },
      { property: 'og:image', content: computed(getImagenCompleta) },
      { property: 'og:url', content: computed(getUrlCompleta) },
      { property: 'og:type', content: tipo },
      { property: 'og:site_name', content: siteConfig.nombre },
      { property: 'og:locale', content: 'es_MX' },

      // Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: computed(getTitulo) },
      { name: 'twitter:description', content: computed(getDescripcion) },
      { name: 'twitter:image', content: computed(getImagenCompleta) },
    ],
    link: [
      { rel: 'canonical', href: computed(getUrlCompleta) },
    ],
    htmlAttrs: {
      lang: 'es-MX',
    },
  })
}
