<template>
  <div id="app-wrapper">
    <!-- Componente de datos estructurados global -->
    <SchemaOrg />

    <!-- Header con navegación principal -->
    <AppHeader />

    <!-- Contenido principal con transición de página -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer global -->
    <AppFooter />

    <!-- Elementos flotantes -->
    <WhatsAppFab />
    <BackToTop />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import WhatsAppFab from '@/components/ui/WhatsAppFab.vue'
import BackToTop from '@/components/ui/BackToTop.vue'
import SchemaOrg from '@/components/seo/SchemaOrg.vue'
</script>

<style>
/* Estilos globales mínimos del App wrapper */
#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
