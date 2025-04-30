import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

const fallbackProjects: Project[] = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A modern e-commerce analytics dashboard with real-time sales tracking and inventory management.',
    stack: ['Javascript', 'Golang', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://go-dashboard-5hi6.onrender.com',
    githubUrl: 'https://github.com/supto707/todo-golang',
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
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/sadmanarefin/repos?sort=updated&per_page=3'
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          const formattedProjects = await Promise.all(data.map(async (repo) => {
            // Fetch languages for each repository
            const languagesResponse = await fetch(repo.languages_url);
            const languages = await languagesResponse.json();

            return {
              title: repo.name,
              description: repo.description || 'A cool project by Sadman Arefin',
              stack: Object.keys(languages).slice(0, 3),
              image: `https://opengraph.githubassets.com/1/${repo.full_name}`,
              demoUrl: repo.homepage || 'https://go-dashboard-5hi6.onrender.com',
              githubUrl: repo.html_url
            };
          }));
          setProjects(formattedProjects);
        }
      } catch (err) {
        setError('Failed to fetch projects');
        console.error('Error fetching GitHub projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 max-w-6xl mx-auto" id="projects">
        <h2 className="section-title text-center">Featured Projects</h2>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        exit={{ opacity: 0, y: -20 }}
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
            viewport={{ once: false }}
            exit={{ opacity: 0, y: -20 }}
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