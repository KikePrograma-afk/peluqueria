import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const InstagramGallery = () => {
  const galleryImages = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      caption: 'Balayage perfecto',
      instagramUrl: 'https://instagram.com/glowup_peluqueria_',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      caption: 'Corte y secado',
      instagramUrl: 'https://instagram.com/glowup_peluqueria_',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      caption: 'Coloración fantasía',
      instagramUrl: 'https://instagram.com/glowup_peluqueria_',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      caption: 'Tratamiento nutritivo',
      instagramUrl: 'https://instagram.com/glowup_peluqueria_',
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      caption: 'Antes y después',
      instagramUrl: 'https://instagram.com/glowup_peluqueria_',
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      caption: 'Extensiones naturales',
      instagramUrl: 'https://instagram.com/glowup_peluqueria_',
    },
  ];

  return (
    <div className="gallery-grid animate-on-scroll">
      {galleryImages.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.02 }}
          className="gallery-item"
        >
          <img
            src={item.image}
            alt={item.caption}
            className="w-full h-64 object-cover"
          />
          <div className="gallery-item-overlay">
            <div className="flex items-center justify-between">
              <p className="font-medium">{item.caption}</p>
              <a 
                href={item.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default InstagramGallery;