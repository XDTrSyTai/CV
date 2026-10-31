import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Code2, Server, Languages, Award, CheckCircle2, BarChart3, Radar } from 'lucide-react';
import { academicProficiency } from '../data/portfolioData';

export const AcademicProficiency = () => {
  const [activeTab, setActiveTab] = useState('data-ai');
  const [viewMode, setViewMode] = useState('bars'); // 'bars' | 'radar'

  const activeGroup = academicProficiency.courseGroups.find(g => g.id === activeTab) || academicProficiency.courseGroups[0];

  const getGroupIcon = (id) => {
    switch (id) {
      case 'data-ai': return Database;
      case 'core-foundation': return Cpu;
      case 'programming': return Code2;
      case 'systems': return Server;
      case 'languages': return Languages;
      default: return Database;
    }
  };

  const radarPoints = academicProficiency.radarData;
  const size = 300;
  const center = size / 2;
  const radius = size * 0.38;
  const totalAxes = radarPoints.length;

  const getCoordinates = (value, index) => {
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  const polygonPointsString = radarPoints
    .map((point, i) => {
      const coords = getCoordinates(point.score, i);
      return `${coords.x},${coords.y}`;
    })
    .join(' ');

  return (
    <div className="mt-16 pt-14 border-t border-[#1A1D24]">
      
      {/* Title & View Switcher */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Award className="w-3.5 h-3.5 text-[#93C5FD]" />
            <p className="text-xs font-mono text-[#9BA1AC]">
              Chương trình đào tạo chính quy — ĐH SPKT Đà Nẵng
            </p>
          </div>
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#F1F3F5]">
            Năng lực Học thuật —{' '}
            <span className="text-[#9BA1AC]">Kết quả học phần & Đánh giá chuyên môn</span>
          </h3>
        </div>

        {/* View Switcher Toggle */}
        <div className="flex items-center p-1 rounded-full bg-[#0F1115] border border-[#1A1D24] text-xs font-mono">
          <button
            onClick={() => setViewMode('bars')}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
              viewMode === 'bars'
                ? 'bg-[#14171D] text-[#93C5FD] border border-[#262A34] font-medium'
                : 'text-[#6C727F] hover:text-[#F1F3F5]'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Tiến trình học phần</span>
          </button>
          <button
            onClick={() => setViewMode('radar')}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
              viewMode === 'radar'
                ? 'bg-[#14171D] text-[#93C5FD] border border-[#262A34] font-medium'
                : 'text-[#6C727F] hover:text-[#F1F3F5]'
            }`}
          >
            <Radar className="w-3.5 h-3.5" />
            <span>Biểu đồ Radar</span>
          </button>
        </div>
      </div>

      {viewMode === 'bars' ? (
        /* View 1: Tabbed Categories with Hairline Progress Tracks */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Category Tabs (4 columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {academicProficiency.courseGroups.map((group) => {
              const IconComp = getGroupIcon(group.id);
              const isSelected = group.id === activeTab;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveTab(group.id)}
                  type="button"
                  className={`w-full text-left p-3.5 rounded-xl border transition-colors cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#14171D] border-[#262A34] text-[#93C5FD]'
                      : 'bg-[#0F1115] border-[#1A1D24] hover:border-[#262A34] text-[#9BA1AC]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#1A1D24] text-[#93C5FD]' : 'bg-[#090A0C] text-[#6C727F]'}`}>
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className={`text-xs font-semibold ${isSelected ? 'text-[#F1F3F5]' : 'text-[#9BA1AC]'}`}>
                        {group.name}
                      </p>
                      <p className="text-[11px] text-[#6C727F]">
                        {group.courses.length} môn học tiêu biểu
                      </p>
                    </div>
                  </div>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#93C5FD]" />}
                </button>
              );
            })}
          </div>

          {/* Courses Progress Bars Details (8 columns) */}
          <div className="lg:col-span-8 p-6 rounded-xl bg-[#0F1115] border border-[#1A1D24]">
            <div className="border-b border-[#1A1D24] pb-3.5 mb-5">
              <h4 className="text-sm font-semibold text-[#F1F3F5]">
                {activeGroup.name}
              </h4>
              <p className="text-xs text-[#6C727F] mt-0.5">
                {activeGroup.description}
              </p>
            </div>

            <div className="space-y-4">
              {activeGroup.courses.map((course, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#F1F3F5] font-medium">{course.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#14171D] text-[#6C727F] border border-[#1A1D24]">
                        {course.credit}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 font-mono">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#14171D] text-[#93C5FD] border border-[#1A1D24]">
                        {course.status}
                      </span>
                      <span className="text-[#F1F3F5] font-semibold">{course.score}%</span>
                    </div>
                  </div>

                  {/* Hairline Progress Track */}
                  <div className="h-[2.5px] w-full bg-[#1A1D24] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.score}%` }}
                      transition={{ duration: 0.5, delay: idx * 0.04, ease: 'easeOut' }}
                      className="h-full bg-[#93C5FD]"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      ) : (
        /* View 2: Wireframe Radar Chart */
        <div className="p-6 sm:p-8 rounded-xl bg-[#0F1115] border border-[#1A1D24]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* SVG Radar Visual */}
            <div className="md:col-span-7 flex justify-center">
              <div className="relative">
                <svg width={size} height={size} className="overflow-visible">
                  {/* Concentric Grid Circles */}
                  {[0.25, 0.5, 0.75, 1].map((scale, i) => (
                    <circle
                      key={i}
                      cx={center}
                      cy={center}
                      r={radius * scale}
                      fill="none"
                      stroke="#1A1D24"
                      strokeWidth="1"
                      strokeDasharray={scale === 1 ? 'none' : '3 3'}
                    />
                  ))}

                  {/* Axis lines */}
                  {radarPoints.map((_, i) => {
                    const outer = getCoordinates(100, i);
                    return (
                      <line
                        key={i}
                        x1={center}
                        y1={center}
                        x2={outer.x}
                        y2={outer.y}
                        stroke="#1A1D24"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Radar Polygon */}
                  <polygon
                    points={polygonPointsString}
                    fill="rgba(147, 197, 253, 0.1)"
                    stroke="#93C5FD"
                    strokeWidth="1.5"
                  />

                  {/* Axis Data Points */}
                  {radarPoints.map((point, i) => {
                    const coords = getCoordinates(point.score, i);
                    return (
                      <circle
                        key={i}
                        cx={coords.x}
                        cy={coords.y}
                        r="3"
                        fill="#93C5FD"
                        stroke="#090A0C"
                        strokeWidth="1"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Radar Legend & Scores */}
            <div className="md:col-span-5 space-y-2.5">
              <div className="pb-3 border-b border-[#1A1D24]">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F1F3F5]">
                  Năng lực tổng hợp // 6 Trọng tâm
                </h4>
              </div>
              <div className="space-y-2">
                {radarPoints.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg bg-[#090A0C] border border-[#1A1D24]">
                    <span className="text-[#9BA1AC]">{item.subject}</span>
                    <span className="text-[#93C5FD] font-semibold">{item.score}%</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default AcademicProficiency;
