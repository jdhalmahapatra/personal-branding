import React, { useState, useEffect, useCallback } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Server, Cloud, Cpu, Menu, X, ArrowRight, Download, Database, BrainCircuit, Box, Sparkles, Target, Zap } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS } from './constants';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
        setActiveSection(section.id);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Journey', href: '#experience' },
    { name: 'Works', href: '#projects' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden font-sans bg-grid-slate selection:bg-cyan-500/20">
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-slate-950 font-bold font-display text-xl transform group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              JD
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <div className="glass-card px-2 py-1.5 rounded-full flex items-center gap-1 mr-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.substring(1) 
                      ? 'bg-primary-500/10 text-primary-400 shadow-[0_0_10px_rgba(56,189,248,0.2)]' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold bg-white text-slate-950 rounded-full hover:bg-primary-50 transition-all transform hover:scale-105"
            >
              Let's Talk
            </a>
          </div>

          <button className="md:hidden text-slate-300 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl animate-fade-in">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-primary-400 py-3 text-lg font-medium border-b border-slate-900"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-3 text-primary-400 font-medium">Contact Me</a>
          </div>
        )}
      </nav>

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
                Unlocking Business Potential with <span className="text-primary-400 font-semibold">Cloud & AI</span>. Specializing in Agentic AI, Low-Code Solutions, and Intelligent Distributed Systems.
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

            <div className="order-1 lg:order-2 relative animate-float">
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
                      <Cloud size={20} className="text-primary-400" />
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

      {/* Skills Section - Bento Grid */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Technical Arsenal</h2>
            <p className="text-slate-400 max-w-2xl text-lg">Specialized tools for Intelligent Automation and Enterprise Architecture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="md:col-span-2 bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-primary-500/30 transition-colors group">
              <div className="w-12 h-12 bg-primary-900/20 rounded-xl flex items-center justify-center mb-6 text-primary-400 group-hover:scale-110 transition-transform">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-display">AI & Intelligent Agents</h3>
              <div className="grid grid-cols-2 gap-4">
                {SKILLS[0].skills.map(skill => (
                   <div key={skill} className="flex items-center gap-2 text-slate-400 text-sm">
                     <div className="w-1.5 h-1.5 bg-primary-500 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"></div>
                     {skill}
                   </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-1 bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors group">
               <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                <Box size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-display">Salesforce & Low-Code</h3>
              <div className="space-y-3">
                 {SKILLS[2].skills.slice(0, 5).map(skill => (
                   <div key={skill} className="flex items-center gap-2 text-slate-400 text-sm">
                     <Cloud size={14} className="text-indigo-500" />
                     {skill}
                   </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-1 bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-pink-500/30 transition-colors group">
              <div className="w-12 h-12 bg-pink-900/20 rounded-xl flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-display">Cloud Architecture</h3>
               <div className="flex flex-wrap gap-2">
                 {SKILLS[1].skills.map(skill => (
                   <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                     {skill}
                   </span>
                ))}
              </div>
            </div>

             <div className="md:col-span-2 bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Cpu size={24} />
                </div>
                <span className="text-xs font-mono text-emerald-500 bg-emerald-900/10 px-2 py-1 rounded">INFRASTRUCTURE</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-display">Cloud & DevOps</h3>
              <p className="text-slate-400 text-sm mb-6 max-w-lg">
                Robust multi-cloud deployments across Azure, AWS, and GCP.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {SKILLS[3].skills.map(skill => (
                   <div key={skill} className="bg-slate-800/50 p-2 rounded text-center text-xs text-slate-300 border border-slate-700/50">
                     {skill}
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-display font-bold mb-6 sticky top-32">Professional<br/>Journey</h2>
              <p className="text-slate-400 mb-8 sticky top-52">
                A timeline of technical leadership and architectural innovation across global enterprises.
              </p>
              <a 
                href={PERSONAL_INFO.github} 
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium sticky top-72 group"
              >
                Download Full Resume <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="lg:col-span-8 space-y-12">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l border-slate-800 group hover:border-primary-500/50 transition-colors">
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-primary-500 transition-colors"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold font-display text-white">{exp.role}</h3>
                    <span className="text-sm font-mono text-primary-400 bg-primary-900/10 px-3 py-1 rounded mt-2 sm:mt-0 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6 text-slate-300">
                    <span className="font-semibold">{exp.company}</span>
                    <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                    <span className="text-sm text-slate-500">London, UK (Remote)</span>
                  </div>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-slate-300 text-sm">
                        <ArrowRight size={16} className="mt-1 flex-shrink-0 text-primary-500" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="container mx-auto px-6">
           <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4">Featured Solutions</h2>
              <p className="text-slate-400">Selected projects demonstrating architectural complexity in AI & Low-Code.</p>
            </div>
            <a href={PERSONAL_INFO.github} className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              View Github <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="p-8 relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-primary-400 group-hover:text-white group-hover:bg-primary-500 transition-colors duration-300">
                      <Code2 size={24} />
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-primary-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 h-20 overflow-hidden">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/50">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary-500/20">
            <Mail size={32} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to Architect the Next Big Thing?</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            I'm currently available for Solution Architect roles and freelance projects. 
            If you have a challenge involving Agentic AI or Salesforce, I'd love to hear about it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href={`mailto:${PERSONAL_INFO.email}`} className="px-8 py-4 bg-white text-slate-950 rounded-lg font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10">
              Send me an Email
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-lg font-medium hover:border-slate-500 transition-colors flex items-center justify-center gap-2">
              <Linkedin size={20} /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 text-center relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-8 mb-8 text-slate-500">
             <a href={PERSONAL_INFO.github} className="hover:text-primary-400 transition-colors"><Github size={20} /></a>
             <a href={PERSONAL_INFO.linkedin} className="hover:text-primary-400 transition-colors"><Linkedin size={20} /></a>
             <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary-400 transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-slate-600 text-sm font-mono">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind.
          </p>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;