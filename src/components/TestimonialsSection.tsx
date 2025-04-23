import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    content: 'Working with Supto was an absolute pleasure. Their technical expertise and attention to detail resulted in a flawless product that exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupX',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    content: 'Supto demonstrated exceptional problem-solving skills and delivered our project ahead of schedule. Their communication was clear and professional throughout.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    company: 'DesignHub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    content: 'The attention to design details and user experience in our project was remarkable. Supto truly understands how to create intuitive and beautiful interfaces.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="testimonials">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        Client Testimonials
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="card group hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                />
              ))}
            </div>

            <p className="text-gray-400 italic">"{testimonial.content}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;