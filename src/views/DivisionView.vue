<template>
  <div v-if="division" class="division-view">
    <section class="page-hero" :style="{ backgroundImage: `url(${division.imagen})` }">
      <div class="page-hero__overlay"></div>
      <div class="container" style="position:relative;z-index:1">
        <span class="badge">División</span>
        <h1>{{ division.titulo }}</h1>
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb">
            <li><router-link to="/">Inicio</router-link></li>
            <li><a href="#" @click.prevent>Divisiones</a></li>
            <li aria-current="page">{{ division.nombre }}</li>
          </ol>
        </nav>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="division-content">
          <div class="division-text">
            <h2>{{ division.nombre }}</h2>
            <p>{{ division.descripcion }}</p>

            <h3 style="margin-top:var(--space-8);margin-bottom:var(--space-4)">Características</h3>
            <ul class="feature-list">
              <li v-for="(feat, i) in division.caracteristicas" :key="i">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                {{ feat }}
              </li>
            </ul>

            <div class="cta-box">
              <h4>¿Necesitas una cotización?</h4>
              <p>Contáctanos y te asesoramos sin compromiso</p>
              <div class="flex gap-4 flex-mobile-col" style="margin-top:var(--space-4)">
                <router-link to="/contacto" class="btn btn-primary">Cotizar ahora</router-link>
                <a :href="siteConfig.contacto.whatsapp" target="_blank" rel="noopener" class="btn btn-outline">WhatsApp</a>
              </div>
            </div>
          </div>
          <div class="division-sidebar">
            <div class="sidebar-card">
              <h4>Otras Divisiones</h4>
              <ul class="sidebar-links">
                <li v-for="div in otrasDivisiones" :key="div.slug">
                  <router-link :to="`/divisiones/${div.slug}`" :class="{ active: div.slug === slug }">
                    {{ div.nombre }}
                  </router-link>
                </li>
              </ul>
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
import siteConfig from '@/data/siteConfig'
import divisiones from '@/data/divisiones'

const props = defineProps({ slug: String })
const route = useRoute()
const router = useRouter()

const slug = computed(() => props.slug || route.params.slug)

const division = computed(() => {
  const found = divisiones.find((d) => d.slug === slug.value)
  if (!found) {
    router.replace({ name: 'not-found' })
    return divisiones[0] // Fallback para evitar error de render
  }
  return found
})

const otrasDivisiones = computed(() => divisiones)

// SEO dinámico basado en la división actual
useSeoMeta({
  titulo: computed(() => division.value.titulo),
  descripcion: computed(() => division.value.metaDescription),
  ruta: computed(() => `/divisiones/${slug.value}`),
  imagen: computed(() => division.value.imagen),
})
</script>

<style scoped>
.page-hero {
  position: relative;
  padding: calc(var(--header-height) + var(--space-10)) 0 var(--space-8);
  background: center center / cover no-repeat;
  color: #fff;
}

@media (min-width: 768px) {
  .page-hero {
    padding: calc(var(--header-height) + var(--space-20)) 0 var(--space-16);
  }
}

.page-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(26,26,46,0.7) 0%, rgba(26,26,46,0.85) 100%);
}

.page-hero h1 { color: #fff; font-size: var(--text-3xl); margin: var(--space-3) 0; }

@media (min-width: 768px) {
  .page-hero h1 { font-size: var(--text-4xl); margin: var(--space-4) 0; }
}

.page-hero .badge { background: rgba(255,255,255,0.15); color: #fff; }

.breadcrumb { display: flex; flex-wrap: wrap; gap: var(--space-2); font-size: var(--text-sm); color: rgba(255,255,255,0.6); }
.breadcrumb li:not(:last-child)::after { content: '/'; margin-left: var(--space-2); color: rgba(255,255,255,0.3); }
.breadcrumb a { color: rgba(255,255,255,0.7); }

.division-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
}

@media (min-width: 768px) {
  .division-content {
    grid-template-columns: 1fr 300px;
    gap: var(--space-12);
  }
}

.division-text h2 { margin-bottom: var(--space-4); }

.feature-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-base);
  color: var(--color-text);
}

.cta-box {
  margin-top: var(--space-8);
  padding: var(--space-5);
  background: var(--color-primary-subtle);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(212, 146, 42, 0.2);
}

@media (min-width: 640px) {
  .cta-box {
    margin-top: var(--space-10);
    padding: var(--space-8);
  }
}

.cta-box h4 { margin-bottom: var(--space-2); }

.sidebar-card {
  background: var(--color-bg-alt);
  padding: var(--space-5);
  border-radius: var(--radius-xl);
  position: relative;
}

@media (min-width: 768px) {
  .sidebar-card {
    padding: var(--space-6);
    position: sticky;
    top: calc(var(--header-height) + var(--space-6));
  }
}

.sidebar-card h4 {
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 2px solid var(--color-border-light);
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.sidebar-links a {
  display: block;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  min-height: 44px;
}

.sidebar-links a:hover,
.sidebar-links a.active {
  background: var(--color-primary-subtle);
  color: var(--color-primary-dark);
}

.sidebar-links a.active {
  font-weight: var(--font-bold);
  border-left: 3px solid var(--color-primary);
}
</style>
