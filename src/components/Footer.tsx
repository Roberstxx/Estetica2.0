import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
              Estética Bella
            </h3>
            <p className="text-gray-300 text-sm">
              Tu belleza es nuestra pasión. Servicios profesionales de uñas, maquillaje, 
              peinado y tratamientos capilares en un ambiente relajante y elegante.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ahavahbeautystudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-glow transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Ahavah-Beauty-Studio/100082316936923/?ref=_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-glow transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Enlaces Rápidos</h4>
            <nav className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-primary-glow transition-colors text-sm">
                Inicio
              </a>
              <a href="/services" className="block text-gray-300 hover:text-primary-glow transition-colors text-sm">
                Servicios
              </a>
              <a href="/portfolio" className="block text-gray-300 hover:text-primary-glow transition-colors text-sm">
                Portafolio
              </a>
              <a href="/about" className="block text-gray-300 hover:text-primary-glow transition-colors text-sm">
                Acerca de
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-primary-glow transition-colors text-sm">
                Contacto
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-glow mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Av. Revolución 123</p>
                  <p>Col. Centro, CDMX 06000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-glow flex-shrink-0" />
                <a 
                  href="tel:+525551234567" 
                  className="text-gray-300 text-sm hover:text-primary-glow transition-colors"
                >
                  +52 55 1234 5567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-glow flex-shrink-0" />
                <a 
                  href="mailto:hola@esteticabella.com" 
                  className="text-gray-300 text-sm hover:text-primary-glow transition-colors"
                >
                  hola@esteticabella.com
                </a>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Horarios</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary-glow" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Lun - Vie</p>
                  <p>9:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="text-gray-300 text-sm ml-7">
                <p className="font-medium">Sábados</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
              <div className="text-gray-300 text-sm ml-7">
                <p className="font-medium">Domingos</p>
                <p>10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Estética Bella. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-primary-glow transition-colors">
                Privacidad
              </a>
              <a href="/terms" className="text-gray-400 hover:text-primary-glow transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;