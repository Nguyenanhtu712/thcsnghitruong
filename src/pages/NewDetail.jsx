import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";

export default function NewsDetail() {
    const { id } = useParams();

    // 👉 Giả lập dữ liệu tin tức (sau này bạn có thể load từ API hoặc JSON)
    const articles = [
        {
            id: 1,
            title:
                "Công an xã Đông Lộc tuyên truyền Pháp luật, Kỹ năng sống cho 828 học sinh Trường THCS Thịnh Trường",
            date: "10/11/2025",
            image:
                "/images/news1.jpg",
            content: `
  <p class="text-lg leading-relaxed mb-4">
    <strong>Công an xã Đông Lộc</strong> tuyên truyền Pháp luật, Kỹ năng sống cho <strong>828 học sinh Trường THCS Thịnh Trường</strong>.
  </p>

  <p class="mb-4">
    Sáng nay, thứ Hai, ngày <strong>10/11/2025</strong>, tại Trường THCS Thịnh Trường (xã Đông Lộc), Công an xã Đông Lộc đã phối hợp tổ chức buổi tuyên truyền chuyên đề toàn diện về 
    <strong>An toàn giao thông</strong>, <strong>Phòng chống tệ nạn xã hội</strong> và 
    <strong>Kỹ năng Phòng cháy chữa cháy</strong>, thu hút sự tham gia của <strong>828 em học sinh</strong> cùng toàn thể cán bộ, giáo viên nhà trường.
  </p>
  <img
    src="/images/news1_3.jpg"
    alt="Buổi tuyên truyền tại trường"
    className="rounded-2xl shadow-md mx-auto my-8"
/>

  <p class="mb-4">
    Tham dự buổi lễ có đồng chí <strong>Đại úy Võ Cao Hoàng</strong> – Phó trưởng Công an xã Đông Lộc, cùng các đồng chí trong đoàn tuyên truyền. 
    Về phía nhà trường, có cô giáo <strong>Nguyễn Thị Hà</strong> – Bí thư chi bộ, Hiệu trưởng nhà trường, các thầy cô trong Ban Giám hiệu và toàn thể giáo viên.
  </p>

  <h3 class="text-2xl font-semibold mt-8 mb-3 text-blue-700">Nội dung tuyên truyền</h3>
  <ul class="list-decimal list-inside space-y-2 mb-6 text-gray-800">
    <li><strong>An toàn giao thông:</strong> Hướng dẫn các quy tắc cần thiết khi tham gia giao thông, đặc biệt là văn hóa đội mũ bảo hiểm và tuân thủ tín hiệu khi đi xe đạp, xe đạp điện.</li>
    <li><strong>Tác hại và cách phòng chống ma túy:</strong> Cảnh báo về các loại ma túy mới, ma túy trá hình, nhấn mạnh tác hại khủng khiếp và cách phòng tránh hiệu quả.</li>
    <li><strong>Tác hại của thuốc lá điện tử:</strong> Phân tích nguy cơ sức khỏe tiềm ẩn, định hướng học sinh tránh xa các chất gây nghiện.</li>
    <li><strong>Phòng chống bạo lực học đường:</strong> Trang bị kỹ năng nhận diện, ứng phó và tìm kiếm sự hỗ trợ khi đối mặt với bạo lực, góp phần xây dựng môi trường học đường thân thiện.</li>
    <li><strong>Kỹ năng Phòng cháy chữa cháy:</strong> Cung cấp kiến thức cơ bản về phòng ngừa cháy nổ và hướng dẫn thao tác xử lý, thoát hiểm an toàn khi có sự cố.</li>
  </ul>

  <p class="mb-4">
    Buổi tuyên truyền trở nên sôi nổi hơn với phần <strong>giao lưu hỏi - đáp</strong> về kiến thức pháp luật và an toàn giao thông, giúp học sinh củng cố kiến thức qua hình thức tương tác trực tiếp.
  </p>
  <img
          src="/images/news1_2.jpg"
          alt="Buổi tuyên truyền pháp luật"
          className="rounded-2xl shadow-md mx-auto my-8"
        />
<div class="border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 mb-6 rounded-md">
    <p class="mb-2"><strong>Thầy Hiệu phó Nguyễn Minh Bằng phát biểu</strong></p>
    
  </div>
    <img
          src="/images/news1_1.jpg"
          alt="Công an trao mũ bảo hiểm"
          className="rounded-2xl shadow-md mx-auto my-8"
        />

  <div class="border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 mb-6 rounded-md">
    <p class="mb-2"><strong>🎁 Đại diện Doanh nghiệp xe đạp trợ lực điện Nghệ An</strong> (anh <strong>Nguyễn Anh Dũng</strong> và <strong>Lê Minh Tuấn</strong>) đã trao tặng <strong>10 mũ bảo hiểm</strong> cho học sinh trả lời đúng các câu hỏi.</p>
    <p><strong>👮‍♂️ Công an xã Đông Lộc</strong> cũng đã trao thêm <strong>10 mũ bảo hiểm</strong> cho học sinh có hoàn cảnh khó khăn nhưng đạt thành tích tốt, thể hiện tinh thần trách nhiệm và quan tâm của lực lượng công an địa phương.</p>
  </div>

  

  <p class="italic text-gray-700 mb-4">
    Buổi tuyên truyền đã giúp học sinh nâng cao ý thức pháp luật, kỹ năng sống và tinh thần phòng ngừa các tệ nạn xã hội, góp phần xây dựng môi trường học đường an toàn, thân thiện.
  </p>

  <p class="text-gray-800 font-medium">
    Buổi tuyên truyền đã <strong>kết thúc tốt đẹp</strong>, là hoạt động thiết thực nhằm giáo dục, tạo nền tảng vững chắc cho học sinh THCS Thịnh Trường về 
    <strong>ý thức chấp hành pháp luật</strong> và <strong>các kỹ năng sống cơ bản</strong>, góp phần đảm bảo <strong>an ninh, an toàn</strong> tại địa phương và trong nhà trường.
  </p>
`
        },
        {
            id: 2,
            title: "Khai giảng năm học mới 2025-2026",
            date: "05/09/2025",
            image:
                "https://images.unsplash.com/photo-1600195077075-7c815f540a3c?auto=format&fit=crop&w=1200&q=80",
            content: `
Buổi lễ khai giảng năm học mới tại Trường THCS Thịnh Trường diễn ra trong không khí vui tươi, rộn ràng. Thầy cô, phụ huynh và học sinh cùng nhau hướng tới một năm học với nhiều hy vọng và thành công mới.`,
        },
    ];

    const article = articles.find((a) => a.id === parseInt(id));

    if (!article) {
        return (
            <div className="max-w-4xl mx-auto py-16 text-center">
                <p className="text-gray-600">Không tìm thấy bài viết.</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 md:p-10">
                <Link
                    to="/tin-tuc"
                    className="inline-flex items-center text-blue-600 hover:underline mb-6"
                >
                    <ArrowLeft size={18} className="mr-1" /> Quay lại trang tin tức
                </Link>

                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    {article.title}
                </h1>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                    <Calendar size={14} className="mr-1" />
                    <span>{article.date}</span>
                </div>

                <img
                    src={article.image}
                    alt={article.title}
                    className="rounded-xl mb-6 w-full object-cover max-h-[400px]"
                />

                <div
                    className="prose prose-lg max-w-none text-gray-800"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </div>
        </div>
    );
}