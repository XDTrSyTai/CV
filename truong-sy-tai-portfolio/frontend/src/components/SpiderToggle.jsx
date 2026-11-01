import React from 'react';
import { FaSpider } from 'react-icons/fa6';
import { useSpider } from '../context/SpiderContext';
import { motion } from 'framer-motion';

export const SpiderToggle = () => {
  const { spiderActive, toggleSpider } = useSpider();

  return (
    <button
      onClick={toggleSpider}
      type="button"
      className={`relative p-2.5 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer
        ${
          spiderActive
            ? 'bg-sky-50 dark:bg-slate-800/90 border-sky-400/50 dark:border-sky-500/50 text-[#0284C7] dark:text-[#93C5FD] shadow-md shadow-sky-500/10'
            : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
        }`}
      aria-label={spiderActive ? 'Tắt hiệu ứng Nhện Spider' : 'Bật hiệu ứng Nhện Spider'}
      title={spiderActive ? 'Tắt hiệu ứng Nhện Spider' : 'Bật hiệu ứng Nhện Spider'}
    >
      <motion.div
        animate={{ scale: spiderActive ? 1.05 : 0.95 }}
        whileTap={{ scale: 0.85 }}
        transition={{ duration: 0.2 }}
      >
        <FaSpider className="w-5 h-5" />
      </motion.div>
    </button>
  );
};

export default SpiderToggle;

