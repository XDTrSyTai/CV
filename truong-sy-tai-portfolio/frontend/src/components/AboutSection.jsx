import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Compass, Quote, Target, Sparkles } from 'lucide-react';

export const AboutSection = () => {
  // Real-time Dynamic Greeting calculation
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return { text: 'Chào buổi sáng — Chúc bạn một ngày làm việc tràn đầy năng lượng', color: 'text-amber-400' };
    } else if (hour >= 12 && hour < 18) {
      return { text: 'Chào buổi chiều — Rất vui được đón tiếp bạn ghé thăm', color: 'text-orange-400' };
    } else {
      return { text: 'Chào buổi tối — Chúc bạn có những phút giây thư giãn', color: 'text-[#93C5FD]' };
    }
  }, []);

  return (
    <section id="about" className="py-24 relative z-10 border-t border-[#1A1D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Editorial & Prestigious */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93C5FD]" />
            <p className="text-xs font-mono text-[#9BA1AC] tracking-wide">
              {greeting.text}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <h2 className="lg:col-span-7 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#F1F3F5]">
              Giới thiệu & Khát vọng Dữ liệu —{' '}
              <span className="text-[#9BA1AC]">
                Khám phá giá trị từ giải thuật cốt lõi đến hệ sinh thái Big Data.
              </span>
            </h2>
            <p className="lg:col-span-5 text-xs sm:text-sm text-[#6C727F] leading-relaxed">
              Hành trình học tập và rèn luyện của một sinh viên Công nghệ thông tin hướng tới xây dựng giải pháp phân tích dữ liệu quy mô lớn với tư duy logic chuẩn mực.
            </p>
          </div>
        </div>

        {/* Balanced Bento Grid Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column (6 cols): Story & Career Direction */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 space-y-4 flex flex-col justify-between"
          >
            {/* Story Card */}
            <div className="p-7 rounded-xl border border-[#1A1D24] bg-[#0F1115] flex-1">
              <h3 className="text-base font-semibold text-[#F1F3F5] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#93C5FD]" />
                Câu chuyện & Định hướng cá nhân
              </h3>
              <p className="text-xs sm:text-sm text-[#9BA1AC] leading-relaxed mb-4">
                Tôi sinh ngày <strong className="text-[#F1F3F5] font-mono">{personalInfo.birthDate}</strong> (Cung <strong className="text-[#93C5FD]">{personalInfo.zodiac}</strong>), hiện đang theo học chuyên ngành <strong className="text-[#F1F3F5]">{personalInfo.major}</strong> tại <span className="text-[#93C5FD]">{personalInfo.university}</span>.
              </p>
              <p className="text-xs sm:text-sm text-[#9BA1AC] leading-relaxed">
                Đối với tôi, dữ liệu không chỉ là những con số được lưu trữ trong bảng tính, mà là chiếc chìa khóa mở ra xu hướng, giải mã hành vi và định hình tương lai. Tôi nỗ lực từng ngày để hoàn thiện kỹ năng lập trình, tư duy toán học và khai phá dữ liệu để trở thành một <span className="text-[#93C5FD] font-medium">Data Scientist & Big Data Specialist</span> có năng lực thực chiến cao.
              </p>
            </div>

            {/* Career Aspiration Card */}
            <div className="p-6 rounded-xl border border-[#1A1D24] bg-[#0F1115]">
              <div className="flex items-center gap-2.5 mb-2">
                <Target className="w-4 h-4 text-[#93C5FD]" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F1F3F5]">
                  Định hướng phát triển chuyên môn
                </h4>
              </div>
              <p className="text-xs text-[#9BA1AC] leading-relaxed">
                Tập trung nghiên cứu chuyên sâu về xây dựng luồng xử lý <strong className="text-[#F1F3F5]">ETL/ELT Pipelines</strong>, mô hình dự báo học máy ứng dụng và tối ưu hóa hệ thống dữ liệu lớn phục vụ doanh nghiệp số.
              </p>
            </div>
          </motion.div>

          {/* Right Column (6 cols): 4 Profile Specs & Motto */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-6 space-y-4 flex flex-col justify-between"
          >
            {/* Quick Profile Specs 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 flex-1">
              <div className="p-5 rounded-xl border border-[#1A1D24] bg-[#0F1115] hover:border-[#262A34] transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-[#93C5FD]" />
                  <span className="text-[11px] font-mono text-[#6C727F]">ĐÀO TẠO CHÍNH QUY</span>
                </div>
                <p className="text-sm font-semibold text-[#F1F3F5]">ĐH SPKT Đà Nẵng</p>
                <p className="text-[11px] text-[#6C727F] mt-0.5">Khoa Công nghệ thông tin</p>
              </div>

              <div className="p-5 rounded-xl border border-[#1A1D24] bg-[#0F1115] hover:border-[#262A34] transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-[#93C5FD]" />
                  <span className="text-[11px] font-mono text-[#6C727F]">CUNG HOÀNG ĐẠO</span>
                </div>
                <p className="text-sm font-semibold text-[#F1F3F5]">Song Tử (Gemini)</p>
                <p className="text-[11px] text-[#6C727F] font-mono mt-0.5">03 / 06 / 2007</p>
              </div>

              <div className="p-5 rounded-xl border border-[#1A1D24] bg-[#0F1115] hover:border-[#262A34] transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#93C5FD]" />
                  <span className="text-[11px] font-mono text-[#6C727F]">ĐỊA ĐIỂM HOẠT ĐỘNG</span>
                </div>
                <p className="text-sm font-semibold text-[#F1F3F5]">TP. Đà Nẵng</p>
                <p className="text-[11px] text-[#6C727F] mt-0.5">Việt Nam</p>
              </div>

              <div className="p-5 rounded-xl border border-[#1A1D24] bg-[#0F1115] hover:border-[#262A34] transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-4 h-4 text-[#93C5FD]" />
                  <span className="text-[11px] font-mono text-[#6C727F]">NGOẠI NGỮ</span>
                </div>
                <p className="text-sm font-semibold text-[#F1F3F5]">Tiếng Anh B1</p>
                <p className="text-[11px] text-[#6C727F] font-mono mt-0.5">Bậc 3/6 VSTEP / CEFR</p>
              </div>
            </div>

            {/* Philosophy / Motto Card */}
            <div className="p-6 rounded-xl border border-[#1A1D24] bg-[#0F1115]">
              <div className="flex items-start gap-3">
                <Quote className="w-4 h-4 text-[#93C5FD] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#9BA1AC] italic leading-relaxed">
                  "Dữ liệu là nguồn tài nguyên vô giá — Sứ mệnh của kỹ sư là chuyển hóa những tập dữ liệu thô sơ thành giải pháp thông minh và giá trị thực tế."
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
