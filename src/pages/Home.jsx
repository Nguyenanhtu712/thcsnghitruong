import React from "react";
import { Link } from "react-router-dom";

const reasons = [
  { icon: "📘", title: "Chương trình học tiên tiến", desc: "Áp dụng phương pháp giảng dạy hiện đại, tích hợp công nghệ vào học tập" },
  { icon: "👩‍🏫", title: "Đội ngũ giáo viên chất lượng", desc: "Giáo viên có trình độ, tâm huyết và kinh nghiệm" },
  { icon: "🏫", title: "Cơ sở vật chất hiện đại", desc: "Phòng học, thư viện và khu thể thao đầy đủ" },
  { icon: "🏆", title: "Thành tích xuất sắc", desc: "Học sinh đạt nhiều giải thưởng trong các kỳ thi" },
  { icon: "💙", title: "Môi trường thân thiện", desc: "Không gian học an toàn, khuyến khích sáng tạo" },
  { icon: "🌏", title: "Định hướng tương lai", desc: "Trang bị kỹ năng cần thiết cho thế kỷ 21" },
];

const stats = [
  { n: "1,200+", label: "Học sinh" },
  { n: "80+", label: "Giáo viên" },
  { n: "25+", label: "Năm kinh nghiệm" },
  { n: "95%", label: "Tỷ lệ đỗ THPT" },
];

const news = [
  {
    date: "15/09/2024",
    title: "Khai giảng năm học mới 2024-2025",
    desc: "Lễ khai giảng diễn ra trang trọng với sự tham gia của toàn thể thầy cô và học sinh.",
    img: "/images/news1.jpg",
  },
  {
    date: "10/09/2024",
    title: "Học sinh đạt giải Nhất Olympic Toán học",
    desc: "Em Nguyễn Văn A lớp 9A xuất sắc đạt giải Nhất kỳ thi cấp thành phố.",
    img: "/images/news2.jpg",
  },
  {
    date: "05/09/2024",
    title: "Chương trình giao lưu văn hóa quốc tế",
    desc: "Trường tổ chức chương trình giao lưu với học sinh quốc tế.",
    img: "/images/news3.jpg",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* hero */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/banner-school.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Trường THCS Thịnh Trường</h1>
          <p className="text-lg md:text-xl mb-6">Môi trường giáo dục chất lượng cao - Phát triển toàn diện nhân cách và năng lực</p>
          <div className="flex justify-center gap-4">
            <Link to="/gioi-thieu" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-semibold">Tìm hiểu về trường</Link>
            <Link to="/lien-he" className="border border-white px-6 py-3 rounded text-white hover:bg-white hover:text-blue-600 transition">Liên hệ tư vấn</Link>
          </div>
        </div>
      </section>

      {/* why choose */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-2">Tại sao chọn THCS Thịnh Trường?</h2>
          <p className="text-gray-600 mb-10">Chúng tôi cam kết mang đến môi trường giáo dục tốt nhất để phát triển toàn diện cho học sinh</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-left">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-xl">{r.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Thành tích nổi bật</h3>
          <p className="text-blue-100 mb-8">Những con số ấn tượng về chất lượng giáo dục của trường</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="py-6">
                <div className="text-3xl md:text-4xl font-bold">{s.n}</div>
                <div className="text-blue-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* news */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-2">Tin tức & Thông báo</h3>
          <p className="text-gray-600 mb-8">Cập nhật những thông tin mới nhất về hoạt động của trường</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((n, i) => (
              <article key={i} className="bg-white rounded-2xl shadow overflow-hidden text-left">
                <img src={n.img} alt={n.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <div className="text-sm text-blue-600 mb-2">{n.date}</div>
                  <h4 className="font-semibold text-lg mb-2">{n.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{n.desc}</p>
                  <a href="#" className="text-blue-600 font-medium">Đọc thêm →</a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/tin-tuc" className="inline-block bg-blue-600 text-white px-6 py-3 rounded">Xem tất cả tin tức</Link>
          </div>
        </div>
      </section>
    </div>
  );
}