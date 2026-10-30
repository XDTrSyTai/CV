import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Clock, Sparkles, Layers, ArrowUpRight, Github } from 'lucide-react';
import { upcomingProjects } from '../data/portfolioData';

export const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? upcomingProjects
    : upcomingProjects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Kế hoạch & Đồ án Chuyên ngành</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects & Roadmaps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Hiện tại các dự án cá nhân đang được tôi tích cực xây dựng và kiểm thử. Dưới đây là lộ trình các đồ án phần mềm và đề tài nghiên cứu trọng điểm sắp tới.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Tất cả đồ án' },
              { id: 'data', label: 'Data Science & ML' },
              { id: 'full-stack', label: 'Full-Stack Software' },
              { id: 'ai', label: 'Computer Vision & AI' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20 font-bold'
                    : 'bg-white/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between p-7 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-sky-500/40 transition-all duration-300 backdrop-blur-xl group relative overflow-hidden"
            >
              {/* Top ambient highlight line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Meta status & timeline */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${project.badgeColor}`}>
                    <Clock className="w-3 h-3 animate-spin" />
                    {project.status}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {project.timeline}
                  </span>
                </div>

                <p className="text-xs font-mono text-sky-600 dark:text-sky-400 mb-2">
                  {project.category}
                </p>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors leading-snug mb-3">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80 mb-6">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Coming Soon Notice Button */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 text-amber-500">
                    <Sparkles className="w-3.5 h-3.5" /> Chuẩn bị phát hành
                  </span>
                  <span className="inline-flex items-center gap-1 text-sky-500 group-hover:translate-x-1 transition-transform">
                    Lộ trình chi tiết <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Suggestion Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-cyan-500/10 border border-sky-500/20 text-center max-w-2xl mx-auto backdrop-blur-md">
          <Layers className="w-8 h-8 text-sky-500 mx-auto mb-3" />
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            Bạn có ý tưởng đồ án dữ liệu hoặc nghiên cứu AI?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
            Tôi luôn hào hứng tham gia các dự án nghiên cứu nhóm, thi học thuật hoặc cơ hội thực tập thực tế tại doanh nghiệp.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 transition-colors shadow-md shadow-sky-500/20"
          >
            Đề xuất dự án cùng tôi
          </a>
        </div>

      </div>
    </section>
  );
};

