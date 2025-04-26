import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'David Anderson',
    role: 'CTO',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
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
    name: 'James Wilson',
    role: 'Product Director',
    company: 'InnovateTech',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    content: 'The attention to design details and user experience in our project was remarkable. Supto truly understands how to create intuitive and beautiful interfaces.',
    rating: 5,
  },
  {
    name: 'Robert Martinez',
    role: 'Engineering Manager',
    company: 'DevCorp',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    content: 'Exceptional development skills and great problem-solving abilities. Supto delivered high-quality code that was well-structured and maintainable.',
    rating: 5,
  },
  {
    name: 'Thomas Brown',
    role: 'Technical Lead',
    company: 'CloudTech',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=150&q=80',
    content: 'Supto expertise in modern web technologies and best practices helped us create a cutting-edge application that our users love.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        <AnimatePresence mode="wait" initial={false}>
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
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
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialsSection;