import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  onReservar?: () => void;
  onVerDetalle?: () => void;
}

const ServiceCard = ({ service, onReservar, onVerDetalle }: ServiceCardProps) => {
  const handleWhatsApp = () => {
    const message = `Hola, me interesa el servicio de ${service.titulo}. ¿Podrían darme más información?`;
    window.open(`https://wa.me/5551234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div
      className="beauty-card group cursor-pointer h-full flex flex-col"
      onClick={onVerDetalle}
    >
      {/* Imagen con altura fija */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={`/src/assets/${service.imagenes[0]}`}
          alt={service.titulo}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="beauty-badge beauty-badge--category">
            {service.categoria}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="space-y-3 flex-1 flex flex-col">
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2 line-clamp-2">
            {service.titulo}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {service.descripcion}
          </p>
        </div>

        {/* Etiquetas */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="beauty-badge text-xs whitespace-nowrap truncate max-w-[100px]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Detalles */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{service.duracionMin} min</span>
          </div>
          <div className="font-semibold text-foreground">
            Desde ${service.precioDesde}
          </div>
        </div>

        {/* Botones abajo */}
        <div className="flex space-x-2 pt-2 mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              onVerDetalle?.();
            }}
          >
            Ver detalle
          </Button>
          <Button
            size="sm"
            className="flex-1 beauty-gradient text-primary-foreground"
            onClick={(e) => {
              e.stopPropagation();
              onReservar ? onReservar() : handleWhatsApp();
            }}
          >
            Reservar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
