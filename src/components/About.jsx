import React from 'react';
import { GraduationCap, Award, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { personal, education } = portfolioData;

  const achievements = [
    {
      icon: TrendingUp,
      title: "500,000+ Downloads",
      description: "Combined downloads across personally developed applications"
    },
    {
      icon: Award,
      title: "Employee of the Month",
      description: "Beyond Root Technologies - Recognized for consistent excellence"
    },
    {
      icon: GraduationCap,
      title: "Pursuing BCA",
      description: "Chandigarh University - UGC Recognised Online Program"
    }
  ];

  const expertise = [
    "Custom Native Modules & TurboModules",
    "PAX POS Hardware Integration",
    "On-device ML & Audio Processing",
    "AR SDK Integration (Banuba)",
    "WebView-to-Native Bridge Architecture",
    "Cross-platform Mobile Development"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-400">
            Passionate mobile developer with a track record of delivering production-grade applications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left column - Story */}
            <div className="space-y-6">
              <div className="p-8 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Started my journey as an intern at Tech Rush Global in April 2021, where I built the 
                    Neend meditation app from scratch - an app that went on to achieve over 500,000 downloads.
                  </p>
                  <p>
                    Over the past 5 years, I've evolved from a junior developer to a senior React Native specialist, 
                    shipping 30+ production applications across diverse domains including fintech, AI, hardware integration, 
                    wellness, and media.
                  </p>
                  <p>
                    What sets me apart is my deep expertise in bridging React Native with native platforms through 
                    custom native modules, TurboModules, and JSI - enabling complex hardware integrations like PAX POS 
                    systems, RFID scanners, and AR SDKs.
                  </p>
                  <p>
                    I thrive in fast-paced agency environments, consistently delivering MVPs within 1-2 month timelines 
                    while maintaining production-grade quality.
                  </p>
                </div>
              </div>

              {/* Specializations */}
              <div className="p-8 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Core Expertise</h3>
                <div className="grid grid-cols-1 gap-3">
                  {expertise.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Achievements */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="group p-8 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-500"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Education card */}
              <div className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                  </div>
                </div>
                <div className="pl-16">
                  {education.map((edu, index) => (
                    <div key={index} className="space-y-2">
                      <div className="text-lg font-semibold text-cyan-400">{edu.degree}</div>
                      <div className="text-slate-300">{edu.institution}</div>
                      <div className="text-sm text-slate-400">{edu.mode}</div>
                      <div className="text-sm text-slate-500">{edu.duration}</div>
                      <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold mt-2">
                        {edu.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom highlight */}
          <div className="p-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl">
            <div className="text-center">
              <p className="text-xl text-white font-semibold mb-2">
                "One of few React Native developers in India with hands-on PAX POS SDK, RFID, Banuba AR SDK, 
                and on-device ML audio integration experience"
              </p>
              <p className="text-slate-400">Specialized in solving complex mobile integration challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
