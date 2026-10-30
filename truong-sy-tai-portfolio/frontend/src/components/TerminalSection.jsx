import React from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Code2, Sparkles } from 'lucide-react';
import { InteractiveTerminal } from './InteractiveTerminal';

export const TerminalSection = () => {
  return (
    <section id="terminal" className="py-24 relative z-10 overflow-hidden">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4 shadow-sm backdrop-blur-md">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Chức năng đặc biệt & Interactive Shell</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Khám phá Dữ liệu qua Dòng lệnh
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Trải nghiệm môi trường dòng lệnh tương tác trực tiếp (CLI) để tra cứu thông tin học vấn, kỹ năng lập trình và hồ sơ chuyên môn của Trương Sỹ Tài.
          </p>
        </div>

        {/* Terminal Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-sky-500" />
              bash - sytai@ute-danang (data-env)
            </span>
            <span className="text-[11px] font-mono text-emerald-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              Live Interactive Node
            </span>
          </div>

          <InteractiveTerminal />

          <p className="text-xs text-slate-500 dark:text-slate-400 text-center font-mono pt-1">
            💡 Mẹo: Nhấp vào các nút lệnh gợi ý trên thanh terminal để xem thông tin tức thì.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;

