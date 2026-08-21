<template>
  <transition name="fab">
    <a
      v-if="isVisible"
      :href="siteConfig.contacto.whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-fab"
      aria-label="Contactar por WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-fab__tooltip">¡Cotiza ahora!</span>
    </a>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import siteConfig from '@/data/siteConfig'

const isVisible = ref(false)

function handleScroll() {
  // Mostrar después de 300px de scroll
  isVisible.value = window.scrollY > 300
}

onMounted(() => {
  // Mostrar inmediatamente después de un breve delay
  setTimeout(() => { isVisible.value = true }, 2000)
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.whatsapp-fab {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  z-index: var(--z-toast);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: #25d366;
  color: #fff;
  border-radius: var(--radius-full);
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
  transition: all var(--transition-base);
}

.whatsapp-fab:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
  color: #fff;
}

.whatsapp-fab__tooltip {
  position: absolute;
  right: calc(100% + var(--space-3));
  background: #fff;
  color: var(--color-text);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  white-space: nowrap;
  box-shadow: var(--shadow-lg);
  opacity: 0;
  transform: translateX(10px);
  transition: all var(--transition-fast);
  pointer-events: none;
}

.whatsapp-fab:hover .whatsapp-fab__tooltip {
  opacity: 1;
  transform: translateX(0);
}

/* Animación de entrada/salida */
.fab-enter-active {
  animation: fabBounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fab-leave-active {
  animation: fadeIn 0.2s ease reverse;
}

@keyframes fabBounceIn {
  from {
    opacity: 0;
    transform: scale(0) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@media (max-width: 768px) {
  .whatsapp-fab {
    width: 52px;
    height: 52px;
    bottom: var(--space-4);
    right: var(--space-4);
  }

  .whatsapp-fab__tooltip {
    display: none;
  }
}
</style>
