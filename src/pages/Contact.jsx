export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">Liên hệ</h2>
      <p className="text-gray-700 mb-6 text-center">Vui lòng điền thông tin để liên hệ với nhà trường.</p>

      <form className="bg-white rounded-lg shadow p-6 grid gap-4">
        <input className="border rounded px-3 py-2" placeholder="Họ và tên" />
        <input className="border rounded px-3 py-2" placeholder="Email" />
        <input className="border rounded px-3 py-2" placeholder="Số điện thoại" />
        <textarea className="border rounded px-3 py-2" rows="4" placeholder="Nội dung liên hệ"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Gửi liên hệ</button>
      </form>
    </div>
  );
}