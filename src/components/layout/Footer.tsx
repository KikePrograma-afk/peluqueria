import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Scissors size={24} className="text-primary-400" />
              <span className="text-xl font-bold">Glow Up Peluquería</span>
            </Link>
            <p className="text-secondary-300 text-sm">
              Estudio de belleza profesional especializado en tratamientos capilares de alta calidad. Envíos a todo el país.
            </p>
            <div className="flex space-x-3">
              <a href="https://instagram.com/glowup_peluqueria_" target="_blank" rel="noopener noreferrer" 
                className="text-secondary-300 hover:text-primary-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-secondary-300 hover:text-primary-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-secondary-300 hover:text-primary-400 transition-colors duration-300">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-secondary-300 hover:text-primary-400 transition-colors duration-300">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-secondary-300 hover:text-primary-400 transition-colors duration-300">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-secondary-300 hover:text-primary-400 transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li className="text-secondary-300">Cortes de Pelo</li>
              <li className="text-secondary-300">Coloración</li>
              <li className="text-secondary-300">Tratamientos</li>
              <li className="text-secondary-300">Peinados</li>
              <li className="text-secondary-300">Extensiones</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-secondary-300">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Av. Corrientes 1234, Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center space-x-3 text-secondary-300">
                <Phone size={20} className="flex-shrink-0" />
                <span>+54 9 11 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3 text-secondary-300">
                <Mail size={20} className="flex-shrink-0" />
                <span>info@glowup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 text-center text-sm text-secondary-400">
          <p>© {new Date().getFullYear()} Glow Up Peluquería. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;