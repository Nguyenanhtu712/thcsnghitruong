import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Cột 1: Giới thiệu */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">THCS Thịnh Trường</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Trường THCS Thịnh Trường – nơi nuôi dưỡng tri thức, phát triển nhân cách và chắp cánh ước mơ cho thế hệ trẻ.
          </p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Liên kết nhanh</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white transition">Trang chủ</Link></li>
            <li><Link to="/gioi-thieu" className="hover:text-white transition">Giới thiệu</Link></li>
            <li><Link to="/hoat-dong" className="hover:text-white transition">Hoạt động</Link></li>
            <li><Link to="/tin-tuc" className="hover:text-white transition">Tin tức</Link></li>
            <li><Link to="/thanh-tich" className="hover:text-white transition">Thành tích</Link></li>
            <li><Link to="/lien-he" className="hover:text-white transition">Liên hệ</Link></li>
          </ul>
        </div>

        {/* Cột 3: Thông tin liên hệ */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Liên hệ</h4>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>📍 Địa chỉ: Xã Nghi Trường, Huyện Nghi Lộc, Nghệ An</li>
            <li>📞 Điện thoại: 0123 456 789</li>
            <li>✉️ Email: thcsthinhtruong@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Trường THCS Thịnh Trường. Thiết kế & phát triển bởi Tú Nguyễn Anh.
      </div>
    </footer>
  );
}