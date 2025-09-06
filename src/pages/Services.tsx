import { useState } from 'react';
import { services, Service } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, X } from 'lucide-react';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [durationRange, setDurationRange] = useState<[number, number]>([0, 180]);

  const categories = ['Uñas', 'Maquillaje', 'Peinado', 'CorteColor', 'Tratamientos'];
  const allTags = Array.from(new Set(services.flatMap(s => s.tags)));

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || service.categoria === selectedCategory;
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => service.tags.includes(tag));
    const matchesPrice = service.precioDesde >= priceRange[0] && service.precioDesde <= priceRange[1];
    const matchesDuration = service.duracionMin >= durationRange[0] && service.duracionMin <= durationRange[1];

    return matchesSearch && matchesCategory && matchesTags && matchesPrice && matchesDuration;
  });

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTags([]);
    setPriceRange([0, 2000]);
    setDurationRange([0, 180]);
  };

  const handleReservar = (service: Service) => {
    const message = `Hola, me interesa reservar el servicio de ${service.titulo}. ¿Podrían darme más información sobre disponibilidad?`;
    window.open(`https://wa.me/5551234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="hero-section py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Descubre nuestra amplia gama de servicios profesionales de belleza,
            diseñados para resaltar tu belleza natural.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80 space-y-6">
            <div className="beauty-card p-6">
              <div className="flex items-center justify-between mb-4">
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

              {/* Search */}
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar servicios..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Categorías</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                        className={`filter-pill w-full text-left ${
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
                  <h4 className="font-medium text-foreground mb-3">Especialidades</h4>
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

                {/* Price Range */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">
                    Precio: ${priceRange[0]} - ${priceRange[1]}
                  </h4>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>

                {/* Duration Range */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">
                    Duración: {durationRange[0]} - {durationRange[1]} min
                  </h4>
                  <input
                    type="range"
                    min="0"
                    max="180"
                    step="15"
                    value={durationRange[1]}
                    onChange={(e) => setDurationRange([durationRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Services Grid */}
          <main className="flex-1">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Mostrando {filteredServices.length} de {services.length} servicios
              </p>
            </div>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <div key={service.id} className="animate-fade-in">
                    <ServiceCard
                      service={service}
                      onReservar={() => handleReservar(service)}
                      onVerDetalle={() => alert(`Ver detalle: ${service.titulo}`)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="beauty-card max-w-md mx-auto p-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    No encontramos servicios
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Intenta ajustar tus filtros o busca con otros términos.
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Limpiar filtros
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Services;