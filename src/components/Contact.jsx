import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400">
            Looking for a skilled React Native developer? Let's discuss how I can help bring your mobile app vision to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, innovative projects, or potential collaborations. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                <a 
                  href={`mailto:${personal.email}`}
                  className="group flex items-start gap-4 p-6 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300"
                >
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Email</div>
                    <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                      {personal.email}
                    </div>
                  </div>
                </a>

                <a 
                  href={`tel:${personal.phone}`}
                  className="group flex items-start gap-4 p-6 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300"
                >
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Phone</div>
                    <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                      {personal.phone}
                    </div>
                  </div>
                </a>

                <div className="group flex items-start gap-4 p-6 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Location</div>
                    <div className="text-white font-semibold">
                      {personal.location}
                    </div>
                  </div>
                </div>

                <a 
                  href={`https://${personal.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-6 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300"
                >
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Github className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">GitHub</div>
                    <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                      {personal.github}
                    </div>
                  </div>
                </a>
              </div>

              {/* Availability badge */}
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Available for Opportunities</div>
                    <div className="text-sm text-slate-400">Open to full-time positions and contracts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <form onSubmit={handleSubmit} className="p-8 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl">
                {!submitted ? (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="Project Discussion"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
