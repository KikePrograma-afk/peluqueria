import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShoppingBag, Truck } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const ProductsPage = () => {
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

  const products: Product[] = [
    {
      id: 1,
      name: 'Shampoo Reparador Intensivo',
      price: 4500,
      image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'shampoo',
      description: 'Shampoo profesional reparador para cabellos dañados. Restaura y fortalece el cabello desde la primera aplicación.',
    },
    {
      id: 2,
      name: 'Acondicionador Hidratante',
      price: 4200,
      image: 'https://images.pexels.com/photos/6621365/pexels-photo-6621365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'acondicionador',
      description: 'Acondicionador profesional que hidrata profundamente el cabello, dejándolo suave y manejable.',
    },
    {
      id: 3,
      name: 'Mascarilla Nutritiva',
      price: 5500,
      image: 'https://images.pexels.com/photos/7319158/pexels-photo-7319158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'tratamiento',
      description: 'Mascarilla capilar profesional para nutrición intensa. Ideal para cabellos secos y dañados.',
    },
    {
      id: 4,
      name: 'Óleo de Argán',
      price: 3800,
      image: 'https://images.pexels.com/photos/6621441/pexels-photo-6621441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'aceite',
      description: 'Aceite de argán puro para hidratar y dar brillo al cabello. Ayuda a controlar el frizz.',
    },
    {
      id: 5,
      name: 'Protector Térmico',
      price: 3500,
      image: 'https://images.pexels.com/photos/7319191/pexels-photo-7319191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'styling',
      description: 'Spray protector térmico que previene el daño causado por herramientas de calor.',
    },
    {
      id: 6,
      name: 'Kit Reparación Completa',
      price: 12500,
      image: 'https://images.pexels.com/photos/7290157/pexels-photo-7290157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'kit',
      description: 'Kit completo con shampoo, acondicionador y mascarilla para la reparación total del cabello.',
    },
    {
      id: 7,
      name: 'Tinte Profesional',
      price: 2800,
      image: 'https://images.pexels.com/photos/8131586/pexels-photo-8131586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'color',
      description: 'Tinte profesional de larga duración. Disponible en múltiples tonos.',
    },
    {
      id: 8,
      name: 'Mousse Voluminizador',
      price: 3200,
      image: 'https://images.pexels.com/photos/6621459/pexels-photo-6621459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'styling',
      description: 'Mousse para dar volumen y definición al cabello. Fijación media sin apelmazar.',
    },
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'shampoo', name: 'Shampoos' },
    { id: 'acondicionador', name: 'Acondicionadores' },
    { id: 'tratamiento', name: 'Tratamientos' },
    { id: 'styling', name: 'Styling' },
    { id: 'color', name: 'Coloración' },
    { id: 'kit', name: 'Kits' },
    { id: 'aceite', name: 'Aceites' },
  ];

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString('es-AR')}`;
  };

  const handleWhatsApp = (product: Product) => {
    const message = `Hola! Estoy interesada en el producto "${product.name}" que cuesta ${formatPrice(product.price)}. ¿Podrías darme más información?`;
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
          <h1 className="text-4xl font-bold mb-4">Nuestros Productos</h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos profesionales para el cuidado y mantenimiento de tu cabello. 
            Envíos a todo el país.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-2 rounded-full shadow-sm border border-gray-100">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="card animate-on-scroll overflow-hidden"
            >
              <div className="relative h-60">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {categories.find(cat => cat.id === product.category)?.name}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-secondary-600 mb-3 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary-600">{formatPrice(product.price)}</span>
                  <button
                    onClick={() => handleWhatsApp(product)}
                    className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors duration-200"
                    aria-label="Contactar por WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shipping Info */}
        <div className="mt-16 bg-primary-50 p-8 rounded-xl shadow-sm animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <Truck className="w-24 h-24 text-primary-500" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Envíos a Todo el País</h2>
              <p className="text-secondary-700 mb-4">
                Realizamos envíos a todas las provincias de Argentina. Los pedidos se despachan dentro de las 48 horas 
                hábiles posteriores a la confirmación del pago.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Costos de Envío</h3>
                  <ul className="space-y-1 text-sm">
                    <li>CABA y GBA: $1,500</li>
                    <li>Provincias: $2,000 - $3,500</li>
                    <li>Envío gratis en compras mayores a $30,000</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Medios de Pago</h3>
                  <ul className="space-y-1 text-sm">
                    <li>Transferencia bancaria</li>
                    <li>Mercado Pago</li>
                    <li>Tarjetas de crédito y débito</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 animate-on-scroll">
          <h2 className="text-2xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">¿Cómo realizo un pedido?</h3>
              <p className="text-secondary-700">
                Puedes contactarnos por WhatsApp para realizar tu pedido. Te guiaremos en el proceso de selección de 
                los productos que mejor se adapten a tus necesidades.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">¿Cuánto tarda en llegar mi pedido?</h3>
              <p className="text-secondary-700">
                Los tiempos de entrega varían según la zona: CABA y GBA 1-3 días hábiles, resto del país 3-7 días hábiles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">¿Tienen asesoría personalizada?</h3>
              <p className="text-secondary-700">
                Sí, ofrecemos asesoría personalizada para ayudarte a elegir los productos adecuados para tu tipo de cabello 
                y necesidades específicas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">¿Puedo hacer cambios o devoluciones?</h3>
              <p className="text-secondary-700">
                Aceptamos cambios y devoluciones dentro de los 10 días de recibido el producto, siempre que esté en su 
                empaque original y sin signos de uso.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Mejorar tu Cabello?</h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto mb-8">
            Contáctanos por WhatsApp para realizar tu pedido o resolver cualquier duda sobre nuestros productos.
          </p>
          <a 
            href="https://wa.me/5491112345678" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp inline-flex items-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" /> Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;