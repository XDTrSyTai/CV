import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, Code2, Server, Languages, Award, CheckCircle2, BarChart3, Radar } from 'lucide-react';
import { academicProficiency } from '../data/portfolioData';

export const AcademicProficiency = () => {
  const [activeTab, setActiveTab] = useState('data-ai');
  const [viewMode, setViewMode] = useState('bars'); // 'bars' | 'radar'

  const activeGroup = academicProficiency.courseGroups.find(g => g.id === activeTab) || academicProficiency.courseGroups[0];

  // Helper icons for tabs
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

  // Custom SVG Radar Chart Calculation
  const radarPoints = academicProficiency.radarData;
  const size = 320;
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
    <div className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
      
      {/* Title & View Switcher */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Chương trình Đào tạo CNTT - ĐH SPKT Đà Nẵng</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Academic Proficiency (Trình độ Chuyên môn)
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Tổng hợp kết quả và năng lực qua các khối kiến thức tiêu biểu trong chương trình đào tạo.
          </p>
        </div>

        {/* View Switcher Toggle */}
        <div className="flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-xs font-mono">
          <button
            onClick={() => setViewMode('bars')}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'bars'
                ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Tiến trình môn học</span>
          </button>
          <button
            onClick={() => setViewMode('radar')}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'radar'
                ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Radar className="w-3.5 h-3.5" />
            <span>Biểu đồ Radar</span>
          </button>
        </div>
      </div>

      {viewMode === 'bars' ? (
        /* View 1: Tabbed Categories with Progress Bars */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Category Tabs (5 columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {academicProficiency.courseGroups.map((group) => {
              const IconComp = getGroupIcon(group.id);
              const isSelected = group.id === activeTab;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveTab(group.id)}
                  type="button"
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border-sky-500/40 shadow-sm dark:bg-slate-900/90'
                      : 'bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-sky-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${isSelected ? 'text-sky-600 dark:text-sky-400' : 'text-slate-700 dark:text-slate-200'}`}>
                        {group.name}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {group.courses.length} học phần tiêu biểu
                      </p>
                    </div>
                  </div>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-sky-500" />}
                </button>
              );
            })}
          </div>

          {/* Courses Progress Bars Details (8 columns) */}
          <div className="lg:col-span-8 p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-xl">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                {activeGroup.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {activeGroup.description}
              </p>
            </div>

            <div className="space-y-6">
              {activeGroup.courses.map((course, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{course.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        {course.credit}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 font-mono">
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 font-medium">
                        {course.status}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">{course.score}%</span>
                    </div>
                  </div>

                  {/* Progress Track */}
                  <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-[1px]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.score}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      ) : (
        /* View 2: High-Tech Interactive Radar Chart */
        <div className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* SVG Radar Visual */}
            <div className="md:col-span-7 flex justify-center">
              <div className="relative">
                <svg width={size} height={size} className="overflow-visible">
                  <defs>
                    <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.3" />
                      <stop offset="100%" stop-color="#818CF8" stop-opacity="0.05" />
                    </radialGradient>
                  </defs>

                  {/* Concentric Grid Circles */}
                  {[0.25, 0.5, 0.75, 1].map((scale, i) => (
                    <circle
                      key={i}
                      cx={center}
                      cy={center}
                      r={radius * scale}
                      fill="none"
                      stroke="currentColor"
                      className="text-slate-300 dark:text-slate-800"
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
                        stroke="currentColor"
                        className="text-slate-300 dark:text-slate-800"
                      />
                    );
                  })}

                  {/* Filled Data Polygon */}
                  <polygon
                    points={polygonPointsString}
                    fill="url(#radarGlow)"
                    stroke="#38BDF8"
                    strokeWidth="2.5"
                    className="transition-all duration-700"
                  />

                  {/* Data Points and Outer Labels */}
                  {radarPoints.map((point, i) => {
                    const coords = getCoordinates(point.score, i);
                    const labelCoords = getCoordinates(120, i);
                    return (
                      <g key={i}>
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r="5"
                          fill="#38BDF8"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                        />
                        <text
                          x={labelCoords.x}
                          y={labelCoords.y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          className="text-[11px] font-mono font-bold fill-slate-700 dark:fill-slate-300"
                        >
                          {point.subject}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Radar Legend and Interpretation */}
            <div className="md:col-span-5 space-y-4">
              <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/20">
                <p className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400 mb-1">
                  ĐIỂM NHẤN NĂNG LỰC
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  Trọng tâm cao nhất đạt ở mảng <strong className="text-sky-500">Dữ liệu & AI (92%)</strong> và <strong className="text-indigo-400">Cơ sở Thuật toán (88%)</strong>, tạo tiền đề vững chắc cho con đường Data Specialist.
                </p>
              </div>

              <div className="space-y-2 font-mono text-xs">
                {radarPoints.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-100/60 dark:bg-slate-800/50">
                    <span className="text-slate-700 dark:text-slate-300">{item.subject}</span>
                    <span className="font-bold text-sky-600 dark:text-sky-400">{item.score}/100</span>
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

