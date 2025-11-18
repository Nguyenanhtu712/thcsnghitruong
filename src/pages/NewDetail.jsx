import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";

export default function NewsDetail() {
    const { id } = useParams();

    // 👉 Giả lập dữ liệu tin tức (sau này bạn có thể load từ API hoặc JSON)
    const articles = [
      {
  id: 4,
  title: "Văn nghệ chào mừng ngày nhà giáo Việt Nam 20/11 của Trường THCS Thịnh Trường",
  date: "17/11/2025",
  image:
    "/images/vannghe/vannghe1.jpg",
  content: `
<div>

  <p style="font-size:1.15rem; font-weight:500; margin-bottom:1.25rem; text-align:justify;">
    Hòa chung không khí thi đua sôi nổi lập thành tích chào mừng 
    <strong>43 năm Ngày Nhà giáo Việt Nam (20/11/1982 - 20/11/2025)</strong>, 
    chiều thứ Hai, ngày <strong>17/11/2025</strong>, Trường THCS Thịnh Trường đã tưng bừng tổ chức 
    <strong>Hội diễn văn nghệ quần chúng cấp trường</strong>.
  </p>

  <p style="margin-bottom:1.25rem; text-align:justify;">
    Chương trình được tổ chức trang trọng tại 
    <strong>Hội trường Công an xã Đông Lộc</strong>, thu hút sự tham gia của đông đảo cán bộ, giáo viên, nhân viên và toàn thể học sinh nhà trường.
  </p>

  <p style="margin-bottom:1.25rem; text-align:justify;">
    Hội diễn năm nay quy tụ <strong>20 tiết mục dự thi</strong> đến từ 20 tập thể lớp. 
    Với sự chuẩn bị chu đáo, luyện tập nghiêm túc và dàn dựng công phu, các "diễn viên không chuyên" của trường THCS Thịnh Trường đã mang đến một 
    <strong>bữa tiệc nghệ thuật đa sắc màu</strong>.
  </p>

  <p style="margin-bottom:1.25rem;">Các tiết mục tập trung ca ngợi:</p>
  <ul style="margin-left:1.2rem; margin-bottom:1.2rem;">
    <li style="margin-bottom:0.5rem;">Tình yêu quê hương đất nước</li>
    <li style="margin-bottom:0.5rem;">Công ơn thầy cô giáo</li>
    <li style="margin-bottom:0.5rem;">Tình bạn, mái trường</li>
    <li style="margin-bottom:0.5rem;">Và nhiều chủ đề ý nghĩa khác</li>
  </ul>

  <p style="margin-bottom:1.25rem; text-align:justify;">
    Nhiều tiết mục được đầu tư kỹ lưỡng về trang phục, đạo cụ và đặc biệt là thể hiện được tài năng, sự sáng tạo của các em học sinh, để lại ấn tượng sâu đậm trong lòng khán giả.
  </p>

  <hr style="border:0; border-top:1px solid #e5e7eb; margin:2rem 0;">

  <h2 style="font-size:1.7rem; font-weight:700; margin:2rem 0 1rem; color:#222;">
    🎤 Kết quả chung cuộc
  </h2>

  <h3 style="font-size:1.35rem; font-weight:700; margin:1.5rem 0 1rem; color:#222;">🥇 03 Giải A</h3>
  <ul style="margin-left:1.2rem; margin-bottom:1.2rem;">
    <li>Lớp <strong>9D</strong> – Tác phẩm <em>"Nhà giáo cách mạng"</em>
        <img
          src="/images/vannghe/vannghe2.jpg"
          alt="Văn nghệ tại trường"
          className="rounded-2xl shadow-md mx-auto my-8"
          style="
            display:block;
            margin:2rem auto;
            max-width:70%;
            border-radius:16px;
            box-shadow:0 4px 16px rgba(0,0,0,0.15);
          "
        />
    </li>
    <li>Lớp <strong>9A</strong> – Tác phẩm <em>"Em là cô giáo vùng cao"</em>
        <img
          src="/images/vannghe/vannghe3.jpg"
          alt="Văn nghệ tại trường"
          className="rounded-2xl shadow-md mx-auto my-8"
          style="
            display:block;
            margin:2rem auto;
            max-width:70%;
            border-radius:16px;
            box-shadow:0 4px 16px rgba(0,0,0,0.15);
          "
        />
    </li>
    <li>Lớp <strong>7A</strong> – Hoạt cảnh <em>"Nhà giáo cách mạng"</em>
        <img
          src="/images/vannghe/vannghe4.jpg"
          alt="Văn nghệ tại trường"
          className="rounded-2xl shadow-md mx-auto my-8"
          style="
            display:block;
            margin:2rem auto;
            max-width:70%;
            border-radius:16px;
            box-shadow:0 4px 16px rgba(0,0,0,0.15);
          "
        />
    </li>
  </ul>

  <h3 style="font-size:1.35rem; font-weight:700; margin:1.5rem 0 1rem; color:#222;">🥈 03 Giải B</h3>
  <ul style="margin-left:1.2rem; margin-bottom:1.2rem;">
    <li>Lớp <strong>8A</strong>
        <img
          src="/images/vannghe/vannghe5.jpg"
          alt="Văn nghệ tại trường"
          className="rounded-2xl shadow-md mx-auto my-8"
          style="
            display:block;
            margin:2rem auto;
            max-width:70%;
            border-radius:16px;
            box-shadow:0 4px 16px rgba(0,0,0,0.15);
          "
        />
    </li>
    <li>Lớp <strong>6A</strong>
        <img
          src="/images/vannghe/vannghe6.jpg"
          alt="Văn nghệ tại trường"
          className="rounded-2xl shadow-md mx-auto my-8"
          style="
            display:block;
            margin:2rem auto;
            max-width:70%;
            border-radius:16px;
            box-shadow:0 4px 16px rgba(0,0,0,0.15);
          "
        />
    </li>
    <li>Lớp <strong>9B</strong>
        <img
          src="/images/vannghe/vannghe7.jpg"
          alt="Văn nghệ tại trường"
          className="rounded-2xl shadow-md mx-auto my-8"
          style="
            display:block;
            margin:2rem auto;
            max-width:70%;
            border-radius:16px;
            box-shadow:0 4px 16px rgba(0,0,0,0.15);
          "
        />
    </li>
  </ul>

  <h3 style="font-size:1.35rem; font-weight:700; margin:1.5rem 0 1rem; color:#222;">🥉 04 Giải C</h3>
  <ul style="margin-left:1.2rem; margin-bottom:1.2rem;">
    <li>Lớp <strong>8D</strong>
        <img
          src="/images/vannghe/vannghe8.jpg"
          alt="Văn nghệ tại trường"
          className="rounded-2xl shadow-md mx-auto my-8"
          style="
            display:block;
            margin:2rem auto;
            max-width:70%;
            border-radius:16px;
            box-shadow:0 4px 16px rgba(0,0,0,0.15);
          "
        />
    </li>
    <li>Lớp <strong>6C</strong>
        <img
          src="/images/vannghe/vannghe9.jpg"
          alt="Văn nghệ tại trường"
          className="rounded-2xl shadow-md mx-auto my-8"
          style="
            display:block;
            margin:2rem auto;
            max-width:70%;
            border-radius:16px;
            box-shadow:0 4px 16px rgba(0,0,0,0.15);
          "
        />
    </li>
    <li>Lớp <strong>8B</strong>
        <img
          src="/images/vannghe/vannghe10.jpg"
          alt="Văn nghệ tại trường"
          className="rounded-2xl shadow-md mx-auto my-8"
          style="
            display:block;
            margin:2rem auto;
            max-width:70%;
            border-radius:16px;
            box-shadow:0 4px 16px rgba(0,0,0,0.15);
          "
        />
    </li>
    <li>Lớp <strong>8C</strong>
        <img
          src="/images/vannghe/vannghe11.jpg"
          alt="Văn nghệ tại trường"
          className="rounded-2xl shadow-md mx-auto my-8"
          style="
            display:block;
            margin:2rem auto;
            max-width:70%;
            border-radius:16px;
            box-shadow:0 4px 16px rgba(0,0,0,0.15);
          "
        />
    </li>
  </ul>


  <hr style="border:0; border-top:1px solid #e5e7eb; margin:2rem 0;">

  <div style="background:#f8fafc; border-left:4px solid #3b82f6; padding:1rem 1.2rem; border-radius:6px; font-size:1.05rem;">
    Hội diễn văn nghệ Trường THCS Thịnh Trường đã khép lại trong niềm hân hoan, phấn khởi. 
    Đây không chỉ là <strong>sân chơi nghệ thuật bổ ích</strong>, mà còn là hoạt động ý nghĩa thể hiện 
    <strong>lòng tri ân sâu sắc của các thế hệ học sinh gửi đến các thầy cô giáo nhân ngày 20/11</strong>, 
    góp phần thắt chặt tình đoàn kết thầy trò và xây dựng môi trường học đường thân thiện, tích cực.
  </div>

</div>`,
},
        {
            id: 1,
            title:
                "Công an xã Đông Lộc tuyên truyền Pháp luật, Kỹ năng sống cho 828 học sinh Trường THCS Thịnh Trường",
            date: "10/11/2025",
            image:
                "/images/news1.jpg",
            content: `

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

  <h3 class="text-2xl font-semibold mt-8 mb-3 text-blue-700">Trong buổi lễ, Công an xã đã truyền đạt các nội dung thiết thực, nhằm nâng cao nhận thức và kỹ năng tự bảo vệ cho học sinh:</h3>
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
    <p class="mb-2"><strong>Thầy Phó Hiệu Trưởng Nguyễn Minh Bằng phát biểu</strong></p>
    
  </div>
    <img
          src="/images/news1_4.jpg"
          alt="Công an trao mũ bảo hiểm"
          className="rounded-2xl shadow-md mx-auto my-8"
        />

  <div class="border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 mb-6 rounded-md">
    <p class="mb-2"><strong>🎁 Đại diện Doanh nghiệp xe đạp trợ lực điện Nghệ An</strong> (anh <strong>Nguyễn Anh Dũng</strong> và <strong>Lê Minh Tuấn</strong>) đã trao tặng <strong>10 mũ bảo hiểm</strong> cho học sinh trả lời đúng các câu hỏi.</p>
    <p><strong>👮‍♂️ Công an xã Đông Lộc</strong> cũng đã trao thêm <strong>10 mũ bảo hiểm</strong> cho các em học sinh có hoàn cảnh khó khăn nhưng đã nỗ lực vượt khó vươn lên trong học tập, thể hiện sự quan tâm, động viên kịp thời của lực lượng công an địa phương..</p>
  </div>


  <p class="text-gray-700 font-normal">
    Buổi tuyên truyền đã kết thúc tốt đẹp, là hoạt động thiết thực nhằm giáo dục, tạo nền tảng vững chắc cho học sinh THCS Thịnh Trường về ý thức chấp hành pháp luật và các kỹ năng sống cơ bản, góp phần đảm bảo an ninh, an toàn tại địa phương và trường học.
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