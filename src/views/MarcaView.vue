<template>
  <div v-if="marca" class="marca-view">
    <section class="page-hero">
      <div class="page-hero__overlay"></div>
      <div class="container" style="position:relative;z-index:1">
        <span class="badge">Marca</span>
        <h1>{{ marca.nombre }}</h1>
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb">
            <li><router-link to="/">Inicio</router-link></li>
            <li aria-current="page">{{ marca.nombre }}</li>
          </ol>
        </nav>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="marca-content">
          <div class="marca-text">
            <img :src="marca.logo" :alt="`Logo ${marca.nombre}`" class="marca-logo" loading="lazy" width="200" height="80">
            <h2>{{ marca.nombre }}</h2>
            <p>{{ marca.descripcion }}</p>
            <div class="flex gap-3 flex-mobile-col" style="margin-top:var(--space-6)">
              <a v-if="marca.sitioWeb !== '#'" :href="marca.sitioWeb" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                Visitar sitio oficial
              </a>
              <router-link to="/contacto" class="btn btn-primary">
                Cotizar esta marca
              </router-link>
            </div>
          </div>
          <div class="marca-sidebar">
            <div class="sidebar-card">
              <h4>Otras Marcas</h4>
              <ul class="sidebar-links">
                <li v-for="m in marcas" :key="m.slug">
                  <router-link :to="`/marcas/${m.slug}`" :class="{ active: m.slug === slug }">
                    {{ m.nombre }}
                  </router-link>
                </li>
              </ul>
              <div style="margin-top:var(--space-6)">
                <h4>Divisiones</h4>
                <ul class="sidebar-links" style="margin-top:var(--space-4)">
                  <li v-for="div in divisiones" :key="div.slug">
                    <router-link :to="`/divisiones/${div.slug}`">{{ div.nombre }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSeoMeta } from '@/composables/useSeoMeta'
import marcas from '@/data/marcas'
import divisiones from '@/data/divisiones'

const props = defineProps({ slug: String })
const route = useRoute()
const router = useRouter()

const slug = computed(() => props.slug || route.params.slug)

const marca = computed(() => {
  const found = marcas.find((m) => m.slug === slug.value)
  if (!found) {
    router.replace({ name: 'not-found' })
    return marcas[0]
  }
  return found
})

useSeoMeta({
  titulo: computed(() => `${marca.value.nombre} — Distribuidores autorizados`),
  descripcion: computed(() => marca.value.metaDescription),
  ruta: computed(() => `/marcas/${slug.value}`),
})
</script>

<style scoped>
.page-hero {
  position: relative;
  padding: calc(var(--header-height) + var(--space-10)) 0 var(--space-8);
  background: var(--gradient-dark);
  color: #fff;
}

@media (min-width: 768px) {
  .page-hero {
    padding: calc(var(--header-height) + var(--space-16)) 0 var(--space-12);
  }
}

.page-hero__overlay { position: absolute; inset: 0; background: rgba(26,26,46,0.8); }

.page-hero h1 { color: #fff; font-size: var(--text-3xl); margin: var(--space-3) 0; }

@media (min-width: 768px) {
  .page-hero h1 { font-size: var(--text-4xl); margin: var(--space-4) 0; }
}

.page-hero .badge { background: rgba(255,255,255,0.15); color: #fff; }

.breadcrumb { display: flex; flex-wrap: wrap; gap: var(--space-2); font-size: var(--text-sm); color: rgba(255,255,255,0.6); }
.breadcrumb li:not(:last-child)::after { content: '/'; margin-left: var(--space-2); color: rgba(255,255,255,0.3); }
.breadcrumb a { color: rgba(255,255,255,0.7); }

.marca-content { display: grid; grid-template-columns: 1fr; gap: var(--space-8); }

@media (min-width: 768px) {
  .marca-content { grid-template-columns: 1fr 300px; gap: var(--space-12); }
}

.marca-logo { height: 50px; width: auto; margin-bottom: var(--space-4); object-fit: contain; }

@media (min-width: 640px) {
  .marca-logo { height: 60px; margin-bottom: var(--space-6); }
}

.marca-text h2 { margin-bottom: var(--space-4); }
.marca-text p { margin-bottom: var(--space-6); }

.sidebar-card { background: var(--color-bg-alt); padding: var(--space-5); border-radius: var(--radius-xl); position: relative; }

@media (min-width: 768px) {
  .sidebar-card { padding: var(--space-6); position: sticky; top: calc(var(--header-height) + var(--space-6)); }
}

.sidebar-card h4 { margin-bottom: var(--space-4); padding-bottom: var(--space-3); border-bottom: 2px solid var(--color-border-light); }
.sidebar-links { display: flex; flex-direction: column; gap: var(--space-1); }
.sidebar-links a { display: block; padding: var(--space-3) var(--space-4); font-size: var(--text-sm); font-weight: var(--font-medium); border-radius: var(--radius-md); transition: all var(--transition-fast); min-height: 44px; }
.sidebar-links a:hover, .sidebar-links a.active { background: var(--color-primary-subtle); color: var(--color-primary-dark); }
.sidebar-links a.active { font-weight: var(--font-bold); border-left: 3px solid var(--color-primary); }
</style>
