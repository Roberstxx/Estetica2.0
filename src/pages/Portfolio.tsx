import { useState } from 'react';
import { Camera, Heart, Star, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import nailsImage from '@/assets/nails-service.jpg';
import makeupImage from '@/assets/makeup-service.jpg';
import hairImage from '@/assets/hair-service.jpg';

interface PortfolioItem {
  id: string;
  titulo: string;
  categoria: 'Uñas' | 'Maquillaje' | 'Peinado' | 'CorteColor' | 'Tratamientos';
  tags: string[];
  imagen: string;
  descripcion: string;
  tipoServicio: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'pf-1',
    titulo: 'Uñas Acrílicas Elegantes',
    categoria: 'Uñas',
    tags: ['Boda', 'Elegante'],
    imagen: nailsImage,
    descripcion: 'Set completo con diseño francés y detalles dorados',
    tipoServicio: 'Uñas Acrílicas'
  },
  {
    id: 'pf-2',
    titulo: 'Maquillaje Natural de Novia',
    categoria: 'Maquillaje',
    tags: ['Boda', 'Natural'],
    imagen: makeupImage,
    descripcion: 'Look natural y luminoso para el día especial',
    tipoServicio: 'Maquillaje de Boda'
  },
  {
    id: 'pf-3',
    titulo: 'Peinado Recogido Clásico',
    categoria: 'Peinado',
    tags: ['Evento', 'Clásico'],
    imagen: hairImage,
    descripcion: 'Recogido elegante con accesorios vintage',
    tipoServicio: 'Peinado de Evento'
  },
  {
    id: 'pf-4',
    titulo: 'Nail Art Premium',
    categoria: 'Uñas',
    tags: ['Arte', 'Premium'],
    imagen: nailsImage,
    descripcion: 'Diseño personalizado con técnicas avanzadas',
    tipoServicio: 'Nail Art'
  },
  {
    id: 'pf-5',
    titulo: 'Maquillaje de Gala',
    categoria: 'Maquillaje',
    tags: ['Evento', 'Glamour'],
    imagen: makeupImage,
    descripcion: 'Look dramático para eventos especiales',
    tipoServicio: 'Maquillaje de Gala'
  },
  {
    id: 'pf-6',
    titulo: 'Ondas Hollywood',
    categoria: 'Peinado',
    tags: ['Glamour', 'Vintage'],
    imagen: hairImage,
    descripcion: 'Ondas clásicas al estilo Hollywood',
    tipoServicio: 'Peinado Glamour'
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const categories = ['Uñas', 'Maquillaje', 'Peinado', 'CorteColor', 'Tratamientos'];
  const allTags = Array.from(new Set(portfolioItems.flatMap(item => item.tags)));

  const filteredItems = portfolioItems.filter((item) => {
    const matchesCategory = !selectedCategory || item.categoria === selectedCategory;
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => item.tags.includes(tag));
    return matchesCategory && matchesTags;
  });

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="hero-section py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Nuestro Portafolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Descubre algunos de nuestros trabajos más destacados y deja que nuestro
            talento hable por sí mismo.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="beauty-card p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4 mr-1" />
              Limpiar
            </Button>
          </div>

          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h4 className="font-medium text-foreground mb-3">Categorías</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                    className={`filter-pill ${
                      selectedCategory === category ? 'filter-pill--active' : ''
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h4 className="font-medium text-foreground mb-3">Estilos</h4>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagToggle(tag)}
                    className={`filter-pill ${
                      selectedTags.includes(tag) ? 'filter-pill--active' : ''
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Mostrando {filteredItems.length} de {portfolioItems.length} trabajos
          </p>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="beauty-card p-0 overflow-hidden cursor-pointer group animate-fade-in"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.titulo}</h3>
                    <p className="text-white/90 text-sm">{item.descripcion}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="beauty-badge beauty-badge--category text-xs">
                      {item.categoria}
                    </span>
                    <Heart className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.titulo}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.tipoServicio}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <span key={tag} className="beauty-badge text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="beauty-card max-w-md mx-auto p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                No encontramos trabajos
              </h3>
              <p className="text-muted-foreground mb-4">
                Intenta ajustar tus filtros para ver más resultados.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Limpiar filtros
              </Button>
            </div>
          </div>
        )}

        {/* Instagram CTA */}
        <div className="text-center mt-16 py-12 beauty-gradient-soft rounded-2xl">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              ¿Te gusta lo que ves?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Síguenos en Instagram para ver más de nuestro trabajo diario
              y las últimas tendencias en belleza.
            </p>
            <Button
              asChild
              size="lg"
              className="beauty-gradient text-primary-foreground px-8 py-6 text-lg"
            >
              <a 
                href="https://instagram.com/esteticabella" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Star className="mr-2 h-5 w-5" />
                Ver en Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <img
                src={selectedImage.imagen}
                alt={selectedImage.titulo}
                className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="beauty-badge beauty-badge--category">
                  {selectedImage.categoria}
                </span>
                {selectedImage.tags.map((tag) => (
                  <span key={tag} className="beauty-badge">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                {selectedImage.titulo}
              </h2>
              <p className="text-muted-foreground mb-4">{selectedImage.tipoServicio}</p>
              <p className="text-foreground">{selectedImage.descripcion}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;