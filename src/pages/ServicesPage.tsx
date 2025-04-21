import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Droplet, Sparkles, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
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
    
    // Handle hash links
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const services = [
    {
      id: '1',
      title: 'Cortes y Peinados',
      description: 'Ofrecemos cortes personalizados que se adaptan a tu estilo, forma de rostro y tipo de cabello. Nuestros estilistas están formados en las últimas técnicas y tendencias.',
      icon: <Scissors className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      prices: [
        { name: 'Corte de Pelo (Mujer)', price: 2500 },
        { name: 'Corte de Pelo (Hombre)', price: 1800 },
        { name: 'Peinado para Evento', price: 3500 },
        { name: 'Corte + Peinado', price: 4000 },
      ],
    },
    {
      id: '2',
      title: 'Coloración',
      description: 'Desde técnicas clásicas hasta las últimas tendencias en coloración. Utilizamos productos de primera calidad para garantizar un resultado duradero y un cabello saludable.',
      icon: <Palette className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      prices: [
        { name: 'Tinte Completo', price: 4500 },
        { name: 'Balayage', price: 6500 },
        { name: 'Mechas', price: 5500 },
        { name: 'Color Fantasía', price: 7500 },
      ],
    },
    {
      id: '3',
      title: 'Tratamientos',
      description: 'Realizamos diagnósticos capilares para ofrecer tratamientos personalizados que restauran y fortalecen tu cabello. Trabajamos con las mejores marcas del mercado.',
      icon: <Droplet className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      prices: [
        { name: 'Hidratación Profunda', price: 3000 },
        { name: 'Tratamiento de Keratina', price: 5500 },
        { name: 'Botox Capilar', price: 6000 },
        { name: 'Tratamiento Reparador', price: 4500 },
      ],
    },
    {
      id: '4',
      title: 'Extensiones',
      description: 'Añade longitud y volumen con nuestras extensiones de cabello natural. Técnicas invisibles y duraderas para un resultado natural y sin daños.',
      icon: <Sparkles className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      prices: [
        { name: 'Extensiones de Fila Completa', price: 12000 },
        { name: 'Extensiones de Media Fila', price: 7000 },
        { name: 'Extensiones Individuales', price: 5000 },
        { name: 'Mantenimiento de Extensiones', price: 4000 },
      ],
    },
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
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Descubre todos nuestros servicios profesionales diseñados para transformar y embellecer tu cabello.
            Trabajamos con las mejores marcas y técnicas del mercado.
          </p>
        </motion.div>

        {/* Services List */}
        {services.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id}
            className={`animate-on-scroll mb-16 ${index % 2 === 0 ? '' : 'bg-gray-50 py-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-xl'}`}
          >
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md">
                    <div className="text-primary-500">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-secondary-700 mb-6">
                  {service.description}
                </p>
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                  <h3 className="text-lg font-semibold mb-3">Precios (ARS)</h3>
                  <ul className="space-y-2">
                    {service.prices.map((price, idx) => (
                      <li key={idx} className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span>{price.name}</span>
                        <span className="font-medium">${price.price.toLocaleString()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contacto" className="btn btn-primary flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Reservar Cita
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Why Choose Us */}
        <div className="bg-primary-50 rounded-xl p-8 mt-12 animate-on-scroll">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">¿Por Qué Elegir Nuestros Servicios?</h2>
            <p className="text-secondary-700 max-w-3xl mx-auto">
              Ofrecemos una experiencia profesional y personalizada para cada cliente, utilizando productos de alta calidad y las técnicas más avanzadas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Productos Premium</h3>
              <p className="text-secondary-600">
                Utilizamos exclusivamente productos de alta calidad de marcas reconocidas para garantizar los mejores resultados.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Scissors className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Estilistas Certificados</h3>
              <p className="text-secondary-600">
                Nuestro equipo cuenta con certificaciones internacionales y años de experiencia en el sector.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Servicio Personalizado</h3>
              <p className="text-secondary-600">
                Cada cliente recibe un diagnóstico capilar y un servicio adaptado a sus necesidades específicas.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4">¿Lista para transformar tu cabello?</h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto mb-8">
            Contáctanos hoy mismo para agendar una cita o resolver cualquier duda sobre nuestros servicios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="btn btn-primary">
              Agendar Cita
            </Link>
            <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;