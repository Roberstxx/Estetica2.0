import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleWhatsApp = () => {
    const message = 'Hola, me gustaría agendar una cita.';
    window.open(`https://wa.me/5551234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulario enviado. En una aplicación real, esto se procesaría en el servidor.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Contactanos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Estamos aquí para ayudarte. Agenda tu cita o resuelve tus dudas
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Información de Contacto
              </h2>
              <p className="text-muted-foreground mb-8">
                Nos encanta escuchar de nuestras clientas. Contáctanos por cualquier medio 
                y te responderemos lo antes posible.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="beauty-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
                    <p className="text-muted-foreground">
                      Av. Revolución 123<br />
                      Col. Centro, CDMX 06000<br />
                      Entre Av. Juárez y Av. Madero
                    </p>
                  </div>
                </div>
              </div>

              <div className="beauty-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
                    <a 
                      href="tel:+525551234567" 
                      className="text-primary hover:text-primary-glow transition-colors"
                    >
                      +52 55 1234 5567
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Lun - Vie: 9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="beauty-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                    <Button
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="mb-2"
                    >
                      Enviar mensaje
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      La forma más rápida de agendar tu cita
                    </p>
                  </div>
                </div>
              </div>

              <div className="beauty-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a 
                      href="mailto:hola@esteticabella.com" 
                      className="text-primary hover:text-primary-glow transition-colors"
                    >
                      hola@esteticabella.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Respuesta en menos de 24 horas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="beauty-card p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-4">Horarios de Atención</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-foreground">Lunes - Viernes</p>
                      <p className="text-muted-foreground">9:00 AM - 8:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Sábados</p>
                      <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Domingos</p>
                      <p className="text-muted-foreground">10:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Días festivos</p>
                      <p className="text-muted-foreground">Consultar disponibilidad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="beauty-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Síguenos en Redes</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/ahavahbeautystudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:scale-105 transition-transform"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/people/Ahavah-Beauty-Studio/100082316936923/?ref=_xav_ig_profile_page_web#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:scale-105 transition-transform"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Envíanos un Mensaje
              </h2>
              <p className="text-muted-foreground mb-8">
                ¿Tienes alguna pregunta específica? Completa el formulario y te contactaremos pronto.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="beauty-card p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    id="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono *
                  </label>
                  <Input
                    id="telefono"
                    type="tel"
                    required
                    placeholder="Tu teléfono"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-foreground mb-2">
                  Servicio de interés
                </label>
                <select
                  id="servicio"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="unas">Uñas</option>
                  <option value="maquillaje">Maquillaje</option>
                  <option value="peinado">Peinado</option>
                  <option value="corte">Corte de cabello</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="mensaje"
                  required
                  placeholder="Cuéntanos qué necesitas..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full beauty-gradient text-primary-foreground py-3 text-lg"
              >
                Enviar mensaje
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Campos obligatorios. Responderemos en menos de 24 horas.
              </p>
            </form>

            {/* Map Placeholder */}
            <div className="beauty-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Nuestra Ubicación</h3>
              <div className="bg-accent rounded-lg p-8 text-center">
                <MapPin className="h-12 w-12 text-accent-foreground mx-auto mb-4" />
                <p className="text-accent-foreground">
                  Mapa interactivo<br />
                  <span className="text-sm">Av. Revolución 123, Col. Centro</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;