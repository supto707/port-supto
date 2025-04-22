import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A modern e-commerce analytics dashboard with real-time sales tracking and inventory management.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered platform that generates high-quality content for blogs, social media, and marketing.',
    stack: ['Python', 'Django', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management API',
    description: 'RESTful API service for task management with real-time updates and team collaboration features.',
    stack: ['Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="card group"
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-accent text-white hover:bg-accent/80 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-accent text-white hover:bg-accent/80 transition-colors"
                >
                  <CodeBracketIcon className="w-6 h-6" />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-accent/10 rounded-full text-accent text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;