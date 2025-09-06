import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleClick = () => {
    const message = 'Hola, me gustaría reservar un servicio. ¿Podrían ayudarme?';
    window.open(`https://wa.me/9812061662?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppFloat;