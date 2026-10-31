import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';
import { upcomingProjects } from '../data/portfolioData';

export const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? upcomingProjects
    : upcomingProjects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-[#1A1D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline">
            <h2 className="lg:col-span-7 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#F1F3F5]">
              Đồ án Kỹ thuật & Nghiên cứu —{' '}
              <span className="text-[#9BA1AC] font-normal">
                Lộ trình xây dựng hệ thống dữ liệu và ứng dụng phần mềm.
              </span>
            </h2>
            <p className="lg:col-span-5 text-xs sm:text-sm text-[#6C727F] leading-relaxed">
              Các dự án cá nhân và đề tài chuyên ngành được nghiên cứu, phát triển và kiểm thử theo chuẩn kỹ thuật phần mềm.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-7">
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#14171D] text-[#93C5FD] border border-[#93C5FD]/40 font-medium shadow-sm'
                    : 'bg-[#0F1115] text-[#9BA1AC] border border-[#1A1D24] hover:text-[#F1F3F5] hover:border-[#262A34]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex flex-col justify-between p-6 rounded-2xl border border-[#1A1D24] bg-[#0F1115] hover:border-[#262A34] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              <div>
                {/* Meta status & timeline */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-[#1A1D24] bg-[#14171D] text-[#93C5FD]">
                    <Clock className="w-3 h-3 text-[#93C5FD]" />
                    {project.status}
                  </span>
                  <span className="text-[11px] font-mono text-[#6C727F]">
                    {project.timeline}
                  </span>
                </div>

                <p className="text-[11px] font-mono uppercase tracking-wider text-[#93C5FD]/80 mb-2">
                  {project.category}
                </p>

                <h3 className="text-base font-medium text-[#F1F3F5] leading-snug mb-2.5">
                  {project.title}
                </h3>

                <p className="text-xs text-[#9BA1AC] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1A1D24] mb-4">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#090A0C] text-[#9BA1AC] border border-[#1A1D24]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Action */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] font-mono text-[#454B54]">
                    private repository
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-[#93C5FD] hover:underline cursor-pointer">
                    <span>chi tiết</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
