import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Animate elements on scroll
    const animateScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    animateScroll();
  }, []);

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'cortes',
      title: 'Corte Moderno',
      description: 'Corte profesional con estilo urbano',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'color',
      title: 'Balayage Caramelo',
      description: 'Técnica de coloración natural',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'peinados',
      title: 'Peinado de Gala',
      description: 'Recogido elegante para eventos',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'tratamientos',
      title: 'Tratamiento Hidratante',
      description: 'Recuperación intensiva con keratina',
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'color',
      title: 'Mechas Rubias',
      description: 'Técnica de iluminación natural',
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'cortes',
      title: 'Corte Pixie',
      description: 'Estilo corto y moderno',
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/3771679/pexels-photo-3771679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'peinados',
      title: 'Ondas Playeras',
      description: 'Ondas naturales con efecto playa',
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/3993450/pexels-photo-3993450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'color',
      title: 'Color Fantasía',
      description: 'Colores vibrantes y originales',
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/3993089/pexels-photo-3993089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'tratamientos',
      title: 'Botox Capilar',
      description: 'Tratamiento de rejuvenecimiento',
    },
    {
      id: 10,
      image: 'https://images.pexels.com/photos/3997387/pexels-photo-3997387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'peinados',
      title: 'Recogido Elegante',
      description: 'Peinado para ocasiones especiales',
    },
    {
      id: 11,
      image: 'https://images.pexels.com/photos/4997917/pexels-photo-4997917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'cortes',
      title: 'Long Bob',
      description: 'Corte versátil media melena',
    },
    {
      id: 12,
      image: 'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'tratamientos',
      title: 'Tratamiento Anti-frizz',
      description: 'Control del encrespamiento',
    },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'cortes', name: 'Cortes' },
    { id: 'color', name: 'Coloración' },
    { id: 'peinados', name: 'Peinados' },
    { id: 'tratamientos', name: 'Tratamientos' },
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Nuestra Galería</h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Explora nuestros trabajos y descubre la magia que podemos crear con tu cabello. 
            Desde cortes modernos hasta coloraciones impresionantes.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-2 rounded-full shadow-sm border border-gray-100">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-transparent text-secondary-700 hover:bg-primary-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="gallery-item animate-on-scroll"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-80 object-cover"
              />
              <div className="gallery-item-overlay">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider bg-primary-500 px-2 py-1 rounded-full">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                    <p className="text-sm opacity-80">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20 bg-gray-50 p-8 rounded-2xl shadow-sm animate-on-scroll">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">¿Te Gustó Nuestra Galería?</h2>
              <p className="text-secondary-700 mb-4">
                Contacta con nosotros para agendar una cita y transformar tu cabello con nuestro equipo de profesionales. 
                Ofrecemos consultas personalizadas para ayudarte a encontrar el estilo perfecto para ti.
              </p>
              <p className="text-secondary-700 mb-6">
                También puedes seguirnos en Instagram para ver nuestros trabajos más recientes y estar al tanto de las 
                últimas tendencias en belleza capilar.
              </p>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary flex items-center justify-center w-full md:w-auto"
              >
                <Instagram className="w-5 h-5 mr-2" /> Síguenos en Instagram
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3738332/pexels-photo-3738332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Estilista profesional" 
                className="rounded-xl shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;