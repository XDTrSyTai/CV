/**
 * Contact Controller
 * Handles receiving, validating and processing contact messages from the portfolio.
 */

// In-memory store for received contact inquiries (can be replaced with database or mail service)
const messageHistory = [];

export const handleContactSubmit = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic Validation
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Họ và tên là bắt buộc.'
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Địa chỉ email là bắt buộc.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Địa chỉ email không hợp lệ.'
      });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Nội dung tin nhắn không được để trống.'
      });
    }

    const newInquiry = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      subject: (subject && subject.trim()) || 'Liên hệ từ Portfolio',
      message: message.trim(),
      receivedAt: new Date().toISOString()
    };

    messageHistory.unshift(newInquiry);

    console.log(`[PORTFOLIO CONTACT] Nhận tin nhắn mới từ ${newInquiry.name} (${newInquiry.email}): "${newInquiry.subject}"`);

    return res.status(200).json({
      success: true,
      message: 'Cảm ơn bạn đã liên hệ! Tin nhắn của bạn đã được gửi thành công đến Trương Sỹ Tài.',
      data: {
        id: newInquiry.id,
        receivedAt: newInquiry.receivedAt
      }
    });
  } catch (error) {
    console.error('[PORTFOLIO CONTACT ERROR]:', error);
    return res.status(500).json({
      success: false,
      message: 'Đã xảy ra lỗi trên máy chủ. Vui lòng thử lại sau.'
    });
  }
};

export const getContactStatus = (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Truong Sy Tai Portfolio Contact Service',
    totalMessagesReceived: messageHistory.length,
    timestamp: new Date().toISOString()
  });
};

