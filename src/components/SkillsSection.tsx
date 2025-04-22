import { motion } from 'framer-motion';
import { CodeBracketIcon, ServerIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const skillCategories = [
  {
    title: 'Frontend',
    icon: CodeBracketIcon,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Next.js' , 'FlyonUI', 'Vercel', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: ServerIcon,
    skills: ['GoLang', 'Python', 'Node.js', 'MongoDB', 'Express.js', 'Firebase', 'REST API'],
  },
  {
    title: 'Tools',
    icon: WrenchScrewdriverIcon,
    skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Notion', 'Adobe XD'],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="card hover:scale-105 transition-transform duration-300"
          >
            <category.icon className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-accent/10 rounded-full text-accent text-sm glow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;