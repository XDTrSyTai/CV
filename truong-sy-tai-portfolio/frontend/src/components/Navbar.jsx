import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
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

const DARK_NAV_COLORS = ['#93C5FD', '#BFDBFE', '#E2E8F0'];
const LIGHT_NAV_COLORS = ['#2563EB', '#60A5FA', '#93C5FD'];

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
      const scrollPosition = window.scrollY + 180;

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
    }, 700);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090A0C]/85 backdrop-blur-xl border-b border-[#1A1D24] py-2.5 sm:py-3'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram: Prestigious Minimalist Mark */}
          <a
            href="#"
            className="group flex items-center space-x-3 cursor-pointer focus:outline-none flex-shrink-0"
            aria-label="Về đầu trang"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded border border-[#1A1D24] bg-[#0F1115] group-hover:border-[#262A34] transition-colors">
              <span className="font-mono font-medium text-[#93C5FD] text-xs tracking-wider">
                TST
              </span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-medium tracking-tight text-[#F1F3F5] group-hover:text-[#93C5FD] transition-colors">
                Trương Sỹ Tài
              </p>
              <p className="text-[11px] font-mono tracking-tight text-[#93C5FD] transition-colors font-medium">
                <span className="opacity-60">&lt;</span> Developer{' '}
                <span className="text-temonz font-semibold">TemonZ</span>{' '}
                <span className="opacity-60">/&gt;</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation with GooeyNav */}
          <div className="hidden md:flex items-center justify-center">
            <GooeyNav
              items={navItems}
              activeIndex={activeNavIndex}
              onChange={handleNavChange}
              theme={isDark ? 'dark' : 'light'}
              color={isDark ? '#93C5FD' : '#2563EB'}
              colors={isDark ? DARK_NAV_COLORS : LIGHT_NAV_COLORS}
              activeTextColor={isDark ? '#090A0C' : '#FFFFFF'}
              size="sm"
              frame={true}
              particleCount={8}
              spread={36}
              animationTime={380}
              timeVariance={150}
              gooeyness={0.3}
              wobble={0.2}
              hoverEffect={true}
            />
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <ThemeToggle />

            {/* Luxury Pill CTA Button */}
            <a
              href="#contact"
              onClick={() => {
                isClickingRef.current = true;
                setActiveNavIndex(4);
                setTimeout(() => {
                  isClickingRef.current = false;
                }, 700);
              }}
              className="hidden lg:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium rounded-full text-[#090A0C] bg-[#F1F3F5] hover:bg-white border border-[#F1F3F5] transition-all cursor-pointer shadow-sm"
            >
              Liên hệ
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg border border-[#1A1D24] text-[#9BA1AC] hover:text-[#F1F3F5] bg-[#0F1115] cursor-pointer focus:outline-none"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Hairline Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-transparent">
        <div
          className="h-full bg-[#93C5FD]/60 transition-all duration-150"
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
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0F1115] border-b border-[#1A1D24] px-4 pt-3 pb-6"
          >
            <div className="flex flex-col space-y-1.5">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveNavIndex(index);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                    activeNavIndex === index
                      ? 'bg-[#14171D] text-[#93C5FD] border border-[#1A1D24]'
                      : 'text-[#9BA1AC] hover:bg-[#14171D] hover:text-[#F1F3F5]'
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
                  className="w-full text-center block px-4 py-2 text-xs font-medium rounded-full text-[#090A0C] bg-[#F1F3F5] hover:bg-white"
                >
                  Liên hệ
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
