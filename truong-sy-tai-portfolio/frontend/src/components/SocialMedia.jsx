import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Compass } from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaThreads,
  FaDiscord,
  FaTiktok,
  FaYoutube,
  FaSpotify,
} from 'react-icons/fa6';
import { SiZalo } from 'react-icons/si';

// Custom vector Locket Camera Widget Icon
const LocketIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="2.5"
      y="2.5"
      width="19"
      height="19"
      rx="5.5"
      stroke="currentColor"
      strokeWidth="2.2"
    />
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" />
  </svg>
);

// Group 1: Kết nối & Trò chuyện
const connectChannels = [
  {
    name: 'Facebook',
    handle: '@truongsytai',
    tagline: 'Kết nối bạn bè & Chia sẻ cuộc sống',
    href: 'https://facebook.com',
    icon: FaFacebookF,
  },
  {
    name: 'Instagram',
    handle: '@truongsytai',
    tagline: 'Khoảnh khắc thường nhật & Visual stories',
    href: 'https://instagram.com',
    icon: FaInstagram,
  },
  {
    name: 'Threads',
    handle: '@truongsytai',
    tagline: 'Góc nhìn & Thảo luận công nghệ',
    href: 'https://threads.net',
    icon: FaThreads,
  },
  {
    name: 'Discord',
    handle: 'sytai#0001',
    tagline: 'Giao lưu học tập & Cộng đồng Dev',
    href: 'https://discord.com',
    icon: FaDiscord,
  },
  {
    name: 'Zalo',
    handle: 'Trương Sỹ Tài',
    tagline: 'Trao đổi nhắn tin nhanh công việc',
    href: 'https://zalo.me',
    icon: SiZalo,
  },
];

// Group 2: Giải trí & Đời sống
const lifestyleChannels = [
  {
    name: 'TikTok',
    handle: '@sytai.dev',
    tagline: 'Video ngắn & Cuộc sống sinh viên',
    href: 'https://tiktok.com',
    icon: FaTiktok,
  },
  {
    name: 'Locket',
    handle: '@sytai',
    tagline: 'Khoảnh khắc qua Widget bạn thân',
    href: 'https://locket.camera',
    icon: LocketIcon,
  },
  {
    name: 'YouTube',
    handle: '@sytaiofficial',
    tagline: 'Kênh video bài giảng & Demo đồ án',
    href: 'https://youtube.com',
    icon: FaYoutube,
  },
  {
    name: 'Spotify',
    handle: 'Sỹ Tài',
    tagline: 'Coding playlist & Giai điệu tập trung',
    href: 'https://spotify.com',
    icon: FaSpotify,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
};

export const SocialMedia = () => {
  return (
    <section id="socials" className="py-24 relative z-10 border-t border-[#1A1D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93C5FD]" />
            <p className="text-xs font-mono text-[#9BA1AC] tracking-wide">
              Mạng xã hội & Kênh truyền thông
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <h2 className="lg:col-span-7 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#F1F3F5]">
              Kênh Kết nối Trực tuyến —{' '}
              <span className="text-[#9BA1AC]">
                Liên lạc công việc & Theo dõi đời sống số trên đa nền tảng.
              </span>
            </h2>
            <p className="lg:col-span-5 text-xs sm:text-sm text-[#6C727F] leading-relaxed">
              Các kênh truyền thông chính thức được phân loại rõ ràng theo mục đích tương tác học thuật và sở thích đời sống hàng ngày.
            </p>
          </div>
        </div>

        {/* Group 1: Kết nối & Trò chuyện */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#9BA1AC]">
            <MessageSquare className="w-3.5 h-3.5 text-[#93C5FD]" />
            <span className="uppercase tracking-wider font-semibold">Nhóm Kết nối & Trò chuyện</span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5"
          >
            {connectChannels.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  className="group p-4 rounded-xl border border-[#1A1D24] bg-[#0F1115] hover:border-[#262A34] transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#14171D] border border-[#1A1D24] flex items-center justify-center text-[#F1F3F5] group-hover:text-[#93C5FD] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6C727F] group-hover:text-[#F1F3F5] transition-colors" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#F1F3F5] group-hover:text-[#93C5FD] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-mono text-[#6C727F] mb-1">
                      {item.handle}
                    </p>
                    <p className="text-[11px] text-[#9BA1AC] line-clamp-2 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Group 2: Giải trí & Đời sống */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#9BA1AC]">
            <Compass className="w-3.5 h-3.5 text-[#93C5FD]" />
            <span className="uppercase tracking-wider font-semibold">Nhóm Giải trí & Đời sống</span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"
          >
            {lifestyleChannels.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  className="group p-4 rounded-xl border border-[#1A1D24] bg-[#0F1115] hover:border-[#262A34] transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#14171D] border border-[#1A1D24] flex items-center justify-center text-[#F1F3F5] group-hover:text-[#93C5FD] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6C727F] group-hover:text-[#F1F3F5] transition-colors" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#F1F3F5] group-hover:text-[#93C5FD] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-mono text-[#6C727F] mb-1">
                      {item.handle}
                    </p>
                    <p className="text-[11px] text-[#9BA1AC] line-clamp-2 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SocialMedia;
