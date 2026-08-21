<template>
  <div class="whatsapp-widget">
    <!-- Popover / Modal Flotante Dinámico -->
    <transition name="popover">
      <div v-if="isModalOpen" class="whatsapp-modal" role="dialog" aria-modal="true" aria-label="Cotizador rápido por WhatsApp">
        <!-- Header del Modal -->
        <div class="whatsapp-modal__header">
          <div class="whatsapp-modal__title">
            <div class="whatsapp-avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <strong>Cotización Rápida</strong>
              <p>Soluciona Recubrimientos</p>
            </div>
          </div>
          <button class="whatsapp-modal__close" @click="closeModal" aria-label="Cerrar modal">✕</button>
        </div>

        <!-- Body del Modal / Formulario Dinámico -->
        <div class="whatsapp-modal__body">
          <form @submit.prevent="handleSubmit" novalidate>
            <!-- Campo Nombre -->
            <div class="modal-field">
              <label for="fab-nombre" class="modal-label">Tu Nombre *</label>
              <input
                id="fab-nombre"
                v-model="form.nombre"
                type="text"
                class="modal-input"
                placeholder="Ej. María López"
                required
              >
            </div>

            <!-- Campo Sector -->
            <div class="modal-field">
              <label class="modal-label">Sector del Proyecto *</label>
              <div class="sector-chips">
                <button
                  v-for="sec in sectores"
                  :key="sec.id"
                  type="button"
                  class="sector-chip"
                  :class="{ active: form.sector === sec.nombre }"
                  @click="form.sector = sec.nombre"
                >
                  <span>{{ sec.icono }}</span> {{ sec.nombre }}
                </button>
              </div>
            </div>

            <!-- Campo Tipo Proyecto -->
            <div class="modal-field">
              <label for="fab-tipo" class="modal-label">Tipo de Recubrimiento *</label>
              <select id="fab-tipo" v-model="form.tipoProyecto" class="modal-input modal-select" required>
                <option v-for="tipo in tiposProyecto" :key="tipo" :value="tipo">
                  {{ tipo }}
                </option>
              </select>
            </div>

            <!-- Campo Detalles -->
            <div class="modal-field">
              <label for="fab-detalles" class="modal-label">Detalles adicionales (Opcional)</label>
              <textarea
                id="fab-detalles"
                v-model="form.detalles"
                class="modal-input modal-textarea"
                placeholder="Ej. Metros cuadrados estimados..."
                rows="2"
              ></textarea>
            </div>

            <p v-if="errorMessage" class="modal-error">
              {{ errorMessage }}
            </p>

            <!-- Botón de Envío por WhatsApp -->
            <button type="submit" class="btn-whatsapp-submit">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar a WhatsApp
            </button>

            <!-- Chat directo alternativo -->
            <a :href="directWhatsAppUrl" target="_blank" rel="noopener" class="direct-link">
              O iniciar chat sin datos previas
            </a>
          </form>
        </div>
      </div>
    </transition>

    <!-- Botón Burbuja Flotante -->
    <transition name="fab">
      <button
        v-if="isVisible"
        class="whatsapp-fab"
        :class="{ active: isModalOpen }"
        @click="toggleModal"
        aria-label="Abrir cotizador de WhatsApp"
      >
        <svg v-if="!isModalOpen" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span v-else class="close-icon">✕</span>
        <span v-if="!isModalOpen" class="whatsapp-fab__tooltip">¡Cotiza por WhatsApp!</span>
      </button>
    </transition>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const isModalOpen = ref(false)
const errorMessage = ref('')

const sectores = [
  { id: 'salud', nombre: 'Salud', icono: '🏥' },
  { id: 'comercio', nombre: 'Comercio', icono: '🏢' },
  { id: 'industrial', nombre: 'Industrial', icono: '🏭' },
  { id: 'residencial', nombre: 'Residencial', icono: '🏡' },
  { id: 'otro', nombre: 'Otro', icono: '🧱' },
]

const tiposProyecto = [
  'Pisos Vinílicos Homogéneos y Antibacteriales',
  'Pisos Vinílicos LVT / SPC (Tipo Madera)',
  'Recubrimientos Epóxicos Industriales',
  'Muros y Cortinas Antibacteriales',
  'Barreras de Humedad y Cementosos',
  'Tapetes de Entrada / Sanitizantes',
  'Asesoría y Suministro General',
]

const form = reactive({
  nombre: '',
  sector: 'Salud',
  tipoProyecto: 'Pisos Vinílicos Homogéneos y Antibacteriales',
  detalles: '',
})

const directWhatsAppUrl = computed(() => {
  return `https://wa.me/5216672635918?text=${encodeURIComponent('Hola, me interesa solicitar información sobre recubrimientos.')}`
})

function toggleModal() {
  isModalOpen.value = !isModalOpen.value
}

function closeModal() {
  isModalOpen.value = false
}

function handleScroll() {
  isVisible.value = window.scrollY > 200
}

function handleSubmit() {
  if (!form.nombre || !form.nombre.trim()) {
    errorMessage.value = 'Por favor ingresa tu nombre.'
    return
  }

  errorMessage.value = ''

  let texto = `¡Hola! Solicito cotización rápida desde el sitio web:\n\n`
  texto += `👤 *Nombre:* ${form.nombre.trim()}\n`
  texto += `🏢 *Sector:* ${form.sector}\n`
  texto += `🔨 *Proyecto:* ${form.tipoProyecto}\n`

  if (form.detalles && form.detalles.trim()) {
    texto += `📝 *Detalles:* ${form.detalles.trim()}\n`
  }

  const url = `https://wa.me/5216672635918?text=${encodeURIComponent(texto)}`
  window.open(url, '_blank')
  isModalOpen.value = false
}

onMounted(() => {
  setTimeout(() => { isVisible.value = true }, 1500)
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.whatsapp-widget {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  z-index: var(--z-toast);
}

@media (max-width: 768px) {
  .whatsapp-widget {
    bottom: var(--space-4);
    right: var(--space-4);
  }
}

.whatsapp-fab {
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
  border: none;
  cursor: pointer;
  position: relative;
}

@media (max-width: 768px) {
  .whatsapp-fab {
    width: 54px;
    height: 54px;
  }
}

.whatsapp-fab:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
}

.whatsapp-fab.active {
  background: #1a1a2e;
  color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.close-icon {
  font-size: 1.4rem;
  font-weight: bold;
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

/* Modal Flotante / Popover */
.whatsapp-modal {
  position: absolute;
  bottom: calc(100% + var(--space-4));
  right: 0;
  width: 340px;
  max-width: calc(100vw - 32px);
  background: #ffffff;
  border-radius: var(--radius-xl);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border: 1px solid var(--color-border-light);
  transform-origin: bottom right;
}

.whatsapp-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #095e54;
  color: #fff;
  padding: var(--space-3) var(--space-4);
}

.whatsapp-modal__title {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.whatsapp-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #25d366;
  border-radius: var(--radius-full);
}

.whatsapp-modal__title strong {
  display: block;
  font-size: var(--text-sm);
  line-height: 1.2;
}

.whatsapp-modal__title p {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.whatsapp-modal__close {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  cursor: pointer;
  padding: var(--space-1);
}

.whatsapp-modal__close:hover {
  color: #fff;
}

.whatsapp-modal__body {
  padding: var(--space-4);
}

.modal-field {
  margin-bottom: var(--space-3);
}

.modal-label {
  display: block;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

.modal-input {
  width: 100%;
  padding: var(--space-2) var(--space-3);
  font-size: 15px; /* Evita zoom en Safari */
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-sizing: border-border;
}

.modal-input:focus {
  border-color: var(--color-primary);
  outline: none;
  background: #fff;
}

.sector-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.sector-chip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 4px 8px;
  font-size: var(--text-xs);
  border-radius: var(--radius-full);
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.sector-chip:hover {
  background: var(--color-primary-subtle);
  border-color: var(--color-primary-light);
}

.sector-chip.active {
  background: var(--color-primary-subtle);
  border-color: var(--color-primary);
  color: var(--color-primary-dark);
  font-weight: var(--font-semibold);
}

.modal-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%202d3436' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-3) center;
  padding-right: var(--space-8);
  cursor: pointer;
}

.modal-textarea {
  min-height: 50px;
  resize: vertical;
}

.modal-error {
  font-size: var(--text-xs);
  color: var(--color-error);
  margin-bottom: var(--space-2);
}

.btn-whatsapp-submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3);
  background: #25d366;
  color: #fff;
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-whatsapp-submit:hover {
  background: #1da851;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.direct-link {
  display: block;
  text-align: center;
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  margin-top: var(--space-2);
}

.direct-link:hover {
  color: var(--color-primary);
}

/* Transición Popover */
.popover-enter-active {
  animation: popoverIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.popover-leave-active {
  animation: popoverIn 0.2s ease reverse;
}

@keyframes popoverIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Transición Fab */
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
</style>
