import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com/yourusername',
    label: 'Twitter',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:your.email@example.com',
    label: 'Email',
  },
];

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right text-gray-400"
          >
            <p>© {new Date().getFullYear()} Sadman Arefin. All rights reserved.</p>
            <p className="text-sm">Built with React, TypeScript & Tailwind CSS</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;