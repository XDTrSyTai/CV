import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { personalInfo, programmingLanguages } from '../data/portfolioData';

const COMMANDS = {
  help: () => [
    '=== CÁC LỆNH KHẢ DỤNG ===',
    '  whoami     : Xem thông tin danh tính & định hướng nghề nghiệp',
    '  skills     : Danh sách ngôn ngữ & công nghệ đang học',
    '  education  : Trường đại học & chuyên ngành đào tạo',
    '  zodiac     : Thông tin ngày sinh & cung hoàng đạo Song Tử',
    '  contact    : Thông tin liên lạc cá nhân',
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
    '  * Làm việc nhóm & Kỹ năng giao tiếp',
    '  * Thuyết trình & Báo cáo kỹ thuật',
    '  * Tư duy phản biện & Logic giải thuật'
  ],
  education: () => [
    `Trường      : ${personalInfo.university}`,
    `Tên viết tắt: ${personalInfo.universityShort}`,
    `Chuyên ngành: ${personalInfo.major}`,
    `Chứng chỉ   : Tiếng Anh B1 (Bậc 3/6 VSTEP / CEFR)`
  ],
  zodiac: () => [
    `Ngày sinh     : ${personalInfo.birthDate}`,
    `Cung hoàng đạo: ${personalInfo.zodiac} (${personalInfo.zodiacSign})`,
    `Đặc trưng     : Nhanh nhạy, thông minh, khả năng thích ứng cao,`,
    `                tư duy linh hoạt và đam mê khám phá tri thức mới.`
  ],
  contact: () => [
    `Email       : ${personalInfo.email}`,
    `Phone       : ${personalInfo.phone}`,
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
      text: 'Trương Sỹ Tài Portfolio Interactive Terminal [Khởi tạo thành công]'
    },
    {
      type: 'system',
      text: 'Gõ "help" hoặc chọn nhanh các gợi ý để xem thông tin chi tiết.'
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

    const newHistory = [...history, { type: 'user', text: `sytai@danang:~$ ${rawCmd}` }];

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
    <div className="w-full text-left font-mono">
      {/* Terminal Title Bar */}
      <div className="bg-[#0F1115] px-4 py-3 flex items-center justify-between border-b border-[#1A1D24]">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F87171]/40 border border-[#F87171]/20 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]/40 border border-[#FBBF24]/20 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]/40 border border-[#34D399]/20 inline-block" />
          <span className="text-xs text-[#6C727F] font-mono ml-2 hidden sm:inline">
            sytai@ute-danang:~/portfolio
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-xs text-[#93C5FD]">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span className="text-[11px] font-medium">Interactive Shell</span>
        </div>
      </div>

      {/* Quick Command Hint Chips */}
      <div className="bg-[#0D0E11] px-4 py-2.5 border-b border-[#1A1D24] flex items-center flex-wrap gap-2 text-xs">
        <span className="text-[#6C727F] text-[11px] mr-1 hidden sm:inline">
          Lệnh nhanh:
        </span>
        {['whoami', 'skills', 'education', 'zodiac', 'contact', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleChipClick(cmd)}
            className="px-2.5 py-1 rounded-full text-[11px] bg-[#14171D] hover:bg-[#1A1D24] text-[#9BA1AC] hover:text-[#F1F3F5] border border-[#1A1D24] hover:border-[#262A34] transition-all cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Area */}
      <div className="bg-[#090A0C] p-4 sm:p-5 h-72 sm:h-80 overflow-y-auto space-y-1.5 text-xs leading-[1.6]">
        {history.map((item, idx) => (
          <div key={idx} className="whitespace-pre-wrap break-words">
            {item.type === 'user' && (
              <span className="text-[#93C5FD] font-medium">{item.text}</span>
            )}
            {item.type === 'system' && (
              <span className="text-[#86EFAC]">{item.text}</span>
            )}
            {item.type === 'output' && (
              <span className="text-[#9BA1AC]">{item.text}</span>
            )}
            {item.type === 'error' && (
              <span className="text-[#F87171]">{item.text}</span>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Command Input Bar */}
      <div className="bg-[#0F1115] px-4 py-3 border-t border-[#1A1D24] flex items-center space-x-2.5">
        <span className="text-[#6C727F] select-none text-xs">
          sytai@danang:~$
        </span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nhập lệnh (vd: whoami, skills, zodiac)..."
          className="flex-1 bg-transparent text-[#F1F3F5] text-xs placeholder-[#454B54] focus:outline-none font-mono"
        />
        <button
          onClick={() => executeCommand(inputVal)}
          type="button"
          className="p-1.5 rounded-lg bg-[#14171D] text-[#93C5FD] hover:bg-[#1A1D24] border border-[#1A1D24] hover:border-[#262A34] transition-colors cursor-pointer"
          aria-label="Chạy lệnh"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
