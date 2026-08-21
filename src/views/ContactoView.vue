<template>
  <div class="contacto">
    <section class="page-hero">
      <div class="container" style="position:relative;z-index:1">
        <h1>Cotizar / Contacto</h1>
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb">
            <li><router-link to="/">Inicio</router-link></li>
            <li aria-current="page">Contacto</li>
          </ol>
        </nav>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Info de contacto -->
          <div class="contact-info">
            <h2>Información de Contacto</h2>
            <p>¿Tienes un proyecto en mente? Solicita tu cotización personalizada en menos de 1 minuto y habla directamente con uno de nuestros especialistas vía WhatsApp.</p>

            <div class="contact-items">
              <div class="contact-item">
                <div class="contact-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <strong>Dirección</strong>
                  <p>{{ siteConfig.direccion.completa }}</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <strong>WhatsApp & Teléfono</strong>
                  <p><a :href="siteConfig.contacto.celularLink" target="_blank" rel="noopener">{{ siteConfig.contacto.celular }}</a></p>
                  <p><a :href="siteConfig.contacto.telefonoLink">{{ siteConfig.contacto.telefono }}</a></p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <strong>Correo electrónico</strong>
                  <p><a :href="`mailto:${siteConfig.contacto.email}`">{{ siteConfig.contacto.email }}</a></p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <strong>Horario de atención</strong>
                  <p>{{ siteConfig.horario.semana }}</p>
                  <p>{{ siteConfig.horario.sabado }}</p>
                </div>
              </div>
            </div>

            <a :href="whatsappDirectoUrl" target="_blank" rel="noopener" class="btn btn-whatsapp-direct" style="margin-top:var(--space-6);width:100%">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat directo en WhatsApp
            </a>
          </div>

          <!-- Formulario Interactivo para WhatsApp -->
          <div class="contact-form-wrapper">
            <div class="wizard-header">
              <span class="badge">Cotizador Rápido</span>
              <h2>Cotiza tu Proyecto</h2>
              <p>Completa los datos y envía tu consulta directo a nuestro WhatsApp</p>
            </div>

            <form @submit.prevent="handleSubmitWhatsApp" class="interactive-form" novalidate>
              <!-- 1. Nombre -->
              <div class="form-group">
                <label for="nombre" class="form-label">
                  <span class="step-num">1</span> Tu Nombre *
                </label>
                <input
                  id="nombre"
                  v-model="form.nombre"
                  type="text"
                  class="form-input"
                  placeholder="Ej. Ing. Carlos Mendoza"
                  required
                >
              </div>

              <!-- 2. Sector -->
              <div class="form-group">
                <label class="form-label">
                  <span class="step-num">2</span> Sector o Área del Proyecto *
                </label>
                <div class="sector-grid">
                  <button
                    v-for="sec in sectores"
                    :key="sec.id"
                    type="button"
                    class="sector-card"
                    :class="{ active: form.sector === sec.nombre }"
                    @click="form.sector = sec.nombre"
                  >
                    <span class="sector-card__icon">{{ sec.icono }}</span>
                    <span class="sector-card__label">{{ sec.nombre }}</span>
                  </button>
                </div>
              </div>

              <!-- 3. Tipo de proyecto -->
              <div class="form-group">
                <label for="tipoProyecto" class="form-label">
                  <span class="step-num">3</span> ¿Qué recubrimiento o servicio buscas? *
                </label>
                <select id="tipoProyecto" v-model="form.tipoProyecto" class="form-input form-select" required>
                  <option value="" disabled>Selecciona una opción...</option>
                  <option v-for="tipo in tiposProyecto" :key="tipo" :value="tipo">
                    {{ tipo }}
                  </option>
                </select>
              </div>

              <!-- 4. Detalles adicionales (opcional) -->
              <div class="form-group">
                <label for="detalles" class="form-label">
                  <span class="step-num">4</span> Detalles adicionales (Opcional)
                </label>
                <textarea
                  id="detalles"
                  v-model="form.detalles"
                  class="form-textarea"
                  placeholder="Ej. Requiero cotización para 150 m² en Culiacán, fecha estimada el próximo mes..."
                  rows="3"
                ></textarea>
              </div>

              <!-- Alerta de validación -->
              <p v-if="errorMessage" class="form-message error">
                {{ errorMessage }}
              </p>

              <!-- Botón de Envío vía WhatsApp -->
              <button type="submit" class="btn btn-whatsapp-submit btn-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar Cotización por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa -->
    <section>
      <iframe
        :src="siteConfig.direccion.googleMapsEmbed"
        width="100%"
        height="400"
        style="border:0;display:block"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Ubicación de Soluciona Recubrimientos en Google Maps"
      ></iframe>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useSeoMeta } from '@/composables/useSeoMeta'
import siteConfig from '@/data/siteConfig'

useSeoMeta({
  titulo: 'Contacto y Cotizaciones',
  descripcion: 'Solicita tu cotización de pisos y recubrimientos de forma interactiva y directa a nuestro WhatsApp +52 667 263 5918. Showroom en Culiacán, Sinaloa.',
  ruta: '/contacto',
})

const sectores = [
  { id: 'salud', nombre: 'Salud / Hospitalario', icono: '🏥' },
  { id: 'comercio', nombre: 'Comercial / Retail', icono: '🏢' },
  { id: 'industrial', nombre: 'Industrial', icono: '🏭' },
  { id: 'residencial', nombre: 'Residencial', icono: '🏡' },
  { id: 'otro', nombre: 'Otro Sector', icono: '🧱' },
]

const tiposProyecto = [
  'Pisos Vinílicos Homogéneos y Antibacteriales',
  'Pisos Vinílicos LVT / SPC (Tipo Madera)',
  'Recubrimientos Epóxicos Industriales',
  'Muros y Cortinas Antibacteriales',
  'Barreras de Humedad y Autonivelantes Cementosos',
  'Tapetes de Entrada / Sanitizantes',
  'Asesoría y Suministro General',
]

const form = reactive({
  nombre: '',
  sector: 'Salud / Hospitalario',
  tipoProyecto: 'Pisos Vinílicos Homogéneos y Antibacteriales',
  detalles: '',
})

const errorMessage = ref('')

const whatsappDirectoUrl = computed(() => {
  return `https://wa.me/5216672635918?text=${encodeURIComponent('Hola, me interesa solicitar información sobre recubrimientos.')}`
})

function handleSubmitWhatsApp() {
  if (!form.nombre || !form.nombre.trim()) {
    errorMessage.value = 'Por favor escribe tu nombre completo para personalizar tu consulta.'
    return
  }

  errorMessage.value = ''

  // Construir mensaje estructurado para WhatsApp
  let texto = `¡Hola! Solicito cotización desde el sitio web:\n\n`
  texto += `👤 *Nombre:* ${form.nombre.trim()}\n`
  texto += `🏢 *Sector:* ${form.sector}\n`
  texto += `🔨 *Proyecto:* ${form.tipoProyecto}\n`

  if (form.detalles && form.detalles.trim()) {
    texto += `📝 *Detalles adicionales:* ${form.detalles.trim()}\n`
  }

  const whatsappUrl = `https://wa.me/5216672635918?text=${encodeURIComponent(texto)}`

  // Abrir WhatsApp en una nueva pestaña
  window.open(whatsappUrl, '_blank')
}
</script>

<style scoped>
.page-hero {
  position: relative;
  padding: calc(var(--header-height) + var(--space-8)) 0 var(--space-6);
  background: var(--gradient-dark);
  color: #fff;
}

@media (min-width: 768px) {
  .page-hero {
    padding: calc(var(--header-height) + var(--space-16)) 0 var(--space-12);
  }
}

.page-hero h1 {
  color: #fff;
  font-size: var(--text-2xl);
  margin-bottom: var(--space-2);
}

@media (min-width: 640px) {
  .page-hero h1 {
    font-size: var(--text-3xl);
    margin-bottom: var(--space-3);
  }
}

@media (min-width: 768px) {
  .page-hero h1 {
    font-size: var(--text-4xl);
    margin-bottom: var(--space-4);
  }
}

.breadcrumb { display: flex; flex-wrap: wrap; gap: var(--space-2); font-size: var(--text-sm); color: rgba(255,255,255,0.6); }
.breadcrumb li:not(:last-child)::after { content: '/'; margin-left: var(--space-2); color: rgba(255,255,255,0.3); }
.breadcrumb a { color: rgba(255,255,255,0.7); }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1.4fr;
    gap: var(--space-10);
  }
}

.contact-info h2,
.wizard-header h2 {
  font-size: var(--text-xl);
  margin-bottom: var(--space-2);
}

@media (min-width: 640px) {
  .contact-info h2,
  .wizard-header h2 {
    font-size: var(--text-2xl);
  }
}

.wizard-header {
  margin-bottom: var(--space-5);
}

.wizard-header p {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.contact-info > p {
  font-size: var(--text-sm);
  margin-bottom: var(--space-6);
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.contact-item {
  display: flex;
  gap: var(--space-3);
}

.contact-item__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-primary-subtle);
  color: var(--color-primary);
  border-radius: var(--radius-lg);
}

@media (min-width: 640px) {
  .contact-item__icon {
    width: 48px;
    height: 48px;
  }
}

.contact-item strong {
  display: block;
  margin-bottom: 2px;
  font-size: var(--text-sm);
  color: var(--color-text);
}

.contact-item p {
  font-size: var(--text-sm);
  margin: 0;
  line-height: var(--leading-normal);
  word-break: break-word;
}

.btn-whatsapp-direct {
  background: #25d366;
  color: #fff;
  border-color: #25d366;
  white-space: normal;
  text-align: center;
}

.btn-whatsapp-direct:hover {
  background: #1da851;
  color: #fff;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
}

.contact-form-wrapper {
  background: var(--color-bg-card);
  padding: var(--space-4);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-light);
  width: 100%;
  box-sizing: border-border;
}

@media (min-width: 480px) {
  .contact-form-wrapper {
    padding: var(--space-6);
  }
}

@media (min-width: 768px) {
  .contact-form-wrapper {
    padding: var(--space-8);
  }
}

.form-label {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-2);
}

.step-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: var(--color-primary);
  color: #fff;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  flex-shrink: 0;
}

/* Tarjetas de sector Mobile-First */
.sector-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

@media (min-width: 480px) {
  .sector-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-3);
  }
}

@media (min-width: 768px) {
  .sector-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.sector-card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-alt);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-fast);
  text-align: left;
  width: 100%;
  box-sizing: border-box;
}

@media (min-width: 480px) {
  .sector-card {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: var(--space-3) var(--space-2);
  }
}

.sector-card:hover {
  border-color: var(--color-primary-light);
  background: var(--color-primary-subtle);
}

.sector-card.active {
  border-color: var(--color-primary);
  background: var(--color-primary-subtle);
  box-shadow: 0 0 0 2px rgba(212, 146, 42, 0.2);
}

.sector-card__icon {
  font-size: 1.3rem;
  line-height: 1;
}

@media (min-width: 480px) {
  .sector-card__icon {
    font-size: 1.5rem;
    margin-bottom: var(--space-1);
  }
}

.sector-card__label {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-text);
  line-height: 1.2;
}

.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%202d3436' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-3) center;
  padding-right: var(--space-8);
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  text-overflow: ellipsis;
}

.form-input,
.form-textarea {
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

.btn-whatsapp-submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  background: #25d366;
  color: #fff;
  border: 1px solid #25d366;
  border-radius: var(--radius-md);
  margin-top: var(--space-4);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  white-space: normal;
  text-align: center;
  line-height: 1.3;
  cursor: pointer;
}

.btn-whatsapp-submit:hover {
  background: #1da851;
  border-color: #1da851;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
}

.form-message {
  margin-top: var(--space-4);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
}

.form-message.error {
  background: #f8d7da;
  color: #721c24;
}
</style>
