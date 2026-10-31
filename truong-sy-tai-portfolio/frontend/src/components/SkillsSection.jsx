import React from 'react';
import { motion } from 'framer-motion';
import { Users, Presentation, BrainCircuit, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { programmingLanguages, softSkills } from '../data/portfolioData';
import { AcademicProficiency } from './AcademicProficiency';

export const SkillsSection = () => {
  const getSoftSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Users': return Users;
      case 'Presentation': return Presentation;
      case 'BrainCircuit': return BrainCircuit;
      default: return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-[#1A1D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93C5FD]" />
            <p className="text-xs font-mono text-[#9BA1AC] tracking-wide">
              Trình độ & Năng lực Công nghệ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <h2 className="lg:col-span-7 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#F1F3F5]">
              Kỹ năng & Chuyên môn Kỹ thuật —{' '}
              <span className="text-[#9BA1AC]">
                Nền tảng phân tích dữ liệu, lập trình hệ thống và tư duy giải thuật.
              </span>
            </h2>
            <p className="lg:col-span-5 text-xs sm:text-sm text-[#6C727F] leading-relaxed">
              Tổng hợp các ngôn ngữ lập trình chủ lực và kỹ năng thực hành được trau dồi qua các đồ án thực nghiệm tại trường đại học.
            </p>
          </div>
        </div>

        {/* 1. Programming Languages Grid */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#9BA1AC]">
            <Terminal className="w-3.5 h-3.5 text-[#93C5FD]" />
            <span className="uppercase tracking-wider font-semibold">Ngôn ngữ Lập trình & Cơ sở Dữ liệu</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="p-5 rounded-xl border border-[#1A1D24] bg-[#0F1115] hover:border-[#262A34] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold font-mono text-[#F1F3F5]">
                    {lang.name}
                  </h4>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-[#1A1D24] bg-[#14171D] text-[#93C5FD]">
                    {lang.badge}
                  </span>
                </div>

                <p className="text-xs text-[#9BA1AC] leading-relaxed min-h-[34px] mb-4">
                  {lang.role}
                </p>

                {/* Technical Hairline Progress Bar */}
                <div className="space-y-1 font-mono">
                  <div className="flex justify-between text-[11px] text-[#6C727F]">
                    <span>Mức độ tự tin</span>
                    <span className="text-[#F1F3F5] font-medium">{lang.level}%</span>
                  </div>
                  <div className="h-[2.5px] w-full bg-[#1A1D24] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.04 }}
                      className="h-full bg-[#93C5FD]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Soft Skills Row */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#9BA1AC]">
            <Users className="w-3.5 h-3.5 text-[#93C5FD]" />
            <span className="uppercase tracking-wider font-semibold">Kỹ năng mềm & Làm việc Chuyên nghiệp</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {softSkills.map((skill, idx) => {
              const IconComp = getSoftSkillIcon(skill.iconName);
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="p-5 rounded-xl border border-[#1A1D24] bg-[#0F1115] hover:border-[#262A34] transition-all"
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#14171D] border border-[#1A1D24] flex items-center justify-center text-[#93C5FD]">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-[#F1F3F5]">
                      {skill.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#9BA1AC] leading-relaxed mb-3.5">
                    {skill.description}
                  </p>
                  <div className="pt-2.5 border-t border-[#1A1D24] flex items-center gap-1.5 text-[11px] font-mono text-[#6C727F]">
                    <CheckCircle2 className="w-3 h-3 text-[#93C5FD]" />
                    <span>Hoàn thành học phần đạt chuẩn</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. Academic Proficiency Section */}
        <AcademicProficiency />

      </div>
    </section>
  );
};

export default SkillsSection;
