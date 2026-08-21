<template>
  <div class="casos-exito">
    <section class="page-hero">
      <div class="page-hero__overlay"></div>
      <div class="container" style="position:relative;z-index:1">
        <span class="badge">Portafolio</span>
        <h1>Casos de Éxito</h1>
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb">
            <li><router-link to="/">Inicio</router-link></li>
            <li aria-current="page">Casos de Éxito</li>
          </ol>
        </nav>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Proyectos Realizados</h2>
          <p>Conoce algunos de nuestros proyectos más representativos</p>
        </div>
        <div class="grid grid-3">
          <div v-for="(proyecto, index) in proyectos" :key="index" class="proyecto-card reveal" :class="`delay-${(index % 3) + 1}`">
            <div class="proyecto-card__image">
              <img :src="proyecto.imagen" :alt="proyecto.alt" loading="lazy" width="400" height="280">
              <div class="proyecto-card__overlay">
                <span class="badge">{{ proyecto.categoria }}</span>
              </div>
            </div>
            <div class="proyecto-card__body">
              <span class="badge" style="margin-bottom:var(--space-2)">{{ proyecto.categoria }}</span>
              <h3>{{ proyecto.titulo }}</h3>
              <p>{{ proyecto.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container text-center">
        <h2>¿Quieres que tu proyecto sea el siguiente?</h2>
        <p style="margin-bottom:var(--space-8)">Contáctanos y cotiza sin compromiso</p>
        <router-link to="/contacto" class="btn btn-primary btn-lg">Solicitar cotización</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta({
  titulo: 'Casos de Éxito',
  descripcion: 'Conoce los proyectos de instalación de pisos y recubrimientos que hemos completado para el sector salud, comercial, industrial y residencial en Culiacán.',
  ruta: '/casos-de-exito',
})

const proyectos = [
  { imagen: '/images/proyectos/hospital1.jpg', alt: 'Piso antibacterial instalado en hospital', titulo: 'Hospital Privado', categoria: 'Salud', descripcion: 'Instalación de pisos vinílicos homogéneos Tarkett en área de quirófanos y pasillos de un hospital privado en Culiacán.' },
  { imagen: '/images/proyectos/retail1.jpg', alt: 'Piso decorativo en tienda de ropa', titulo: 'Tienda de Moda', categoria: 'Comercial', descripcion: 'Aplicación de piso LVT Aurea Pro en local comercial con diseño tipo madera de alto tráfico.' },
  { imagen: '/images/proyectos/industrial1.jpg', alt: 'Piso epóxico en bodega industrial', titulo: 'Planta Industrial', categoria: 'Industrial', descripcion: 'Recubrimiento epóxico autonivelante Ardex para bodega de almacenamiento con requerimientos de resistencia química.' },
  { imagen: '/images/proyectos/residencial1.jpg', alt: 'Piso SPC en sala de estar', titulo: 'Residencia Privada', categoria: 'Residencial', descripcion: 'Instalación de piso SPC impermeables en sala, comedor y recámaras de casa habitación.' },
  { imagen: '/images/proyectos/cocina.jpg', alt: 'Piso vinílico en cocina moderna', titulo: 'Cocina Residencial', categoria: 'Residencial', descripcion: 'Piso vinílico tipo madera resistente a humedad en cocina de departamento de alta gama.' },
  { imagen: '/images/proyectos/estetica.jpg', alt: 'Piso LVT en estética de lujo', titulo: 'Estética Premium', categoria: 'Comercial', descripcion: 'Diseño con piso vinílico de lujo en estética, combinando estética moderna con durabilidad de alto tráfico.' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
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
  margin: var(--space-3) 0;
}

@media (min-width: 768px) {
  .page-hero h1 {
    font-size: var(--text-4xl);
    margin: var(--space-4) 0;
  }
}

.page-hero .badge { background: rgba(255,255,255,0.15); color: #fff; }

.breadcrumb { display: flex; flex-wrap: wrap; gap: var(--space-2); font-size: var(--text-sm); color: rgba(255,255,255,0.6); }
.breadcrumb li:not(:last-child)::after { content: '/'; margin-left: var(--space-2); color: rgba(255,255,255,0.3); }
.breadcrumb a { color: rgba(255,255,255,0.7); }

.proyecto-card { background: var(--color-bg-card); border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-md); transition: all var(--transition-base); }
.proyecto-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-xl); }
.proyecto-card__image { position: relative; overflow: hidden; aspect-ratio: 4/3; }
.proyecto-card__image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
.proyecto-card:hover .proyecto-card__image img { transform: scale(1.08); }
.proyecto-card__overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.4); opacity: 0; display: flex; align-items: flex-end; padding: var(--space-4); transition: opacity var(--transition-base); }
.proyecto-card:hover .proyecto-card__overlay { opacity: 1; }
.proyecto-card__body { padding: var(--space-5); }
.proyecto-card__body h3 { font-size: var(--text-lg); margin-bottom: var(--space-2); }
.proyecto-card__body p { font-size: var(--text-sm); }
</style>
