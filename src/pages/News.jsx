import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

export default function News() {
  const articles = [
    {
      id: 1,
      title:
        "Công an xã Đông Lộc tuyên truyền Pháp luật, Kỹ năng sống cho 828 học sinh Trường THCS Thịnh Trường",
      desc: "Buổi tuyên truyền toàn diện về An toàn giao thông, Phòng chống tệ nạn xã hội và Kỹ năng phòng cháy chữa cháy, thu hút 828 học sinh tham gia.",
      date: "10/11/2025",
      image:
        "/images/news1.jpg",
    },
    {
      id: 2,
      title: "Khai giảng năm học mới 2025-2026",
      desc: "Không khí hân hoan chào đón năm học mới tại Trường THCS Thịnh Trường với nhiều hoạt động ý nghĩa.",
      date: "05/09/2025",
      image:
        "/images/news2.jpg",
    },
    {
      id: 3,
      title: "Hội thi giáo viên dạy giỏi cấp trường năm 2025",
      desc: "Hội thi nhằm tôn vinh, lan tỏa tinh thần sáng tạo và đổi mới phương pháp giảng dạy trong đội ngũ giáo viên.",
      date: "20/10/2025",
      image:
        "/images/news3.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Tin tức nổi bật
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cập nhật những hoạt động, sự kiện mới nhất tại Trường THCS Thịnh
            Trường.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {articles.map((item) => (
            <Link
              key={item.id}
              to={`/tin-tuc/${item.id}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar size={14} className="mr-1" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-700 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  {item.desc}
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:underline">
                  Đọc thêm →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}