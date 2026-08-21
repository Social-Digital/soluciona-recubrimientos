<template>
  <div class="not-found">
    <div class="container text-center">
      <div class="not-found__content">
        <div class="not-found__code">404</div>
        <h1>Página no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe o fue movida.</p>
        <div class="flex justify-center gap-4 flex-mobile-col" style="margin-top:var(--space-8)">
          <router-link to="/" class="btn btn-primary btn-lg">Ir al inicio</router-link>
          <router-link to="/contacto" class="btn btn-outline btn-lg">Contactarnos</router-link>
        </div>
        <div class="not-found__links">
          <p>¿Buscabas alguno de estos?</p>
          <ul>
            <li><router-link to="/divisiones/salud">División Salud</router-link></li>
            <li><router-link to="/divisiones/comercio">División Comercio</router-link></li>
            <li><router-link to="/divisiones/industrial">División Industrial</router-link></li>
            <li><router-link to="/divisiones/residencial">División Residencial</router-link></li>
            <li><router-link to="/marcas/tarkett">Tarkett</router-link></li>
            <li><router-link to="/marcas/ardex">Ardex</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta({
  titulo: 'Página no encontrada',
  descripcion: 'La página que buscas no existe. Visita nuestro sitio web para conocer nuestras soluciones en pisos y recubrimientos.',
  ruta: '/404',
})
</script>

<style scoped>
.not-found {
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-12) 0;
  background: var(--color-bg-alt);
}

@media (min-width: 768px) {
  .not-found {
    padding: var(--space-20) 0;
  }
}

.not-found__content {
  max-width: 600px;
  margin: 0 auto;
}

.not-found__code {
  font-family: var(--font-heading);
  font-size: 5rem;
  font-weight: var(--font-extrabold);
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--space-4);
  /* Efecto de texto degradado */
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (min-width: 640px) {
  .not-found__code {
    font-size: 8rem;
  }
}

.not-found h1 {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-4);
}

.not-found p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
}

.not-found__links {
  margin-top: var(--space-12);
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-border);
}

.not-found__links p {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-4);
  color: var(--color-text);
}

.not-found__links ul {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: center;
}

.not-found__links li a {
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  transition: all var(--transition-fast);
}

.not-found__links li a:hover {
  background: var(--color-primary-subtle);
  border-color: var(--color-primary);
  color: var(--color-primary-dark);
}
</style>
