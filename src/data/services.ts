export interface Service {
  id: string;
  titulo: string;
  slug: string;
  categoria: 'Uñas' | 'Maquillaje' | 'Peinado' | 'CorteColor' | 'Tratamientos';
  tags: string[];
  descripcion: string;
  incluye: string[];
  duracionMin: number;
  precioDesde: number;
  extras: { nombre: string; precioAdicional: number }[];
  imagenes: string[];
}

export const services: Service[] = [
  {
    id: 'sv-unas-acrilicas',
    titulo: 'Uñas Acrílicas Naturales',
    slug: 'unas-acrilicas-naturales',
    categoria: 'Uñas',
    tags: ['Express', 'Tendencia'],
    descripcion: 'Set natural con forma almendra, acabado pulido y duradero.',
    incluye: ['Preparación de cutícula', 'Aplicación de acrílico natural', 'Sellado y pulido'],
    duracionMin: 90,
    precioDesde: 450,
    extras: [
      { nombre: 'Decoración simple', precioAdicional: 80 },
      { nombre: 'Nail art avanzado', precioAdicional: 150 }
    ],
    imagenes: ['nails-service.jpg']
  },
  {
    id: 'sv-maquillaje-evento',
    titulo: 'Maquillaje para Evento',
    slug: 'maquillaje-evento',
    categoria: 'Maquillaje',
    tags: ['Boda', 'Evento', 'Tendencia'],
    descripcion: 'Look de larga duración con enfoque en piel luminosa y natural.',
    incluye: ['Preparación de piel', 'Base HD de larga duración', 'Fijación profesional', 'Retoque incluido'],
    duracionMin: 75,
    precioDesde: 700,
    extras: [
      { nombre: 'Pestañas postizas', precioAdicional: 120 },
      { nombre: 'Prueba previa', precioAdicional: 300 }
    ],
    imagenes: ['makeup-service.jpg']
  },
  {
    id: 'sv-peinado-recogido',
    titulo: 'Peinado Recogido Elegante',
    slug: 'peinado-recogido-elegante',
    categoria: 'Peinado',
    tags: ['Boda', 'Evento'],
    descripcion: 'Recogido pulcro y sofisticado para eventos formales.',
    incluye: ['Moldeado y texturizado', 'Fijación de larga duración', 'Accesorios básicos'],
    duracionMin: 60,
    precioDesde: 550,
    extras: [
      { nombre: 'Prueba previa', precioAdicional: 200 },
      { nombre: 'Accesorios premium', precioAdicional: 150 }
    ],
    imagenes: ['hair-service.jpg']
  },
  {
    id: 'sv-corte-caballero',
    titulo: 'Corte de Cabello Caballero',
    slug: 'corte-cabello-caballero',
    categoria: 'CorteColor',
    tags: ['Caballero', 'Express'],
    descripcion: 'Corte clásico o fade moderno, adaptado a tu estilo personal.',
    incluye: ['Asesoría de estilo', 'Corte personalizado', 'Peinado y finish'],
    duracionMin: 40,
    precioDesde: 200,
    extras: [
      { nombre: 'Arreglo de barba', precioAdicional: 120 },
      { nombre: 'Tratamiento capilar', precioAdicional: 80 }
    ],
    imagenes: ['hair-service.jpg']
  },
  {
    id: 'sv-manicure-express',
    titulo: 'Manicure Express',
    slug: 'manicure-express',
    categoria: 'Uñas',
    tags: ['Express', 'Oficina'],
    descripcion: 'Manicure rápido y pulcro para el día a día.',
    incluye: ['Limado y forma', 'Cutícula', 'Esmaltado clásico'],
    duracionMin: 30,
    precioDesde: 180,
    extras: [
      { nombre: 'Esmaltado gel', precioAdicional: 100 }
    ],
    imagenes: ['nails-service.jpg']
  },
  {
    id: 'sv-maquillaje-novias',
    titulo: 'Maquillaje de Novia',
    slug: 'maquillaje-novias',
    categoria: 'Maquillaje',
    tags: ['Boda', 'Especial'],
    descripcion: 'Maquillaje especial para el día más importante, con prueba incluida.',
    incluye: ['Consulta previa', 'Prueba de maquillaje', 'Maquillaje del día', 'Kit de retoques'],
    duracionMin: 120,
    precioDesde: 1200,
    extras: [
      { nombre: 'Maquillaje madrina', precioAdicional: 600 },
      { nombre: 'Traslado al lugar', precioAdicional: 300 }
    ],
    imagenes: ['makeup-service.jpg']
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (categoria: string): Service[] => {
  return services.filter(service => service.categoria === categoria);
};

export const getServicesByTag = (tag: string): Service[] => {
  return services.filter(service => service.tags.includes(tag));
};