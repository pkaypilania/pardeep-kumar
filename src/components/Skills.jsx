import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { skills } = portfolioData;

  const getGradientClass = (index) => {
    const gradients = [
      'from-cyan-500/20 to-blue-500/20',
      'from-blue-500/20 to-indigo-500/20',
      'from-indigo-500/20 to-purple-500/20',
      'from-purple-500/20 to-pink-500/20',
      'from-cyan-400/20 to-teal-500/20',
      'from-teal-500/20 to-emerald-500/20',
      'from-emerald-500/20 to-cyan-500/20',
      'from-pink-500/20 to-cyan-500/20'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-400">
            Comprehensive skill set spanning mobile development, backend systems, AI/ML integration, and hardware interfacing
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === index ? 'translateY(-8px) rotateX(5deg)' : 'none',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(index)} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Card content */}
              <div className="relative h-full p-8 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all duration-500">
                {/* Category title */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {skillGroup.category}
                  </h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:w-24 transition-all duration-500" />
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-slate-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300 cursor-default"
                      style={{
                        animationDelay: `${skillIndex * 50}ms`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Specialized in building production-grade mobile applications with focus on performance,
            native integrations, and seamless user experiences
          </p>
        </div>
      </div>
    </section>
  );
};
