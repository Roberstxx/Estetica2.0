import { services } from '@/data/services';
import ServiceCard from './ServiceCard';

const FeaturedServices = () => {
  // Get first 4 services as featured
  const featuredServices = services.slice(0, 4);

  const handleReservar = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      const message = `Hola, me interesa reservar el servicio de ${service.titulo}. ¿Podrían darme más información sobre disponibilidad?`;
      window.open(`https://wa.me/9812061662?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const handleVerDetalle = (serviceId: string) => {
    // In a real app, this would navigate to service detail page
    const service = services.find(s => s.id === serviceId);
    if (service) {
      alert(`Navegando a detalle del servicio: ${service.titulo}`);
    }
  };

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra amplia gama de servicios de belleza, diseñados para resaltar tu
            belleza natural con técnicas profesionales y productos de alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <div key={service.id} className="animate-fade-in">
              <ServiceCard
                service={service}
                onReservar={() => handleReservar(service.id)}
                onVerDetalle={() => handleVerDetalle(service.id)}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
          >
            Ver todos los servicios
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;