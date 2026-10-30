import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, Sparkles, Calendar, Compass, ArrowDown, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const HeroSection = () => {
  const handleDownloadCV = (e) => {
    e.preventDefault();
    alert('CV đang được cập nhật phiên bản mới nhất! Bạn có thể liên hệ trực tiếp với Trương Sỹ Tài qua form bên dưới.');
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Badges */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status & Zodiac pill badge group */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                Sẵn sàng cho Cơ hội Thực tập Dữ liệu
              </span>

              {/* SPECIFIC USER REQUIREMENT: Small delicate badge for DOB & Zodiac */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 shadow-sm backdrop-blur-md">
                <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                <span className="font-semibold">{personalInfo.birthDate}</span>
                <span className="opacity-40">|</span>
                <span className="text-amber-500 font-bold">{personalInfo.zodiacSign}</span>
                <span>{personalInfo.zodiac}</span>
              </div>
            </div>

            {/* Name Headline */}
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 font-semibold">
                Xin chào, tôi là
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                <span className="block">{personalInfo.name}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-400 text-glow">
                  Future Data Specialist
                </span>
              </h1>
            </div>

            {/* Subtitle / University Details */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Sinh viên ngành <strong className="text-slate-800 dark:text-slate-100 font-semibold">{personalInfo.major}</strong> tại{' '}
              <span className="text-sky-600 dark:text-sky-400 font-medium">{personalInfo.university}</span>. 
              Định hướng trở thành chuyên gia phân tích và xây dựng hệ sinh thái dữ liệu thông minh:{' '}
              <span className="italic text-slate-700 dark:text-slate-200">Data Scientist, Data Analyst & Big Data Engineer</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Liên hệ hợp tác
              </a>

              <button
                onClick={handleDownloadCV}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-sky-400/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:-translate-y-0.5 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-500" />
                Tải CV cá nhân
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-100/60 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 text-center lg:text-left backdrop-blur-sm"
                >
                  <div className="text-xl sm:text-2xl font-mono font-bold text-sky-600 dark:text-sky-400">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Avatar Presentation with Orbitals & Glass Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-cyan-400 p-[2px] shadow-2xl shadow-sky-500/20 animate-pulse-subtle">
                <div className="w-full h-full bg-[#0B0F19] rounded-[22px]" />
              </div>

              {/* Main Avatar Card Frame */}
              <div className="absolute inset-1 rounded-[22px] overflow-hidden bg-slate-900 flex items-center justify-center group">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  style={{ objectPosition: 'center 48%' }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle cyber ambient glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Top-Right Mini Badge: Gemini Zodiac */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 sm:-right-4 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white backdrop-blur-md border border-indigo-500/40 shadow-xl flex items-center gap-1.5 text-xs font-mono"
              >
                <span className="text-amber-400 font-bold text-sm">♊</span>
                <span className="font-semibold text-sky-300">Gemini</span>
                <span className="text-[10px] text-slate-400">03.06</span>
              </motion.div>

              {/* Floating Left Mini Badge: AI & Data */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -left-3 sm:-left-4 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white backdrop-blur-md border border-cyan-500/40 shadow-xl flex items-center gap-1.5 text-xs font-mono"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-200 font-medium">Big Data Focus</span>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll down prompt */}
        <div className="pt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center text-xs font-mono text-slate-400 dark:text-slate-500 hover:text-sky-500 transition-colors"
            aria-label="Cuộn xuống phần Giới thiệu"
          >
            <span className="mb-1">Khám phá hành trình</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-sky-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

