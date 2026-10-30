import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { InteractiveTerminal } from './InteractiveTerminal';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Sparkles, Sun, Moon, Sunset, Compass } from 'lucide-react';

export const AboutSection = () => {
  // Real-time Dynamic Greeting calculation
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return { text: 'Chào buổi sáng!', icon: Sun, color: 'text-amber-400' };
    } else if (hour >= 12 && hour < 18) {
      return { text: 'Chào buổi chiều!', icon: Sunset, color: 'text-orange-400' };
    } else {
      return { text: 'Chào buổi tối!', icon: Moon, color: 'text-sky-400' };
    }
  }, []);

  const GreetingIcon = greeting.icon;

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-4">
            <GreetingIcon className={`w-3.5 h-3.5 ${greeting.color}`} />
            <span>{greeting.text} Chào mừng bạn ghé thăm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Về tôi & Khát vọng Dữ liệu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Hành trình từ một sinh viên CNTT đam mê cấu trúc giải thuật đến người định hướng giải quyết bài toán thực tế bằng Dữ liệu và Trí tuệ Nhân tạo.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Personal Narrative & Key Facts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Story Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-sky-500" />
                Câu chuyện & Định hướng
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Tôi sinh ngày <strong className="text-slate-900 dark:text-white font-mono">{personalInfo.birthDate}</strong> (Cung <strong className="text-indigo-500 dark:text-indigo-400">{personalInfo.zodiac}</strong>), hiện đang theo học chuyên ngành <strong className="text-slate-900 dark:text-white">{personalInfo.major}</strong> tại <span className="text-sky-600 dark:text-sky-400 font-semibold">{personalInfo.university}</span>.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Đối với tôi, dữ liệu không chỉ là những con số vô hồn được lưu trong bảng tính, mà là chiếc chìa khóa mở ra xu hướng, giải mã hành vi và định hình tương lai. Tôi nỗ lực từng ngày để hoàn thiện kỹ năng lập trình, tư duy toán học và khai phá dữ liệu để trở thành một <span className="font-semibold text-sky-500 dark:text-sky-400">Data Scientist & Big Data Specialist</span> có tầm ảnh hưởng.
              </p>
            </div>

            {/* Quick Profile Specs Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
                <div className="p-2 w-fit rounded-lg bg-sky-500/10 text-sky-500 mb-2">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Đào tạo chính quy</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100">ĐH SPKT Đà Nẵng</p>
                <p className="text-[11px] text-slate-500 font-mono">Khoa CNTT</p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
                <div className="p-2 w-fit rounded-lg bg-indigo-500/10 text-indigo-500 mb-2">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Cung hoàng đạo</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100">Song Tử (Gemini)</p>
                <p className="text-[11px] text-slate-500 font-mono">03 / 06 / 2007</p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
                <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-500 mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Địa điểm sinh sống</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100">TP. Đà Nẵng</p>
                <p className="text-[11px] text-slate-500 font-mono">Việt Nam</p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
                <div className="p-2 w-fit rounded-lg bg-purple-500/10 text-purple-500 mb-2">
                  <Compass className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Ngoại ngữ</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100">Tiếng Anh B1</p>
                <p className="text-[11px] text-slate-500 font-mono">Bậc 3/6 VSTEP/CEFR</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column (7 cols): Interactive Terminal Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-3"
          >
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Khám phá dữ liệu qua dòng lệnh
              </span>
              <span className="text-[11px] font-mono text-emerald-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" /> Live Node
              </span>
            </div>

            <InteractiveTerminal />

            <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center font-mono">
              💡 Mẹo: Nhấp vào các lệnh gợi ý phía trên thanh terminal để xem thông tin tức thì.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

