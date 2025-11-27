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
                  <div className="absolute inset-0 flex items-center justify-center">
                    
                    {/* Index 0: Governance (Formerly Visual 2) */}
                    {index === 0 && (
                       <div className="w-3/4 flex flex-col gap-3">
                          <div className="flex items-center gap-4 bg-zinc-800 p-3 rounded border-l-4 border-emerald-500">
                             <div className="w-8 h-8 rounded-full border-2 border-zinc-600 flex items-center justify-center text-xs">A</div>
                             <div className="flex-1 h-2 bg-zinc-700 rounded"></div>
                             <div className="text-emerald-500 text-xs font-bold">ON TRACK</div>
                          </div>
                          <div className="flex items-center gap-4 bg-zinc-800 p-3 rounded border-l-4 border-yellow-500">
                             <div className="w-8 h-8 rounded-full border-2 border-zinc-600 flex items-center justify-center text-xs">B</div>
                             <div className="flex-1 h-2 bg-zinc-700 rounded"></div>
                             <div className="text-yellow-500 text-xs font-bold">RISK</div>
                          </div>
                          <div className="flex items-center gap-4 bg-zinc-800 p-3 rounded border-l-4 border-primary">
                             <div className="w-8 h-8 rounded-full border-2 border-zinc-600 flex items-center justify-center text-xs">C</div>
                             <div className="flex-1 h-2 bg-zinc-700 rounded"></div>
                             <div className="text-primary text-xs font-bold">REVIEW</div>
                          </div>
                       </div>
                    )}

                    {/* Index 1: Fraud (Formerly Visual 1 - Kept same) */}
                    {index === 1 && (
                       <div className="grid grid-cols-2 gap-4 w-3/4">
                          <div className="bg-zinc-800/50 p-4 rounded-lg border border-red-500/20">
                             <div className="h-8 w-8 bg-red-500/20 rounded-full flex items-center justify-center mb-2">!</div>
                             <div className="h-2 w-16 bg-zinc-600 rounded mb-1"></div>
                             <div className="h-2 w-10 bg-zinc-700 rounded"></div>
                          </div>
                          <div className="bg-zinc-800/50 p-4 rounded-lg border border-primary/20">
                             <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center mb-2 text-primary">✓</div>
                             <div className="h-2 w-16 bg-zinc-600 rounded mb-1"></div>
                             <div className="h-2 w-10 bg-zinc-700 rounded"></div>
                          </div>
                          <div className="col-span-2 bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                             <div className="flex justify-between mb-2">
                                <div className="h-2 w-20 bg-zinc-600 rounded"></div>
                                <div className="h-2 w-4 bg-primary rounded"></div>
                             </div>
                             <div className="w-full bg-zinc-900 h-12 rounded relative overflow-hidden">
                                <div className="absolute bottom-0 left-0 w-full h-8 bg-primary/10"></div>
                                <div className="absolute bottom-0 left-4 w-2 h-6 bg-primary"></div>
                                <div className="absolute bottom-0 left-8 w-2 h-4 bg-primary/50"></div>
                                <div className="absolute bottom-0 left-12 w-2 h-8 bg-primary"></div>
                             </div>
                          </div>
                       </div>
                    )}

                    {/* Index 2: Credit Score (Formerly Visual 0) */}
                    {index === 2 && (
                      <div className="w-3/4 h-3/4 bg-zinc-950 rounded-xl border border-zinc-700 p-6 flex flex-col gap-4 relative overflow-hidden">
                        <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                           <div className="space-y-1">
                             <div className="h-2 w-24 bg-zinc-700 rounded"></div>
                             <div className="h-4 w-12 bg-primary rounded"></div>
                           </div>
                           <div className="text-right">
                             <span className="text-xs text-zinc-500">Score</span>
                             <p className="text-2xl font-bold text-white">742</p>
                           </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex gap-2 items-center"><div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden"><div className="w-[70%] bg-emerald-500 h-full"></div></div></div>
                          <div className="flex gap-2 items-center"><div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden"><div className="w-[40%] bg-green-300 h-full"></div></div></div>
                          <div className="flex gap-2 items-center"><div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden"><div className="w-[90%] bg-primary h-full"></div></div></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
                      </div>
                    )}

                    {/* Index 3: Agentic AI (New Visual) */}
                    {index === 3 && (
                      <div className="relative w-3/4 h-3/4 flex items-center justify-center">
                        {/* Central Hub */}
                        <div className="absolute w-16 h-16 bg-primary/20 rounded-full border border-primary flex items-center justify-center z-20 shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                           <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                        </div>
                        
                        {/* Satellite Nodes */}
                        <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-800 border border-zinc-600 rounded-lg flex items-center justify-center">
                             <div className="w-1 h-4 bg-zinc-500"></div>
                           </div>
                           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-800 border border-zinc-600 rounded-lg flex items-center justify-center">
                             <div className="w-4 h-1 bg-zinc-500"></div>
                           </div>
                           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-800 border border-zinc-600 rounded-lg flex items-center justify-center">
                             <div className="w-2 h-2 rounded-full bg-zinc-500"></div>
                           </div>
                           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-800 border border-zinc-600 rounded-lg flex items-center justify-center">
                             <div className="w-2 h-2 bg-zinc-500 rotate-45"></div>
                           </div>
                        </div>

                        {/* Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                          <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="currentColor" className="text-primary" strokeDasharray="4 4" />
                          <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="currentColor" className="text-primary" strokeDasharray="4 4" />
                          <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="currentColor" className="text-primary" strokeDasharray="4 4" />
                          <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="currentColor" className="text-primary" strokeDasharray="4 4" />
                        </svg>

                        <div className="absolute -bottom-8 bg-card border border-zinc-700 px-3 py-1 rounded-full text-xs font-mono text-primary">
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