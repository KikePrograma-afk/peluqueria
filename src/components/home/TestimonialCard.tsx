import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    testimonial: string;
    image: string;
    rating: number;
  };
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card animate-on-scroll p-6"
    >
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < testimonial.rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="text-secondary-700 italic">
        "{testimonial.testimonial}"
      </blockquote>
    </motion.div>
  );
};

export default TestimonialCard;