import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Code2, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS } from '../constants';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.filter(p => p.featured);

  return (
    <div className="animate-fade-in space-y-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary-900/30 border border-primary-500/50 rounded-full">
              <span className="text-primary-400 text-sm font-semibold">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold font-display text-white leading-tight">
              {PERSONAL_INFO.name}
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-primary-400 font-display">
              {PERSONAL_INFO.title}
            </h2>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
              {PERSONAL_INFO.tagline}
            </p>
            
            <p className="text-slate-400 max-w-lg">
              {PERSONAL_INFO.summary}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link 
                to="/showcase" 
                className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
              >
                View My Work <ArrowRight size={18} />
              </Link>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-6 py-3 border border-slate-700 hover:border-primary-500 text-white rounded-lg font-semibold transition-all"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex gap-6 pt-4">
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-slate-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 aspect-square flex flex-col justify-center items-center">
                <div className="text-8xl font-bold font-display bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                  JD
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold font-display text-white mb-12">Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <div 
              key={idx}
              className="glass-card p-6 rounded-xl hover:border-primary-500/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={24} className="text-primary-400" />
                <h3 className="text-xl font-semibold text-white font-display">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-primary-900/30 text-primary-300 text-sm rounded-full border border-primary-500/30 group-hover:border-primary-500/60 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold font-display text-white mb-12">Experience</h2>
        <div className="space-y-6">
          {EXPERIENCE.map((exp) => (
            <div 
              key={exp.id}
              className="glass-card p-8 rounded-xl hover:border-primary-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">{exp.role}</h3>
                  <p className="text-primary-400 text-lg">{exp.company}</p>
                </div>
                <span className="text-slate-400 text-sm whitespace-nowrap ml-4">{exp.period}</span>
              </div>
              <p className="text-slate-300 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <Award size={16} className="text-primary-400 flex-shrink-0 mt-1" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold font-display text-white">Featured Projects</h2>
          <Link 
            to="/showcase"
            className="text-primary-400 hover:text-primary-300 flex items-center gap-2 transition-colors"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-xl hover:border-primary-500/50 transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white font-display group-hover:text-primary-400 transition-colors flex-1">
                  {project.title}
                </h3>
                <Briefcase size={24} className="text-primary-400 flex-shrink-0 ml-2" />
              </div>
              <p className="text-slate-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-primary-900/30 text-primary-300 text-xs rounded-full border border-primary-500/30 group-hover:border-primary-500/60 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-slate-800">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold font-display text-white">Let's Work Together</h2>
          <p className="text-xl text-slate-300">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
            >
              Email Me
            </a>
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-slate-700 hover:border-primary-500 text-white rounded-lg font-semibold transition-all"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
