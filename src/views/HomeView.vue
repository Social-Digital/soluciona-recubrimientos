<template>
  <div class="home">
    <!-- Hero Slider — CSS puro, sin Revolution Slider -->
    <section class="hero" aria-label="Slider principal">
      <div class="hero__slides">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="hero__slide"
          :class="{ 'hero__slide--active': currentSlide === index }"
        >
          <img
            :src="slide.imagen"
            :alt="slide.alt"
            class="hero__slide-img"
            loading="eager"
            :fetchpriority="index === 0 ? 'high' : 'auto'"
          >
          <div class="hero__overlay"></div>
          <div class="hero__content">
            <span class="badge animate-fade-in-up">{{ slide.badge }}</span>
            <h2 class="hero__title animate-fade-in-up delay-1">{{ slide.titulo }}</h2>
            <p class="hero__subtitle animate-fade-in-up delay-2">{{ slide.subtitulo }}</p>
            <router-link to="/contacto" class="btn btn-white btn-lg animate-fade-in-up delay-3">
              Contactar ahora
            </router-link>
          </div>
        </div>
      </div>
      <!-- Indicadores del slider -->
      <div class="hero__indicators">
        <button
          v-for="(_, index) in slides"
          :key="index"
          class="hero__indicator"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
          :aria-label="`Ir al slide ${index + 1}`"
        ></button>
      </div>
    </section>

    <!-- Divisiones / Servicios principales -->
    <section class="section" id="divisiones">
      <div class="container">
        <div class="section-title">
          <span class="badge">Nuestras soluciones</span>
          <h2>Divisiones de Servicio</h2>
          <p>Ofrecemos recubrimientos especializados para cada sector</p>
        </div>
        <div class="grid grid-4">
          <router-link
            v-for="(division, index) in divisionesDestacadas"
            :key="division.slug"
            :to="`/divisiones/${division.slug}`"
            class="service-card reveal"
            :class="`delay-${index + 1}`"
          >
            <div class="service-card__image">
              <img :src="division.imagen" :alt="division.imagenAlt" loading="lazy" width="300" height="220">
              <div class="service-card__overlay">
                <span class="btn btn-white">Ver más</span>
              </div>
            </div>
            <div class="service-card__body">
              <h3>{{ division.nombre }}</h3>
              <p>{{ division.descripcionCorta }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Nuestros Servicios -->
    <section class="section section-alt" id="servicios">
      <div class="container">
        <div class="section-title">
          <span class="badge">Lo que hacemos</span>
          <h2>Nuestros Servicios</h2>
        </div>
        <div class="grid grid-2">
          <div v-for="(servicio, index) in servicios" :key="index" class="service-feature reveal" :class="`delay-${index + 1}`">
            <div class="service-feature__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path v-if="servicio.icono === 'grid'" d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
                <path v-else-if="servicio.icono === 'factory'" d="M2 20h20M6 20V4l6 4V4l6 4v12"/>
                <path v-else-if="servicio.icono === 'hospital'" d="M3 21h18M9 8h6M12 5v6M5 21V7l7-4 7 4v14"/>
                <path v-else d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <h4>{{ servicio.titulo }}</h4>
              <p>{{ servicio.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ¿Por qué elegirnos? -->
    <section class="section" id="por-que">
      <div class="container">
        <div class="section-title">
          <span class="badge">Nuestras ventajas</span>
          <h2>¿Por qué elegirnos?</h2>
        </div>
        <div class="grid grid-3">
          <div v-for="(ventaja, index) in ventajas" :key="index" class="why-card reveal" :class="`delay-${index + 1}`">
            <div class="why-card__icon">
              <img :src="ventaja.icono" :alt="ventaja.titulo" width="64" height="64" loading="lazy">
            </div>
            <h4>{{ ventaja.titulo }}</h4>
            <p>{{ ventaja.descripcion }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Parallax CTA -->
    <section class="parallax-cta">
      <div class="parallax-cta__overlay"></div>
      <div class="container" style="position:relative; z-index:1">
        <div class="text-center">
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>Contáctanos y te ayudamos a encontrar la mejor solución para tus espacios</p>
          <div class="flex justify-center gap-4 flex-mobile-col" style="margin-top:var(--space-8)">
            <router-link to="/contacto" class="btn btn-primary btn-lg">Solicitar cotización</router-link>
            <a :href="siteConfig.contacto.whatsapp" target="_blank" rel="noopener" class="btn btn-white btn-lg">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Últimos proyectos -->
    <section class="section section-dark" id="proyectos">
      <div class="container">
        <div class="section-title">
          <span class="badge">Portafolio</span>
          <h2>Últimos Proyectos</h2>
        </div>
        <div class="grid grid-3">
          <div v-for="(proyecto, index) in proyectos" :key="index" class="project-card reveal" :class="`delay-${index + 1}`">
            <img :src="proyecto.imagen" :alt="proyecto.alt" loading="lazy" width="400" height="300">
            <div class="project-card__overlay">
              <div class="project-card__info">
                <h4>{{ proyecto.titulo }}</h4>
                <span class="badge">{{ proyecto.categoria }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useSeoMeta } from '@/composables/useSeoMeta'
import siteConfig from '@/data/siteConfig'
import divisiones from '@/data/divisiones'

// SEO para la página de inicio
useSeoMeta({
  titulo: 'Venta e Instalación de Pisos y Recubrimientos',
  descripcion: siteConfig.descripcion,
  ruta: '/',
  imagen: '/images/og-default.jpg',
})

// Datos del slider
const slides = [
  {
    imagen: '/images/slider/comercial.jpg',
    alt: 'Recubrimientos comerciales de alto tráfico para tiendas y oficinas',
    badge: 'Comercial',
    titulo: 'Pisos para Espacios Comerciales',
    subtitulo: 'Soluciones de alto tráfico con diseño profesional',
  },
  {
    imagen: '/images/slider/industrial.jpg',
    alt: 'Pisos industriales epóxicos para plantas de manufactura',
    badge: 'Industrial',
    titulo: 'Recubrimientos Industriales',
    subtitulo: 'Sistemas de alta ingeniería para condiciones extremas',
  },
  {
    imagen: '/images/slider/salud.jpg',
    alt: 'Pisos antibacteriales certificados para hospitales',
    badge: 'Sector Salud',
    titulo: 'Recubrimientos Hospitalarios',
    subtitulo: 'Pisos antibacteriales certificados para áreas críticas',
  },
  {
    imagen: '/images/slider/residencial.jpg',
    alt: 'Pisos vinílicos tipo madera para hogares modernos',
    badge: 'Residencial',
    titulo: 'Pisos para tu Hogar',
    subtitulo: 'Transforma tus espacios con elegancia y confort',
  },
]

const currentSlide = ref(0)
let slideInterval = null

function goToSlide(index) {
  currentSlide.value = index
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

onMounted(() => {
  // Auto-avance del slider cada 6 segundos
  slideInterval = setInterval(nextSlide, 6000)

  // IntersectionObserver para animaciones de reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})

// Solo las primeras 4 divisiones para el home
const divisionesDestacadas = divisiones.slice(0, 4)

// Servicios
const servicios = [
  {
    icono: 'grid',
    titulo: 'Instalación de Pisos y Muros PVC',
    descripcion: 'Somos especialistas en obras nuevas y remodelaciones. Instalamos pisos y muros antibacteriales, conductivos y homogéneos.',
  },
  {
    icono: 'hospital',
    titulo: 'Suministros para Hospitales e Industria',
    descripcion: 'Somos distribuidores exclusivos de marcas especializadas en el área médica, construcción e industrial.',
  },
  {
    icono: 'factory',
    titulo: 'Recubrimientos de Alta Ingeniería',
    descripcion: 'Aplicamos soluciones a la medida de la superficie, según las necesidades estructurales del proyecto.',
  },
  {
    icono: 'layers',
    titulo: 'Recubrimientos para Construcción',
    descripcion: 'Aplicamos cementosos, barreras de humedad, pegamentos y soluciones a la medida de cada superficie.',
  },
]

// Ventajas
const ventajas = [
  {
    icono: '/images/icons/eficiencia.svg',
    titulo: 'Eficiencia',
    descripcion: 'Nuestro propósito es que el cliente conozca la variedad de soluciones para acondicionar su área de la mejor forma.',
  },
  {
    icono: '/images/icons/garantia.svg',
    titulo: 'Garantía',
    descripcion: 'Todos nuestros proyectos están garantizados con el respaldo de marcas de prestigio internacional.',
  },
  {
    icono: '/images/icons/marcas.svg',
    titulo: 'Marcas Reconocidas',
    descripcion: 'Contamos con alianzas internacionales que nos permiten brindar marcas de renombre y asesoría técnica especializada.',
  },
]

// Proyectos
const proyectos = [
  { imagen: '/images/proyectos/cocina.jpg', alt: 'Piso vinílico tipo madera instalado en cocina residencial', titulo: 'Cocina Residencial', categoria: 'Residencial' },
  { imagen: '/images/proyectos/estetica.jpg', alt: 'Piso decorativo en estética comercial', titulo: 'Estética Comercial', categoria: 'Comercial' },
  { imagen: '/images/proyectos/industria.jpg', alt: 'Piso epóxico industrial en planta de producción', titulo: 'Planta Industrial', categoria: 'Industrial' },
]
</script>

<style scoped>
/* ===== HERO SLIDER (Mobile First) ===== */
.hero {
  position: relative;
  height: 85vh;
  min-height: 480px;
  max-height: 900px;
  overflow: hidden;
}

@media (min-width: 768px) {
  .hero {
    height: 100vh;
    min-height: 600px;
  }
}

.hero__slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
}

.hero__slide--active {
  opacity: 1;
}

.hero__slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(26, 26, 46, 0.5) 0%, rgba(26, 26, 46, 0.7) 100%);
}

.hero__content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-4);
  color: #fff;
}

.hero__title {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: var(--font-extrabold);
  color: #fff;
  margin: var(--space-3) 0;
  max-width: 800px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

@media (min-width: 640px) {
  .hero__title { font-size: var(--text-4xl); margin: var(--space-4) 0; }
}

@media (min-width: 1024px) {
  .hero__title { font-size: var(--text-5xl); }
}

.hero__subtitle {
  font-size: var(--text-base);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: var(--space-6);
  max-width: 600px;
}

@media (min-width: 640px) {
  .hero__subtitle { font-size: var(--text-lg); margin-bottom: var(--space-8); }
}

@media (min-width: 1024px) {
  .hero__subtitle { font-size: var(--text-xl); }
}

.hero__indicators {
  position: absolute;
  bottom: var(--space-6);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--space-3);
  z-index: 5;
}

.hero__indicator {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.4);
  border: 2px solid transparent;
  transition: all var(--transition-base);
  cursor: pointer;
}

.hero__indicator.active {
  background: var(--color-primary);
  width: 32px;
  border-radius: var(--radius-full);
}

/* ===== SERVICE CARDS ===== */
.service-card {
  display: block;
  background: var(--color-bg-card);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.service-card__image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.service-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.service-card:hover .service-card__image img {
  transform: scale(1.08);
}

.service-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(212, 146, 42, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.service-card:hover .service-card__overlay {
  opacity: 1;
}

.service-card__body {
  padding: var(--space-5);
}

.service-card__body h3 {
  font-size: var(--text-lg);
  margin-bottom: var(--space-2);
}

.service-card__body p {
  font-size: var(--text-sm);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ===== SERVICE FEATURES ===== */
.service-feature {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: var(--space-4);
  padding: var(--space-5);
  background: var(--color-bg-card);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

@media (min-width: 640px) {
  .service-feature {
    flex-direction: row;
    text-align: left;
    gap: var(--space-5);
    padding: var(--space-6);
  }
}

.service-feature:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.service-feature__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin: 0 auto;
  background: var(--color-primary-subtle);
  color: var(--color-primary);
  border-radius: var(--radius-lg);
}

@media (min-width: 640px) {
  .service-feature__icon {
    margin: 0;
  }
}

.service-feature h4 {
  font-size: var(--text-base);
  margin-bottom: var(--space-2);
}

.service-feature p {
  font-size: var(--text-sm);
}

/* ===== WHY CARDS ===== */
.why-card {
  text-align: center;
  padding: var(--space-6) var(--space-5);
  background: var(--color-bg-card);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

@media (min-width: 640px) {
  .why-card {
    padding: var(--space-8) var(--space-6);
  }
}

.why-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-6px);
}

.why-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  margin: 0 auto var(--space-4);
  background: var(--color-primary-subtle);
  border-radius: var(--radius-full);
}

@media (min-width: 640px) {
  .why-card__icon {
    width: 80px;
    height: 80px;
    margin-bottom: var(--space-5);
  }
}

.why-card__icon img {
  width: 44px;
  height: 44px;
}

.why-card h4 {
  margin-bottom: var(--space-3);
}

.why-card p {
  font-size: var(--text-sm);
}

/* ===== PARALLAX CTA ===== */
.parallax-cta {
  position: relative;
  padding: var(--space-16) 0;
  background: url('/images/parallax-bg.jpg') center center / cover no-repeat;
  color: #fff;
}

@media (min-width: 768px) {
  .parallax-cta {
    padding: var(--space-24) 0;
    background-attachment: fixed;
  }
}

.parallax-cta__overlay {
  position: absolute;
  inset: 0;
  background: rgba(26, 26, 46, 0.85);
}

.parallax-cta h2 {
  font-size: var(--text-2xl);
  color: #fff;
  margin-bottom: var(--space-4);
}

@media (min-width: 640px) {
  .parallax-cta h2 {
    font-size: var(--text-3xl);
  }
}

@media (min-width: 1024px) {
  .parallax-cta h2 {
    font-size: var(--text-4xl);
  }
}

.parallax-cta p {
  font-size: var(--text-base);
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .parallax-cta p {
    font-size: var(--text-xl);
  }
}

/* ===== PROJECT CARDS ===== */
.project-card {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 4/3;
  cursor: pointer;
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.project-card:hover img {
  transform: scale(1.1);
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  background: var(--gradient-card);
  display: flex;
  align-items: flex-end;
  padding: var(--space-5);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card__info h4 {
  color: #fff;
  font-size: var(--text-lg);
  margin-bottom: var(--space-2);
}

@media (min-width: 640px) {
  .project-card__info h4 {
    font-size: var(--text-xl);
  }
}
</style>
