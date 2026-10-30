import React from 'react';
import { ArrowUp, Heart, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-[#070A12]/80 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Left: Brand & Degree */}
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-mono font-bold text-sky-500">TST</span>
              <span className="text-slate-400">/</span>
              <span className="font-semibold text-slate-800 dark:text-slate-100">{personalInfo.name}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Sinh viên CNTT - {personalInfo.university}
            </p>
            <p className="text-[11px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">
              Định hướng: {personalInfo.futureRole}
            </p>
          </div>

          {/* Center: Tech Stack Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              React 18 + Vite
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              Tailwind CSS
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              Framer Motion
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              Node.js Express
            </span>
          </div>

          {/* Right: Scroll to Top */}
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 transition-colors cursor-pointer"
              aria-label="Cuộn lên đầu trang"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Được thiết kế theo tiêu chuẩn <span className="text-sky-500 font-medium">UI/UX Pro Max</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

