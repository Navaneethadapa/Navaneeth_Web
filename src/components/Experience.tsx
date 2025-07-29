import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Award, Star, TrendingUp, Users } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'Alignerr AI',
      period: 'Jan 2025 - Present',
      location: 'Remote',
      description: 'Composed and trained advanced AI models, achieving 20% performance improvement. Reviewed and optimized AI responses to enhance clarity and accuracy. Specialized in large language models and neural network architectures.',
      isFreelance: true,
      isCurrent: true,
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-600',
      achievements: ['20% performance boost', 'AI model optimization', 'Response quality enhancement'],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Transformers']
    },
    {
      type: 'work',
      title: 'Programmer Analyst Trainee',
      company: 'Cognizant Technology Solutions',
      period: 'July 2024 - Present',
      location: 'Chennai, India',
      description: 'Developing enterprise-level applications with focus on AI integration and cloud technologies. Leading cross-functional teams in implementing scalable solutions for Fortune 500 clients.',
      isFreelance: false,
      isCurrent: true,
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-blue-500 to-indigo-600',
      achievements: ['Enterprise AI solutions', 'Cloud architecture', 'Team leadership'],
      technologies: ['Java', 'Spring Boot', 'AWS', 'Microservices']
    },
    {
      type: 'work',
      title: 'AI Trainer',
      company: 'Outlier',
      period: 'Dec 2024 - Jul 2025',
      location: 'Remote',
      description: 'Developed and tested AI models by creating sophisticated prompts to uncover weaknesses and improve robustness. Achieved 30% reduction in failure rates through systematic testing methodologies.',
      isFreelance: true,
      isCurrent: false,
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-600',
      achievements: ['30% failure reduction', 'Prompt engineering', 'Model robustness testing'],
      technologies: ['GPT Models', 'Prompt Engineering', 'Model Testing', 'AI Safety']
    },
    {
      type: 'education',
      title: 'B.Tech in Computer Science & Engineering',
      company: 'Vishnu Institute of Technology',
      period: '2020 - 2024',
      location: 'Bhimavaram, India',
      description: 'Specialized in Artificial Intelligence, Machine Learning, and Software Development. Completed advanced coursework in deep learning, computer vision, and distributed systems.',
      isFreelance: false,
      isCurrent: false,
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'from-cyan-500 to-blue-600',
      achievements: ['CGPA: 8.11/10', 'AI Specialization', 'Research Projects'],
      technologies: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Structures']
    },
    {
      type: 'education',
      title: 'Intermediate MPC',
      company: 'Pragati Junior College',
      period: '2018 - 2020',
      location: 'Kakinada, India',
      description: 'Excelled in Mathematics, Physics, and Chemistry with outstanding academic performance. Built strong foundation in analytical thinking and problem-solving.',
      isFreelance: false,
      isCurrent: false,
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'from-orange-500 to-red-600',
      achievements: ['CGPA: 9.29/10', 'Academic Excellence', 'STEM Foundation'],
      technologies: ['Mathematics', 'Physics', 'Chemistry', 'Analytical Thinking']
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.6 }
    );

    const items = sectionRef.current?.querySelectorAll('.timeline-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6 bg-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900/10 to-slate-800" />
        
        {/* Timeline Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="timeline-pattern" />
        </div>

        {/* Floating Achievement Icons */}
        <div className="floating-achievements">
          {['🏆', '🎯', '⚡', '🚀', '💡', '🌟', '🔥', '💎'].map((icon, i) => (
            <div
              key={i}
              className="absolute text-xl animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className={`inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Professional Journey
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            A track record of delivering innovative AI solutions and driving technological excellence
          </p>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600" />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 animate-pulse opacity-30" />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative ${visibleItems.includes(index) ? 'animate-slide-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className={`w-6 h-6 rounded-full border-4 border-cyan-400 bg-slate-900 transition-all duration-300 hover:scale-150`}>
                      <div className="absolute inset-1 bg-cyan-400 rounded-full animate-pulse" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-30" />
                  </div>
                </div>

                {/* Content Card - Alternating Sides */}
                <div className={`w-full ${index % 2 === 0 ? 'pr-1/2 pr-8' : 'pl-1/2 pl-8'}`}>
                  <div className={`bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 experience-card relative overflow-hidden ${
                    index % 2 === 0 ? 'mr-4' : 'ml-4'
                  }`}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Status Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {exp.isCurrent && (
                        <span className="flex items-center space-x-1 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          <span>Current</span>
                        </span>
                      )}
                      {exp.isFreelance && (
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Freelance
                        </span>
                      )}
                      {exp.type === 'education' && (
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Education
                        </span>
                      )}
                    </div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} shadow-lg`}>
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-cyan-400 font-semibold">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-4 text-sm">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>Key Achievements:</span>
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {exp.achievements.map((achievement, aIndex) => (
                          <div
                            key={aIndex}
                            className="flex items-center space-x-2 bg-slate-600/50 px-3 py-1 rounded-lg"
                          >
                            <Star className="w-3 h-3 text-yellow-400" />
                            <span className="text-xs text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>Technologies:</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-3 py-1 bg-slate-600 text-cyan-300 rounded-full text-xs transform transition-all duration-300 hover:scale-110 hover:bg-cyan-600 hover:text-white border border-slate-500 hover:border-cyan-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Excellence Badge for High Performance */}
                    {(exp.description.includes('20%') || exp.description.includes('30%') || exp.description.includes('CGPA')) && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-1 rounded-full">
                          <Award className="w-3 h-3 text-white" />
                          <span className="text-xs font-bold text-white">Excellence</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;