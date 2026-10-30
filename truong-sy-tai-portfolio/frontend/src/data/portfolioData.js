/**
 * Central Portfolio Data for Trương Sỹ Tài
 */

export const personalInfo = {
  name: 'Trương Sỹ Tài',
  shortName: 'Sỹ Tài',
  birthDate: '03/06/2007',
  zodiac: 'Song Tử (Gemini)',
  zodiacSign: '♊',
  university: 'Trường Đại học Sư phạm Kỹ thuật Đà Nẵng',
  universityShort: 'ĐH SPKT Đà Nẵng (UTE Danang)',
  major: 'Công nghệ thông tin (Information Technology)',
  title: 'IT Student | Future Data Specialist',
  futureRole: 'Chuyên gia Dữ liệu (Data Scientist / Data Analyst / Big Data Engineer)',
  location: 'Đà Nẵng, Việt Nam',
  email: 'truongsytai.dev@gmail.com',
  phone: '(+84) 935 888 678',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  facebook: 'https://facebook.com',
  avatarUrl: '/avatar.jpg',
  bio: 'Sinh viên Công nghệ Thông tin đầy nhiệt huyết tại Đại học Sư phạm Kỹ thuật Đà Nẵng. Tôi đam mê việc khám phá ý nghĩa đằng sau những tập dữ liệu khổng lồ, xây dựng các mô hình phân tích thông minh và phát triển các hệ thống xử lý dữ liệu quy mô lớn (Big Data).',
  stats: [
    { value: '6+', label: 'Ngôn ngữ lập trình' },
    { value: '15+', label: 'Môn học chuyên ngành CNTT' },
    { value: '100%', label: 'Đam mê Dữ liệu & AI' },
    { value: 'B1', label: 'Chứng chỉ Tiếng Anh (3/6)' }
  ]
};

export const programmingLanguages = [
  {
    name: 'Python',
    level: 90,
    role: 'Phân tích dữ liệu & Machine Learning (Pandas, NumPy, Scikit-learn)',
    badge: 'Trọng tâm Data',
    color: 'from-blue-500 to-yellow-500'
  },
  {
    name: 'SQL',
    level: 88,
    role: 'Truy vấn & Quản trị CSDL (PostgreSQL, MySQL, SQL Server)',
    badge: 'Database Core',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'Java',
    level: 82,
    role: 'OOP, Lập trình ứng dụng nâng cao & Cấu trúc hệ thống',
    badge: 'Enterprise Backend',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'C / C++',
    level: 80,
    role: 'Cấu trúc dữ liệu & Giải thuật, Quản lý bộ nhớ tối ưu',
    badge: 'CS Foundation',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    name: 'JavaScript',
    level: 78,
    role: 'Xây dựng giao diện Web tương tác với React & Vite',
    badge: 'Full-Stack Web',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    name: 'HTML5 / CSS3',
    level: 85,
    role: 'Thiết kế giao diện hiện đại, Tailwind CSS, Responsive',
    badge: 'UI/UX Design',
    color: 'from-pink-500 to-rose-500'
  }
];

export const softSkills = [
  {
    title: 'Kỹ năng làm việc nhóm',
    description: 'Khả năng phối hợp linh hoạt trong nhóm đồ án, phân chia nhiệm vụ theo phương pháp Agile/Scrum và tương tác hiệu quả với các thành viên.',
    iconName: 'Users'
  },
  {
    title: 'Kỹ năng thuyết trình',
    description: 'Truyền tải mạch lạc các ý tưởng kỹ thuật, báo cáo tiến độ đồ án và giải thích insights từ dữ liệu một cách trực quan trước hội đồng.',
    iconName: 'Presentation'
  },
  {
    title: 'Tư duy phản biện',
    description: 'Phân tích vấn đề từ nhiều góc độ, đánh giá tính logic của giải thuật và đưa ra quyết định dựa trên dữ liệu thực chứng.',
    iconName: 'BrainCircuit'
  }
];

export const academicProficiency = {
  radarData: [
    { subject: 'Dữ liệu & AI', score: 92, fullMark: 100 },
    { subject: 'Cơ sở & Giải thuật', score: 88, fullMark: 100 },
    { subject: 'Kỹ thuật Lập trình', score: 85, fullMark: 100 },
    { subject: 'Kiến trúc Hệ thống', score: 80, fullMark: 100 },
    { subject: 'Ngoại ngữ & Kỹ năng', score: 82, fullMark: 100 }
  ],
  courseGroups: [
    {
      id: 'data-ai',
      name: 'Nhóm Dữ liệu & AI (Trọng tâm)',
      icon: 'Database',
      description: 'Lĩnh vực định hướng tương lai, tập trung vào trích xuất tri thức, phân tích và trí tuệ nhân tạo.',
      courses: [
        { name: 'Kho dữ liệu & Khai phá dữ liệu (Data Warehouse - Data Mining)', score: 92, status: 'Xuất sắc', credit: '3 tín chỉ' },
        { name: 'Trí tuệ nhân tạo (Artificial Intelligence)', score: 90, status: 'Giỏi', credit: '3 tín chỉ' },
        { name: 'Xác suất thống kê trong CNTT', score: 88, status: 'Giỏi', credit: '3 tín chỉ' },
        { name: 'Cơ sở dữ liệu phi quan hệ (NoSQL)', score: 86, status: 'Giỏi', credit: '2 tín chỉ' },
        { name: 'Thị giác máy tính (Computer Vision)', score: 85, status: 'Tiên tiến', credit: '3 tín chỉ' }
      ]
    },
    {
      id: 'core-foundation',
      name: 'Nhóm Cơ sở & Cốt lõi',
      icon: 'Cpu',
      description: 'Nền tảng tư duy thuật toán và lưu trữ dữ liệu bền vững của ngành CNTT.',
      courses: [
        { name: 'Cấu trúc dữ liệu & Giải thuật', score: 88, status: 'Giỏi', credit: '3 tín chỉ' },
        { name: 'Cơ sở dữ liệu I & II', score: 90, status: 'Xuất sắc', credit: '4 tín chỉ' },
        { name: 'Hệ quản trị Cơ sở dữ liệu', score: 87, status: 'Giỏi', credit: '3 tín chỉ' }
      ]
    },
    {
      id: 'programming',
      name: 'Nhóm Lập trình',
      icon: 'Code2',
      description: 'Hiện thực hóa các giải pháp phần mềm hiện đại và kiến trúc hướng đối tượng.',
      courses: [
        { name: 'Lập trình hướng đối tượng (OOP)', score: 89, status: 'Giỏi', credit: '3 tín chỉ' },
        { name: 'Lập trình Java nâng cao', score: 85, status: 'Khá Giỏi', credit: '3 tín chỉ' },
        { name: 'Lập trình Web hiện đại', score: 88, status: 'Giỏi', credit: '3 tín chỉ' }
      ]
    },
    {
      id: 'systems',
      name: 'Nhóm Hệ thống',
      icon: 'Server',
      description: 'Kiến thức về tầng hạ tầng mạng, môi trường vận hành và giao thức phân tán.',
      courses: [
        { name: 'Hệ điều hành (Operating Systems)', score: 82, status: 'Khá Giỏi', credit: '3 tín chỉ' },
        { name: 'Mạng máy tính (Computer Networks)', score: 84, status: 'Khá Giỏi', credit: '3 tín chỉ' },
        { name: 'Quản trị mạng & An toàn hệ thống', score: 80, status: 'Khá', credit: '3 tín chỉ' }
      ]
    },
    {
      id: 'languages',
      name: 'Ngoại ngữ & Kỹ năng bổ trợ',
      icon: 'Languages',
      description: 'Năng lực ngoại ngữ chuẩn B1 và kỹ năng mềm thiết yếu cho môi trường công nghệ quốc tế.',
      courses: [
        { name: 'Tiếng Anh B1 (Bậc 3/6 Khung NLNN / CEFR B1)', score: 85, status: 'Đạt chuẩn B1', credit: 'Chứng chỉ chính quy' },
        { name: 'Kỹ năng giao tiếp và làm việc nhóm', score: 90, status: 'Xuất sắc', credit: '2 tín chỉ' },
        { name: 'Phương pháp luận nghiên cứu khoa học', score: 86, status: 'Giỏi', credit: '2 tín chỉ' }
      ]
    }
  ]
};

export const upcomingProjects = [
  {
    id: 1,
    title: 'Hệ thống Dự đoán Rời bỏ của Khách hàng (Customer Churn Prediction)',
    category: 'Data Science & Machine Learning',
    status: 'Upcoming / Đang chuẩn bị',
    timeline: 'Học kỳ tới',
    description: 'Xây dựng pipeline ETL khai phá dữ liệu khách hàng từ Data Warehouse và ứng dụng mô hình Random Forest/XGBoost để dự đoán tỷ lệ rời bỏ dịch vụ.',
    techStack: ['Python', 'Pandas', 'Scikit-Learn', 'PostgreSQL', 'Streamlit'],
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
  },
  {
    id: 2,
    title: 'Hệ thống Quản lý Học tập & Phân tích Điểm số Sinh viên (Đồ án Phần mềm)',
    category: 'Full-Stack & Big Data',
    status: 'Coming Soon',
    timeline: 'Đồ án Chuyên ngành',
    description: 'Ứng dụng Web hỗ trợ giảng viên và sinh viên ĐH SPKT Đà Nẵng theo dõi tiến độ học tập, tích hợp dashboard phân tích dữ liệu hiệu quả môn học.',
    techStack: ['Java Spring Boot', 'React', 'Tailwind CSS', 'MySQL', 'Chart.js'],
    badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10'
  },
  {
    id: 3,
    title: 'Hệ thống Nhận diện & Phân loại Ảnh Thời gian Thực (Đồ án Tốt nghiệp)',
    category: 'Computer Vision & AI',
    status: 'Roadmap Mục tiêu',
    timeline: 'Đồ án Tốt nghiệp CNTT',
    description: 'Nghiên cứu mô hình CNN và YOLO để trích xuất đặc trưng hình ảnh thời gian thực, tích hợp lưu trữ NoSQL và xử lý phân tán.',
    techStack: ['Python', 'PyTorch / OpenCV', 'NoSQL MongoDB', 'FastAPI', 'Docker'],
    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10'
  }
];

export const galleryItems = [
  {
    id: 1,
    title: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
    category: 'Campus Life',
    aspect: 'aspect-[4/3]',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    description: 'Môi trường đào tạo công nghệ năng động tại TP. Đà Nẵng'
  },
  {
    id: 2,
    title: 'Không gian Nghiên cứu Dữ liệu',
    category: 'Study & Coding',
    aspect: 'aspect-[3/4]',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    description: 'Nơi những dòng code thuật toán biến thành ứng dụng thực tiễn'
  },
  {
    id: 3,
    title: 'Big Data & Cloud Architecture',
    category: 'Data Engineering',
    aspect: 'aspect-[4/3]',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    description: 'Hệ thống lưu trữ và cụm máy chủ phân tán'
  },
  {
    id: 4,
    title: 'Làm việc Nhóm & Thảo luận Đồ án',
    category: 'Teamwork',
    aspect: 'aspect-[1/1]',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    description: 'Tương tác, tranh luận logic và phản biện cùng đồng đội'
  },
  {
    id: 5,
    title: 'Hội thảo Trí tuệ nhân tạo & Khai phá dữ liệu',
    category: 'Conference & Events',
    aspect: 'aspect-[16/9]',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    description: 'Cập nhật những bước tiến công nghệ mới nhất cùng chuyên gia'
  },
  {
    id: 6,
    title: 'Cảm hứng Công nghệ Tương lai',
    category: 'Inspiration',
    aspect: 'aspect-[3/4]',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    description: 'Mỗi bài toán dữ liệu là một hành trình giải mã thú vị'
  },
  {
    id: 7,
    title: 'Data Science & Visual Analytics',
    category: 'Analytics Lab',
    aspect: 'aspect-[4/3]',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Trực quan hóa đồ thị và phân tích thông minh từ tập dữ liệu lớn'
  },
  {
    id: 8,
    title: 'Thư viện & Không gian Tự học UTE',
    category: 'Academic Focus',
    aspect: 'aspect-[4/3]',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    description: 'Trau dồi tri thức học thuật và kỹ năng chuyên môn mỗi ngày'
  },
  {
    id: 9,
    title: 'Học máy & Trí tuệ Nhân tạo',
    category: 'Machine Learning',
    aspect: 'aspect-[4/3]',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    description: 'Nghiên cứu các thuật toán tối ưu hóa và kiến trúc mô hình AI tiên tiến'
  },
  {
    id: 10,
    title: 'Hackathon & Lập trình Sáng tạo',
    category: 'Hackathon',
    aspect: 'aspect-[4/3]',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    description: 'Thử thách giải quyết bài toán thực tế trong 48 giờ liên tục'
  },
  {
    id: 11,
    title: 'Kiến trúc Pipeline Dữ liệu Lớn',
    category: 'Data Pipeline',
    aspect: 'aspect-[4/3]',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    description: 'Xây dựng luồng luân chuyển dữ liệu tự động, tốc độ cao và mở rộng linh hoạt'
  },
  {
    id: 12,
    title: 'Tọa đàm Kết nối Doanh nghiệp CNTT',
    category: 'Career Networking',
    aspect: 'aspect-[4/3]',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    description: 'Gặp gỡ, học hỏi kinh nghiệm thực chiến từ các kỹ sư công nghệ đầu ngành'
  }
];

