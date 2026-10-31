import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveTerminal } from './InteractiveTerminal';

export const TerminalSection = () => {
  return (
    <section id="terminal" className="py-24 relative z-10 border-t border-[#1A1D24]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#F1F3F5] mb-3">
            Khám phá Dữ liệu qua Dòng lệnh —{' '}
            <span className="text-[#9BA1AC] font-normal">
              Môi trường giả lập Bash Shell tương tác trực tiếp.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#6C727F] leading-relaxed">
            Tra cứu hồ sơ cá nhân, học phần chuyên môn, kỹ năng dữ liệu và phương thức liên hệ bằng các lệnh bash tiêu chuẩn.
          </p>
        </div>

        {/* Concentric Double Border Terminal Frame */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="rounded-2xl border border-[#1A1D24] bg-[#090A0C] p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
        >
          <div className="rounded-xl border border-[#1A1D24] bg-[#0F1115] overflow-hidden">
            <InteractiveTerminal />
          </div>
        </motion.div>

        <p className="text-[11px] text-[#6C727F] text-center font-mono mt-3.5">
          Gõ &quot;help&quot; hoặc chọn nhanh các lệnh gợi ý để tra cứu thông tin trực tiếp
        </p>

      </div>
    </section>
  );
};

export default TerminalSection;
