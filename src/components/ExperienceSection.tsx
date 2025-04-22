import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: 'Digital Marketer',
    company: 'Green Peace Network',
    period: '2022 - Present',
    description: 'Led digital marketing campaigns and strategies to increase online presence and engagement.',
  },
  {
    title: 'Facebook Ads Specialist',
    company: 'Fiverr',
    period: '2021 - 2022',
    description: 'Managed and optimized Facebook ad campaigns to drive conversions and ROI.',
  },
  {
    title: 'YouTube SEO Expert',
    company: 'Upwork',
    period: '2020 - 2021',
    description: 'Implemented SEO strategies to improve video rankings and channel growth.',
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        Professional Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-accent/30 transform -translate-x-1/2" />

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 glow" />

            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
              <div className="card">
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <BriefcaseIcon className="w-5 h-5" />
                  <span className="font-semibold">{experience.period}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                <p className="text-primary mb-2">{experience.company}</p>
                <p className="text-gray-400">{experience.description}</p>
              </div>
            </div>

            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;