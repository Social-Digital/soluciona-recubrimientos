<template>
  <div class="contacto">
    <section class="page-hero">
      <div class="container" style="position:relative;z-index:1">
        <h1>Contacto</h1>
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
            <p>¿Tienes un proyecto? Escríbenos y te asesoramos sin compromiso.</p>

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
                  <strong>Teléfono</strong>
                  <p><a :href="siteConfig.contacto.celularLink">{{ siteConfig.contacto.celular }}</a></p>
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
                  <strong>Horario</strong>
                  <p>{{ siteConfig.horario.semana }}</p>
                  <p>{{ siteConfig.horario.sabado }}</p>
                </div>
              </div>
            </div>

            <a :href="siteConfig.contacto.whatsapp" target="_blank" rel="noopener" class="btn btn-primary btn-lg" style="margin-top:var(--space-6);width:100%">
              Escribir por WhatsApp
            </a>
          </div>

          <!-- Formulario -->
          <div class="contact-form-wrapper">
            <h2>Enviar Mensaje</h2>
            <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="nombre" class="form-label">Nombre *</label>
                  <input id="nombre" v-model="form.nombre" type="text" class="form-input" placeholder="Tu nombre completo" required>
                </div>
                <div class="form-group">
                  <label for="email" class="form-label">Correo electrónico *</label>
                  <input id="email" v-model="form.email" type="email" class="form-input" placeholder="tu@correo.com" required>
                </div>
              </div>
              <div class="form-group">
                <label for="telefono" class="form-label">Teléfono</label>
                <input id="telefono" v-model="form.telefono" type="tel" class="form-input" placeholder="667 123 4567">
              </div>
              <div class="form-group">
                <label for="mensaje" class="form-label">Mensaje *</label>
                <textarea id="mensaje" v-model="form.mensaje" class="form-textarea" placeholder="Cuéntanos sobre tu proyecto..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg" :disabled="isSubmitting" style="width:100%">
                {{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}
              </button>
              <p v-if="submitMessage" class="form-message" :class="submitSuccess ? 'success' : 'error'">
                {{ submitMessage }}
              </p>
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
import { ref, reactive } from 'vue'
import { useSeoMeta } from '@/composables/useSeoMeta'
import siteConfig from '@/data/siteConfig'

useSeoMeta({
  titulo: 'Contacto',
  descripcion: 'Contáctanos para cotizar pisos y recubrimientos. Visítanos en nuestro showroom en Culiacán, Sinaloa. WhatsApp, teléfono y correo electrónico.',
  ruta: '/contacto',
})

const form = reactive({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: '',
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

async function handleSubmit() {
  // Validación básica del lado del cliente
  if (!form.nombre || !form.email || !form.mensaje) {
    submitMessage.value = 'Por favor completa todos los campos obligatorios.'
    submitSuccess.value = false
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // Envío via Web3Forms (servicio gratuito sin backend)
    // Se puede reemplazar por Firebase Cloud Functions u otro servicio
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'TU_API_KEY_WEB3FORMS', // Reemplazar con API key real
        name: form.nombre,
        email: form.email,
        phone: form.telefono,
        message: form.mensaje,
        subject: `Nuevo contacto desde solucionarecubrimientos.com - ${form.nombre}`,
      }),
    })

    const data = await response.json()

    if (data.success) {
      submitMessage.value = '¡Mensaje enviado correctamente! Te contactaremos pronto.'
      submitSuccess.value = true
      // Limpiar formulario
      Object.assign(form, { nombre: '', email: '', telefono: '', mensaje: '' })
    } else {
      throw new Error('Error en el envío')
    }
  } catch {
    submitMessage.value = 'Hubo un error al enviar. Intenta por WhatsApp o correo electrónico.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}
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

.page-hero h1 {
  color: #fff;
  font-size: var(--text-3xl);
  margin-bottom: var(--space-3);
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
  gap: var(--space-8);
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1.5fr;
    gap: var(--space-12);
  }
}

.contact-info h2,
.contact-form-wrapper h2 {
  margin-bottom: var(--space-4);
}

.contact-info > p {
  margin-bottom: var(--space-6);
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.contact-item {
  display: flex;
  gap: var(--space-4);
}

.contact-item__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
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
  margin-bottom: var(--space-1);
  font-size: var(--text-sm);
  color: var(--color-text);
}

.contact-item p {
  font-size: var(--text-sm);
  margin: 0;
  line-height: var(--leading-normal);
  word-break: break-word;
}

.contact-form-wrapper {
  background: var(--color-bg-alt);
  padding: var(--space-5);
  border-radius: var(--radius-xl);
}

@media (min-width: 640px) {
  .contact-form-wrapper {
    padding: var(--space-8);
  }
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-5);
  }
}

.form-message {
  margin-top: var(--space-4);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
}

.form-message.success {
  background: #d4edda;
  color: #155724;
}

.form-message.error {
  background: #f8d7da;
  color: #721c24;
}
</style>
