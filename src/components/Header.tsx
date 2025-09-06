import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/services' },
    { name: 'Portafolio', href: '/portfolio' },
    { name: 'Acerca de', href: '/about' },
    { name: 'Contacto', href: '/contact' }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/9812061662?text=Hola,%20quiero%20reservar%20un%20servicio', '_blank');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-serif font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Estética Bella
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsApp}
              className="flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Llamar</span>
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="beauty-gradient text-primary-foreground hover:opacity-90"
            >
              Reservar
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleWhatsApp}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar
                </Button>
                <Button
                  className="w-full beauty-gradient text-primary-foreground"
                  onClick={handleWhatsApp}
                >
                  Reservar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;