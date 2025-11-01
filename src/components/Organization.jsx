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
      { name: "La Thị Thanh Loan", dob: "01/09/1977", degree: "ĐH Ngữ Văn", role: "Tổ trưởng", phone: "0913392029" },
      { name: "Đinh Thị An", dob: "13/05/1971", degree: "ĐH Ngữ Văn", role: "Tổ phó", phone: "0987681425" },
      { name: "Doãn Thị Hoa", dob: "13/01/1975", degree: "ĐH Ngữ Văn", role: "Giáo viên", phone: "0912884959" },
      { name: "Trần Thị Hương Loan", dob: "22/03/1977", degree: "ĐH Địa", role: "Giáo viên", phone: "0383424029" },
      { name: "Trần Thị Lý", dob: "17/08/1969", degree: "ĐH Địa", role: "Giáo viên", phone: "0918615595" },
      { name: "Bùi Thị Thanh Tình", dob: "11/06/1979", degree: "ĐH Ngữ Văn", role: "Giáo viên", phone: "0966908949" },
      { name: "Đinh Thị Yến", dob: "25/4/1980", degree: "ĐH Anh Văn", role: "Giáo viên", phone: "0966330888" },
      { name: "Nguyễn Thị Thuận", dob: "28/03/1981", degree: "ĐH Anh Văn", role: "Giáo viên", phone: "0917687789" },
      { name: "Nguyễn Thị Hải", dob: "18/06/1985", degree: "ĐH Âm nhạc", role: "Giáo viên", phone: "0985807870" },
      { name: "Thái Thị Bích Ngọc", dob: "06/05/1985", degree: "ĐH MT", role: "Giáo viên", phone: "0912978587" },
      { name: "Nguyễn Thị Kim Quế", dob: "01/10/1971", degree: "ĐH Ngữ Văn", role: "Giáo viên", phone: "0978361335" },
      { name: "Nguyễn Quyết Thắng", dob: "13/11/1979", degree: "ĐH Anh Văn", role: "Giáo viên", phone: "0974021979" },
      { name: "Đặng Thị Oanh", dob: "03/07/1984", degree: "ĐH Ngữ Văn", role: "Giáo viên", phone: "0913608798" },
      { name: "Nguyễn Thế Trọng", dob: "11/01/1978", degree: "ĐH Ngữ Văn", role: "Giáo viên", phone: "0978991992" },
      { name: "Nguyễn Thị Hiền", dob: "19/12/1976", degree: "ĐH Ngữ Văn", role: "Giáo viên", phone: "0917112262" },
      { name: "Nguyễn Thị Tuyết Nhung", dob: "02/12/1983", degree: "ĐH Anh Văn", role: "Giáo viên", phone: "0964780349" },
    ],
  },
  {
    title: "Tổ Khoa học Tự nhiên",
    icon: <Users className="text-orange-600 w-7 h-7" />,
    leader: { name: "Nguyễn Thị Kim Thoa", role: "Tổ trưởng" },
    deputy: { name: "Lê Thị Phượng", role: "Tổ phó" },
    color: "orange",
    members: [
      { name: "Nguyễn Thị Kim Thoa", dob: "01/08/1979", degree: "ĐH Toán", role: "Tổ trưởng", phone: "0973749776" },
      { name: "Lê Thị Phượng", dob: "30/06/1974", degree: "ĐH Toán", role: "Tổ phó", phone: "0976467389" },
      { name: "Hoàng Thị Lý", dob: "20/01/1973", degree: "ĐH Hóa-Sinh", role: "Giáo viên", phone: "0977738556" },
      { name: "Lương Thị Diệu Phương", dob: "21/01/1973", degree: "ĐH Toán", role: "Giáo viên", phone: "0914257195" },
      { name: "Chế Thị Lài", dob: "05/04/1977", degree: "ĐH Toán", role: "Giáo viên", phone: "0368292733" },
      { name: "Nguyễn Thị Hồng Hải", dob: "08/11/1976", degree: "ĐH Toán", role: "Giáo viên", phone: "0948630664" },
      { name: "Nguyễn Thị Thùy Dung", dob: "26/02/1979", degree: "ĐH Sinh", role: "Giáo viên", phone: "0949196979" },
      { name: "Dương Thị Minh Hạnh", dob: "10/02/1976", degree: "ĐH Thể dục", role: "Giáo viên", phone: "0916310060" },
      { name: "Nguyễn Thị Thu Hà", dob: "23/12/1978", degree: "ĐH Toán", role: "Giáo viên", phone: "0945799938" },
      { name: "Nguyễn Trung Thành", dob: "29/04/1979", degree: "ĐH Toán Tin", role: "Giáo viên", phone: "0944485468" },
      { name: "Lê Thị Bích Hằng", dob: "08/09/1978", degree: "ĐH Hóa Sinh", role: "Giáo viên", phone: "0917803010" },
      { name: "Phạm Thị Hoài Thanh", dob: "06/02/1980", degree: "ĐH Toán", role: "Giáo viên", phone: "0988933515" },
      { name: "Nguyễn Thị Minh Trang", dob: "23/06/1982", degree: "ĐH Toán", role: "Giáo viên", phone: "0942644775" },
      { name: "Võ Thị Anh Thơ", dob: "13/07/1978", degree: "ĐH Hóa Sinh", role: "Giáo viên", phone: "0946009178" },
      { name: "Nguyễn Thị Ngọc Dung", dob: "01/07/1978", degree: "ĐH Thể dục", role: "Giáo viên", phone: "0338883687" },
      { name: "Lương Thị Minh Huệ", dob: "19/11/1983", degree: "ĐH Sinh Hóa", role: "Giáo viên", phone: "0827276944" },
      { name: "Hà Thị Anh", dob: "01/07/1984", degree: "ĐH Toán", role: "Giáo viên", phone: "0943936222" }
    ],
  },
  {
    title: "Tổ Văn phòng",
    icon: <Briefcase className="text-purple-600 w-7 h-7" />,
    leader: { name: "Phạm Thị Tuyết Chinh", role: "Tổ trưởng" },
    deputy: { name: "Bùi Thị Quỳnh Hương", role: "Tổ phó" },
    color: "purple",
    members: [
      { name: "Phạm Thị Tuyết Chinh", dob: "08/10/1985", degree: "ĐH Kế toán", role: "Kế toán", phone: "0385145388" },
      { name: "Bùi Thị Quỳnh Hương", dob: "26/03/1988", degree: "ĐH Thư viện TB", role: "Nhân viên", phone: "0977883435" },
      { name: "Đinh Thị Bình", dob: "15/11/1983", degree: "TC TV-TB", role: "Nhân viên", phone: "0358676868" }
    ],
  },
];

// 🧠 COMPONENT CHÍNH
export default function OrganizationSection() {
  const [openIndex, setOpenIndex] = useState(null);

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
                    {org.members.map((item, i) => (
                      <tr
                        key={i}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-3 border">{item.name}</td>
                        <td className="p-3 border whitespace-nowrap">{item.dob}</td>
                        <td className="p-3 border">{item.degree}</td>
                        <td className="p-3 border">{item.role}</td>
                        <td className="p-3 border">{item.phone}</td>
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