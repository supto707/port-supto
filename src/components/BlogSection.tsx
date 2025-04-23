import { motion } from 'framer-motion';
import { ClockIcon, TagIcon } from '@heroicons/react/24/outline';

const blogPosts = [
  {
    title: 'Building Scalable Web Applications with React and TypeScript',
    excerpt: 'Learn how to leverage TypeScript with React to create maintainable and type-safe applications.',
    category: 'Development',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    date: 'March 15, 2024',
  },
  {
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how artificial intelligence is transforming the way we build and maintain web applications.',
    category: 'Technology',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    date: 'March 10, 2024',
  },
  {
    title: 'Optimizing Performance in Modern Web Apps',
    excerpt: 'Best practices and techniques for improving the performance of your web applications.',
    category: 'Performance',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    date: 'March 5, 2024',
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="blog">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        Latest Blog Posts
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="card group hover:scale-105 transition-transform duration-300"
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-2 right-2 px-3 py-1 bg-accent/90 rounded-full text-white text-sm">
                {post.category}
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
              <span>{post.date}</span>
              <div className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-400 mb-4">{post.excerpt}</p>

            <a
              href="#"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              Read More →
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;