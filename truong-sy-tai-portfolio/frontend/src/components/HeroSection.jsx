import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Send, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const HeroSection = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomScale, setZoomScale] = useState(1.4);

  // Responsive scale factor (refined to ~1.4x on desktop to prevent overflow / "bị lố")
  useEffect(() => {
    const updateZoomScale = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setZoomScale(1.15);
      } else if (w < 640) {
        setZoomScale(1.22);
      } else if (w < 1024) {
        setZoomScale(1.28);
      } else {
        setZoomScale(1.4);
      }
    };

    updateZoomScale();
    window.addEventListener('resize', updateZoomScale);
    return () => window.removeEventListener('resize', updateZoomScale);
  }, []);

  // Close zoom when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isZoomed) {
        setIsZoomed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed]);

  const handleToggleZoom = () => {
    setIsZoomed(prev => !prev);
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    alert('CV đang được cập nhật phiên bản mới nhất! Bạn có thể liên hệ trực tiếp với Trương Sỹ Tài qua form bên dưới.');
  };

  return (
    <section className="relative min-h-[85vh] pt-28 pb-16 flex items-center justify-center">
      {/* Transparent click-outside handler when avatar is zoomed in (no screen dimming, no blur) */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setIsZoomed(false)}
        />
      )}

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

            {/* Two-Tone Headline */}
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

          {/* Right Column: Clean, Elegant Avatar Portrait with Active LED Border Runner & In-Place Zoom */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-92 flex items-center justify-center">
              
              <motion.div
                animate={{
                  scale: isZoomed ? zoomScale : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 24,
                }}
                onClick={handleToggleZoom}
                className={`relative w-full h-full cursor-pointer select-none ${
                  isZoomed
                    ? 'z-50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(56,189,248,0.35)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(56,189,248,0.4)]'
                    : 'z-20 shadow-lg shadow-black/30 dark:shadow-black/50'
                } rounded-2xl`}
                style={{ transformOrigin: 'center center' }}
              >
                {/* Atmospheric outer glow that rotates with the LED */}
                <div className="absolute -inset-2 rounded-3xl pointer-events-none filter blur-xl opacity-50 overflow-hidden">
                  <div
                    className="absolute animate-led-spin"
                    style={{
                      width: '750px',
                      height: '750px',
                      left: '50%',
                      top: '50%',
                      marginLeft: '-375px',
                      marginTop: '-375px',
                      background: 'var(--led-aura-gradient)',
                    }}
                  />
                </div>

                {/* Concentric Double Frame with Active LED Border Runner */}
                <div className="relative rounded-2xl p-[2.5px] overflow-hidden w-full h-full bg-[var(--avatar-border-track)] transition-colors duration-300">
                  {/* Rotating LED sharp beam */}
                  <div
                    className="absolute animate-led-spin pointer-events-none"
                    style={{
                      width: '750px',
                      height: '750px',
                      left: '50%',
                      top: '50%',
                      marginLeft: '-375px',
                      marginTop: '-375px',
                      background: 'var(--led-gradient)',
                    }}
                  />

                  {/* Rotating LED bloom / glowing halo */}
                  <div
                    className="absolute animate-led-spin pointer-events-none filter blur-[4px] opacity-80"
                    style={{
                      width: '750px',
                      height: '750px',
                      left: '50%',
                      top: '50%',
                      marginLeft: '-375px',
                      marginTop: '-375px',
                      background: 'var(--led-gradient)',
                    }}
                  />

                  {/* Inner Card Container */}
                  <div className="relative z-10 w-full h-full rounded-[13.5px] bg-[var(--avatar-frame-bg)] p-1.5 flex items-center justify-center transition-colors duration-300">
                    <div className="rounded-xl border border-[var(--avatar-border-track)] bg-[var(--avatar-inner-bg)] w-full h-full overflow-hidden relative group transition-colors duration-300">
                      <img
                        src={personalInfo.avatarUrl}
                        alt={personalInfo.name}
                        draggable={false}
                        style={{ objectPosition: 'center 46%' }}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isZoomed ? '' : 'group-hover:scale-103'
                        }`}
                      />

                      {/* Subtle bottom vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 dark:from-[#090A0C]/70 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

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
