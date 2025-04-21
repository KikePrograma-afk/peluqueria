import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Scissors, Palette, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6" />;
      default:
        return <Scissors className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card animate-on-scroll"
    >
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md">
          <div className="text-primary-500">
            {getIcon(service.icon)}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-secondary-600 mb-4">{service.description}</p>
        <Link
          to={`/servicios#${service.id}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          <span>Ver más</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;