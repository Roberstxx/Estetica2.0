import { Button } from '@/components/ui/button';
import { Award, Heart, Users, Clock } from 'lucide-react';

const About = () => {
  const handleWhatsApp = () => {
    const message = 'Hola, me gustaría conocer más sobre sus servicios.';
    window.open(`https://wa.me/5551234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Conoce Estética Bella
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Más que un salón de belleza, somos tu refugio de tranquilidad y bienestar
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Estética Bella nació hace tres años del sueño de crear un espacio donde cada mujer 
                  pudiera sentirse especial y única. Lo que comenzó como una pequeña idea se ha 
                  convertido en el refugio de belleza favorito de más de 500 clientas satisfechas.
                </p>
                <p>
                  Nuestra filosofía es simple: cada servicio debe ser una experiencia memorable. 
                  Utilizamos únicamente productos de la más alta calidad y técnicas innovadoras 
                  para garantizar resultados excepcionales.
                </p>
                <p>
                  Creemos que la belleza exterior refleja la confianza interior, y nuestro objetivo 
                  es que cada cliente salga de nuestro salón sintiéndose radiante y empoderada.
                </p>
              </div>
            </div>
            <div className="beauty-card p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-12 w-12 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Ana María González
              </h3>
              <p className="text-muted-foreground mb-4">
                Fundadora y Directora Creativa
              </p>
              <p className="text-sm text-muted-foreground italic">
                "Mi pasión es hacer que cada mujer descubra su belleza única y se sienta 
                completamente segura de sí misma."
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada servicio y cada interacción con nuestras clientas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="beauty-card text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Excelencia</h3>
              <p className="text-sm text-muted-foreground">
                Buscamos la perfección en cada detalle, desde la técnica hasta la experiencia.
              </p>
            </div>

            <div className="beauty-card text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Pasión</h3>
              <p className="text-sm text-muted-foreground">
                Amamos lo que hacemos y eso se refleja en cada servicio que ofrecemos.
              </p>
            </div>

            <div className="beauty-card text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Confianza</h3>
              <p className="text-sm text-muted-foreground">
                Construimos relaciones duraderas basadas en la confianza y el respeto mutuo.
              </p>
            </div>

            <div className="beauty-card text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Puntualidad</h3>
              <p className="text-sm text-muted-foreground">
                Respetamos tu tiempo y garantizamos puntualidad en cada cita.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20">
          <div className="beauty-card p-8">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Certificaciones y Especialidades
              </h2>
              <p className="text-lg text-muted-foreground">
                Nuestro equipo está constantemente capacitándose para ofrecerte lo último en técnicas de belleza
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">🎨</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Maquillaje Profesional</h3>
                <p className="text-sm text-muted-foreground">
                  Certificación en maquillaje de alta definición y técnicas de contouring avanzado
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">💅</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Nail Art Especializada</h3>
                <p className="text-sm text-muted-foreground">
                  Técnicas avanzadas en uñas acrílicas, gel y diseños personalizados
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">✂️</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Estilismo Capilar</h3>
                <p className="text-sm text-muted-foreground">
                  Especialización en cortes de tendencia y peinados para eventos especiales
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="beauty-card max-w-2xl mx-auto p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              ¿Lista para vivir la experiencia Estética Bella?
            </h2>
            <p className="text-muted-foreground mb-6">
              Agenda tu cita hoy mismo y descubre por qué somos el salón de belleza 
              favorito de cientos de mujeres en la ciudad.
            </p>
            <Button
              onClick={handleWhatsApp}
              className="beauty-gradient text-primary-foreground px-8 py-3"
            >
              Reservar mi cita
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;