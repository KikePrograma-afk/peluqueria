import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber,
  message = "Hola! Estoy interesada en tus servicios/productos"
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};

export default WhatsAppButton;