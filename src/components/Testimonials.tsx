import { testimonials } from '@/data/testimonials';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  // Get first 3 testimonials
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que dicen nuestras clientas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mayor recompensa. 
            Lee lo que opinan sobre nuestros servicios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTestimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-medium">4.9/5 basado en 150+ reseñas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;