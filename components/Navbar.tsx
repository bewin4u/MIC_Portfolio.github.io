import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section
      const sections = ['hero', 'impact', 'projects', 'writing', 'value', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'impact', label: 'Impact' },
    { id: 'projects', label: 'Delivery' },
    { id: 'writing', label: 'Writing' },
    { id: 'value', label: 'Value' },
    { id: 'skills', label: 'Strengths' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-md border-b border-zinc-800 shadow-xl' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg group-hover:scale-110 transition-transform">
            <Terminal className="w-5 h-5 text-dark" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">MDR</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id!)}
              className={`px-4 py-2 text-sm font-medium transition-colors uppercase tracking-wide rounded-full ${activeSection === item.id ? 'text-primary bg-primary/10' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zinc-950 border-b border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                 <button
                   key={item.id}
                   onClick={() => scrollToSection(item.id!)}
                   className="block w-full text-left py-3 px-4 text-lg font-medium text-white active:text-primary active:bg-zinc-900 rounded-lg"
                 >
                   {item.label}
                 </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;