import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent mb-4">
              {personal.name}
            </h3>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Senior React Native Developer specializing in native modules, hardware integration, and AI/ML.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://${personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-3 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href={`mailto:${personal.email}`} className="hover:text-cyan-400 transition-colors duration-300">
                  {personal.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personal.phone}`} className="hover:text-cyan-400 transition-colors duration-300">
                  {personal.phone}
                </a>
              </li>
              <li>{personal.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-slate-500 text-sm">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
