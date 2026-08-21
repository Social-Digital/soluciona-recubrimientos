<template>
  <footer class="footer">
    <!-- Sección principal del footer -->
    <div class="footer__main">
      <div class="container">
        <div class="footer__grid">
          <!-- Columna 1: Sobre la empresa -->
          <div class="footer__col">
            <img src="/images/logo-blanco.svg" alt="Soluciona Recubrimientos" class="footer__logo" width="200" height="50" loading="lazy">
            <p class="footer__about">
              Soluciona Recubrimientos es una empresa especializada en la venta e instalación de recubrimientos
              para exteriores e interiores desde 2009.
            </p>
            <div class="footer__socials">
              <a :href="siteConfig.redesSociales.facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a :href="siteConfig.redesSociales.instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a :href="siteConfig.contacto.whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          <!-- Columna 2: Enlaces -->
          <div class="footer__col">
            <h4 class="footer__heading">Enlaces</h4>
            <ul class="footer__links">
              <li><router-link to="/">Inicio</router-link></li>
              <li><router-link to="/nosotros">Nosotros</router-link></li>
              <li><router-link to="/casos-de-exito">Casos de éxito</router-link></li>
              <li><router-link to="/contacto">Contacto</router-link></li>
              <li><router-link to="/divisiones/salud">Divisiones</router-link></li>
              <li><router-link to="/aviso-de-privacidad">Aviso de privacidad</router-link></li>
            </ul>
          </div>

          <!-- Columna 3: Show Room -->
          <div class="footer__col">
            <h4 class="footer__heading">Show Room</h4>
            <ul class="footer__contact-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {{ siteConfig.direccion.completa }}
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <a :href="siteConfig.contacto.celularLink" target="_blank" rel="noopener">{{ siteConfig.contacto.celular }}</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {{ siteConfig.horario.semana }}<br>{{ siteConfig.horario.sabado }}
              </li>
            </ul>
          </div>

          <!-- Columna 4: Marcas -->
          <div class="footer__col">
            <h4 class="footer__heading">Marcas</h4>
            <div class="footer__brands">
              <router-link to="/marcas/tarkett" aria-label="Ver marca Tarkett">
                <img src="/images/marcas/tarkett.png" alt="Tarkett" width="100" height="45" loading="lazy">
              </router-link>
              <router-link to="/marcas/ardex" aria-label="Ver marca Ardex">
                <img src="/images/marcas/ardex.png" alt="Ardex" width="100" height="45" loading="lazy">
              </router-link>
              <router-link to="/marcas/ultralam" aria-label="Ver marca Ultralam">
                <img src="/images/marcas/ultralam.png" alt="Ultralam" width="100" height="45" loading="lazy">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sub-footer con copyright -->
    <div class="footer__bottom">
      <div class="container">
        <p>
          © {{ currentYear }} Soluciona Recubrimientos. Todos los derechos reservados. |
          <router-link to="/aviso-de-privacidad">Aviso de privacidad</router-link>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import siteConfig from '@/data/siteConfig'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  margin-top: auto;
}

.footer__main {
  background: var(--gradient-dark);
  padding: var(--space-12) 0 var(--space-8);
  color: var(--color-text-on-dark);
}

@media (min-width: 768px) {
  .footer__main {
    padding: var(--space-16) 0 var(--space-12);
  }
}

.footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
}

@media (min-width: 640px) {
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
  }
}

@media (min-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1.5fr 1fr 1.2fr 1fr;
    gap: var(--space-10);
  }
}

.footer__logo {
  height: 40px;
  width: auto;
  margin-bottom: var(--space-4);
  filter: brightness(0) invert(1);
}

.footer__about {
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--space-5);
}

.footer__socials {
  display: flex;
  gap: var(--space-3);
}

.footer__socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  transition: all var(--transition-fast);
}

.footer__socials a:hover {
  background: var(--color-primary);
  color: #fff;
  transform: translateY(-3px);
}

.footer__heading {
  color: #fff;
  font-size: var(--text-lg);
  margin-bottom: var(--space-5);
  position: relative;
  padding-bottom: var(--space-3);
}

.footer__heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--color-primary);
  border-radius: var(--radius-full);
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__links a {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.7);
  transition: all var(--transition-fast);
}

.footer__links a:hover {
  color: var(--color-primary-light);
  padding-left: var(--space-2);
}

.footer__contact-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.footer__contact-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.7);
  line-height: var(--leading-relaxed);
}

.footer__contact-list li svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-primary);
}

.footer__contact-list a {
  color: rgba(255, 255, 255, 0.7);
}

.footer__contact-list a:hover {
  color: var(--color-primary-light);
}

.footer__brands {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__brands a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3) var(--space-4);
  background: rgba(255, 255, 255, 0.9);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  height: 52px;
}

.footer__brands a:hover {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.footer__brands img {
  max-height: 38px;
  max-width: 100%;
  object-fit: contain;
  opacity: 0.95;
  filter: brightness(0.1);
  transition: opacity var(--transition-fast), filter var(--transition-fast);
}

.footer__brands a:hover img {
  opacity: 1;
  filter: brightness(0);
}

.footer__bottom {
  background: rgba(0, 0, 0, 0.3);
  padding: var(--space-4) 0;
  text-align: center;
}

.footer__bottom p {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.5);
}

.footer__bottom a {
  color: rgba(255, 255, 255, 0.6);
}

.footer__bottom a:hover {
  color: var(--color-primary-light);
}
</style>
