import React, { useState } from 'react';
import { ExternalLink, Download, Smartphone, Code2, Globe, Github, X, Play } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioData;

  const getCategoryColor = (category) => {
    const colors = {
      'Wellness': 'from-emerald-500 to-teal-500',
      'Fintech': 'from-cyan-500 to-blue-500',
      'AI/ML': 'from-purple-500 to-pink-500',
      'AR/Media': 'from-orange-500 to-red-500',
      'IoT': 'from-indigo-500 to-blue-500',
      'Media': 'from-rose-500 to-pink-500'
    };
    return colors[category] || 'from-cyan-500 to-blue-500';
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400">
            Showcase of production applications spanning fintech, AI/ML, AR, IoT, and wellness domains
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                transform: hoveredProject === index ? 'translateY(-12px) scale(1.02)' : 'none',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Card glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group-hover:border-cyan-500/50 transition-all duration-500">
                {/* Category badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs font-semibold rounded-full shadow-lg`}>
                    {project.category}
                  </span>
                </div>

                {/* Header Image with Gradient Overlay */}
                <div className="h-52 relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`h-full w-full bg-gradient-to-br ${getCategoryColor(project.category)} opacity-20`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Download className="w-4 h-4" />
                        <span className="text-sm font-semibold">{project.downloads}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-semibold text-slate-300">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-md text-xs text-cyan-300">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                      <div key={hIndex} className="flex gap-2 items-start">
                        <div className="mt-1.5 flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        </div>
                        <p className="text-sm text-slate-400 line-clamp-1">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  {/* View Details button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Smartphone className="w-4 h-4 text-cyan-400" />
                    <span>View Project Details</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-slate-400 group-hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500K+</div>
              <div className="text-slate-300">Total Downloads</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{projects.length}</div>
              <div className="text-slate-300">Featured Projects</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">5</div>
              <div className="text-slate-300">Industry Domains</div>
            </div>
          </div>
        </div>
      </div>

      {/* Case-Study Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-slate-900/95 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] sm:max-h-[90vh] animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 bg-slate-950/60 hover:bg-slate-950/95 border border-white/10 hover:border-cyan-500/40 rounded-full text-slate-400 hover:text-white transition-all duration-300 shadow-md"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Modal Hero Image */}
            <div className="h-40 sm:h-60 md:h-72 relative overflow-hidden flex-shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
              
              {/* Category Badge */}
              <span className={`absolute bottom-3 left-4 sm:bottom-4 sm:left-6 px-3.5 py-1 bg-gradient-to-r ${getCategoryColor(selectedProject.category)} text-white text-xs font-semibold rounded-full shadow-lg`}>
                {selectedProject.category}
              </span>
            </div>

            {/* Scrollable Content */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-4 sm:space-y-6 flex-grow custom-scrollbar">
              <div>
                <h3 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{selectedProject.name}</h3>
                <div className="flex items-center gap-2 text-cyan-400">
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-semibold">{selectedProject.downloads}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Project Description</h4>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {selectedProject.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Key Achievements & Outcomes</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {selectedProject.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="p-2.5 sm:p-3 bg-white/5 border border-white/5 rounded-xl flex gap-2.5 hover:bg-cyan-500/5 hover:border-cyan-500/10 transition-colors duration-300">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Technologies Integrated</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons Footer */}
            <div className="p-6 bg-slate-950 border-t border-white/10 flex-shrink-0 flex flex-wrap justify-between items-center gap-3">
              <span className="text-xs text-slate-500">Available links for this build</span>
              <div className="flex flex-wrap gap-3 flex-grow md:flex-grow-0 justify-end">
                {selectedProject.links.playStore && (
                  <a
                    href={selectedProject.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-initial py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Play Store</span>
                  </a>
                )}
                {selectedProject.links.appStore && (
                  <a
                    href={selectedProject.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-initial py-2.5 px-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>App Store</span>
                  </a>
                )}
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-initial py-2.5 px-4 bg-slate-800 hover:bg-slate-700 border border-white/10 text-white rounded-xl text-sm font-semibold transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {selectedProject.links.website && (
                  <a
                    href={selectedProject.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-initial py-2.5 px-4 bg-slate-800 hover:bg-slate-700 border border-white/10 text-white rounded-xl text-sm font-semibold transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Website</span>
                  </a>
                )}
                {selectedProject.links.paxStore && (
                  <a
                    href={selectedProject.links.paxStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-initial py-2.5 px-4 bg-slate-800 hover:bg-slate-700 border border-white/10 text-white rounded-xl text-sm font-semibold transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    <span>PAX Store</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
