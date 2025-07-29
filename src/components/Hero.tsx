import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Code, Instagram, ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [textAnimated, setTextAnimated] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Geometric Pattern Animation
    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      type: 'triangle' | 'square' | 'hexagon';
      color: string;
    }> = [];

    const colors = ['#06B6D4', '#3B82F6', '#8B5CF6', '#EC4899'];
    
    for (let i = 0; i < 50; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20 + Math.random() * 40,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: 0.1 + Math.random() * 0.2,
        type: ['triangle', 'square', 'hexagon'][Math.floor(Math.random() * 3)] as 'triangle' | 'square' | 'hexagon',
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      shapes.forEach((shape) => {
        // Update rotation
        shape.rotation += shape.rotationSpeed;
        
        // Mouse interaction
        const distance = Math.sqrt(
          Math.pow(mousePos.x - shape.x, 2) + Math.pow(mousePos.y - shape.y, 2)
        );
        
        let currentOpacity = shape.opacity;
        let currentSize = shape.size;
        
        if (distance < 150) {
          currentOpacity = Math.min(0.6, shape.opacity + (150 - distance) / 300);
          currentSize = shape.size * (1 + (150 - distance) / 300);
        }
        
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        // Set color with opacity
        const color = shape.color;
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.5})`;
        ctx.lineWidth = 2;
        
        // Draw shape
        ctx.beginPath();
        
        if (shape.type === 'triangle') {
          ctx.moveTo(0, -currentSize / 2);
          ctx.lineTo(-currentSize / 2, currentSize / 2);
          ctx.lineTo(currentSize / 2, currentSize / 2);
          ctx.closePath();
        } else if (shape.type === 'square') {
          ctx.rect(-currentSize / 2, -currentSize / 2, currentSize, currentSize);
        } else if (shape.type === 'hexagon') {
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * currentSize / 2;
            const y = Math.sin(angle) * currentSize / 2;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
        }
        
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePos]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setTimeout(() => setTextAnimated(true), 800);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 30%, #334155 60%, #0F172A 100%)' }}
      />
      
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            <div className="text-cyan-400/30 font-mono text-xs">
              {['AI', 'ML', 'Cloud', 'DevOps', 'Python', 'AWS', 'K8s', 'React'][i % 8]}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight">
              {textAnimated && (
                <>
                  <span className="block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                    <span className="gradient-text">Navaneeth Sai</span>
                  </span>
                  <span className="block animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                    Adapa
                  </span>
                </>
              )}
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-8 h-16">
              {textAnimated && (
                <span className="animate-typewriter block">
                  AI Engineer & Cloud Architect
                </span>
              )}
            </div>
          </div>

          {/* About Me */}
          <div className={`mb-8 ${textAnimated ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">
              Passionate AI Engineer with expertise in machine learning, cloud architecture, and scalable web solutions. 
              I specialize in building intelligent systems that solve complex problems and drive innovation in the tech industry.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-cyan-500/30">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">Available for opportunities</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-cyan-500/30">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">Open to collaboration</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className={`flex gap-4 justify-center lg:justify-start ${textAnimated ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <a
              href="https://linkedin.com/in/navaneeth-sai-adapa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 group"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/navaneethsai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-gray-400 hover:bg-gray-400/10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-500/30 group"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
            </a>
            <a
              href="https://leetcode.com/navaneethsai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30 group"
            >
              <Code className="w-6 h-6 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
            </a>
            <a
              href="https://instagram.com/navaneethsai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30 group"
            >
              <Instagram className="w-6 h-6 text-gray-400 group-hover:text-pink-500 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className={`flex justify-center lg:justify-end ${textAnimated ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="relative">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-spin-slow p-1">
              <div className="w-full h-full bg-slate-900 rounded-full" />
            </div>
            
            {/* Profile Image */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
              <img
                src="/Navaneeth.jpeg"
                alt="Navaneeth Sai Adapa"
                className="w-full h-full object-cover rounded-full transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-full" />
              <div className="absolute inset-0 bg-cyan-400/10 rounded-full animate-pulse" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" className="flex flex-col items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;