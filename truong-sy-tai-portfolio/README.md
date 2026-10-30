# Portfolio Trương Sỹ Tài — Future Data Specialist

Website Portfolio cá nhân hoàn chỉnh được thiết kế và xây dựng theo tiêu chuẩn **UI/UX Pro Max**, mang đậm phong cách công nghệ dữ liệu hiện đại, tối giản và cao cấp (*Glassmorphism & Cyber Modernism*).

---

## 👤 Thông tin cá nhân

- **Họ và tên**: Trương Sỹ Tài
- **Ngày sinh**: 03/06/2007
- **Cung hoàng đạo**: Song Tử (Gemini ♊)
- **Học vấn**: Sinh viên ngành Công nghệ thông tin, Trường Đại học Sư phạm Kỹ thuật Đà Nẵng (UTE Danang)
- **Định hướng tương lai**: Chuyên gia trong lĩnh vực Dữ liệu (*Data Scientist, Data Analyst, Big Data Engineer*)

---

## 🌟 Điểm nổi bật & Tính năng độc đáo (Unique Features)

1. **Giao diện chuẩn UI/UX Pro Max**:
   - Tông màu công nghệ & dữ liệu: *Deep Space Navy*, *Sky Tech Blue*, *Cyber Cyan*, *Electric Indigo* và điểm xuyết *Amber*.
   - Hiệu ứng kính mờ (Glassmorphism backdrop-blur), đường viền phát sáng mỏng tinh tế, độ tương phản chuẩn WCAG AA.
2. **Tự động nhận diện Theme (Light/Dark Mode)**:
   - Mặc định tự động nhận diện theo thiết lập hệ thống của người dùng (`prefers-color-scheme`).
   - Nút chuyển đổi thủ công mượt mà với hoạt ảnh xoay icon mặt trời/mặt trăng (Framer Motion).
3. **Badge Song Tử & Ngày sinh tinh xảo**:
   - Ngày sinh `03/06/2007` và biểu tượng cung hoàng đạo `♊ Song Tử` được thiết kế dưới dạng capsule badge kính mờ phát sáng tinh tế ở Hero Section.
4. **Mạng lưới Nơ-ron Dữ liệu (Neural Particles Canvas)**:
   - Hiệu ứng các hạt dữ liệu kết nối tương tác nhẹ theo con trỏ chuột, tự động tối ưu FPS và hỗ trợ `prefers-reduced-motion`.
5. **Interactive Terminal Widget**:
   - Cửa sổ dòng lệnh giả lập ngay trong phần About Me, hỗ trợ gõ các lệnh: `whoami`, `skills`, `education`, `zodiac`, `contact`, `date`, `clear`, `help` kèm các nút gợi ý nhanh.
6. **Dynamic Real-time Greeting**:
   - Lời chào cá nhân hóa tự động thay đổi theo thời gian thực (Chào buổi sáng / Chào buổi chiều / Chào buổi tối).
7. **Academic Proficiency (Trình độ Chuyên môn)**:
   - Trực quan hóa 5 nhóm môn học tiêu biểu (Cơ sở & Cốt lõi, Lập trình, Dữ liệu & AI, Hệ thống, Ngoại ngữ B1) qua **Biểu đồ Radar SVG** và thanh **Progress Bars** tương tác.
8. **Masonry Gallery & Lightbox**:
   - Lưới ảnh đa kích thước với hiệu ứng zoom nhẹ khi hover và popup xem ảnh phóng to.
9. **Full-Stack Architecture**:
   - Kết nối API `POST /api/contact` đến backend Node.js Express với validation, loading state và hiệu ứng pháo hoa confetti khi gửi thành công.

---

## 📁 Cấu trúc thư mục

```text
truong-sy-tai-portfolio/
│
├── frontend/                     # Ứng dụng Frontend (React + Vite + Tailwind CSS)
│   ├── public/                   # Favicon SVG, Avatar Placeholder SVG
│   ├── src/
│   │   ├── components/           # Navbar, Hero, About, Skills, Terminal, Radar, Gallery, Contact, Footer...
│   │   ├── context/              # ThemeContext (xử lý Light/Dark Mode)
│   │   ├── data/                 # portfolioData.js (toàn bộ dữ liệu hồ sơ cá nhân)
│   │   ├── App.jsx               # Main App component
│   │   ├── index.css             # Tailwind utilities & Glassmorphism styles
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── backend/                      # Ứng dụng Backend API (Node.js + Express)
│   ├── src/
│   │   ├── controllers/          # contactController.js (xử lý form liên hệ)
│   │   ├── routes/               # contactRoutes.js (định nghĩa API route)
│   │   └── server.js             # Express Server chính (CORS, JSON Parser)
│   ├── .env.example
│   └── package.json
│
└── README.md                     # Tài liệu hướng dẫn sử dụng
```

---

## 🚀 Hướng dẫn Cài đặt & Khởi chạy dự án

### Yêu cầu tiên quyết
- Đã cài đặt **Node.js** (khuyến nghị phiên bản 18+ hoặc mới hơn).
- Trình quản lý gói `npm` (đi kèm sẵn với Node.js).

---

### Bước 1: Khởi chạy Backend API

Mở một cửa sổ Terminal:

```bash
# 1. Đi vào thư mục backend
cd truong-sy-tai-portfolio/backend

# 2. Cài đặt các gói phụ thuộc (nếu chưa cài)
npm install

# 3. Khởi động máy chủ backend
npm start
```

Máy chủ API sẽ chạy tại: **`http://localhost:5000`**  
Endpoint kiểm tra trạng thái: **`http://localhost:5000/api/contact/status`**

---

### Bước 2: Khởi chạy Frontend (React + Vite)

Mở một cửa sổ Terminal thứ hai:

```bash
# 1. Đi vào thư mục frontend
cd truong-sy-tai-portfolio/frontend

# 2. Cài đặt các gói phụ thuộc (nếu chưa cài)
npm install

# 3. Chạy môi trường phát triển (Vite Dev Server)
npm run dev
```

Truy cập trang web trên trình duyệt tại: **`http://localhost:5173`**

---

### Bước 3: Đóng gói sản phẩm (Build for Production)

Khi muốn đưa website lên hosting (Vercel, Netlify, VPS...):

```bash
cd truong-sy-tai-portfolio/frontend
npm run build
```

Thư mục `frontend/dist/` được tạo ra sẵn sàng để deploy lên bất kỳ static web hosting nào.

---

## 🛠️ Công nghệ sử dụng

- **Frontend**: React 18, Vite 6, Tailwind CSS 3, Framer Motion 11, Lucide React, Canvas Confetti.
- **Backend**: Node.js, Express 4, CORS, Dotenv.
- **Tiêu chuẩn thiết kế**: UI/UX Pro Max (79 styles taxonomy, 192 reasoning rules, WCAG AA 4.5:1 Contrast, Responsive Design).

