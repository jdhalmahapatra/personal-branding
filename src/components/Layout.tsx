import { Outlet, Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import AIChat from './AIChat';
import { PERSONAL_INFO } from '../constants';
import { useState } from 'react';

const Layout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Navigation */}
      <nav className="glass-nav sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold font-display text-white hover:text-primary-400 transition-colors"
            >
              JD
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-primary-400' : 'text-slate-300 hover:text-white'}`}
              >
                Home
              </Link>
              <Link 
                to="/showcase" 
                className={`transition-colors ${isActive('/showcase') ? 'text-primary-400' : 'text-slate-300 hover:text-white'}`}
              >
                Showcase
              </Link>
              <div className="flex gap-4 ml-4 pl-4 border-l border-slate-700">
                <a 
                  href={PERSONAL_INFO.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-slate-700 space-y-4">
              <Link 
                to="/" 
                className={`block transition-colors ${isActive('/') ? 'text-primary-400' : 'text-slate-300'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/showcase" 
                className={`block transition-colors ${isActive('/showcase') ? 'text-primary-400' : 'text-slate-300'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Showcase
              </Link>
              <div className="flex gap-4 pt-2">
                <a 
                  href={PERSONAL_INFO.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 mt-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* AI Chat */}
      <AIChat />
    </div>
  );
};

export default Layout;
