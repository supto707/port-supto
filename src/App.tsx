import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="min-h-screen relative bg-background-dark">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background-dark/50 to-background-dark z-0"></div>
        <Navbar />
        <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-20 pb-10"
          >
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            
            <EducationSection />
            <ContactSection />
          </motion.div>
          <Footer />
        </main>
    </div>
  );
}

export default App;
