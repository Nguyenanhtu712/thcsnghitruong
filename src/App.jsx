import React from 'react'

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">NT</div>
            <h1 className="text-lg font-bold text-blue-700">THCS Nghi Trường</h1>
          </div>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#" className="text-blue-600">Trang chủ</a>
            <a href="#">Giới thiệu</a>
            <a href="#">Hoạt động</a>
            <a href="#">Tin tức</a>
            <a href="#">Thành tích</a>
            <a href="#">Liên hệ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-20 bg-[url('/src/assets/hero.jpg')] bg-cover bg-center text-center text-white">
        <div className="bg-black/40 py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-4">Trường THCS Nghi Trường</h2>
            <p className="text-lg mb-6">Môi trường giáo dục chất lượng cao – Phát triển toàn diện nhân cách và năng lực</p>
            <div className="space-x-4">
              <button className="px-6 py-3 bg-blue-600 rounded-md font-medium">Tìm hiểu về trường</button>
              <button className="px-6 py-3 bg-white text-gray-800 rounded-md font-medium">Liên hệ tư vấn</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h3 className="text-2xl font-semibold mb-4">Tại sao chọn THCS Nghi Trường?</h3>
          <p className="text-gray-600 mb-10">Cam kết mang đến môi trường giáo dục tốt nhất để phát triển toàn diện cho học sinh</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Chương trình học tiên tiến", desc: "Áp dụng phương pháp giảng dạy hiện đại, tích hợp công nghệ." },
              { title: "Đội ngũ giáo viên chất lượng", desc: "Giáo viên có trình độ cao, tâm huyết và giàu kinh nghiệm." },
              { title: "Cơ sở vật chất hiện đại", desc: "Phòng học được trang bị thiết bị học tập và công nghệ mới nhất." },
              { title: "Thành tích xuất sắc", desc: "Học sinh đạt nhiều giải thưởng trong các kỳ thi học sinh giỏi." },
              { title: "Môi trường thân thiện", desc: "Không gian học tập an toàn, thân thiện và sáng tạo." },
              { title: "Định hướng tương lai", desc: "Chuẩn bị kỹ năng cần thiết cho thế kỷ 21." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h4 className="font-semibold text-lg mb-2 text-blue-700">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h3 className="text-2xl font-semibold mb-8">Thành tích nổi bật</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">
          {[
            { number: "1,200+", label: "Học sinh" },
            { number: "80+", label: "Giáo viên" },
            { number: "25+", label: "Năm kinh nghiệm" },
            { number: "95%", label: "Tỷ lệ đỗ THPT" }
          ].map((item, i) => (
            <div key={i}>
              <p className="text-3xl font-bold">{item.number}</p>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="py-20 bg-gray-50 text-center">
        <h3 className="text-2xl font-semibold mb-6">Tin tức & Thông báo</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            { title: "Khai giảng năm học mới 2024-2025", date: "15/09/2024", desc: "Lễ khai giảng diễn ra trong không khí trang trọng, đầy hứng khởi." },
            { title: "Học sinh đạt giải Nhất Olympic Toán học", date: "10/09/2024", desc: "Em Nguyễn Văn A lớp 9A xuất sắc đạt giải Nhất kỳ thi cấp thành phố." },
            { title: "Giao lưu văn hóa quốc tế", date: "05/09/2024", desc: "Trường tổ chức chương trình giao lưu giúp mở rộng tầm nhìn cho học sinh." }
          ].map((news, i) => (
            <div key={i} className="overflow-hidden bg-white rounded-lg shadow hover:shadow-lg transition text-left">
              <div className="p-6">
                <p className="text-sm text-gray-500">{news.date}</p>
                <h4 className="font-semibold text-lg mt-2 mb-2 text-blue-700">{news.title}</h4>
                <p className="text-gray-600 text-sm">{news.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-md">Xem tất cả tin tức</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          <div>
            <h4 className="text-white font-semibold mb-2">THCS Nghi Trường</h4>
            <p>Trường THCS Nghi Trường cam kết mang đến môi trường giáo dục chất lượng cao, phát triển toàn diện nhân cách và năng lực cho học sinh.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Liên kết nhanh</h4>
            <ul className="space-y-1 text-sm">
              <li>Giới thiệu</li>
              <li>Hoạt động</li>
              <li>Tin tức</li>
              <li>Thành tích</li>
              <li>Liên hệ</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Thông tin liên hệ</h4>
            <p>Địa chỉ: Xã Nghi Trường, Huyện Nghi Lộc, Tỉnh Nghệ An</p>
            <p>Điện thoại: (0238) 1234 567</p>
            <p>Email: info@thcsnghitruong.edu.vn</p>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">© 2025 Trường THCS Nghi Trường. Tất cả quyền được bảo lưu.</p>
      </footer>
    </div>
  )
}
