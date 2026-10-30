import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Share2, MessageCircle, Sparkles } from 'lucide-react';
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

// Custom high-fidelity Locket Camera Widget Icon
const LocketIcon = ({ className = 'w-6 h-6' }) => (
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

// Social Media Data with Brand Tokens & Theming
const connectChannels = [
  {
    name: 'Facebook',
    handle: '@truongsytai',
    tagline: 'Kết nối bạn bè & Chia sẻ cuộc sống',
    href: 'https://facebook.com',
    icon: FaFacebookF,
    color: '#1877F2',
    bgLight: 'hover:bg-blue-500/10 hover:border-blue-500/40',
    iconColor: 'text-[#1877F2]',
    accentGlow: 'rgba(24, 119, 242, 0.25)',
  },
  {
    name: 'Instagram',
    handle: '@truongsytai',
    tagline: 'Khoảnh khắc thường nhật & Visual stories',
    href: 'https://instagram.com',
    icon: FaInstagram,
    color: '#E4405F',
    bgLight: 'hover:bg-pink-500/10 hover:border-pink-500/40',
    iconColor: 'text-[#E4405F]',
    accentGlow: 'rgba(228, 64, 95, 0.25)',
  },
  {
    name: 'Threads',
    handle: '@truongsytai',
    tagline: 'Góc nhìn, suy nghĩ & Thảo luận công nghệ',
    href: 'https://threads.net',
    icon: FaThreads,
    color: '#000000',
    darkColor: '#FFFFFF',
    bgLight: 'hover:bg-slate-500/10 hover:border-slate-500/40',
    iconColor: 'text-slate-900 dark:text-white',
    accentGlow: 'rgba(148, 163, 184, 0.25)',
  },
  {
    name: 'Discord',
    handle: 'sytai#0001',
    tagline: 'Giao lưu học tập & Sinh hoạt cộng đồng Dev',
    href: 'https://discord.com',
    icon: FaDiscord,
    color: '#5865F2',
    bgLight: 'hover:bg-indigo-500/10 hover:border-indigo-500/40',
    iconColor: 'text-[#5865F2]',
    accentGlow: 'rgba(88, 101, 242, 0.25)',
  },
  {
    name: 'Zalo',
    handle: 'Trương Sỹ Tài',
    tagline: 'Liên hệ nhắn tin nhanh & Trao đổi tiện lợi',
    href: 'https://zalo.me',
    icon: SiZalo,
    color: '#0068FF',
    bgLight: 'hover:bg-sky-500/10 hover:border-sky-500/40',
    iconColor: 'text-[#0068FF]',
    accentGlow: 'rgba(0, 104, 255, 0.25)',
  },
];

const lifestyleChannels = [
  {
    name: 'TikTok',
    handle: '@sytai.dev',
    tagline: 'Video ngắn, tech reviews & Cuộc sống sinh viên',
    href: 'https://tiktok.com',
    icon: FaTiktok,
    color: '#FE2C55',
    bgLight: 'hover:bg-rose-500/10 hover:border-rose-500/40',
    iconColor: 'text-[#FE2C55]',
    accentGlow: 'rgba(254, 44, 85, 0.25)',
  },
  {
    name: 'Locket',
    handle: '@sytai',
    tagline: 'Khoảnh khắc real-time qua Widget bạn thân',
    href: 'https://locket.camera',
    icon: LocketIcon,
    color: '#FFB800',
    bgLight: 'hover:bg-amber-500/10 hover:border-amber-500/40',
    iconColor: 'text-[#FFB800]',
    accentGlow: 'rgba(255, 184, 0, 0.25)',
  },
  {
    name: 'YouTube',
    handle: '@sytaiofficial',
    tagline: 'Kênh video bài giảng & Demo đồ án công nghệ',
    href: 'https://youtube.com',
    icon: FaYoutube,
    color: '#FF0000',
    bgLight: 'hover:bg-red-500/10 hover:border-red-500/40',
    iconColor: 'text-[#FF0000]',
    accentGlow: 'rgba(255, 0, 0, 0.25)',
  },
  {
    name: 'Spotify',
    handle: 'Sỹ Tài',
    tagline: 'Coding playlist, Lo-fi & Giai điệu tập trung',
    href: 'https://spotify.com',
    icon: FaSpotify,
    color: '#1DB954',
    bgLight: 'hover:bg-emerald-500/10 hover:border-emerald-500/40',
    iconColor: 'text-[#1DB954]',
    accentGlow: 'rgba(29, 185, 84, 0.25)',
  },
];

// Motion animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const SocialMedia = () => {
  return (
    <section id="socials" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-4 shadow-sm backdrop-blur-md">
            <Share2 className="w-3.5 h-3.5 text-sky-500" />
            <span>Mạng xã hội & Kênh cá nhân</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Kết nối với Trương Sỹ Tài
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Khám phá các kênh truyền thông, trò chuyện trao đổi hoặc theo dõi những khoảnh khắc đời sống & công nghệ của tôi trên đa nền tảng số.
          </p>
        </div>

        {/* Group 1: Kết nối & Trò chuyện */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-sky-500/10 text-sky-500 border border-sky-500/20">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Kết nối & Trò chuyện
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Các nền tảng tương tác, giao lưu học thuật và nhắn tin trực tiếp
              </p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
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
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className={`group relative p-5 rounded-2xl bg-white/75 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${item.bgLight}`}
                  style={{
                    '--glow-color': item.accentGlow,
                  }}
                >
                  {/* Subtle hover glowing gradient aura */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: `0 8px 30px -4px ${item.accentGlow}`,
                    }}
                  />

                  {/* Top: Icon + External link arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100/90 dark:bg-slate-800/80 group-hover:scale-110 transition-transform duration-300 shadow-inner`}
                    >
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <span className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:bg-slate-200 dark:group-hover:bg-slate-700/80 transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                  {/* Bottom: Info */}
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mb-1">
                      {item.handle}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
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
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Giải trí & Đời sống
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Nơi thư giãn, chia sẻ sở thích âm nhạc, video ngắn và khoảnh khắc hàng ngày
              </p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className={`group relative p-5 rounded-2xl bg-white/75 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${item.bgLight}`}
                >
                  {/* Subtle hover glowing gradient aura */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: `0 8px 30px -4px ${item.accentGlow}`,
                    }}
                  />

                  {/* Top: Icon + External link arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100/90 dark:bg-slate-800/80 group-hover:scale-110 transition-transform duration-300 shadow-inner"
                    >
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <span className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:bg-slate-200 dark:group-hover:bg-slate-700/80 transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                  {/* Bottom: Info */}
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mb-1">
                      {item.handle}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
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

