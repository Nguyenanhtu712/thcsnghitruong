import React from "react";
import { Award, Target, Heart, User, Users, BookOpen, Briefcase  } from "lucide-react";

const About = () => {
    const organization = {
        banGiamHieu: {
            title: "Ban Giám Hiệu",
            icon: <User className="text-blue-600 w-8 h-8" />,
            members: [
                { name: "Nguyễn Văn A", role: "Hiệu trưởng" },
                { name: "Trần Thị B", role: "Phó Hiệu trưởng" },
                { name: "Lê Văn C", role: "Phó Hiệu trưởng" },
            ],
        },
        toKhoaHocXaHoi: {
            title: "Tổ Khoa học Xã hội",
            icon: <BookOpen className="text-green-600 w-8 h-8" />,
            leader: { name: "Phạm Thị D", role: "Tổ trưởng" },
            deputy: { name: "Nguyễn Văn E", role: "Tổ phó" },
        },
        toKhoaHocTuNhien: {
            title: "Tổ Khoa học Tự nhiên",
            icon: <Users className="text-orange-600 w-8 h-8" />,
            leader: { name: "Võ Thị F", role: "Tổ trưởng" },
            deputy: { name: "Đào Văn G", role: "Tổ phó" },
        },
        toVanPhong: {
            title: "Tổ Văn phòng",
            icon: <Briefcase className="text-purple-600 w-8 h-8" />,
            leader: { name: "Hoàng Thị H", role: "Tổ trưởng" },
            deputy: { name: "Phan Văn I", role: "Tổ phó" },
        },
    };

    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Banner */}
            <section className="bg-gray-600 text-white text-center py-16">
                <h1 className="text-4xl font-extrabold mb-2">Giới thiệu về trường</h1>
                <p className="text-lg">
                    Trường THCS Thịnh Trường - Nơi ươm mầm tri thức và phát triển nhân cách
                </p>
            </section>

            {/* Lịch sử hình thành */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Lịch sử hình thành
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 space-y-4 text-justify">
                        <p>
                            Trường THCS Thịnh Trường được thành lập vào năm 1999 với sứ mệnh
                            mang đến chất lượng giáo dục tốt nhất cho học sinh trung học cơ sở.
                            Qua 25 năm xây dựng và phát triển, trường đã trở thành một trong
                            những ngôi trường uy tín hàng đầu trong khu vực.
                        </p>
                        <p>
                            Với đội ngũ giáo viên tâm huyết, cơ sở vật chất hiện đại và phương
                            pháp giảng dạy tiên tiến, trường đã đào tạo hàng nghìn học sinh xuất
                            sắc, nhiều em đã đạt được những thành tích cao trong học tập và
                            cuộc sống.
                        </p>

                        <div className="flex items-center space-x-3 bg-blue-50 rounded-xl p-4 w-fit">
                            <Award className="text-blue-600" />
                            <div>
                                <p className="font-semibold">Chứng nhận chất lượng</p>
                                <p className="text-sm text-gray-600">
                                    Đạt chuẩn quốc gia về chất lượng giáo dục
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        src="/images/about-history.jpg"
                        alt="Lịch sử trường"
                        className="md:w-1/2 rounded-2xl shadow-lg"
                    />
                </div>
            </section>

            {/* Tầm nhìn & Sứ mệnh */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center mb-8">
                        Tầm nhìn & Sứ mệnh
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center mb-3">
                                <Target className="text-blue-600 mr-3" />
                                <h3 className="font-semibold text-lg">Tầm nhìn</h3>
                            </div>
                            <p className="text-gray-700">
                                Trở thành trường trung học cơ sở hàng đầu trong khu vực, được công
                                nhận về chất lượng giáo dục toàn diện, môi trường học tập hiện đại
                                và đội ngũ giáo viên chuyên nghiệp. Đào tạo thế hệ học sinh có tri
                                thức vững vàng, kỹ năng sống tốt và nhân cách cao đẹp.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center mb-3">
                                <Heart className="text-green-600 mr-3" />
                                <h3 className="font-semibold text-lg">Sứ mệnh</h3>
                            </div>
                            <p className="text-gray-700">
                                Cung cấp nền giáo dục chất lượng cao, phát triển toàn diện về tri
                                thức, kỹ năng và nhân cách cho học sinh. Tạo môi trường học tập an
                                toàn, thân thiện và sáng tạo, giúp mỗi học sinh phát huy tối đa
                                tiềm năng và chuẩn bị tốt cho tương lai.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ban lãnh đạo */}
            <section>
                <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">
                    CƠ CẤU TỔ CHỨC NHÀ TRƯỜNG
                </h2>

                {/* Ban giám hiệu */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-12">
                    {organization.banGiamHieu.members.map((m, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition"
                        >
                            <div className="flex flex-col items-center text-center">
                                {organization.banGiamHieu.icon}
                                <h3 className="text-lg font-semibold mt-3">{m.name}</h3>
                                <p className="text-gray-600">{m.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Các tổ */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {[organization.toKhoaHocXaHoi, organization.toKhoaHocTuNhien, organization.toVanPhong].map(
                        (to, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition"
                            >
                                <div className="flex flex-col items-center text-center">
                                    {to.icon}
                                    <h3 className="text-xl font-semibold mt-3 text-blue-700">{to.title}</h3>
                                    <ul className="mt-4 text-gray-700">
                                        <li>
                                            <span className="font-semibold">{to.leader.role}</span>: {to.leader.name}
                                        </li>
                                        <li>
                                            <span className="font-semibold">{to.deputy.role}</span>: {to.deputy.name}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* Cơ sở vật chất */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center mb-4">Cơ sở vật chất</h2>
                    <p className="text-center text-gray-600 mb-10">
                        Môi trường học tập hiện đại và đầy đủ tiện nghi
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            {
                                img: "/images/classroom.jpg",
                                title: "Phòng học hiện đại",
                                desc: "30 phòng học được trang bị bảng thông minh, máy chiếu và hệ thống âm thanh",
                            },
                            {
                                img: "/images/lab.jpg",
                                title: "Phòng thí nghiệm",
                                desc: "Phòng thí nghiệm Vật lý, Hóa học, Sinh học với thiết bị hiện đại",
                            },
                            {
                                img: "/images/library.jpg",
                                title: "Thư viện",
                                desc: "Thư viện với hơn 10,000 đầu sách và khu vực học tập yên tĩnh",
                            },
                            {
                                img: "/images/computer-room.jpg",
                                title: "Phòng máy tính",
                                desc: "2 phòng máy tính với 60 máy tính hiện đại, kết nối internet tốc độ cao",
                            },
                            {
                                img: "/images/sports.jpg",
                                title: "Sân thể thao",
                                desc: "Sân bóng đá, sân bóng rổ và khu vực tập thể dục ngoài trời",
                            },
                            {
                                img: "/images/canteen.jpg",
                                title: "Căng tin",
                                desc: "Căng tin sạch sẽ, phục vụ các món ăn dinh dưỡng và an toàn",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;