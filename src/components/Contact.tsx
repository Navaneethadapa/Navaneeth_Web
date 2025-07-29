import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Code, Instagram, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/navaneeth-sai-adapa',
      color: 'hover:text-blue-500 hover:shadow-blue-500/50'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/navaneethsai',
      color: 'hover:text-gray-400 hover:shadow-gray-500/50'
    },
    {
      name: 'LeetCode',
      icon: <Code className="w-5 h-5" />,
      url: 'https://leetcode.com/navaneethsai',
      color: 'hover:text-orange-500 hover:shadow-orange-500/50'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://instagram.com/navaneethsai',
      color: 'hover:text-pink-500 hover:shadow-pink-500/50'
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          <span className="animate-text-reveal">Get in Touch!</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
                Whether you have a project in mind or just want to connect, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="mailto:adapanavaneethsai@gmail.com"
                className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 group"
              >
                <div className="p-3 bg-cyan-600 rounded-lg group-hover:bg-cyan-500 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">adapanavaneethsai@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917990000000"
                className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 group"
              >
                <div className="p-3 bg-emerald-600 rounded-lg group-hover:bg-emerald-500 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-medium">+91 799xx xxxxx</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
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

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300 peer"
                  required
                />
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.name || focusedField === 'name'
                      ? 'top-2 text-xs text-cyan-400'
                      : 'top-3 text-gray-400'
                  }`}
                >
                  Name
                </label>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  focusedField === 'name' ? 'w-full' : 'w-0'
                }`} />
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300 peer"
                  required
                />
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.email || focusedField === 'email'
                      ? 'top-2 text-xs text-cyan-400'
                      : 'top-3 text-gray-400'
                  }`}
                >
                  Email
                </label>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  focusedField === 'email' ? 'w-full' : 'w-0'
                }`} />
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300 resize-none peer"
                  required
                />
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.message || focusedField === 'message'
                      ? 'top-2 text-xs text-cyan-400'
                      : 'top-3 text-gray-400'
                  }`}
                >
                  Message
                </label>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  focusedField === 'message' ? 'w-full' : 'w-0'
                }`} />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className={`flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitting ? 'opacity-0' : 'opacity-100'
                }`}>
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
                
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="paper-rocket">🚀</div>
                    <span className="ml-2">Sending...</span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;