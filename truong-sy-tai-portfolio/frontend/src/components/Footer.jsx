import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[#1A1D24] bg-[#090A0C] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Left: Brand & Degree */}
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 font-mono">
              <span className="font-semibold text-[#93C5FD] text-xs">TST</span>
              <span className="text-[#262A34]">/</span>
              <span className="text-xs text-[#F1F3F5] font-sans font-medium">{personalInfo.name}</span>
            </div>
            <p className="text-xs text-[#6C727F] mt-1 font-mono">
              UTE Danang // {personalInfo.major}
            </p>
            <p className="text-[11px] font-mono text-[#454B54] mt-0.5">
              role: {personalInfo.futureRole}
            </p>
          </div>

          {/* Center: Tech Stack Badges */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-mono">
            {['React 18 + Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js Express', 'Three.js'].map(tech => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full border border-[#1A1D24] bg-[#0F1115] text-[#6C727F]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Right: Scroll to Top */}
          <div className="flex items-center space-x-3">
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#9BA1AC] hover:text-[#F1F3F5] bg-[#0F1115] hover:bg-[#14171D] border border-[#1A1D24] hover:border-[#262A34] transition-colors cursor-pointer"
              aria-label="Cuộn lên đầu trang"
            >
              <span>lên đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#93C5FD]" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-[#1A1D24] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#454B54] gap-3">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-[#6C727F]">
            <Code2 className="w-3.5 h-3.5 text-[#93C5FD]" />
            <span>Built with Luxury Obsidian Architecture & Clean Code</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
