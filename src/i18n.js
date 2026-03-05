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
    avatar: {
      label: 'Andy3D avatar',
      welcome: 'Welcome!',
      bubble: 'Hi! I\'m Andy3D and I\'ll bring your ideas to life in 3D.',
      bubbleSuccess: 'Your message has been sent successfully to info@andy3d.es. Thank you!',
    },
    legal: {
      close: 'Close',
      cookiesTitle: 'Cookie policy',
      legalTitle: 'Legal notice',
      privacyTitle: 'Privacy policy',
    },
    cookies: {
      bannerMessage: 'We use first and third party cookies to improve your experience and analyze site usage. You can accept all cookies or continue with only the necessary ones.',
      moreInfo: 'More information',
      onlyNecessary: 'Necessary only',
      acceptAll: 'Accept all',
      intro1: 'This website uses first and third party cookies to improve your browsing experience, analyze traffic and, where appropriate, display personalized content related to 3D printing.',
      intro2: 'Cookies are small files stored on your device. You can set your browser to block or delete them, although some features of the site may no longer be available.',
      typesTitle: 'Types of cookies we may use:',
      technical: 'Technical: essential for the basic operation of the website.',
      analytics: 'Analytics: they help us understand how the site is used so we can improve it.',
      manage: 'You can manage or revoke your consent from your browser settings at any time.',
    },
    legalNotice: {
      intro1: 'In compliance with applicable Spanish and European regulations, the owner of this website is ',
      intro2: 'The content of this website is for informational purposes and is intended to showcase projects and services related to custom 3D printing. Use of this website implies acceptance of these legal terms.',
      intro3: 'Total or partial reproduction of the content without express authorization from the owner is prohibited. The designs and brands mentioned belong to their respective owners.',
      contact: 'For any inquiry related to this legal notice, you can write to',
    },
    privacy: {
      intro1: 'Personal data that you provide through contact forms will be processed for the purpose of responding to your inquiries or requests for quotes related to 3D printing projects.',
      intro2: 'The data controller is Andres Beltran Betancourt. Your data will not be shared with third parties except where required by law. The legal basis for processing is your consent, which you may withdraw at any time.',
      intro3: 'You have the right to access, rectify and delete your data, as well as other rights under data protection law. To exercise them you can write to',
      review: 'This policy is reviewed periodically to keep it up to date with applicable regulations.',
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
    avatar: {
      label: 'Avatar de Andy3D',
      welcome: 'Bienvenid@/s!',
      bubble: '¡Hola! Soy Andy3D y te ayudaré a dar vida a tus ideas en 3D.',
      bubbleSuccess: 'Tu mensaje se ha enviado correctamente a info@andy3d.es. ¡Gracias!',
    },
    legal: {
      close: 'Cerrar',
      cookiesTitle: 'Política de cookies',
      legalTitle: 'Aviso legal',
      privacyTitle: 'Política de privacidad',
    },
    cookies: {
      bannerMessage: 'Usamos cookies propias y de terceros para mejorar tu experiencia y analizar el uso de la web. Puedes aceptar todas las cookies o continuar solo con las necesarias.',
      moreInfo: 'Más información',
      onlyNecessary: 'Solo necesarias',
      acceptAll: 'Aceptar todas',
      intro1: 'Este sitio web utiliza cookies propias y de terceros con la finalidad de mejorar la experiencia de navegación, analizar el tráfico y, en su caso, mostrar contenidos personalizados relacionados con impresión 3D.',
      intro2: 'Las cookies son pequeños archivos que se almacenan en tu dispositivo. Puedes configurar tu navegador para bloquearlas o eliminarlas, aunque algunas funcionalidades de la web podrían dejar de estar disponibles.',
      typesTitle: 'Tipos de cookies que podemos utilizar:',
      technical: 'Técnicas: necesarias para el funcionamiento básico de la web.',
      analytics: 'De análisis: nos ayudan a entender cómo se utiliza la web para mejorarla.',
      manage: 'Puedes gestionar o revocar tu consentimiento desde la configuración de tu navegador en cualquier momento.',
    },
    legalNotice: {
      intro1: 'En cumplimiento con lo dispuesto en la normativa española y europea vigente, se informa que el responsable de este sitio web es ',
      intro2: 'El contenido de esta web tiene carácter informativo y está orientado a mostrar proyectos y servicios relacionados con impresión 3D personalizados. El uso del sitio web implica la aceptación de estas condiciones legales.',
      intro3: 'Queda prohibida la reproducción total o parcial de los contenidos sin autorización expresa del titular. Los diseños y marcas mencionados pertenecen a sus respectivos propietarios.',
      contact: 'Para cualquier consulta relacionada con este aviso legal, puedes escribir a',
    },
    privacy: {
      intro1: 'Los datos personales que puedas facilitar a través de los formularios de contacto se tratarán con la finalidad de responder a tus consultas o solicitudes de presupuestos relacionados con proyectos de impresión 3D.',
      intro2: 'El responsable del tratamiento es Andres Beltran Betancourt. Tus datos no se cederán a terceros salvo obligación legal. La base jurídica del tratamiento es tu consentimiento, que puedes retirar en cualquier momento.',
      intro3: 'Tienes derecho a acceder, rectificar y suprimir tus datos, así como otros derechos reconocidos por la normativa de protección de datos. Para ejercerlos puedes escribir a',
      review: 'Esta política se revisa periódicamente para mantenerla actualizada conforme a la normativa aplicable.',
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
