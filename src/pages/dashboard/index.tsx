import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, MapPin } from 'lucide-react';
import { projects, experience, skills } from '@/lib/utils';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'skills', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar 
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        scrollToSection={scrollToSection} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Web
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Experienced developer with 3 years of experience building fast, scalable web apps. Ready to bring impact to your next big idea
            </p>
            
            {/* Availability Status */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-3 bg-green-900/30 border border-green-700 rounded-full px-6 py-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available for Hire</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('work')}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 px-8 py-3 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300 font-medium shadow-lg shadow-amber-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-gray-700 text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 font-medium"
              >
                Let's Collaborate
              </button>
            </div>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-500" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-1 px-4 bg-gray-900">
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My journey through leading tech companies and impactful projects
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    {/* <div className="text-amber-400 font-medium text-sm mb-2">{exp.duration}</div> */}
                    <div className="text-gray-400 text-sm">{exp.location}</div>
                  </div>
                  
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <div className="text-xl text-amber-400 mb-4">{exp.company}</div>
                    {/* <p className="text-gray-300 mb-6">{exp.description}</p> */}
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real-world projects delivered for top companies with measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-gray-600"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  {/* <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-amber-400 font-medium">
                      {project.category}
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">
                      {project.duration}
                    </div>
                  </div> */}
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
                  
                  <div className="text-sm text-amber-300 mb-3 font-medium">
                    {project.role}
                  </div>
                  
                  <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>
                                    
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to build exceptional digital experiences
            </p>
          </div>

          {/* Skills organized by category */}
          <div className="space-y-12">
            {['Frontend', 'Backend', 'Database', 'Cloud', 'DevOps', 'Design', 'Tools'].map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              if (categorySkills.length === 0) return null;

              return (
                <div key={category}>
                  <h3 className="text-2xl font-bold mb-8 text-center text-amber-400">{category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300 flex items-center gap-3"
                      >
                        <div className="w-8 h-8 flex-shrink-0 relative">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            onError={(e: any) => {
                              // Fallback if image fails to load
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div 
                            className="w-full h-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg hidden items-center justify-center text-sm font-bold text-amber-400"
                          >
                            {skill.name.charAt(0)}
                          </div>
                        </div>
                        
                        <h4 className="font-medium text-sm text-gray-100">{skill.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12 items-center text-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">😎 About Me</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  I craft fast, scalable web applications with 3 years of hands-on experience in modern JavaScript frameworks like React, Vue, and Node.js.
                </p>
                <p>
                  Driven by curiosity and a love for clean code, I focus on building products that are both functional and user-friendly.
                  Always learning, always shipping — let’s create something impactful. 🚀
                </p>
                <p>
                Powered by passion (and coffee). ☕
                </p>
              </div>
              
              {/* Hiring CTA */}
              {/* <div className="mt-8 p-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg">
                <h3 className="font-bold text-amber-400 mb-2">Open to New Opportunities</h3>
                <p className="text-gray-300 text-sm mb-4">
                  I'm currently available for full-time positions, contract work, and exciting collaborations.
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-sm bg-amber-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors font-medium"
                  >
                    Let's Talk
                  </button>
                  <button className="text-sm border border-amber-500 text-amber-400 px-4 py-2 rounded-lg hover:bg-amber-500/10 transition-colors font-medium">
                    Download Resume
                  </button>
                </div>
              </div> */}
            </div>
            
            {/* <div>
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 border border-gray-800 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Whether you're looking for a full-time developer, need help with a project, or want to discuss 
            a collaboration, I'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full flex items-center justify-center mb-4 border border-amber-500/30">
                <Mail className="text-amber-400" size={24} />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-400 mb-2">asmita.sarkar2000@gmail.com</p>
              <p className="text-xs text-gray-500">Best for detailed discussions</p>
            </div>
            
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full flex items-center justify-center mb-4 border border-amber-500/30">
                <MapPin className="text-amber-400" size={24} />
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-400 mb-2">India</p>
              <p className="text-xs text-gray-500">Open to remote opportunities</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio  