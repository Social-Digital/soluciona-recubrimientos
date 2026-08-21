<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled, 'header--open': isMobileMenuOpen }">
    <!-- Línea decorativa dorada superior -->
    <div class="header__topline"></div>

    <div class="container flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="header__logo" aria-label="Ir al inicio">
        <img
          src="/images/logo.svg"
          alt="Soluciona Recubrimientos - Logo"
          width="180"
          height="48"
          class="header__logo-img"
        >
      </router-link>

      <!-- Navegación desktop -->
      <nav class="header__nav hide-mobile" aria-label="Navegación principal">
        <ul class="header__menu">
          <li>
            <router-link to="/" active-class="active" exact>Inicio</router-link>
          </li>
          <li class="has-dropdown">
            <a href="#" @click.prevent aria-haspopup="true">
              Marcas
              <svg class="dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
            </a>
            <ul class="dropdown">
              <li><router-link to="/marcas/tarkett">Tarkett</router-link></li>
              <li><router-link to="/marcas/ardex">Ardex</router-link></li>
              <li><router-link to="/marcas/ultralam">Ultralam</router-link></li>
            </ul>
          </li>
          <li class="has-dropdown">
            <a href="#" @click.prevent aria-haspopup="true">
              Divisiones
              <svg class="dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
            </a>
            <ul class="dropdown">
              <li><router-link to="/divisiones/salud">Salud</router-link></li>
              <li><router-link to="/divisiones/comercio">Comercio</router-link></li>
              <li><router-link to="/divisiones/industrial">Industrial</router-link></li>
              <li><router-link to="/divisiones/residencial">Residencial</router-link></li>
              <li><router-link to="/divisiones/tapetes">Tapetes</router-link></li>
            </ul>
          </li>
          <li><router-link to="/casos-de-exito">Casos de éxito</router-link></li>
          <li><router-link to="/nosotros">Nosotros</router-link></li>
          <li><router-link to="/contacto" class="btn btn-primary btn-nav">Contacto</router-link></li>
        </ul>
      </nav>

      <!-- Info de contacto rápida (desktop) -->
      <div class="header__contact hide-mobile">
        <a :href="siteConfig.contacto.telefonoLink" class="header__phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          {{ siteConfig.contacto.telefono }}
        </a>
      </div>

      <!-- Botón hamburguesa (mobile) -->
      <button
        class="header__toggle hide-desktop"
        @click="toggleMobileMenu"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Abrir menú de navegación"
      >
        <span class="hamburger" :class="{ 'is-active': isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    <!-- Menú mobile -->
    <transition name="slide-down">
      <nav
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="mobile-menu"
        aria-label="Navegación móvil"
      >
        <ul class="mobile-menu__list">
          <li><router-link to="/" @click="closeMobileMenu">Inicio</router-link></li>
          <li>
            <button class="mobile-menu__toggle" @click="toggleSubmenu('marcas')">
              Marcas
              <svg :class="{ 'rotated': openSubmenu === 'marcas' }" width="12" height="8" viewBox="0 0 10 6" fill="currentColor">
                <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
            </button>
            <transition name="slide-down">
              <ul v-if="openSubmenu === 'marcas'" class="mobile-menu__sub">
                <li><router-link to="/marcas/tarkett" @click="closeMobileMenu">Tarkett</router-link></li>
                <li><router-link to="/marcas/ardex" @click="closeMobileMenu">Ardex</router-link></li>
                <li><router-link to="/marcas/ultralam" @click="closeMobileMenu">Ultralam</router-link></li>
              </ul>
            </transition>
          </li>
          <li>
            <button class="mobile-menu__toggle" @click="toggleSubmenu('divisiones')">
              Divisiones
              <svg :class="{ 'rotated': openSubmenu === 'divisiones' }" width="12" height="8" viewBox="0 0 10 6" fill="currentColor">
                <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
            </button>
            <transition name="slide-down">
              <ul v-if="openSubmenu === 'divisiones'" class="mobile-menu__sub">
                <li><router-link to="/divisiones/salud" @click="closeMobileMenu">Salud</router-link></li>
                <li><router-link to="/divisiones/comercio" @click="closeMobileMenu">Comercio</router-link></li>
                <li><router-link to="/divisiones/industrial" @click="closeMobileMenu">Industrial</router-link></li>
                <li><router-link to="/divisiones/residencial" @click="closeMobileMenu">Residencial</router-link></li>
                <li><router-link to="/divisiones/tapetes" @click="closeMobileMenu">Tapetes</router-link></li>
              </ul>
            </transition>
          </li>
          <li><router-link to="/casos-de-exito" @click="closeMobileMenu">Casos de éxito</router-link></li>
          <li><router-link to="/nosotros" @click="closeMobileMenu">Nosotros</router-link></li>
          <li><router-link to="/contacto" @click="closeMobileMenu" class="btn btn-primary" style="width:100%;margin-top:var(--space-2)">Contacto</router-link></li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import siteConfig from '@/data/siteConfig'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const openSubmenu = ref(null)

// Detectar scroll para cambiar estilos del header
function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevenir scroll del body cuando el menú está abierto
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  openSubmenu.value = null
  document.body.style.overflow = ''
}

function toggleSubmenu(name) {
  openSubmenu.value = openSubmenu.value === name ? null : name
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-sticky);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  transition: all var(--transition-base);
}

.header--scrolled {
  box-shadow: var(--shadow-md);
  background: rgba(255, 255, 255, 0.98);
}

.header__topline {
  height: 4px;
  background: var(--gradient-primary);
}

.header .container {
  height: var(--header-height);
  transition: height var(--transition-base);
}

.header--scrolled .container {
  height: var(--header-height-scrolled);
}

/* Logo */
.header__logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.header__logo-img {
  height: 36px;
  width: auto;
  transition: height var(--transition-base);
}

@media (min-width: 768px) {
  .header__logo-img {
    height: 44px;
  }
}

.header--scrolled .header__logo-img {
  height: 32px;
}

@media (min-width: 768px) {
  .header--scrolled .header__logo-img {
    height: 36px;
  }
}

/* Nav desktop */
.header__menu {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.header__menu > li > a,
.header__menu > li > .btn-nav {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.header__menu > li > a:hover,
.header__menu > li > a.active {
  color: var(--color-primary);
}

.header__menu > li > a.active {
  background: var(--color-primary-subtle);
}

.btn-nav {
  padding: var(--space-2) var(--space-5) !important;
  color: #fff !important;
}

/* Dropdown */
.has-dropdown {
  position: relative;
}

.dropdown-arrow {
  transition: transform var(--transition-fast);
}

.has-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) scaleY(0);
  transform-origin: top center;
  min-width: 180px;
  background: #fff;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  padding: var(--space-2);
  opacity: 0;
  transition: all var(--transition-base);
  pointer-events: none;
  margin-top: var(--space-2);
}

/* Puente invisible para mantener el hover cuando el mouse se mueve del botón al menú */
.has-dropdown::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: calc(var(--space-2) + 4px);
  display: block;
}

.has-dropdown:hover .dropdown {
  opacity: 1;
  transform: translateX(-50%) scaleY(1);
  pointer-events: auto;
}

.dropdown li a {
  display: block;
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.dropdown li a:hover {
  background: var(--color-primary-subtle);
  color: var(--color-primary-dark);
}

/* Contacto rápido */
.header__contact {
  flex-shrink: 0;
}

.header__phone {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-text-secondary);
}

.header__phone:hover {
  color: var(--color-primary);
}

/* Hamburguesa con área táctil cómoda */
.header__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  padding: var(--space-2);
  z-index: 10;
  background: transparent;
  border: none;
  cursor: pointer;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.hamburger.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Menú mobile */
.mobile-menu {
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: calc(100vh - var(--header-height));
  background: #fff;
  overflow-y: auto;
  padding: var(--space-4) var(--space-6) var(--space-12);
  z-index: var(--z-overlay);
  box-sizing: border-box;
}

.mobile-menu__list > li > a,
.mobile-menu__list > li > button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-4) 0;
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border-light);
  min-height: 48px;
}

.mobile-menu__toggle {
  text-align: left;
  background: transparent;
  border: none;
  cursor: pointer;
}

.mobile-menu__toggle svg {
  transition: transform var(--transition-fast);
}

.mobile-menu__toggle svg.rotated {
  transform: rotate(180deg);
}

.mobile-menu__sub {
  padding-left: var(--space-4);
  background: var(--color-bg-alt);
  border-radius: var(--radius-md);
  margin: var(--space-2) 0;
}

.mobile-menu__sub li a {
  display: flex;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  border-radius: var(--radius-md);
  min-height: 44px;
}

.mobile-menu__sub li a:hover {
  background: var(--color-primary-subtle);
  color: var(--color-primary-dark);
}

/* Transición slide down */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all var(--transition-base);
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
