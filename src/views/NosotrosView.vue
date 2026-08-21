<template>
  <div class="nosotros">
    <!-- Hero de página -->
    <section class="page-hero">
      <div class="page-hero__overlay"></div>
      <div class="container" style="position:relative;z-index:1">
        <h1>Nosotros</h1>
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb">
            <li><router-link to="/">Inicio</router-link></li>
            <li aria-current="page">Nosotros</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Perfil de la compañía -->
    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <span class="badge">Desde 2009</span>
            <h2>Perfil de la Compañía</h2>
            <p>Soluciona Recubrimientos es una empresa especializada en la venta e instalación de recubrimientos para exteriores como para interiores, de cualquier área, ya sea Industrial, Salud, Retail o Residencial.</p>
            <p>Nuestra empresa inició operaciones en abril del año 2009, inicialmente con la comercialización de cortinas antibacteriales y hasta la actualidad ha expandido sus servicios a recubrimientos de cualquier área.</p>

            <div class="values-grid">
              <div class="value-card">
                <h3>Misión</h3>
                <p>Ofrecer productos y soluciones de recubrimiento con altos estándares de calidad, tecnología de vanguardia y personal altamente calificado para satisfacer las necesidades de cada proyecto.</p>
              </div>
              <div class="value-card">
                <h3>Visión</h3>
                <p>Ser la empresa líder en soluciones de recubrimiento en el noroeste de México, reconocida por la calidad de nuestros productos, servicio y compromiso con la innovación.</p>
              </div>
            </div>
          </div>
          <div class="about-images">
            <div class="about-images__grid">
              <img src="/images/nosotros/mision1.jpg" alt="Equipo de trabajo de Soluciona Recubrimientos" loading="lazy" width="300" height="200">
              <img src="/images/nosotros/mision2.jpg" alt="Instalación profesional de pisos" loading="lazy" width="300" height="200">
              <img src="/images/nosotros/mision3.jpg" alt="Showroom de pisos y recubrimientos" loading="lazy" width="300" height="200">
              <img src="/images/nosotros/mision4.jpg" alt="Proyecto completado de recubrimiento" loading="lazy" width="300" height="200">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-alt">
      <div class="container text-center">
        <h2>Tenemos una gran lista de clientes satisfechos</h2>
        <p style="margin-bottom:var(--space-8)">Si quieres ser parte de ellos, ¡contáctanos!</p>
        <router-link to="/contacto" class="btn btn-primary btn-lg">Contactar ahora</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta({
  titulo: 'Nosotros',
  descripcion: 'Conoce a Soluciona Recubrimientos, empresa especializada en pisos y recubrimientos desde 2009 en Culiacán, Sinaloa. Misión, visión y valores.',
  ruta: '/nosotros',
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

.page-hero h1 {
  color: #fff;
  font-size: var(--text-3xl);
  margin-bottom: var(--space-4);
}

@media (min-width: 768px) {
  .page-hero h1 {
    font-size: var(--text-4xl);
  }
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.6);
}

.breadcrumb li:not(:last-child)::after {
  content: '/';
  margin-left: var(--space-2);
  color: rgba(255, 255, 255, 0.3);
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.7);
}

.breadcrumb a:hover {
  color: var(--color-primary-light);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  align-items: start;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-12);
  }
}

.about-text .badge {
  margin-bottom: var(--space-4);
}

.about-text h2 {
  margin-bottom: var(--space-4);
}

.about-text p {
  margin-bottom: var(--space-4);
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
  margin-top: var(--space-6);
}

@media (min-width: 640px) {
  .values-grid {
    grid-template-columns: 1fr 1fr;
    margin-top: var(--space-8);
  }
}

.value-card {
  padding: var(--space-5);
  background: var(--color-bg-alt);
  border-radius: var(--radius-xl);
  border-left: 4px solid var(--color-primary);
}

@media (min-width: 640px) {
  .value-card {
    padding: var(--space-6);
  }
}

.value-card h3 {
  font-size: var(--text-lg);
  margin-bottom: var(--space-3);
  color: var(--color-primary-dark);
}

.value-card p {
  font-size: var(--text-sm);
  margin-bottom: 0;
}

.about-images__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
}

@media (min-width: 640px) {
  .about-images__grid {
    gap: var(--space-4);
  }
}

.about-images__grid img {
  border-radius: var(--radius-lg);
  width: 100%;
  height: 150px;
  object-fit: cover;
  transition: transform var(--transition-base);
}

@media (min-width: 640px) {
  .about-images__grid img {
    height: 200px;
  }
}

.about-images__grid img:hover {
  transform: scale(1.03);
}

@media (min-width: 768px) {
  .about-images__grid img:nth-child(2) {
    transform: translateY(var(--space-6));
  }

  .about-images__grid img:nth-child(2):hover {
    transform: translateY(var(--space-6)) scale(1.03);
  }
}
</style>
