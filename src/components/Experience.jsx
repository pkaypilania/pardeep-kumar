import React, { useState } from 'react';
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(0);
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-slate-400">
            Journey through fast-paced agencies delivering production-grade mobile applications
          </p>
        </div>

        {/* Experience timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company selector */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible space-x-3 lg:space-x-0 lg:space-y-3 pb-4 lg:pb-0 scrollbar-none scroll-smooth">
                {experience.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedExp(index)}
                    className={`flex-shrink-0 lg:w-full text-left p-4 lg:p-6 rounded-xl border transition-all duration-300 ${
                      selectedExp === index
                        ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                        : 'bg-slate-900/50 border-white/10 hover:border-cyan-500/30 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center lg:items-start justify-between mb-1 lg:mb-2 gap-4">
                      <Building2 className={`w-4 h-4 lg:w-5 lg:h-5 ${
                        selectedExp === index ? 'text-cyan-400' : 'text-slate-400'
                      }`} />
                      {selectedExp === index && (
                        <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400 hidden lg:block" />
                      )}
                    </div>
                    <h3 className={`font-bold text-sm lg:text-lg mb-0.5 lg:mb-1 whitespace-nowrap lg:whitespace-normal ${
                      selectedExp === index ? 'text-white' : 'text-slate-300'
                    }`}>
                      {exp.company}
                    </h3>
                    <p className={`text-xs whitespace-nowrap lg:whitespace-normal ${
                      selectedExp === index ? 'text-cyan-400' : 'text-slate-500'
                    }`}>
                      {exp.role}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Experience details */}
            <div className="lg:col-span-2">
              <div className="relative">
                {experience.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`transition-all duration-500 ${
                      selectedExp === index
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    {/* Main card */}
                    <div className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                      {/* Header */}
                      <div className="mb-8 pb-6 border-b border-white/10">
                        <h3 className="text-3xl font-bold text-white mb-3">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-slate-400">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-cyan-400" />
                            <span className="text-lg font-semibold text-white">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-cyan-400" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-cyan-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-xl font-semibold text-cyan-400 mb-4">Key Responsibilities & Achievements</h4>
                        <ul className="space-y-4">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li
                              key={respIndex}
                              className="flex gap-4 group"
                              style={{
                                animationDelay: `${respIndex * 100}ms`
                              }}
                            >
                              <div className="mt-2 flex-shrink-0">
                                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform duration-300" />
                              </div>
                              <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                {resp}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievement highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl">
            <div className="text-center">
              <p className="text-2xl font-semibold text-white mb-2">
                🏆 Employee of the Month
              </p>
              <p className="text-slate-300">
                Beyond Root Technologies - Recognized for consistent delivery of production-grade mobile applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
