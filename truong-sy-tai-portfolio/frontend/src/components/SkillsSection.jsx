import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Presentation, BrainCircuit, Terminal, Sparkles, CheckCircle } from 'lucide-react';
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
    <section id="skills" className="py-24 relative z-10 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-4">
            <Code className="w-3.5 h-3.5" />
            <span>Kỹ năng & Năng lực Công nghệ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ngôn ngữ Lập trình & Kỹ năng
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Hệ thống kỹ năng được tích lũy thông qua các đồ án thực hành và môn học chuyên sâu tại ĐH Sư phạm Kỹ thuật Đà Nẵng.
          </p>
        </div>

        {/* 1. Programming Languages Grid */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-sky-500" />
            Ngôn ngữ lập trình đang học & sử dụng
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-500/30 transition-all duration-300 backdrop-blur-xl group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                    {lang.name}
                  </h4>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold border border-sky-500/20">
                    {lang.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed min-h-[36px] mb-4">
                  {lang.role}
                </p>

                {/* Progress bar */}
                <div className="space-y-1.5 font-mono">
                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Mức độ tự tin</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{lang.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.05 }}
                      className={`h-full rounded-full bg-gradient-to-r ${lang.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Soft Skills Row */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-500" />
            Kỹ năng mềm thiết yếu (Môn Kỹ năng giao tiếp & Làm việc nhóm)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((skill, idx) => {
              const IconComp = getSoftSkillIcon(skill.iconName);
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-xl"
                >
                  <div className="p-3 w-fit rounded-xl bg-indigo-500/10 text-indigo-500 mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. Academic Proficiency (Mandatory requirement with radar chart & course categories) */}
        <AcademicProficiency />

      </div>
    </section>
  );
};

