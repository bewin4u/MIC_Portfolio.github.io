import React from 'react';
import { PHILOSOPHY } from '../constants';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  return (
    <section id="value" className="py-24 bg-dark relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-zinc-900 to-transparent opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">My Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              How I Add <span className="text-primary">Value</span>
            </h2>
            <p className="text-xl text-zinc-300 mb-12 border-l-4 border-zinc-700 pl-6 py-2">
              I don’t deliver AI as a monolith. I build systems that produce measurable commercial gains through small, empowered pods.
            </p>

            <div className="space-y-8">
              {PHILOSOPHY.map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="flex gap-6 group"
                >
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-card flex items-center justify-center border border-zinc-800 text-zinc-400 group-hover:text-primary group-hover:border-primary transition-all duration-300 shadow-lg">
                      <item.icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-zinc-800 bg-card shadow-2xl p-2">
               <div className="rounded-xl overflow-hidden relative">
                 <img 
                   src="https://github.com/bewin4u/MIC_Portfolio.github.io/blob/6123de5aa0e180bc5f3f3acfb6bbc6cb68fadf2e/philosophy.jpg?raw=true"
                   alt="Michael Presentation" 
                   className="w-full h-auto object-cover filter hover:brightness-110 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-90"></div>
                 
                 <div className="absolute bottom-0 left-0 w-full p-8">
                   <div className="bg-primary/20 backdrop-blur-md border border-primary/30 p-6 rounded-xl">
                      <p className="text-primary font-bold uppercase tracking-wider mb-2 text-sm">The AI Pod Model</p>
                      <p className="text-white font-medium text-lg leading-snug">
                        "Small pods reduce friction, ship explainable AI faster, and validate ROI in smaller cycles."
                      </p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-dashed border-zinc-800 rounded-2xl z-0 hidden md:block"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
