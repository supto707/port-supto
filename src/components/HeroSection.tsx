import { motion } from 'framer-motion';
import { ArrowDownTrayIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import profileImg from '../assets/profile.png';
const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    window.open('/src/assets/CV SUPTO FINAL.pdf', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left md:order-1 order-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold font-poppins mb-6"
          >
            Hi, I'm{' '}
            <span className="text-gradient">Sadman Arefin</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            A Programmer & Critical Thinker 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={handleDownloadCV}
              className="btn-primary flex items-center justify-center gap-2 glow"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              Download Resume
            </button>
            <button 
              onClick={scrollToContact}
              className="btn-outline flex items-center justify-center gap-2"
            >
              <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
              Let's Talk
            </button>
          </motion.div>
        </div>
        <motion.div 
          className="md:order-2 order-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-2xl object-cover w-full h-full shadow-xl ring-4 ring-accent/20"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent/20 to-transparent opacity-60"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;