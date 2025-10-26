import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
        {/* --- Cột 1: Giới thiệu --- */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">
              TT
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                THCS Thịnh Trường
              </h3>
              <p className="text-sm text-gray-400">Trường học chất lượng cao</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mt-2">
            Trường THCS Thịnh Trường cam kết mang đến môi trường giáo dục chất
            lượng cao, phát triển toàn diện nhân cách và năng lực cho học sinh.
          </p>
        </div>

        {/* --- Cột 2: Liên kết nhanh --- */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Liên kết nhanh
          </h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Trang chủ</Link></li>
            <li><Link to="/gioi-thieu" className="hover:text-white transition">Giới thiệu</Link></li>
            <li><Link to="/hoat-dong" className="hover:text-white transition">Hoạt động</Link></li>
            <li><Link to="/tin-tuc" className="hover:text-white transition">Tin tức</Link></li>
            <li><Link to="/thanh-tich" className="hover:text-white transition">Thành tích</Link></li>
            <li><Link to="/lien-he" className="hover:text-white transition">Liên hệ</Link></li>
          </ul>
        </div>

        {/* --- Cột 3: Thông tin liên hệ --- */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Thông tin liên hệ
          </h4>
          <ul className="text-sm space-y-2">
            <li>📍 Địa chỉ: Xã Đông Lộc, Nghệ An</li>
            <li>📞 Điện thoại: (0238) 1234 567</li>
            <li>✉️ Email: info@thcsthinhtruong.edu.vn</li>
          </ul>
        </div>
      </div>

      {/* --- Viền + dòng bản quyền --- */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Trường THCS Thịnh Trường. Tất cả quyền được bảo lưu.
      </div>
    </footer>
  );
}