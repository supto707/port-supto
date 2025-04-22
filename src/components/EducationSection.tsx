import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const education = [
  {
    institution: 'Kaunia College',
    degree: 'Class 12 (Running)',
    period: '2023 - Present',
    achievements: ['Currently pursuing higher secondary education'],
  },
  {
    institution: 'Cantonment Public School & College Lalmonirhat',
    degree: 'Secondary School Certificate',
    period: '2021 - 2023',
    achievements: [
      'Math & ICT Competition Winner',
      'Outstanding academic performance',
      'Active participation in programming competitions',
    ],
  },
];

const EducationSection = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="education">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        Education
      </motion.h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-4">
              <AcademicCapIcon className="w-8 h-8 text-accent" />
              <div>
                <h3 className="text-xl font-bold">{edu.institution}</h3>
                <p className="text-primary">{edu.degree}</p>
              </div>
            </div>

            <p className="text-accent mb-4">{edu.period}</p>

            {edu.achievements.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  {edu.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;