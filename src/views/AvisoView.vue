<template>
  <div class="aviso">
    <section class="page-hero">
      <div class="page-hero__overlay"></div>
      <div class="container" style="position:relative;z-index:1">
        <h1>Aviso de Privacidad</h1>
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb">
            <li><router-link to="/">Inicio</router-link></li>
            <li aria-current="page">Aviso de Privacidad</li>
          </ol>
        </nav>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="legal-content">
          <div class="legal-body">
            <p class="update-date">Última actualización: enero 2024</p>

            <h2>Responsable del Tratamiento de Datos</h2>
            <p><strong>Soluciona Recubrimientos</strong>, con domicilio en Blvd. Xicotencatl 1184-3, Col. Las Quintas 80060, Culiacán, Sinaloa, México, es responsable del tratamiento de sus datos personales.</p>

            <h2>Datos Personales Recabados</h2>
            <p>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, podemos recabar los siguientes datos personales:</p>
            <ul>
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Información relacionada con su proyecto o consulta</li>
            </ul>

            <h2>Finalidades del Tratamiento</h2>
            <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
            <ul>
              <li>Atender sus solicitudes de información y cotización</li>
              <li>Brindarle seguimiento a su proyecto</li>
              <li>Enviarle información sobre nuestros productos y servicios</li>
              <li>Mejorar nuestros servicios y experiencia al cliente</li>
            </ul>

            <h2>Transferencia de Datos</h2>
            <p>No transferimos sus datos personales a terceros sin su consentimiento previo, salvo cuando sea requerido por autoridades competentes conforme a la legislación aplicable.</p>

            <h2>Derechos ARCO</h2>
            <p>Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (Derechos ARCO). Para ejercer estos derechos, envíe un correo a: <a :href="`mailto:${siteConfig.contacto.email}`">{{ siteConfig.contacto.email }}</a></p>

            <h2>Cambios al Aviso de Privacidad</h2>
            <p>Nos reservamos el derecho de efectuar cambios o actualizaciones al presente aviso de privacidad, mismos que serán publicados en nuestro sitio web.</p>

            <h2>Contacto</h2>
            <p>Para cualquier duda o aclaración sobre este aviso de privacidad, contáctenos en:</p>
            <ul>
              <li>Correo: <a :href="`mailto:${siteConfig.contacto.email}`">{{ siteConfig.contacto.email }}</a></li>
              <li>Teléfono: <a :href="siteConfig.contacto.telefonoLink">{{ siteConfig.contacto.telefono }}</a></li>
              <li>Dirección: {{ siteConfig.direccion.completa }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSeoMeta } from '@/composables/useSeoMeta'
import siteConfig from '@/data/siteConfig'

useSeoMeta({
  titulo: 'Aviso de Privacidad',
  descripcion: 'Aviso de privacidad de Soluciona Recubrimientos. Conoce cómo tratamos y protegemos tus datos personales.',
  ruta: '/aviso-de-privacidad',
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

.legal-content { max-width: 800px; margin: 0 auto; }
.legal-body { line-height: var(--leading-relaxed); word-break: break-word; }
.update-date { color: var(--color-text-muted); font-size: var(--text-sm); margin-bottom: var(--space-6); }
.legal-body h2 { font-size: var(--text-lg); margin: var(--space-6) 0 var(--space-3); padding-bottom: var(--space-2); border-bottom: 1px solid var(--color-border); }

@media (min-width: 640px) {
  .update-date { margin-bottom: var(--space-8); }
  .legal-body h2 { font-size: var(--text-xl); margin: var(--space-8) 0 var(--space-4); padding-bottom: var(--space-3); }
}

.legal-body ul { padding-left: var(--space-4); margin: var(--space-4) 0; }

@media (min-width: 640px) {
  .legal-body ul { padding-left: var(--space-6); }
}

.legal-body li { margin-bottom: var(--space-2); color: var(--color-text-secondary); }
</style>
