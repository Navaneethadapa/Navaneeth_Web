import React, { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star, Award, Zap } from 'lucide-react';

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "AI-Powered Health Monitoring System",
      description: "A comprehensive health monitoring application leveraging machine learning algorithms to predict health anomalies and provide personalized insights. Features real-time vital sign analysis, predictive modeling for early disease detection, and intelligent medication management with IoT integration.",
      techStack: ["Python", "TensorFlow", "Streamlit", "SQLite", "Scikit-learn", "OpenCV", "IoT Sensors"],
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      icon: "🏥",
      featured: true,
      metrics: { accuracy: "94%", users: "10K+", performance: "20%" },
      highlights: ["Real-time ML predictions", "IoT integration", "Predictive analytics"]
    },
    {
      title: "Intelligent Conversational AI Platform",
      description: "Advanced chat application powered by transformer models and natural language processing. Implements context-aware responses, multi-language support, sentiment analysis, and real-time learning capabilities with enterprise-grade security and scalability.",
      techStack: ["React", "Node.js", "OpenAI GPT", "Socket.io", "MongoDB", "Docker", "Kubernetes"],
      gradient: "from-purple-400 via-pink-500 to-indigo-600",
      icon: "🤖",
      featured: true,
      metrics: { accuracy: "96%", users: "50K+", performance: "35%" },
      highlights: ["Transformer architecture", "Multi-language NLP", "Real-time learning"]
    },
    {
      title: "Cloud-Native Infrastructure Orchestrator",
      description: "Sophisticated cloud management platform utilizing AI for automated resource optimization, cost prediction, and security monitoring. Features multi-cloud deployment, intelligent auto-scaling, and comprehensive analytics with machine learning-driven insights.",
      techStack: ["AWS", "Terraform", "Kubernetes", "React", "TypeScript", "Prometheus", "Grafana"],
      gradient: "from-blue-400 via-cyan-500 to-teal-600",
      icon: "☁️",
      featured: true,
      metrics: { efficiency: "40%", cost: "30%", uptime: "99.9%" },
      highlights: ["AI-driven optimization", "Multi-cloud support", "Predictive scaling"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      
      const newIndex = Math.round(newScrollLeft / scrollAmount);
      setCurrentIndex(Math.max(0, Math.min(projects.length - 1, newIndex)));
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-slate-900 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid-background" />
        </div>

        {/* Floating Project Icons */}
        <div className="floating-icons">
          {['⚡', '🚀', '💡', '🔬', '🎯', '🌟'].map((icon, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${12 + Math.random() * 6}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className={`inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Featured AI Projects
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Cutting-edge solutions that demonstrate expertise in artificial intelligence, 
            machine learning, and scalable cloud architectures
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 border border-slate-600 hover:border-cyan-400"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 border border-slate-600 hover:border-cyan-400"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Projects Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex-none w-96 md:w-[420px] project-card group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ 
                  scrollSnapAlign: 'start',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="relative h-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-cyan-500/20">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-white" />
                        <span className="text-xs font-bold text-white">FEATURED</span>
                      </div>
                    </div>
                  )}

                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Project Icon & Title */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Zap className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-cyan-400 font-medium">AI-Powered</span>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-cyan-400">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 flex-grow leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center space-x-2">
                        <Award className="w-4 h-4" />
                        <span>Key Highlights:</span>
                      </h4>
                      <div className="space-y-2">
                        {project.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                            <span className="text-xs text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-700 text-cyan-300 rounded-full text-xs transform transition-all duration-300 hover:scale-110 hover:bg-cyan-600 hover:text-white border border-slate-600 hover:border-cyan-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-auto">
                      <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 font-medium">
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 hover:scale-105 border border-slate-600 hover:border-gray-400">
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({ left: index * 420, behavior: 'smooth' });
                    setCurrentIndex(index);
                  }
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50 scale-125' 
                    : 'bg-slate-600 hover:bg-slate-500 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;