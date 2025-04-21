import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';

const ContactPage = () => {
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

  const handleWhatsApp = () => {
    const message = "Hola! Me gustaría solicitar información/agendar una cita.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5491112345678?text=${encodedMessage}`, '_blank');
  };

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
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para agendar una cita, realizar consultas sobre nuestros servicios o productos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-primary-500 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Información de Contacto</h2>
                <p>Estamos disponibles para atenderte de lunes a sábado</p>
              </div>
              <div className="p-6">
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Dirección</h3>
                      <p className="text-secondary-700">
                        Av. Corrientes 1234, Buenos Aires, Argentina
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                      <p className="text-secondary-700">
                        +54 9 11 1234-5678
                      </p>
                      <p className="text-secondary-600 text-sm">
                        Contáctanos por WhatsApp para una respuesta más rápida
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600 flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-secondary-700">
                        info@glowup.com
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600 flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Horario de Atención</h3>
                      <p className="text-secondary-700">
                        Lunes a Viernes: 10:00 - 20:00
                        <br />
                        Sábados: 10:00 - 18:00
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-3">Síguenos en Redes Sociales</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/glowup_peluqueria_" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700 p-3 rounded-full text-white hover:opacity-90 transition-opacity"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://wa.me/5491112345678" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map and CTA */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <img 
                src="https://images.pexels.com/photos/3738333/pexels-photo-3738333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Salón de belleza" 
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="bg-primary-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">¿Cómo podemos ayudarte?</h2>
              <p className="text-secondary-700 mb-6">
                Si quieres agendar una cita, obtener información sobre nuestros servicios o hacer un pedido de productos, 
                contáctanos por WhatsApp o rellena el formulario en nuestra página.
              </p>
              <button
                onClick={handleWhatsApp}
                className="btn btn-whatsapp w-full flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> Contactar por WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 animate-on-scroll">
          <h2 className="text-2xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">¿Es necesario agendar cita previamente?</h3>
              <p className="text-secondary-700">
                Sí, recomendamos agendar cita con anticipación para garantizar la disponibilidad y brindarte 
                un servicio personalizado.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">¿Qué métodos de pago aceptan?</h3>
              <p className="text-secondary-700">
                Aceptamos efectivo, transferencias bancarias, Mercado Pago y tarjetas de crédito/débito.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">¿Cómo puedo cancelar o reprogramar una cita?</h3>
              <p className="text-secondary-700">
                Puedes cancelar o reprogramar tu cita con al menos 24 horas de anticipación contactándonos 
                por teléfono o WhatsApp.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">¿Realizan servicios a domicilio?</h3>
              <p className="text-secondary-700">
                Para algunos servicios específicos, ofrecemos atención a domicilio en CABA y alrededores. 
                Consulta disponibilidad y precios.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-primary-500 rounded-xl p-8 text-white text-center animate-on-scroll">
          <h2 className="text-2xl font-bold mb-6">Lo Que Dicen Nuestros Clientes</h2>
          <blockquote className="text-lg italic mb-4">
            "El mejor salón de belleza que he visitado. Servicios profesionales y productos de excelente calidad. 
            Totalmente recomendado para quien busca los mejores resultados."
          </blockquote>
          <p className="font-semibold">Carolina Pérez</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;