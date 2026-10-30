import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import GooeyNav from './GooeyNav';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Mạng xã hội', href: '#socials' },
  { label: 'Trình độ', href: '#skills' },
  { label: 'Dự án', href: '#projects' },
  { label: 'Liên hệ', href: '#contact' },
];

export const Navbar = () => {
  const { isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const isClickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      if (isClickingRef.current) return;

      const sections = ['about', 'socials', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveNavIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavChange = (index) => {
    isClickingRef.current = true;
    setActiveNavIndex(index);
    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#0B0F19]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-slate-950/40 py-2.5 sm:py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center space-x-2.5 cursor-pointer focus:outline-none flex-shrink-0"
            aria-label="Về đầu trang"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-cyan-400 p-[1.5px] shadow-md shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-shadow">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 text-sm tracking-wider">
                  TST
                </span>
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full" />
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-bold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">
                Trương Sỹ Tài
              </p>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-sky-400 inline" /> Future Data Specialist
              </p>
            </div>
          </a>

          {/* Desktop Navigation with React Bits GooeyNav */}
          <div className="hidden md:flex items-center justify-center">
            <GooeyNav
              items={navItems}
              activeIndex={activeNavIndex}
              onChange={handleNavChange}
              theme={isDark ? 'dark' : 'light'}
              color={isDark ? '#38bdf8' : '#0284c7'}
              colors={
                isDark
                  ? ['#38bdf8', '#22d3ee', '#818cf8', '#60a5fa']
                  : ['#0284c7', '#0ea5e9', '#6366f1']
              }
              activeTextColor={isDark ? '#0B0F19' : '#ffffff'}
              size="sm"
              frame={true}
              particleCount={15}
              spread={56}
              animationTime={600}
              timeVariance={300}
              gooeyness={0.5}
              wobble={0.5}
              hoverEffect={true}
            />
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <ThemeToggle />

            <a
              href="#contact"
              onClick={() => {
                isClickingRef.current = true;
                setActiveNavIndex(4);
                setTimeout(() => {
                  isClickingRef.current = false;
                }, 800);
              }}
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 cursor-pointer"
            >
              Liên hệ ngay
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-900/70 cursor-pointer focus:outline-none"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveNavIndex(index);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    activeNavIndex === index
                      ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-800/80 hover:text-sky-600 dark:hover:text-sky-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => {
                    setActiveNavIndex(4);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-center block px-4 py-2.5 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-md"
                >
                  Liên hệ ngay
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;

