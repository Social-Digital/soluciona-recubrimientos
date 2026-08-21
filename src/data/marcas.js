/**
 * Datos de las marcas distribuidas
 * Cada marca tiene su propia página dinámica en /marcas/:slug
 */
const marcas = [
  {
    slug: 'tarkett',
    nombre: 'Tarkett',
    descripcionCorta: 'Líder mundial en pisos vinílicos, homogéneos y heterogéneos para uso comercial, hospitalario y residencial.',
    descripcion: 'Tarkett es uno de los líderes mundiales en soluciones innovadoras y sostenibles de pisos y superficies deportivas. Con presencia en más de 100 países, ofrecemos una gama completa de pisos vinílicos, homogéneos, heterogéneos, conductivos y antibacteriales certificados para hospitales, comercios y residencias.',
    logo: '/images/marcas/tarkett.png',
    imagen: '/images/marcas/tarkett-hero.jpg',
    sitioWeb: 'https://tarkett.com.mx',
    metaDescription: 'Distribuidores autorizados de Tarkett en Culiacán. Pisos vinílicos, homogéneos y antibacteriales para hospitales, comercios y hogares.',
  },
  {
    slug: 'ardex',
    nombre: 'Ardex',
    descripcionCorta: 'Sistemas de recubrimientos industriales, autonivelantes y cementosos de alta ingeniería.',
    descripcion: 'ARDEX es reconocido mundialmente por sus productos de alta calidad para la preparación de superficies, nivelación de pisos, impermeabilización y soluciones cementosas. Sus sistemas de recubrimiento industrial están diseñados para soportar las condiciones más exigentes.',
    logo: '/images/marcas/ardex.png',
    imagen: '/images/marcas/ardex-hero.jpg',
    sitioWeb: 'https://ardexmx.com',
    metaDescription: 'Distribuidores Ardex en Culiacán. Recubrimientos industriales, autonivelantes y cementosos de alta ingeniería.',
  },
  {
    slug: 'ultralam',
    nombre: 'Ultralam',
    descripcionCorta: 'Pisos laminados y SPC de alta calidad para uso residencial y comercial.',
    descripcion: 'Ultralam ofrece pisos laminados y SPC (Stone Plastic Composite) con tecnología de punta. Sus productos combinan la belleza de la madera natural con la resistencia y facilidad de mantenimiento de los materiales modernos.',
    logo: '/images/marcas/ultralam.png',
    imagen: '/images/marcas/ultralam-hero.jpg',
    sitioWeb: '#',
    metaDescription: 'Distribuidores Ultralam en Culiacán. Pisos laminados y SPC de alta calidad para casas y comercios.',
  },
]

Object.freeze(marcas)
export default marcas
