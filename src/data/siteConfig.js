/**
 * Configuración general del sitio Soluciona Recubrimientos
 * Centraliza datos que se repiten en header, footer y meta tags
 */
const siteConfig = {
  nombre: 'Soluciona Recubrimientos',
  eslogan: 'Venta e Instalación de Pisos y Recubrimientos',
  url: 'https://www.solucionarecubrimientos.com',
  descripcion: 'Soluciones profesionales en recubrimientos para sector salud, comercial, industrial y residencial. Distribuidores autorizados de Tarkett, Ardex, Ultralam y Kiinch en Culiacán, Sinaloa.',

  contacto: {
    telefono: '(667) 286 76 63',
    telefonoLink: 'tel:+526672867663',
    celular: '(667) 263 59 18',
    celularLink: 'tel:+5216672635918',
    email: 'info@solucionarecubrimientos.com',
    whatsapp: 'https://wa.me/5216672635918?text=Hola%2C%20me%20interesa%20recibir%20una%20cotizaci%C3%B3n',
    whatsappNumero: '667 263 59 18',
  },

  direccion: {
    calle: 'Blvd. Xicotencatl 1184-3',
    colonia: 'Col. Las Quintas',
    cp: '80060',
    ciudad: 'Culiacán',
    estado: 'Sinaloa',
    pais: 'México',
    completa: 'Blvd. Xicotencatl 1184-3, Col. Las Quintas 80060, Culiacán, SIN',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5599111429847!2d-107.38145548548647!3d24.810518853368695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcd775ce68afb5%3A0x84899c3ad7ede59b!2sSoluciona+Recubrimientos!5e0!3m2!1ses-419!2smx',
    coordenadas: {
      lat: 24.810518,
      lng: -107.381455,
    },
  },

  horario: {
    semana: 'Lun-Vie 08:00 - 18:00',
    sabado: 'Sab 09:00 - 13:00',
    openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-13:00'],
  },

  redesSociales: {
    facebook: 'https://www.facebook.com/solucionarecubrimientos',
    instagram: 'https://www.instagram.com/solucionarecubrimientos/',
  },

  // ID del pixel de Facebook (carga diferida)
  facebookPixelId: '569478066905319',
}

Object.freeze(siteConfig)
export default siteConfig
