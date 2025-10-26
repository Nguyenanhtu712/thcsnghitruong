export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">TT</div>
            <div>
              <div className="text-white font-semibold">THCS Thịnh Trường</div>
              <div className="text-sm text-gray-400">Trường học chất lượng cao</div>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Trường THCS Thịnh Trường cam kết mang đến môi trường giáo dục chất lượng cao,
            phát triển toàn diện nhân cách và năng lực cho học sinh.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Liên kết nhanh</h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li>Giới thiệu</li>
            <li>Hoạt động</li>
            <li>Tin tức</li>
            <li>Thành tích</li>
            <li>Liên hệ</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Thông tin liên hệ</h4>
          <p className="text-sm text-gray-400">Địa chỉ: Xã Đông Lộc, Nghệ An</p>
          <p className="text-sm text-gray-400">Điện thoại: (0238) 1234 567</p>
          <p className="text-sm text-gray-400">Email: info@thcsthinhtruong.edu.vn</p>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Trường THCS Thịnh Trường. Tất cả quyền được bảo lưu.
      </div>
    </footer>
  );
}