import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, MapPin } from 'lucide-react';
import { HERO_DATA } from '../constants';

const AgenticWorkflowAnimation = () => (
  <motion.div
    className="absolute inset-0 z-0"
    animate={{ rotate: 360 }}
    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
  >
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2.5 h-2.5 bg-primary/40 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 2,
          ease: 'easeInOut',
        }}
        style={{
          top: `${50 + 45 * Math.sin((i * Math.PI) / 2)}%`,
          left: `${50 + 45 * Math.cos((i * Math.PI) / 2)}%`,
        }}
      />
    ))}
  </motion.div>
);

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-dark pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-zinc-900 via-zinc-900/50 to-transparent skew-x-12 transform origin-top-right translate-x-32 hidden lg:block" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-primary"></div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
            Michael David <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-200">Robinston</span>
          </h1>

          <div className="flex items-center gap-2 text-zinc-400 mb-8 bg-card w-fit px-4 py-2 rounded-full border border-zinc-800">
             <MapPin className="w-4 h-4 text-primary" />
             <span className="uppercase tracking-wide text-xs font-bold">{HERO_DATA.location}</span>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl text-zinc-200 font-light">
              {HERO_DATA.role}
            </h2>
            <a
              href="https://www.linkedin.com/in/micdavid4u/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Michael's LinkedIn Profile"
              className="group bg-card p-2.5 rounded-full border border-zinc-800 hover:border-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
            </a>
          </div>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10 border-l-4 border-primary pl-6">
            {HERO_DATA.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="group flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-full font-bold hover:bg-green-300 transition-all shadow-[0_0_20px_rgba(74,222,128,0.3)]"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Image / Visual - Hexagon Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
           <div className="relative w-[350px] h-[400px] md:w-[450px] md:h-[500px]">
              <AgenticWorkflowAnimation />
              {/* Main Image Container */}
              <motion.div 
                className="absolute inset-0 bg-zinc-800 overflow-hidden border-4 border-zinc-700 rounded-3xl hexagon-clip z-10"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img 
                  src="https://github.com/bewin4u/MIC_Portfolio.github.io/blob/fd08f6636a3af7f87583a5128605179e5cfd2c8a/hero.jpg?raw=true"
                  alt="Michael David Robinston"
                  className="w-full h-full object-cover filter hover:brightness-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"></div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-12 -left-8 z-20"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-card border border-zinc-800 p-5 rounded-r-xl border-l-4 border-l-primary shadow-2xl max-w-[200px]"
                >
                  <p className="font-bold text-3xl mb-0 text-white">10M+</p>
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Revenue Recovered</p>
                </motion.div>
              </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
