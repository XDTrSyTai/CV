import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Sparkles, Sun, Moon, Sunset, Compass, Quote, Target } from 'lucide-react';

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-4 shadow-sm backdrop-blur-md">
            <GreetingIcon className={`w-3.5 h-3.5 ${greeting.color}`} />
            <span>{greeting.text} Chào mừng bạn ghé thăm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Giới thiệu & Khát vọng Dữ liệu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Hành trình từ một sinh viên CNTT đam mê cấu trúc giải thuật đến người định hướng giải quyết bài toán thực tế bằng Dữ liệu và Trí tuệ Nhân tạo.
          </p>
        </div>

        {/* Balanced Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (6 cols): Story Card & Future Role */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 flex flex-col justify-between"
          >
            {/* Story Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-xl flex-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-sky-500" />
                Câu chuyện & Định hướng
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Tôi sinh ngày <strong className="text-slate-900 dark:text-white font-mono">{personalInfo.birthDate}</strong> (Cung <strong className="text-indigo-500 dark:text-indigo-400">{personalInfo.zodiac}</strong>), hiện đang theo học chuyên ngành <strong className="text-slate-900 dark:text-white">{personalInfo.major}</strong> tại <span className="text-sky-600 dark:text-sky-400 font-semibold">{personalInfo.university}</span>.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Đối với tôi, dữ liệu không chỉ là những con số vô hồn được lưu trong bảng tính, mà là chiếc chìa khóa mở ra xu hướng, giải mã hành vi và định hình tương lai. Tôi nỗ lực từng ngày để hoàn thiện kỹ năng lập trình, tư duy toán học và khai phá dữ liệu để trở thành một <span className="font-semibold text-sky-500 dark:text-sky-400">Data Scientist & Big Data Specialist</span> có tầm ảnh hưởng.
              </p>
            </div>

            {/* Career Aspiration Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-cyan-500/10 border border-sky-500/20 shadow-sm backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-sky-500" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Mục tiêu nghề nghiệp
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Tập trung nghiên cứu chuyên sâu về <strong className="text-sky-500 dark:text-sky-400">Data Engineering</strong>, mô hình dự báo học máy và tối ưu hóa luồng xử lý dữ liệu lớn phục vụ doanh nghiệp số.
              </p>
            </div>
          </motion.div>

          {/* Right Column (6 cols): 4 Profile Specs Cards & Quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 flex flex-col justify-between"
          >
            {/* Quick Profile Specs 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              <div className="p-5 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-sm hover:border-sky-500/40 transition-colors">
                <div className="p-2.5 w-fit rounded-lg bg-sky-500/10 text-sky-500 mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Đào tạo chính quy</p>
                <p className="text-base font-bold text-slate-800 dark:text-slate-100">ĐH SPKT Đà Nẵng</p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Khoa Công nghệ thông tin</p>
              </div>

              <div className="p-5 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-sm hover:border-indigo-500/40 transition-colors">
                <div className="p-2.5 w-fit rounded-lg bg-indigo-500/10 text-indigo-500 mb-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Cung hoàng đạo</p>
                <p className="text-base font-bold text-slate-800 dark:text-slate-100">Song Tử (Gemini)</p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">03 / 06 / 2007</p>
              </div>

              <div className="p-5 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-sm hover:border-emerald-500/40 transition-colors">
                <div className="p-2.5 w-fit rounded-lg bg-emerald-500/10 text-emerald-500 mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Địa điểm sinh sống</p>
                <p className="text-base font-bold text-slate-800 dark:text-slate-100">TP. Đà Nẵng</p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Việt Nam</p>
              </div>

              <div className="p-5 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-sm hover:border-purple-500/40 transition-colors">
                <div className="p-2.5 w-fit rounded-lg bg-purple-500/10 text-purple-500 mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Ngoại ngữ</p>
                <p className="text-base font-bold text-slate-800 dark:text-slate-100">Tiếng Anh B1</p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Bậc 3/6 VSTEP / CEFR</p>
              </div>
            </div>

            {/* Philosophy / Motto Card */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "Dữ liệu là nguồn tài nguyên vô giá – Sứ mệnh của tôi là biến những dòng dữ liệu thô sơ thành giải pháp thông minh và giá trị thực tế."
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
