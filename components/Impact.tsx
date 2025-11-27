import React from 'react';
import { COMMERCIAL_STATS } from '../constants';
import { motion } from 'framer-motion';

const Sparkline = ({ id }: { id: number }) => {
  const heights = [
    [20, 50, 30, 60, 40, 75, 50],
    [60, 40, 70, 50, 80, 60, 90],
    [30, 60, 40, 70, 50, 80, 60],
    [70, 50, 80, 60, 90, 70, 100],
  ][id % 4];

  return (
    <div className="w-full h-12 flex items-end gap-1.5">
      {heights.map((h, i) => (
        <div key={i} className="flex-1 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
      ))}
    </div>
  );
};

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-dark relative border-b border-zinc-900 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
             Commercial Acumen & <span className="text-primary">Business Impact</span>
           </h2>
           <p className="text-zinc-400 text-lg">
             Delivering measurable outcomes that are verified by stakeholders. My work bridges the gap between technical execution and strategic business goals.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMERCIAL_STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 border border-zinc-800 bg-card/80 backdrop-blur-sm rounded-xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 group flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">{stat.label}</p>
                <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 group-hover:text-primary group-hover:border-primary/50 transition-colors">
                  <stat.icon size={18} />
                </div>
              </div>
              
              <div className="my-auto">
                <h3 className="text-4xl lg:text-5xl font-bold font-mono text-white mb-3 group-hover:text-primary transition-colors">
                  {stat.value}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed min-h-[40px]">
                  {stat.description}
                </p>
              </div>

              <div className="mt-6">
                <Sparkline id={index} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;