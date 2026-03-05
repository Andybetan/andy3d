const translations = {
  en: {
    nav: { creations: 'Creations', custom: 'Custom', contact: 'Contact' },
    hero: {
      title1: 'Unique 3D Printed',
      title2: 'Creations',
      subtitle: 'Design, creativity and 3D printing by Andy',
      viewCreations: 'View creations',
      requestFigure: 'Request custom figure',
      cardTitle: 'Mimikyu',
      cardSubtitle: 'Yellow & black filament · Printed with Anycubic Kobra S1',
    },
    gallery: {
      title: 'Creations',
      subtitle: 'A selection of 3D printed pieces: figures, dioramas and useful objects.',
      items: [
        { title: 'Mimikyu figure', description: 'Adorable Pokémon figure with fine details and smooth finish. Perfect for collectors.', image: '/mimikyu-hero.png' },
        { title: 'Samurai statue', description: 'Elegant samurai bust with traditional armor details. A striking display piece.', image: '/samurai-hero.png' },
        { title: 'Tridix character', description: 'Original character design brought to life in 3D. Custom pose and expression.', image: '/tridix-hero.png' },
        { title: 'Diorama scene', description: 'Miniature scene with multiple elements. Ideal for photography and display.', image: '/diorama-hero.png' },
        { title: 'Oreo clicker', description: 'Functional fidget toy inspired by the classic cookie. Satisfying click mechanism.', image: '/oreo-hero.png' },
        { title: 'Headphone stand', description: 'Sleek desk accessory to keep your headphones safe and within reach.', image: '/headphone-stand-hero.png' },
      ],
    },
    process: {
      title: 'The process',
      subtitle: 'From idea to your hands in four clear steps.',
      steps: [
        { num: '01', icon: '◇', title: 'Digital design', desc: 'Your idea is modeled in 3D or we adapt an existing design to your taste.' },
        { num: '02', icon: '▣', title: '3D printing', desc: 'We print layer by layer with quality materials and the right settings.' },
        { num: '03', icon: '◆', title: 'Finishing and assembly', desc: 'Sanding, priming and painting when needed. Assembly of multi-part pieces.' },
        { num: '04', icon: '◉', title: 'Delivery', desc: 'Careful packaging and shipping so your piece arrives in perfect condition.' },
      ],
    },
    custom: {
      title: 'Custom 3D Figures',
      text: "Do you have an idea, a character or a specific design? Request a personalized figure and we'll work together to bring it to life in 3D.",
      button: 'Request a custom design',
    },
    tiktok: {
      title: 'Follow on TikTok',
      text: 'Behind the scenes, new designs and 3D printing tips.',
      follow: 'Follow',
    },
    cta: {
      title: 'Bring your ideas to life in 3D',
      subtitle: "Tell me your idea and we'll make it real.",
      button: 'Contact Andy3D',
    },
    contactForm: {
      title: 'Contact Andy3D',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      close: 'Close',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Tell me your idea or request...',
      success: 'Message sent. We\'ll get back to you soon!',
    },
  },
  es: {
    nav: { creations: 'Creaciones', custom: 'Personalizado', contact: 'Contacto' },
    hero: {
      title1: 'Creaciones únicas',
      title2: 'en impresión 3D',
      subtitle: 'Diseño, creatividad e impresión 3D por Andy',
      viewCreations: 'Ver creaciones',
      cardTitle: 'Mimikyu',
      cardSubtitle: 'Filamento amarillo y negro · Impreso con Anycubic Kobra S1',
      requestFigure: 'Solicitar figura personalizada',
    },
    gallery: {
      title: 'Creaciones',
      subtitle: 'Una selección de piezas impresas en 3D: figuras, dioramas y objetos útiles.',
      items: [
        { title: 'Figura Mimikyu', description: 'Figura de Pokémon con detalles finos y acabado suave. Ideal para coleccionistas.', image: '/mimikyu-hero.png' },
        { title: 'Estatua samurái', description: 'Busto de samurái con detalles de armadura tradicional. Pieza impactante.', image: '/samurai-hero.png' },
        { title: 'Personaje Tridix', description: 'Diseño de personaje original llevado al 3D. Pose y expresión a medida.', image: '/tridix-hero.png' },
        { title: 'Escena diorama', description: 'Escena miniatura con varios elementos. Ideal para fotografía y exposición.', image: '/diorama-hero.png' },
        { title: 'Oreo clicker', description: 'Fidget toy funcional inspirado en la galleta. Mecanismo de clic satisfactorio.', image: '/oreo-hero.png' },
        { title: 'Soporte para auriculares', description: 'Accesorio de escritorio para tener los auriculares ordenados y a mano.', image: '/headphone-stand-hero.png' },
      ],
    },
    process: {
      title: 'El proceso',
      subtitle: 'De la idea a tus manos en cuatro pasos claros.',
      steps: [
        { num: '01', icon: '◇', title: 'Diseño digital', desc: 'Tu idea se modela en 3D o adaptamos un diseño existente a tu gusto.' },
        { num: '02', icon: '▣', title: 'Impresión 3D', desc: 'Imprimimos capa a capa con materiales de calidad y la configuración adecuada.' },
        { num: '03', icon: '◆', title: 'Acabado y montaje', desc: 'Lijado, imprimación y pintura si hace falta. Montaje de piezas en varias partes.' },
        { num: '04', icon: '◉', title: 'Entrega', desc: 'Embalaje cuidadoso y envío para que tu pieza llegue en perfecto estado.' },
      ],
    },
    custom: {
      title: 'Figuras 3D personalizadas',
      text: '¿Tienes una idea, un personaje o un diseño concreto? Pide una figura personalizada y la haremos realidad en 3D juntos.',
      button: 'Solicitar diseño personalizado',
    },
    tiktok: {
      title: 'Sígueme en TikTok',
      text: 'Detrás de cámaras, nuevos diseños y tips de impresión 3D.',
      follow: 'Seguir',
    },
    cta: {
      title: 'Dale vida a tus ideas en 3D',
      subtitle: 'Cuéntame tu idea y la hacemos realidad.',
      button: 'Contactar Andy3D',
    },
    contactForm: {
      title: 'Contactar Andy3D',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send: 'Enviar',
      close: 'Cerrar',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@correo.com',
      messagePlaceholder: 'Cuéntame tu idea o solicitud...',
      success: 'Mensaje enviado. Te responderé pronto.',
    },
  },
}

const STORAGE_KEY = 'andy3d-locale'

export function getStoredLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'es') return stored
  } catch (_) {}
  return 'en'
}

export function setStoredLocale(locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch (_) {}
}

export function t(locale, key) {
  const keys = key.split('.')
  let value = translations[locale] ?? translations.en
  for (const k of keys) {
    value = value?.[k]
  }
  return value ?? key
}

export { translations }
