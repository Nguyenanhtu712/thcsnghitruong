export default function News() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Tin tức</h2>
      <p className="text-gray-700 mb-4">Tất cả bài viết sẽ hiển thị ở đây (có thể load từ API hoặc JSON)</p>

      {/* ví dụ các bài */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <div className="p-5">
            <h3 className="font-semibold mb-2">Khai giảng năm học mới 2025-2026</h3>
            <p className="text-sm text-gray-600">Mô tả ngắn...</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-5">Bài 2</div>
        <div className="bg-white rounded-2xl shadow p-5">Bài 3</div>
      </div>
    </div>
  );
}