import React, { useEffect, useState } from 'react';
import { Github, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { personal, highlights } = portfolioData;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            right: `${(window.innerWidth - mousePosition.x) * 0.02}px`,
            bottom: `${(window.innerHeight - mousePosition.y) * 0.02}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main content */}
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
                Available for Opportunities
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              {personal.name}
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-cyan-400 mb-6">
              {personal.title}
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {personal.bio}
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-slate-400">
              <a href={`mailto:${personal.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>{personal.email}</span>
              </a>
              <a href={`tel:${personal.phone}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>{personal.phone}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{personal.location}</span>
              </div>
              <a href={`https://${personal.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a 
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a 
                href="#projects"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {highlights.map((stat, index) => (
              <div 
                key={stat.id}
                className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToNext}
            className="animate-bounce hover:text-cyan-400 transition-colors cursor-pointer"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-8 h-8 text-slate-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
