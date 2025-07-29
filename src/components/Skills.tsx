import React, { useEffect, useRef, useState } from 'react';
import { Brain, Cloud, Globe, Database, Settings, Code, Cpu, Zap } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Deep Learning', level: 90, frameworks: ['TensorFlow', 'PyTorch', 'Keras'] },
        { name: 'Natural Language Processing', level: 88, frameworks: ['NLTK', 'spaCy', 'Transformers'] },
        { name: 'Computer Vision', level: 85, frameworks: ['OpenCV', 'YOLO', 'CNN'] },
        { name: 'Generative AI', level: 92, frameworks: ['GPT', 'DALL-E', 'Stable Diffusion'] },
        { name: 'MLOps', level: 80, frameworks: ['MLflow', 'Kubeflow', 'DVC'] }
      ]
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'Python', level: 95, frameworks: ['Django', 'FastAPI', 'Flask'] },
        { name: 'Java', level: 88, frameworks: ['Spring', 'Hibernate', 'Maven'] },
        { name: 'JavaScript/TypeScript', level: 85, frameworks: ['React', 'Node.js', 'Next.js'] },
        { name: 'SQL', level: 90, frameworks: ['PostgreSQL', 'MySQL', 'MongoDB'] },
        { name: 'Go', level: 75, frameworks: ['Gin', 'Echo', 'Fiber'] }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      skills: [
        { name: 'AWS', level: 88, frameworks: ['EC2', 'Lambda', 'SageMaker'] },
        { name: 'Azure', level: 82, frameworks: ['AKS', 'Functions', 'ML Studio'] },
        { name: 'Google Cloud', level: 80, frameworks: ['GKE', 'AI Platform', 'BigQuery'] },
        { name: 'Docker & Kubernetes', level: 85, frameworks: ['Helm', 'Istio', 'Prometheus'] },
        { name: 'Terraform', level: 78, frameworks: ['Ansible', 'CloudFormation', 'Pulumi'] }
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Frontend', level: 88, frameworks: ['React', 'Vue.js', 'Angular'] },
        { name: 'Backend', level: 90, frameworks: ['Node.js', 'Express', 'FastAPI'] },
        { name: 'Full Stack', level: 87, frameworks: ['MERN', 'MEAN', 'Django'] },
        { name: 'Mobile', level: 75, frameworks: ['React Native', 'Flutter', 'Ionic'] },
        { name: 'DevOps', level: 82, frameworks: ['CI/CD', 'Jenkins', 'GitHub Actions'] }
      ]
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
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skillCategories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Circuit Board Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 10,0 L 10,10 M 0,10 L 20,10" stroke="#06B6D4" strokeWidth="0.5" fill="none" />
              <circle cx="10" cy="10" r="1" fill="#06B6D4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Floating Code Elements */}
        <div className="floating-code">
          {['AI', 'ML', 'DL', 'NLP', 'CV', 'AWS', 'K8s', 'React', 'Python', 'TensorFlow'].map((tech, i) => (
            <div
              key={tech}
              className="absolute text-cyan-400/20 font-mono text-sm animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${10 + Math.random() * 5}s`
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          <span className={`inline-block ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Technical Expertise
          </span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-700 border-slate-600 text-gray-300 hover:border-cyan-400'
              }`}
            >
              <span className={`${activeCategory === index ? 'text-white' : 'text-cyan-400'}`}>
                {category.icon}
              </span>
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Category Skills */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${skillCategories[activeCategory].color}`}>
                {skillCategories[activeCategory].icon}
              </div>
              <span>{skillCategories[activeCategory].title}</span>
            </h3>

            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-item bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-slate-600 rounded-full h-2 mb-4 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  />
                </div>

                {/* Frameworks */}
                <div className="flex flex-wrap gap-2">
                  {skill.frameworks.map((framework, fIndex) => (
                    <span
                      key={framework}
                      className="px-3 py-1 bg-slate-600 text-cyan-300 rounded-full text-sm transform transition-all duration-300 hover:scale-110 hover:bg-cyan-600 hover:text-white cursor-pointer"
                      style={{ animationDelay: `${fIndex * 0.05}s` }}
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Visualization */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="bg-slate-700 p-8 rounded-xl border border-slate-600 h-full">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Skills Overview</h3>
              
              {/* Dynamic Skills Visualization */}
              <div className="relative w-full h-80 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 relative">
                    {/* Concentric Circles */}
                    {[1, 2, 3, 4, 5].map((ring) => (
                      <div
                        key={ring}
                        className="absolute border border-cyan-400/20 rounded-full"
                        style={{
                          width: `${ring * 20}%`,
                          height: `${ring * 20}%`,
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    ))}

                    {/* Active Category Skills Visualization */}
                    {skillCategories[activeCategory].skills.map((skill, index) => {
                      const angle = (index * 360) / skillCategories[activeCategory].skills.length;
                      const radian = (angle * Math.PI) / 180;
                      const radius = (skill.level / 100) * 120;
                      
                      const x = Math.cos(radian) * radius;
                      const y = Math.sin(radian) * radius;

                      return (
                        <div
                          key={index}
                          className={`absolute w-3 h-3 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} transform -translate-x-1/2 -translate-y-1/2 animate-pulse`}
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        >
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap">
                            {skill.name}
                          </div>
                        </div>
                      );
                    })}

                    {/* Center Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`w-12 h-12 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full flex items-center justify-center animate-spin-slow`}>
                        {skillCategories[activeCategory].icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Category Info */}
              <div className="text-center mt-6">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {skillCategories[activeCategory].title}
                </h4>
                <p className="text-sm text-gray-300">
                  {skillCategories[activeCategory].skills.length} skills • 
                  Avg: {Math.round(skillCategories[activeCategory].skills.reduce((sum, skill) => sum + skill.level, 0) / skillCategories[activeCategory].skills.length)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;