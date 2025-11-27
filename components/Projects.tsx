import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-dark py-24 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Key Deliveries</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">
            Technical Excellence & <br/><span className="text-zinc-500">Commercial Delivery</span>
          </h2>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <div id={project.id} key={index} className={`flex flex-col lg:flex-row gap-16 items-start scroll-mt-32`}>
              
              {/* Project Content */}
              <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-primary"></span>
                  <span className="text-primary font-bold uppercase tracking-wider text-sm">{project.role}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">{project.title}</h3>
                
                <p className="text-zinc-300 leading-relaxed mb-8 text-lg border-l-2 border-zinc-800 pl-6">
                  {project.description}
                </p>

                <div className="bg-card rounded-xl p-6 border border-zinc-800 mb-8">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                    Key Outcomes
                  </h4>
                  <div className="space-y-3">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-zinc-400 text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-900 rounded-full text-xs font-mono text-zinc-500 border border-zinc-800 uppercase tracking-tight">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Visual / Abstract representation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="relative aspect-[4/3] bg-card rounded-2xl overflow-hidden border border-zinc-800 group shadow-2xl">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  {/* Decorative Elements based on project type */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    
                    {/* Index 0: Governance (RAID Log Style) */}
                    {index === 0 && (
                       <div className="w-full flex flex-col gap-3 font-mono text-xs">
                          <div className="grid grid-cols-12 gap-2 items-center text-zinc-500 px-3">
                             <span className="col-span-2">ID</span>
                             <span className="col-span-7">ITEM</span>
                             <span className="col-span-3 text-right">STATUS</span>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="grid grid-cols-12 gap-2 items-center bg-zinc-800/50 p-3 rounded border-l-4 border-emerald-500">
                               <div className="col-span-2 text-zinc-400">#7A3D</div>
                               <div className="col-span-7 h-2 bg-zinc-700 rounded"></div>
                               <div className="col-span-3 text-right text-emerald-500 font-bold">ON TRACK</div>
                            </div>
                            <div className="grid grid-cols-12 gap-2 items-center bg-zinc-800/50 p-3 rounded border-l-4 border-yellow-500">
                               <div className="col-span-2 text-zinc-400">#B4C1</div>
                               <div className="col-span-7 h-2 bg-zinc-700 rounded"></div>
                               <div className="col-span-3 text-right text-yellow-500 font-bold">RISK</div>
                            </div>
                            <div className="grid grid-cols-12 gap-2 items-center bg-zinc-800/50 p-3 rounded border-l-4 border-primary">
                               <div className="col-span-2 text-zinc-400">#E8F9</div>
                               <div className="col-span-7 h-2 bg-zinc-700 rounded"></div>
                               <div className="col-span-3 text-right text-primary font-bold">REVIEW</div>
                            </div>
                          </div>
                       </div>
                    )}

                    {/* Index 1: Fraud (Risk Grid) */}
                    {index === 1 && (
                       <div className="grid grid-cols-2 gap-4 w-full h-full">
                          <motion.div whileHover={{ scale: 1.05 }} className="bg-zinc-800/50 p-4 rounded-lg border border-red-500/30 flex flex-col justify-between transition-colors hover:bg-red-500/10">
                             <div className="flex justify-between items-center"><span className="font-mono text-xs text-red-400">HIGH RISK</span><motion.div animate={{ scale: [1, 1.2, 1]}} transition={{duration: 1, repeat: Infinity}} className="w-2 h-2 rounded-full bg-red-500"></motion.div></div>
                             <div className="h-2 w-16 bg-zinc-600 rounded mb-1 mt-auto"></div>
                             <div className="h-2 w-10 bg-zinc-700 rounded"></div>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} className="bg-zinc-800/50 p-4 rounded-lg border border-primary/30 flex flex-col justify-between transition-colors hover:bg-primary/10">
                            <div className="flex justify-between items-center"><span className="font-mono text-xs text-primary">VERIFIED</span><div className="w-2 h-2 rounded-full bg-primary"></div></div>
                             <div className="h-2 w-16 bg-zinc-600 rounded mb-1 mt-auto"></div>
                             <div className="h-2 w-10 bg-zinc-700 rounded"></div>
                          </motion.div>
                          <div className="col-span-2 bg-zinc-800/50 p-4 rounded-lg border border-zinc-700 flex flex-col justify-between">
                            <span className="font-mono text-xs text-zinc-400">AUDIT TRAIL</span>
                             <div className="w-full bg-zinc-900 h-16 rounded relative overflow-hidden mt-2">
                                <div className="absolute bottom-0 left-0 w-full h-12 bg-primary/10"></div>
                                <motion.div className="absolute bottom-0 left-4 w-1 h-full bg-primary" initial={{height: 0}} whileInView={{height: '60%'}} viewport={{once: true}} transition={{delay: 0.2}}></motion.div>
                                <motion.div className="absolute bottom-0 left-8 w-1 h-full bg-primary/50" initial={{height: 0}} whileInView={{height: '40%'}} viewport={{once: true}} transition={{delay: 0.3}}></motion.div>
                                <motion.div className="absolute bottom-0 left-12 w-1 h-full bg-primary" initial={{height: 0}} whileInView={{height: '80%'}} viewport={{once: true}} transition={{delay: 0.4}}></motion.div>
                             </div>
                          </div>
                       </div>
                    )}

                    {/* Index 2: Credit Score (Credit Report) */}
                    {index === 2 && (
                      <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-700 p-6 flex flex-col gap-4 relative overflow-hidden">
                        <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                           <div className="space-y-1">
                             <h4 className="font-bold text-primary">CREDIT REPORT</h4>
                             <div className="h-2 w-24 bg-zinc-700 rounded"></div>
                           </div>
                           <div className="text-right">
                             <span className="text-xs text-zinc-500 font-mono">SCORE</span>
                             <p className="text-4xl font-bold font-mono text-white">742</p>
                           </div>
                        </div>
                        <div className="space-y-3 flex-1">
                          {[70, 40, 90].map((w, i) => (
                             <div key={i} className="flex gap-2 items-center text-xs font-mono text-zinc-500">
                               <span className="w-20">FACTOR {i+1}</span>
                               <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                                 <motion.div className="bg-primary h-full" initial={{width: 0}} whileInView={{width: `${w}%`}} viewport={{once:true}} transition={{delay: i * 0.2}}></motion.div>
                               </div>
                             </div>
                          ))}
                        </div>
                        <div className="text-center text-xs text-emerald-400 font-mono p-2 bg-emerald-900/50 rounded border border-emerald-500/30">
                          STATUS: LOW RISK - VERIFIED
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dark to-transparent"></div>
                      </div>
                    )}

                    {/* Index 3: Agentic AI (Animated) */}
                    {index === 3 && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Central Hub */}
                        <motion.div 
                          className="absolute w-16 h-16 bg-primary/20 rounded-full border border-primary flex items-center justify-center z-20 shadow-[0_0_30px_rgba(74,222,128,0.3)]"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                           <div className="w-8 h-8 bg-primary rounded-full"></div>
                        </motion.div>
                        
                        {/* Satellite Nodes */}
                        <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-8 h-8 bg-zinc-800 border border-zinc-600 rounded-lg flex items-center justify-center"
                              style={{
                                top: `calc(50% - 1rem + ${Math.sin(i * Math.PI / 2) * 40}%)`,
                                left: `calc(50% - 1rem + ${Math.cos(i * Math.PI / 2) * 40}%)`,
                              }}
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                            >
                             <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                          {[...Array(4)].map((_, i) => (
                            <line 
                              key={i}
                              x1="50%" y1="50%" 
                              x2={`calc(50% + ${Math.cos(i * Math.PI / 2) * 40}%)`}
                              y2={`calc(50% + ${Math.sin(i * Math.PI / 2) * 40}%)`}
                              stroke="currentColor" className="text-primary" strokeDasharray="4 4" 
                            />
                          ))}
                        </svg>

                        <div className="absolute -bottom-0 bg-card border border-zinc-700 px-3 py-1 rounded-full text-xs font-mono text-primary">
                          AI AGENTS ACTIVE
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;