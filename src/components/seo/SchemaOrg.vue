<template>
  <!-- Datos estructurados JSON-LD para SEO (Schema.org LocalBusiness) -->
  <!-- No renderiza nada visual, solo inyecta script en <head> -->
</template>

<script setup>
import { useHead } from '@unhead/vue'
import siteConfig from '@/data/siteConfig'

// Inyectar datos estructurados JSON-LD en el <head> del documento
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': siteConfig.url,
        name: siteConfig.nombre,
        description: siteConfig.descripcion,
        url: siteConfig.url,
        telephone: '+526672867663',
        email: siteConfig.contacto.email,
        image: `${siteConfig.url}/images/og-default.jpg`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.direccion.calle,
          addressLocality: siteConfig.direccion.ciudad,
          addressRegion: siteConfig.direccion.estado,
          postalCode: siteConfig.direccion.cp,
          addressCountry: 'MX',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.direccion.coordenadas.lat,
          longitude: siteConfig.direccion.coordenadas.lng,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '13:00',
          },
        ],
        sameAs: [
          siteConfig.redesSociales.facebook,
          siteConfig.redesSociales.instagram,
        ],
        priceRange: '$$',
        areaServed: {
          '@type': 'City',
          name: 'Culiacán',
        },
      }),
    },
  ],
})
</script>
