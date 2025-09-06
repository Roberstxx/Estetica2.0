export interface Testimonial {
  id: string;
  nombreCliente: string;
  rating: number;
  texto: string;
  servicioRelacionado?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    nombreCliente: 'Mariana R.',
    rating: 5,
    texto: 'Excelente servicio y súper puntual. El maquillaje duró toda la noche del evento, me sentí hermosa.',
    servicioRelacionado: 'sv-maquillaje-evento'
  },
  {
    id: 'test-2',
    nombreCliente: 'Ana Laura M.',
    rating: 5,
    texto: 'Las uñas quedaron perfectas, exactamente como las imaginé. El ambiente del salón es muy relajante.',
    servicioRelacionado: 'sv-unas-acrilicas'
  },
  {
    id: 'test-3',
    nombreCliente: 'Patricia V.',
    rating: 5,
    texto: 'Mi peinado de boda fue un sueño hecho realidad. Súper profesional y atenta a cada detalle.',
    servicioRelacionado: 'sv-peinado-recogido'
  },
  {
    id: 'test-4',
    nombreCliente: 'Carlos S.',
    rating: 5,
    texto: 'Corte perfecto, rápido y a buen precio. Definitivamente mi barbería de confianza desde ahora.',
    servicioRelacionado: 'sv-corte-caballero'
  },
  {
    id: 'test-5',
    nombreCliente: 'Elena G.',
    rating: 5,
    texto: 'El día de mi boda me sentí como una princesa. El maquillaje y peinado fueron impecables.',
    servicioRelacionado: 'sv-maquillaje-novias'
  }
];