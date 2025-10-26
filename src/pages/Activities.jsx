import SectionTitle from "../components/SectionTitle";
import ActivityCard from "../components/ActivityCard";

export default function Activities() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Banner */}
      <div className="bg-gray-700 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Hoạt động học sinh</h1>
        <p className="mt-3 text-lg">
          Đa dạng các hoạt động giáo dục toàn diện, phát triển kỹ năng và tài năng của học sinh
        </p>
      </div>

      {/* Các hoạt động chính */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <SectionTitle
          title="Các hoạt động chính"
          subtitle="Chương trình hoạt động phong phú giúp học sinh phát triển toàn diện"
        />

        <div className="flex flex-wrap justify-between">
          <ActivityCard
            title="Hoạt động học tập"
            items={[
              "Học tập theo nhóm",
              "Thí nghiệm khoa học",
              "Dự án nghiên cứu",
              "Thuyết trình học thuật",
            ]}
          />

          <ActivityCard
            title="Hoạt động thể thao"
            items={["Bóng đá nam, nữ", "Bóng rổ", "Cầu lông", "Điền kinh"]}
          />

          <ActivityCard
            title="Hoạt động văn nghệ"
            items={[
              "Hội diễn văn nghệ",
              "Câu lạc bộ âm nhạc",
              "Múa dân gian",
              "Kịch tiếng Anh",
            ]}
          />

          <ActivityCard
            title="Hoạt động xã hội"
            items={[
              "Tình nguyện cộng đồng",
              "Bảo vệ môi trường",
              "Thăm viện dưỡng lão",
              "Quyên góp từ thiện",
            ]}
          />
        </div>
      </div>

      {/* Câu lạc bộ */}
      <div className="bg-white py-16">
        <SectionTitle
          title="Câu lạc bộ học sinh"
          subtitle="Tham gia các câu lạc bộ để phát triển sở thích và tài năng"
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[
            { name: "CLB Toán học", desc: "Phát triển tư duy logic và kỹ năng giải toán", members: 45 },
            { name: "CLB Tiếng Anh", desc: "Nâng cao kỹ năng giao tiếp tiếng Anh", members: 60 },
            { name: "CLB Khoa học", desc: "Khám phá và thí nghiệm khoa học", members: 35 },
            { name: "CLB Tin học", desc: "Học lập trình và công nghệ thông tin", members: 50 },
            { name: "CLB Văn học", desc: "Yêu thích văn chương và sáng tác", members: 40 },
            { name: "CLB Nhiếp ảnh", desc: "Ghi lại những khoảnh khắc đẹp", members: 25 },
          ].map((club, i) => (
            <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{club.name}</h3>
              <p className="text-gray-600 mb-2">{club.desc}</p>
              <p className="text-blue-600 text-sm">{club.members} thành viên</p>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-white py-16">
        <SectionTitle
          title="Lịch hoạt động tuần"
          subtitle="Thời gian biểu các hoạt động ngoại khóa trong tuần"
        />

        {/* Khung chứa các ngày */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {/* Thứ 2 - Thứ 6 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-left">
              <h3 className="font-semibold text-gray-800 mb-3">
                Thứ 2 - Thứ 4 - Thứ 6
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 15:30 - 16:30: CLB Toán học</li>
                <li>• 15:30 - 16:30: CLB Tiếng Anh</li>
                <li>• 16:30 - 17:30: Bóng đá nam</li>
              </ul>
            </div>

            {/* Thứ 3 - Thứ 5 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-left">
              <h3 className="font-semibold text-gray-800 mb-3">
                Thứ 3 - Thứ 5
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 15:30 - 16:30: CLB Khoa học</li>
                <li>• 15:30 - 16:30: CLB Văn học</li>
                <li>• 16:30 - 17:30: Bóng rổ</li>
              </ul>
            </div>

            {/* Thứ 7 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-left">
              <h3 className="font-semibold text-gray-800 mb-3">Thứ 7</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 08:00 - 10:00: Hoạt động văn nghệ</li>
                <li>• 10:00 - 11:30: Thể thao tập thể</li>
                <li>• 14:00 - 16:00: Hoạt động xã hội</li>
              </ul>
            </div>
          </div>
      </div>


      
    </div>
  );
}