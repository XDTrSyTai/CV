import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { personalInfo, programmingLanguages } from '../data/portfolioData';

const COMMANDS = {
  help: () => [
    '=== CÁC LỆNH KHẢ DỤNG ===',
    '  whoami     : Xem thông tin danh tính & định hướng nghề nghiệp',
    '  skills     : Danh sách ngôn ngữ & công nghệ đang học',
    '  education  : Trường đại học & chuyên ngành đào tạo',
    '  zodiac     : Thông tin ngày sinh & cung hoàng đạo Song Tử',
    '  contact    : Thông tin liên lạc & mạng xã hội',
    '  date       : Xem thời gian hệ thống hiện tại',
    '  clear      : Xoá màn hình terminal'
  ],
  whoami: () => [
    `Họ và tên   : ${personalInfo.name}`,
    `Định hướng  : ${personalInfo.futureRole}`,
    `Trường      : ${personalInfo.university}`,
    `Địa chỉ     : ${personalInfo.location}`,
    `Mô tả       : Đam mê giải mã dữ liệu lớn và thuật toán máy học.`
  ],
  skills: () => [
    '=== NGÔN NGỮ LẬP TRÌNH & DỮ LIỆU ===',
    ...programmingLanguages.map(l => `  [+] ${l.name.padEnd(10, ' ')} -> ${l.role}`),
    '',
    '=== KỸ NĂNG MỀM ===',
    '  * Làm việc nhóm & Agile',
    '  * Thuyết trình & Báo cáo kỹ thuật',
    '  * Tư duy phản biện & Logic giải thuật'
  ],
  education: () => [
    `Trường      : ${personalInfo.university}`,
    `Tên viết tắt: ${personalInfo.universityShort}`,
    `Chuyên ngành: ${personalInfo.major}`,
    `Chứng chỉ   : Tiếng Anh B1 (Bậc 3/6 Khung Năng Lực Ngoại Ngữ Quốc Gia)`
  ],
  zodiac: () => [
    `Ngày sinh     : ${personalInfo.birthDate}`,
    `Cung hoàng đạo: ${personalInfo.zodiac} (${personalInfo.zodiacSign})`,
    `Đặc trưng     : Nhanh nhạy, thông minh, khả năng thích ứng cao,`,
    `                tư duy linh hoạt và đam mê khám phá tri thức mới.`
  ],
  contact: () => [
    `Email       : ${personalInfo.email}`,
    `GitHub      : ${personalInfo.github}`,
    `LinkedIn    : ${personalInfo.linkedin}`,
    `Khu vực     : Đà Nẵng, Việt Nam`
  ],
  date: () => [
    `Thời gian thực tế: ${new Date().toLocaleString('vi-VN', { timeZoneName: 'short' })}`
  ]
};

export const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Trương Sỹ Tài Portfolio Interactive Terminal v1.0.0 [Khởi tạo thành công]'
    },
    {
      type: 'system',
      text: 'Gõ "help" hoặc bấm vào các nút gợi ý bên dưới để khám phá.'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const newHistory = [...history, { type: 'user', text: `user@truongsytai:~$ ${rawCmd}` }];

    if (COMMANDS[cmd]) {
      const outputLines = COMMANDS[cmd]();
      outputLines.forEach(line => {
        newHistory.push({ type: 'output', text: line });
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `Lệnh "${rawCmd}" không nhận diện được. Gõ "help" để xem danh sách lệnh.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const handleChipClick = (cmd) => {
    executeCommand(cmd);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-[#090D16] shadow-2xl shadow-sky-950/40 text-left font-mono">
      {/* Terminal Title Bar */}
      <div className="bg-[#111827] px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">
            bash - sytai@ute-danang:~ (data-env)
          </span>
        </div>
        <div className="flex items-center space-x-2 text-[11px] text-sky-400/80">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>Interactive Shell</span>
        </div>
      </div>

      {/* Quick Command Hint Chips */}
      <div className="bg-[#0D1322] px-4 py-2 border-b border-slate-800/80 flex items-center flex-wrap gap-1.5 text-xs">
        <span className="text-slate-500 text-[11px] mr-1 hidden sm:inline flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-cyan-400" /> Gợi ý:
        </span>
        {['whoami', 'skills', 'education', 'zodiac', 'contact', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleChipClick(cmd)}
            className="px-2.5 py-1 rounded-md text-[11px] bg-slate-800/80 hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 border border-slate-700/60 hover:border-sky-500/40 transition-colors cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-5 h-72 sm:h-80 overflow-y-auto space-y-1.5 text-xs sm:text-sm leading-relaxed text-slate-300">
        {history.map((item, idx) => (
          <div key={idx} className="whitespace-pre-wrap break-words">
            {item.type === 'user' && (
              <span className="text-sky-400 font-semibold">{item.text}</span>
            )}
            {item.type === 'system' && (
              <span className="text-emerald-400/90">{item.text}</span>
            )}
            {item.type === 'output' && (
              <span className="text-slate-300">{item.text}</span>
            )}
            {item.type === 'error' && (
              <span className="text-rose-400">{item.text}</span>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Command Input Bar */}
      <div className="bg-[#111827]/90 px-4 py-3 border-t border-slate-800 flex items-center space-x-2">
        <span className="text-emerald-400 font-bold select-none text-xs sm:text-sm">
          sytai@danang:~$
        </span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nhập lệnh (vd: whoami, skills, zodiac)..."
          className="flex-1 bg-transparent text-slate-100 text-xs sm:text-sm placeholder-slate-500 focus:outline-none"
        />
        <button
          onClick={() => executeCommand(inputVal)}
          type="button"
          className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 transition-colors cursor-pointer"
          aria-label="Chạy lệnh"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

