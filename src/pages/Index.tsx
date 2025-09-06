import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import Testimonials from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Camera } from 'lucide-react';

const Index = () => {
  const handleWhatsApp = () => {
    const message = 'Hola, me gustaría agendar una cita.';
    window.open(`https://wa.me/5551234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedServices />
      
      {/* Before/After Carousel Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transformaciones Increíbles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mira el antes y después de algunos de nuestros trabajos más destacados.
              Cada transformación cuenta una historia única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="beauty-card p-6 text-center">
              <div className="w-full h-48 bg-accent rounded-lg mb-4 flex items-center justify-center">
                <Camera className="h-12 w-12 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Maquillaje de Boda</h3>
              <p className="text-sm text-muted-foreground">Transformación natural y elegante</p>
            </div>
            <div className="beauty-card p-6 text-center">
              <div className="w-full h-48 bg-accent rounded-lg mb-4 flex items-center justify-center">
                <Camera className="h-12 w-12 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Nail Art Premium</h3>
              <p className="text-sm text-muted-foreground">De simple a espectacular</p>
            </div>
            <div className="beauty-card p-6 text-center">
              <div className="w-full h-48 bg-accent rounded-lg mb-4 flex items-center justify-center">
                <Camera className="h-12 w-12 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Peinado de Evento</h3>
              <p className="text-sm text-muted-foreground">Elegancia y sofisticación</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Mini About Section */}
      <section className="py-16 lg:py-24 beauty-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Conoce nuestra historia</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Más que un salón, tu refugio de belleza
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Con más de 3 años de experiencia y cientos de clientas satisfechas, 
              Estética Bella se ha convertido en el lugar de confianza donde cada 
              mujer encuentra su mejor versión.
            </p>
            
            <Button
              asChild
              variant="outline"
              className="border-2 hover:bg-white/20"
            >
              <a href="/about">
                Conoce más sobre nosotros
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mini Gallery */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestro Espacio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un ambiente cuidadosamente diseñado para tu relajación y bienestar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="beauty-card p-0 overflow-hidden">
                <div className="w-full h-32 md:h-48 bg-accent flex items-center justify-center">
                  <Camera className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 beauty-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            ¿Lista para tu transformación?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda tu cita hoy mismo y vive la experiencia Estética Bella
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            variant="secondary"
            className="px-8 py-6 text-lg bg-white text-primary hover:bg-white/90"
          >
            Reservar ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
