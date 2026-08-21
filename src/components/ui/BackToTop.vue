<template>
  <transition name="fab">
    <button
      v-if="isVisible"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="Volver al inicio de la página"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

function handleScroll() {
  isVisible.value = window.scrollY > 500
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: var(--space-6);
  left: var(--space-6);
  z-index: var(--z-toast);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: var(--radius-full);
  backdrop-filter: blur(8px);
  transition: all var(--transition-fast);
}

.back-to-top:hover {
  background: var(--color-primary);
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.fab-enter-active {
  animation: fadeInUp 0.3s ease-out;
}

.fab-leave-active {
  animation: fadeIn 0.2s ease reverse;
}

@media (max-width: 768px) {
  .back-to-top {
    width: 38px;
    height: 38px;
    bottom: var(--space-4);
    left: var(--space-4);
  }
}
</style>
