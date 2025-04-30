import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="bg-background/30 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-accent/10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I'm a passionate programmer and critical thinker with a strong foundation in software development. 
              My journey in technology has been driven by curiosity and a desire to create meaningful solutions 
              that make a difference.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              With expertise in modern web technologies and a keen eye for detail, I specialize in building 
              responsive and user-friendly applications. I believe in writing clean, maintainable code and 
              staying up-to-date with the latest industry trends.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and sharing knowledge with the developer community. I'm always open to new challenges and 
              opportunities for growth.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;