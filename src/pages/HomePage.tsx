import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Award, Truck, Clock } from 'lucide-react';

import ServiceCard from '../components/home/ServiceCard';
import TestimonialCard from '../components/home/TestimonialCard';
import InstagramGallery from '../components/home/InstagramGallery';

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

const HomePage = () => {
  useEffect(() => {
    animateScroll();
  }, []);

  const services = [
    {
      id: 1,
      title: 'Cortes y Peinados',
      description: 'Cortes modernos y peinados para cualquier ocasión. Estilo personalizado según tu tipo de rostro.',
      icon: 'Scissors',
      image: 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'Coloración',
      description: 'Técnicas de coloración profesional. Desde mechas y balayage hasta colores fantasía.',
      icon: 'Palette',
      image: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Tratamientos',
      description: 'Tratamientos capilares para todo tipo de cabello. Hidratación, nutrición y reconstrucción.',
      icon: 'Droplet',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Carolina Pérez',
      testimonial: 'Increíble experiencia. Mi cabello nunca había lucido tan saludable y hermoso. ¡Totalmente recomendada!',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 2,
      name: 'Martina Rodríguez',
      testimonial: 'Los productos que compré son de excelente calidad. Mi pelo luce increíble y el envío fue super rápido.',
      image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 3,
      name: 'Valeria Gómez',
      testimonial: 'La atención es excelente y los resultados superaron mis expectativas. Encontré mi salón de confianza.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
    },
  ];

  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-primary-500" />,
      title: 'Productos Premium',
      description: 'Trabajamos únicamente con marcas de alta calidad para garantizar los mejores resultados.',
    },
    {
      icon: <Award className="w-6 h-6 text-primary-500" />,
      title: 'Estilistas Certificados',
      description: 'Nuestro equipo cuenta con certificaciones internacionales y constante capacitación.',
    },
    {
      icon: <Truck className="w-6 h-6 text-primary-500" />,
      title: 'Envíos a Todo el País',
      description: 'Hacemos envíos de nuestros productos a todas las provincias de Argentina.',
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-500" />,
      title: 'Atención Personalizada',
      description: 'Cada cliente recibe un diagnóstico y asesoramiento personalizado para sus necesidades.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-20 bg-gradient-to-r from-primary-100 to-primary-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 animate-on-scroll">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4"
              >
                Transforma tu cabello con nuestra experiencia profesional
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-secondary-700 mb-8"
              >
                Descubre un mundo de belleza y cuida tu cabello con los mejores productos y tratamientos profesionales.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/servicios" className="btn btn-primary">
                  Nuestros Servicios
                </Link>
                <Link to="/productos" className="btn btn-secondary">
                  Ver Productos
                </Link>
              </motion.div>
            </div>
            <div className="md:w-1/2 animate-on-scroll">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <img 
                  src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Estilista profesional" 
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <p className="text-primary-600 font-bold">Envíos a todo el país</p>
                  <p className="text-sm text-secondary-600">Recibe nuestros productos donde estés</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 animate-on-scroll"
              >
                <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios profesionales para el cuidado y belleza de tu cabello.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/servicios" className="btn btn-primary">
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-on-scroll">
              <img 
                src="https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Salón de belleza" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Acerca de Glow Up Peluquería</h2>
              <p className="text-secondary-700 mb-6">
                Glow Up Peluquería es un estudio de belleza profesional especializado en tratamientos capilares de alta calidad. 
                Nuestra fundadora cuenta con más de 15 años de experiencia y certificaciones internacionales.
              </p>
              <p className="text-secondary-700 mb-8">
                Nos enfocamos en brindar un servicio personalizado, utilizando productos de primera calidad y técnicas innovadoras 
                para lograr resultados excepcionales en cada cliente.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                  <span>Experiencia Profesional</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                  <span>Certificaciones Internacionales</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                  <span>Productos Premium</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                  <span>Atención Personalizada</span>
                </div>
              </div>
              <Link to="/contacto" className="btn btn-primary">
                Conoce Más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title">Nuestra Galería</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Descubre nuestros trabajos y las increíbles transformaciones que hemos realizado.
            </p>
          </div>
          <InstagramGallery />
          <div className="text-center mt-12">
            <Link to="/galeria" className="btn btn-primary">
              Ver Galería Completa
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Descubre por qué nuestros clientes confían en nosotros para el cuidado de su cabello.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-on-scroll">
            ¿Lista para transformar tu cabello?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto animate-on-scroll">
            Contáctanos hoy mismo para agendar una cita o adquirir nuestros productos profesionales con envío a todo el país.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Link to="/contacto" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Contactar Ahora
            </Link>
            <Link to="/productos" className="btn bg-primary-600 text-white hover:bg-primary-700 border border-white">
              Ver Productos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;