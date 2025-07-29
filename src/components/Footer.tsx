import React from 'react';
import { Github, Linkedin, Code, Instagram, Mail, Phone, Brain, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/navaneeth-sai-adapa',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/navaneethsai',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LeetCode',
      icon: <Code className="w-5 h-5" />,
      url: 'https://leetcode.com/navaneethsai',
      color: 'hover:text-orange-500'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://instagram.com/navaneethsai',
      color: 'hover:text-pink-500'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-slate-700 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
        <div className="floating-particles">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Navaneeth Sai Adapa</h3>
                <p className="text-cyan-400 font-medium">AI & Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Passionate about building intelligent systems and scalable solutions. 
              Specializing in AI, cloud technologies, and modern web development.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href="mailto:adapanavaneethsai@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>adapanavaneethsai@gmail.com</span>
              </a>
              <a
                href="tel:+917990000000"
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>+91 799xx xxxxx</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-current transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-gray-400 ${social.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Navaneeth Sai Adapa. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of</span>
            <Brain className="w-4 h-4 text-cyan-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;