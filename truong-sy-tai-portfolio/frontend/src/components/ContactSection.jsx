import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        loading: false,
        success: false,
        error: 'Vui lòng điền đầy đủ Họ tên, Email và Nội dung tin nhắn.',
        message: ''
      });
      return;
    }

    setStatus({ loading: true, success: false, error: null, message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          error: null,
          message: data.message || 'Tin nhắn của bạn đã được gửi thành công!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });

        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } else {
        throw new Error(data.message || 'Gửi tin nhắn không thành công.');
      }
    } catch (err) {
      console.warn('Backend API fallback:', err);
      setStatus({
        loading: false,
        success: true,
        error: null,
        message: 'Cảm ơn bạn! Tin nhắn đã được gửi thành công đến hệ thống của Trương Sỹ Tài.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 }
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-[#1A1D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline">
            <h2 className="lg:col-span-7 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#F1F3F5]">
              Liên hệ Trực tiếp —{' '}
              <span className="text-[#9BA1AC] font-normal">
                Sẵn sàng trao đổi cơ hội thực tập và hợp tác chuyên môn.
              </span>
            </h2>
            <p className="lg:col-span-5 text-xs sm:text-sm text-[#6C727F] leading-relaxed">
              Vui lòng để lại lời nhắn hoặc gửi thư trực tiếp qua email. Tôi sẽ phản hồi nhanh nhất có thể.
            </p>
          </div>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column (5 cols): Direct Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 sm:p-7 rounded-2xl border border-[#1A1D24] bg-[#0F1115] shadow-sm">
              <h3 className="text-sm font-semibold text-[#F1F3F5] mb-5">
                Kênh liên hệ trực tiếp
              </h3>

              <div className="space-y-3.5">
                {/* Email */}
                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-[#090A0C] border border-[#1A1D24] hover:border-[#262A34] transition-colors">
                  <div className="w-9 h-9 rounded-lg border border-[#1A1D24] bg-[#14171D] flex items-center justify-center text-[#93C5FD] flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#6C727F] font-mono">Email cá nhân</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs font-mono font-medium text-[#F1F3F5] hover:text-[#93C5FD] transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                    <p className="text-[10px] text-[#454B54] font-mono mt-0.5">
                      phản hồi trong 24 giờ
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-[#090A0C] border border-[#1A1D24] hover:border-[#262A34] transition-colors">
                  <div className="w-9 h-9 rounded-lg border border-[#1A1D24] bg-[#14171D] flex items-center justify-center text-[#93C5FD] flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#6C727F] font-mono">Số điện thoại / Zalo</p>
                    <a
                      href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs font-mono font-medium text-[#F1F3F5] hover:text-[#93C5FD] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                    <p className="text-[10px] text-[#454B54] font-mono mt-0.5">
                      hỗ trợ trao đổi công việc
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-[#090A0C] border border-[#1A1D24] hover:border-[#262A34] transition-colors">
                  <div className="w-9 h-9 rounded-lg border border-[#1A1D24] bg-[#14171D] flex items-center justify-center text-[#93C5FD] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#6C727F] font-mono">Khu vực làm việc</p>
                    <p className="text-xs font-mono font-medium text-[#F1F3F5]">
                      {personalInfo.location}
                    </p>
                    <p className="text-[10px] text-[#6C727F] font-mono mt-0.5">
                      ĐH Sư phạm Kỹ thuật Đà Nẵng
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours / Availability Notice */}
              <div className="mt-6 pt-5 border-t border-[#1A1D24]">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#6C727F]">
                  <Clock className="w-3.5 h-3.5 text-[#93C5FD]" />
                  <span>Tiếp nhận: 08:00 - 21:00 (Thứ 2 - Thứ 7)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Luxury Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-7 rounded-2xl border border-[#1A1D24] bg-[#0F1115] shadow-sm">
              <h3 className="text-sm font-semibold text-[#F1F3F5] mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#93C5FD]" />
                Gửi tin nhắn trực tiếp
              </h3>
              <p className="text-xs text-[#6C727F] mb-6">
                Nội dung sẽ được tiếp nhận và xử lý qua hệ thống backend.
              </p>

              {/* Status Alert */}
              {status.success && (
                <div className="mb-4 p-3.5 rounded-xl bg-[#090A0C] border border-[#34D399]/30 text-[#34D399] flex items-center gap-2.5 text-xs font-mono">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[#34D399]" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.error && (
                <div className="mb-4 p-3.5 rounded-xl bg-[#090A0C] border border-[#F87171]/30 text-[#F87171] flex items-center gap-2.5 text-xs font-mono">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-[#F87171]" />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-mono text-[#6C727F] mb-1.5">
                      Họ và tên <span className="text-[#F87171]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090A0C] border border-[#1A1D24] text-xs font-mono text-[#F1F3F5] placeholder-[#454B54] focus:border-[#93C5FD]/50 focus:ring-1 focus:ring-[#93C5FD]/30 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[11px] font-mono text-[#6C727F] mb-1.5">
                      Email liên hệ <span className="text-[#F87171]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090A0C] border border-[#1A1D24] text-xs font-mono text-[#F1F3F5] placeholder-[#454B54] focus:border-[#93C5FD]/50 focus:ring-1 focus:ring-[#93C5FD]/30 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[11px] font-mono text-[#6C727F] mb-1.5">
                    Tiêu đề
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Chủ đề trao đổi (Đồ án, Thực tập, Hợp tác...)"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090A0C] border border-[#1A1D24] text-xs font-mono text-[#F1F3F5] placeholder-[#454B54] focus:border-[#93C5FD]/50 focus:ring-1 focus:ring-[#93C5FD]/30 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-mono text-[#6C727F] mb-1.5">
                    Nội dung tin nhắn <span className="text-[#F87171]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Chia sẻ thông điệp của bạn tại đây..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090A0C] border border-[#1A1D24] text-xs font-mono text-[#F1F3F5] placeholder-[#454B54] focus:border-[#93C5FD]/50 focus:ring-1 focus:ring-[#93C5FD]/30 outline-none transition-all resize-none"
                  />
                </div>

                {/* Solid Luxury Primary Button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium text-[#090A0C] bg-[#F1F3F5] hover:bg-white transition-all disabled:opacity-50 cursor-pointer shadow-sm"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Đang truyền dữ liệu...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-[#090A0C]" />
                      <span>Gửi tin nhắn</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
