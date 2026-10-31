import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const HeroSection = () => {
  const handleDownloadCV = (e) => {
    e.preventDefault();
    alert('CV đang được cập nhật phiên bản mới nhất! Bạn có thể liên hệ trực tiếp với Trương Sỹ Tài qua form bên dưới.');
  };

  return (
    <section className="relative min-h-[85vh] pt-28 pb-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Introduction & Professional Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Single Refined Status Pill */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-[#1A1D24] bg-[#0F1115] text-[#9BA1AC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#93C5FD]" />
                <span>Sẵn sàng cho Cơ hội Thực tập Dữ liệu</span>
              </span>
            </div>

            {/* Two-Tone Headline (§2.3) */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest font-mono text-[#6C727F]">
                Sinh viên CNTT // Khoa học Dữ liệu
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#F1F3F5] leading-[1.15]">
                {personalInfo.name} —{' '}
                <span className="text-[#9BA1AC]">
                  Future Data Specialist & Big Data Analyst
                </span>
              </h1>
            </div>

            {/* Subtitle / Professional Narrative */}
            <p className="text-sm sm:text-base text-[#9BA1AC] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Sinh viên ngành <strong className="text-[#F1F3F5] font-medium">{personalInfo.major}</strong> tại{' '}
              <span className="text-[#93C5FD] font-medium">{personalInfo.university}</span>. 
              Định hướng chuyên sâu về phân tích mô hình, kỹ thuật xử lý dữ liệu quy mô lớn và xây dựng hệ sinh thái dữ liệu thông minh.
            </p>

            {/* Luxury Minimalist Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs text-[#090A0C] bg-[#F1F3F5] hover:bg-white transition-all cursor-pointer shadow-sm"
              >
                <Send className="w-3.5 h-3.5 text-[#090A0C]" />
                Liên hệ hợp tác
              </a>

              <button
                onClick={handleDownloadCV}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs text-[#F1F3F5] bg-[#0F1115] border border-[#1A1D24] hover:border-[#262A34] hover:bg-[#14171D] transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#93C5FD]" />
                Tải CV cá nhân
              </button>
            </div>

            {/* Key Metrics Grid: Clean and balanced */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#1A1D24]">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-[#1A1D24] bg-[#0F1115] text-center lg:text-left"
                >
                  <div className="text-lg sm:text-xl font-mono font-semibold text-[#93C5FD]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#6C727F] font-mono truncate mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Clean, Elegant Avatar Portrait in Double Hairline Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-92 flex items-center justify-center">
              
              {/* Concentric Double Frame: outer=rounded-2xl, inner=rounded-xl */}
              <div className="rounded-2xl border border-[#1A1D24] bg-[#0D0E11] p-1.5 w-full h-full shadow-lg shadow-black/40">
                <div className="rounded-xl border border-[#1A1D24] bg-[#090A0C] w-full h-full overflow-hidden relative group">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    draggable={false}
                    style={{ objectPosition: 'center 46%' }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />

                  {/* Refined subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <div className="pt-14 flex justify-center">
          <a
            href="#about"
            className="flex items-center gap-1.5 text-xs font-mono text-[#6C727F] hover:text-[#93C5FD] transition-colors"
            aria-label="Cuộn xuống phần Giới thiệu"
          >
            <span>Giới thiệu bản thân</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#93C5FD]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
