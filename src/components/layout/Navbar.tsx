import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { AuthButton } from '../auth/AuthButton';
import { useAuthStore } from '../../stores/authStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuthStore();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Productos', path: '/productos' },
    { name: 'Contacto', path: '/contacto' },
    ...(user?.is_admin ? [{ name: 'Admin', path: '/admin' }] : []),
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="text-primary-500"
          >
            <Scissors size={28} />
          </motion.div>
          <span className="text-xl font-bold text-secondary-900">Glow Up Peluquería</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition duration-150 ease-in-out hover:text-primary-500 ${
                location.pathname === link.path 
                  ? 'text-primary-500 border-b-2 border-primary-500' 
                  : scrolled ? 'text-secondary-900' : 'text-secondary-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <AuthButton />
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-md focus:outline-none ${
              scrolled ? 'text-secondary-900' : 'text-secondary-800'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="container-custom py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-base font-medium hover:text-primary-500 ${
                  location.pathname === link.path 
                    ? 'text-primary-500' 
                    : 'text-secondary-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <AuthButton />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;