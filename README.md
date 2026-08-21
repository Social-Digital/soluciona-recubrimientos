# Soluciona Recubrimientos — Plataforma Web Institucional

> Sitio web oficial y catálogo digital de **Soluciona Recubrimientos**, empresa especializada en la comercialización e instalación de recubrimientos para interiores y exteriores en los sectores Salud, Comercial, Industrial y Residencial en México.

---

## 📋 Descripción del Proyecto

Este proyecto es una aplicación web SPA (Single Page Application) moderna, rápida y con arquitectura **Mobile-First**, desarrollada con **Vue 3** y **Vite**. Está diseñada con los más altos estándares de rendimiento, SEO, accesibilidad y experiencia de usuario (UX/UI).

### Características Principales:
* **Mobile-First & Responsivo:** Diseño adaptativo perfecto en dispositivos móviles, tablets y computadoras de escritorio.
* **Optimización SEO:** Implementación de metadatos dinámicos (`useSeoMeta`), Open Graph, JSON-LD (`SchemaOrg`) y generación automática de `sitemap.xml`.
* **Diseño Institucional:** Sistema de diseño ligero con CSS Vanilla (variables CSS, layout grid/flex responsivo, transiciones suaves y micro-animaciones).
* **Despliegue Continuo (CI/CD):** Integración con **GitHub Actions** y **Firebase Hosting** para despliegues automáticos al enviar cambios a la rama principal (`main`).

---

## 🛠️ Tecnologías Utilizadas

* **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API / `<script setup>`)
* **Enrutador:** [Vue Router 4](https://router.vuejs.org/)
* **Bundler & Dev Server:** [Vite](https://vitejs.dev/)
* **Estilos:** Vanilla CSS (Modularizado con variables, reset y layout grid/flex)
* **Hosting y Despliegue:** [Firebase Hosting](https://firebase.google.com/)
* **CI/CD:** [GitHub Actions](https://github.com/features/actions)

---

## 📂 Estructura del Repositorio

```text
soluciona-recubrimientos/
├── .github/
│   └── workflows/
│       └── firebase-hosting-deploy.yml   # Pipeline CI/CD para despliegue en Firebase
├── public/
│   ├── images/                           # Imágenes estáticas del sitio (slider, proyectos, marcas, etc.)
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── styles/                       # Sistema de Diseño CSS
│   │       ├── animations.css
│   │       ├── base.css
│   │       ├── layout.css
│   │       ├── reset.css
│   │       └── variables.css
│   ├── components/
│   │   ├── layout/                       # AppHeader, AppFooter
│   │   ├── seo/                          # SchemaOrg
│   │   └── ui/                           # WhatsAppFab, BackToTop
│   ├── composables/                      # Hooks personalizados (useSeoMeta)
│   ├── data/                             # Configuración y datos estáticos (siteConfig, marcas, divisiones)
│   ├── router/                           # Configuración de rutas (index.js)
│   ├── views/                            # Pantallas / Vistas principales
│   ├── App.vue
│   └── main.js
├── .firebaserc                           # Configuración de proyecto Firebase
├── firebase.json                         # Reglas de enrutamiento y headers para Firebase Hosting
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Requisitos Previos e Instalación

### Requisitos:
* **Node.js:** v18.0.0 o superior
* **npm:** v9.0.0 o superior

### Pasos de Instalación Local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Social-Digital/soluciona-recubrimientos.git
   cd soluciona-recubrimientos
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre tu navegador en `http://localhost:5173`.

---

## ⚙️ Comandos Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local con Vite. |
| `npm run build` | Compila y optimiza el proyecto para producción en la carpeta `dist/`. |
| `npm run preview` | Previsualiza localmente el paquete generado en `dist/`. |

---

## 🔄 Despliegue e Integración Continua (CI/CD)

El proyecto cuenta con un workflow de **GitHub Actions** en `.github/workflows/firebase-hosting-deploy.yml`.

### Despliegue Automático:
Cada vez que se realiza un `git push` a la rama `main`, el pipeline ejecutará automáticamente:
1. Instalación limpia de dependencias (`npm ci`).
2. Compilación del proyecto (`npm run build`).
3. Despliegue del sitio a **Firebase Hosting** mediante el secreto seguro `FIREBASE_SERVICE_ACCOUNT_SOLUCIONA_RECUBRIMIENTOS`.

---

## 📄 Licencia

Uso interno exclusivo para **Soluciona Recubrimientos**. Todos los derechos reservados.
