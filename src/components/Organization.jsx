import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { BookOpen, Users, Briefcase, X } from "lucide-react";

// 🧩 DỮ LIỆU CÁC TỔ
const organizations = [
  {
    title: "Tổ Khoa học Xã hội",
    icon: <BookOpen className="text-green-600 w-7 h-7" />,
    leader: { name: "La Thị Thanh Loan", role: "Tổ trưởng" },
    deputy: { name: "Đinh Thị An", role: "Tổ phó" },
    color: "green",
    members: [
      { name: "La Thị Thanh Loan", dob: "01/09/1977", degree: "ĐH Ngữ Văn", role: "Tổ trưởng", phone: "0913392029", image: "/images/KHXH/lathithanhloan.jpg" },
      { name: "Đinh Thị An", dob: "13/05/1971", degree: "ĐH Ngữ Văn", role: "Tổ phó", phone: "0987681425", image: "/images/KHXH/dinhthian.jpg" },
      { name: "Doãn Thị Hoa", dob: "13/01/1975", degree: "ĐH Ngữ Văn", role: "Giáo viên", phone: "0912884959", image: "/images/KHXH/doanthihoa.jpg" },
      { name: "Trần Thị Hương Loan", dob: "22/03/1977", degree: "ĐH Địa", role: "Giáo viên", phone: "0383424029", image: "/images/KHXH/tranthihuongloan.jpg" },
      { name: "Trần Thị Lý", dob: "17/08/1969", degree: "ĐH Địa", role: "Giáo viên", phone: "0918615595", image: "/images/KHXH/tranthily.jpg" },
      { name: "Bùi Thị Thanh Tình", dob: "11/06/1979", degree: "ĐH Ngữ Văn", role: "Giáo viên", phone: "0966908949", image: "/images/KHXH/buithithanhtinh.jpg" },
      { name: "Đinh Thị Yến", dob: "25/4/1980", degree: "ĐH Anh Văn", role: "Giáo viên", phone: "0966330888", image: "/images/KHXH/dinhthiyen.jpg" },
      { name: "Nguyễn Thị Thuận", dob: "28/03/1981", degree: "ĐH Anh Văn", role: "Giáo viên", phone: "0917687789", image: "/images/KHXH/nguyenthithuan.jpg" },
      { name: "Nguyễn Thị Hải", dob: "18/06/1985", degree: "ĐH Âm nhạc", role: "Giáo viên", phone: "0985807870", image: "/images/KHXH/nguyenthihai.jpg" },
      { name: "Thái Thị Bích Ngọc", dob: "06/05/1985", degree: "ĐH MT", role: "Giáo viên", phone: "0912978587", image: "/images/KHXH/thaithibichngoc.jpg" },
      { name: "Nguyễn Thị Kim Quế", dob: "01/10/1971", degree: "ĐH Ngữ Văn", role: "Giáo viên", phone: "0978361335", image: "/images/KHXH/nguyenthikimque.jpg" },
      { name: "Nguyễn Quyết Thắng", dob: "13/11/1979", degree: "ĐH Anh Văn", role: "Giáo viên", phone: "0974021979", image: "/images/KHXH/nguyenquyetthang.jpg" },
      { name: "Đặng Thị Oanh", dob: "03/07/1984", degree: "ĐH Ngữ Văn", role: "Giáo viên", phone: "0913608798", image: "/images/KHXH/dangthioanh.jpg" },
      { name: "Nguyễn Thế Trọng", dob: "11/01/1978", degree: "ĐH Ngữ Văn", role: "Giáo viên", phone: "0978991992", image: "/images/KHXH/nguyenthetrong.jpg" },
      { name: "Nguyễn Thị Hiền", dob: "19/12/1976", degree: "ĐH Ngữ Văn", role: "Giáo viên", phone: "0917112262", image: "/images/KHXH/nguyenthihien.jpg" },
      { name: "Nguyễn Thị Tuyết Nhung", dob: "02/12/1983", degree: "ĐH Anh Văn", role: "Giáo viên", phone: "0964780349", image: "/images/KHXH/nguyenthituyetnhung.jpg" },
    ],
  },
  {
    title: "Tổ Khoa học Tự nhiên",
    icon: <Users className="text-orange-600 w-7 h-7" />,
    leader: { name: "Nguyễn Thị Kim Thoa", role: "Tổ trưởng" },
    deputy: { name: "Lê Thị Phượng", role: "Tổ phó" },
    color: "orange",
    members: [
      { name: "Nguyễn Thị Kim Thoa", dob: "01/08/1979", degree: "ĐH Toán", role: "Tổ trưởng", phone: "0973749776", image: "/images/KHTN/nguyenthikimthoa.jpg" },
      { name: "Lê Thị Phượng", dob: "30/06/1974", degree: "ĐH Toán", role: "Tổ phó", phone: "0976467389", image: "/images/KHTN/lethiphuong.jpg" },
      { name: "Hoàng Thị Lý", dob: "20/01/1973", degree: "ĐH Hóa-Sinh", role: "Giáo viên", phone: "0977738556", image: "/images/KHTN/hoangthily.jpg" },
      { name: "Lương Thị Diệu Phương", dob: "21/01/1973", degree: "ĐH Toán", role: "Giáo viên", phone: "0914257195", image: "/images/KHTN/luongthidieuphuong.jpg" },
      { name: "Chế Thị Lài", dob: "05/04/1977", degree: "ĐH Toán", role: "Giáo viên", phone: "0368292733", image: "/images/KHTN/chethilai.jpg" },
      { name: "Nguyễn Thị Hồng Hải", dob: "08/11/1976", degree: "ĐH Toán", role: "Giáo viên", phone: "0948630664", image: "/images/KHTN/nguyenthihonghai.jpg" },
      { name: "Nguyễn Thị Thùy Dung", dob: "26/02/1979", degree: "ĐH Sinh", role: "Giáo viên", phone: "0949196979", image: "/images/KHTN/nguyenthithuydung.jpg" },
      { name: "Dương Thị Minh Hạnh", dob: "10/02/1976", degree: "ĐH Thể dục", role: "Giáo viên", phone: "0916310060", image: "/images/KHTN/duongthiminhhanh.jpg" },
      { name: "Nguyễn Thị Thu Hà", dob: "23/12/1978", degree: "ĐH Toán", role: "Giáo viên", phone: "0945799938", image: "/images/KHTN/nguyenthithuha.jpg" },
      { name: "Nguyễn Trung Thành", dob: "29/04/1979", degree: "ĐH Toán Tin", role: "Giáo viên", phone: "0944485468", image: "/images/KHTN/nguyentrungthanh.jpg" },
      { name: "Lê Thị Bích Hằng", dob: "08/09/1978", degree: "ĐH Hóa Sinh", role: "Giáo viên", phone: "0917803010", image: "/images/KHTN/lethibichhang.jpg" },
      { name: "Phạm Thị Hoài Thanh", dob: "06/02/1980", degree: "ĐH Toán", role: "Giáo viên", phone: "0988933515", image: "/images/KHTN/phamthihoaithanh.jpg" },
      { name: "Nguyễn Thị Minh Trang", dob: "23/06/1982", degree: "ĐH Toán", role: "Giáo viên", phone: "0942644775", image: "/images/KHTN/nguyenthiminhtrang.jpg" },
      { name: "Võ Thị Anh Thơ", dob: "13/07/1978", degree: "ĐH Hóa Sinh", role: "Giáo viên", phone: "0946009178", image: "/images/KHTN/vothianhtho.jpg" },
      { name: "Nguyễn Thị Ngọc Dung", dob: "01/07/1978", degree: "ĐH Thể dục", role: "Giáo viên", phone: "0338883687", image: "/images/KHTN/nguyenthingocdung.jpg" },
      { name: "Lương Thị Minh Huệ", dob: "19/11/1983", degree: "ĐH Sinh Hóa", role: "Giáo viên", phone: "0827276944", image: "/images/KHTN/luongthiminhhue.jpg" },
      { name: "Hà Thị Anh", dob: "01/07/1984", degree: "ĐH Toán", role: "Giáo viên", phone: "0943936222", image: "/images/KHTN/hathianh.jpg" }
    ],
  },
  {
    title: "Tổ Văn phòng",
    icon: <Briefcase className="text-purple-600 w-7 h-7" />,
    leader: { name: "Phạm Thị Tuyết Chinh", role: "Tổ trưởng" },
    deputy: { name: "Bùi Thị Quỳnh Hương", role: "Tổ phó" },
    color: "purple",
    members: [
      { name: "Phạm Thị Tuyết Chinh", dob: "08/10/1985", degree: "ĐH Kế toán", role: "Kế toán", phone: "0385145388", image: "/images/VP/phamthituyetchinh.jpg" },
      { name: "Bùi Thị Quỳnh Hương", dob: "26/03/1988", degree: "ĐH Thư viện TB", role: "Nhân viên", phone: "0977883435", image: "/images/VP/buithiquynhhuong.jpg" },
      { name: "Đinh Thị Bình", dob: "15/11/1983", degree: "ĐH TV-TB", role: "Nhân viên", phone: "0358676868", image: "/images/VP/dinhthibinh.jpg" },
      { name: "Phạm Thị Phương Thảo", dob: "08/05/1987", degree: "Cao đẳng thiết bị", role: "Nhân viên", phone: "0972302542", image: "/images/VP/phamthiphuongthao.jpg" }
    ],
  },
];

// 🧠 COMPONENT CHÍNH
export default function Organization() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openChildIndex, setOpenChildIndex] = useState(null);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      {organizations.map((org, index) => (
        <Dialog.Root
          key={index}
          open={openIndex === index}
          onOpenChange={(open) => setOpenIndex(open ? index : null)}
        >
          {/* Nút mở dialog */}
          <Dialog.Trigger asChild>
            <button
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="flex flex-col items-center text-center">
                {org.icon}
                <h3 className="text-xl font-semibold mt-3 text-blue-700">{org.title}</h3>
                <ul className="mt-4 text-gray-700">
                  <li>
                    <span className="font-semibold">{org.leader.role}</span>: {org.leader.name}
                  </li>
                  <li>
                    <span className="font-semibold">{org.deputy.role}</span>: {org.deputy.name}
                  </li>
                </ul>
              </div>
            </button>
          </Dialog.Trigger>

          {/* Nội dung Dialog */}
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
            <Dialog.Content
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-[95vw] max-w-6xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b pb-3 mb-4">
                <Dialog.Title className={`text-2xl font-semibold text-${org.color}-700`}>
                  {org.title}
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button className="rounded-full p-1 hover:bg-gray-100">
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </Dialog.Close>
              </div>

              {/* Bảng danh sách */}
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm md:text-base">
                  <thead className={`sticky top-0`}>
                    <tr>
                      <th className="p-3 text-left border">Họ và tên</th>
                      <th className="p-3 text-left border">Ngày sinh</th>
                      <th className="p-3 text-left border">Trình độ CM</th>
                      <th className="p-3 text-left border">Chức vụ</th>
                      <th className="p-3 text-left border">SĐT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {org.members.map((m, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50 transition">
                        <td className="p-3 border text-blue-700 font-medium hover:underline cursor-pointer">
                          <Dialog.Root
                            key={i}
                            open={openChildIndex === i}
                            onOpenChange={(open) =>
                              setOpenChildIndex(open ? i : null)
                            }
                          >
                            <Dialog.Trigger asChild>
                              <button className="text-left w-full">{m.name}</button>
                            </Dialog.Trigger>

                            <Dialog.Portal>
                              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
                              <Dialog.Content
                                className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                              w-[95vw] max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
                              >
                                {/* Header */}
                                <div className="flex justify-between items-center border-b pb-3 mb-4">
                                  <Dialog.Title className="text-2xl font-semibold text-blue-700">
                                    {m.role}
                                  </Dialog.Title>
                                  <Dialog.Close asChild>
                                    <button className="rounded-full p-1 hover:bg-gray-100">
                                      <X className="w-6 h-6 text-gray-500" />
                                    </button>
                                  </Dialog.Close>
                                </div>

                                {/* Thông tin chi tiết */}
                                <div className="text-center space-y-2">
                                  <img
                                    src={m.image}
                                    alt={m.name}
                                    className="mx-auto rounded-full w-32 h-32 object-cover mb-4 border-4 border-blue-200"
                                  />
                                  <p>
                                    <strong>Họ và tên:</strong> {m.name}
                                  </p>
                                  <p>
                                    <strong>Ngày sinh:</strong> {m.dob}
                                  </p>
                                  <p>
                                    <strong>Trình độ:</strong> {m.degree}
                                  </p>
                                  <p>
                                    <strong>Chức vụ:</strong> {m.role}
                                  </p>
                                  <p>
                                    <strong>SĐT:</strong> {m.phone}
                                  </p>
                                </div>

                                {/* Footer */}
                                <div className="flex justify-center mt-5">
                                  <Dialog.Close asChild>
                                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-xl transition">
                                      Đóng
                                    </button>
                                  </Dialog.Close>
                                </div>
                              </Dialog.Content>
                            </Dialog.Portal>
                          </Dialog.Root>
                        </td>
                        <td className="p-3 border whitespace-nowrap">{m.dob}</td>
                        <td className="p-3 border">{m.degree}</td>
                        <td className="p-3 border">{m.role}</td>
                        <td className="p-3 border">{m.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="flex justify-center mt-5">
                <Dialog.Close asChild>
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-xl transition"
                  >
                    Đóng
                  </button>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ))}
    </div>
  );
}