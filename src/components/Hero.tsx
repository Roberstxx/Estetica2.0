import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-beauty.jpg';

const Hero = () => {
  const handleReservar = () => {
    const message = 'Hola, quiero reservar un servicio.';
    window.open(`https://wa.me/9812061662?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="hero-section relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Estética Bella - Salón de belleza profesional"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">
              Tu belleza, nuestra pasión
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Belleza profesional para tu{' '}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              evento
            </span>{' '}
            y día a día
          </h1>

          {/* Subcopy */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Uñas, maquillaje, peinado y cortes con enfoque en calidad y detalle.
            Experimenta la diferencia de un servicio verdaderamente profesional.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              size="lg"
              onClick={handleReservar}
              className="beauty-gradient text-primary-foreground px-8 py-6 text-lg hover:scale-105 transition-transform"
            >
              Reservar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="px-8 py-6 text-lg border-2 hover:bg-accent"
            >
              <Link to="/services">Ver servicios</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold font-serif text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Clientes satisfechas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-serif text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-serif text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Servicios especializados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;