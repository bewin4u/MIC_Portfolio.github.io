import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Philosophy from './components/Philosophy';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-dark text-white min-h-screen selection:bg-primary selection:text-dark font-sans">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Projects />
        <Writing />
        <Philosophy />
        <Skills />
      </main>
      <Contact />
    </div>
  );
};

export default App;