import React from 'react';
import { Linkedin, ArrowRight, Database, BrainCircuit, Sparkles, Target, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/10 border border-primary-500/30 shadow-[0_0_15px_rgba(14,165,233,0.2)] text-primary-400 text-xs font-mono tracking-wider mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                SALESFORCE & MICROSOFT CERTIFIED
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1] animate-slide-up">
                Senior Technical <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                  Architect
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg leading-relaxed animate-slide-up delay-100">
                Unlocking Business Potential with <span className="text-primary-400 font-semibold">Salesforce, Cloud & AI</span>. Specializing in Agentic AI, Low-Code Solutions, and Intelligent Distributed Systems.
              </p>
              
              <div className="flex flex-wrap gap-4 animate-slide-up delay-200">
                <a href="#projects" className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] flex items-center gap-2 group">
                  View Solutions
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-lg font-medium transition-all flex items-center gap-2 hover:text-white hover:border-primary-500/50">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>

              <div className="mt-12 flex gap-8 text-slate-500 animate-fade-in delay-300">
                <div>
                  <div className="text-3xl font-display font-bold text-slate-200">{PERSONAL_INFO.experienceYears}+</div>
                  <div className="text-xs uppercase tracking-wider mt-1">Years Exp</div>
                </div>
                <div className="w-px bg-slate-800 h-12"></div>
                <div>
                  <div className="text-3xl font-display font-bold text-slate-200">30+</div>
                  <div className="text-xs uppercase tracking-wider mt-1">Projects Delivered</div>
                </div>
                <div className="w-px bg-slate-800 h-12"></div>
                <div>
                  <div className="text-3xl font-display font-bold text-slate-200">100%</div>
                  <div className="text-xs uppercase tracking-wider mt-1">Innovation</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative animate-bounce-soft">
               <div className="relative z-10 glass-card p-6 rounded-2xl border border-slate-700 shadow-2xl">
                 <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                   </div>
                   <div className="ml-4 text-xs text-slate-500 font-mono">architect_config.json</div>
                 </div>
                 <pre className="font-mono text-sm text-slate-300 overflow-x-auto">
<code>{`{
  "name": "Jyotiraditya Dhalmahapatra",
  "role": "Solution Architect",
  "capabilities": [
    "Agentic AI",
    "Salesforce / Low-Code",
    "Cloud Native"
  ],
  "status": "Building the Future"
}`}</code>
                 </pre>
               </div>
               
               <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-primary-500/20 rounded-2xl"></div>
               <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full bg-slate-800/50 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-primary-400 font-mono text-sm mb-4">
                  <Sparkles size={16} />
                  <span>THE ARCHITECT'S MINDSET</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Bridging the Gap Between <br/>
                  <span className="text-primary-400">Business Strategy</span> & Technical Execution.
                </h2>
                <p className="text-slate-400 leading-relaxed text-lg mb-6">
                  {PERSONAL_INFO.summary}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary-900/20 rounded-lg text-primary-400 mt-1">
                      <Target size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Strategic Vision</h4>
                      <p className="text-sm text-slate-400">Designing scalable systems that align with long-term business goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary-900/20 rounded-lg text-primary-400 mt-1">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Rapid Innovation</h4>
                      <p className="text-sm text-slate-400">Leveraging Low-Code and AI to accelerate digital transformation.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[300px] flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-sm">
                   <div className="absolute inset-0 border border-slate-700 rounded-full animate-[spin_10s_linear_infinite]"></div>
                   <div className="absolute inset-4 border border-dashed border-slate-600 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-primary-500/10 rounded-full blur-xl absolute"></div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-1">14+</div>
                        <div className="text-xs text-slate-400 tracking-widest uppercase">Years</div>
                      </div>
                   </div>
                   
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-slate-700 p-2 rounded-lg shadow-xl">
                      <Zap size={20} className="text-primary-400" />
                   </div>
                   <div className="absolute bottom-0 right-1/4 translate-y-1/2 bg-slate-900 border border-slate-700 p-2 rounded-lg shadow-xl">
                      <Database size={20} className="text-indigo-400" />
                   </div>
                   <div className="absolute bottom-1/3 left-0 -translate-x-1/2 bg-slate-900 border border-slate-700 p-2 rounded-lg shadow-xl">
                      <BrainCircuit size={20} className="text-pink-400" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills, Experience, Projects sections omitted from HomePage - using the same structure from original App.tsx */}
      {/* For full implementation, import and include the skill cards, experience timeline, and projects grid */}
    </>
  );
};

export default HomePage;
