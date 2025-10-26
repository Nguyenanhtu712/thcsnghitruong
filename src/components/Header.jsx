import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const menu = [
    { to: "/", label: "Trang chủ" },
    { to: "/gioi-thieu", label: "Giới thiệu" },
    { to: "/hoat-dong", label: "Hoạt động" },
    { to: "/tin-tuc", label: "Tin tức" },
    { to: "/thanh-tich", label: "Thành tích" },
    { to: "/lien-he", label: "Liên hệ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">TT</div>
          <div>
            <div className="text-md font-semibold text-blue-700">THCS Thịnh Trường</div>
            <div className="text-xs text-gray-500">Trường học chất lượng cao</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {menu.map((m) => (
            <NavLink
              key={m.to}
              to={m.to}
              className={({ isActive }) =>
                `py-2 px-3 rounded ${isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:text-blue-700"}`
              }
            >
              {m.label}
            </NavLink>
          ))}
        </nav>

        {/* mobile menu placeholder */}
        <div className="md:hidden">
          <button className="p-2">☰</button>
        </div>
      </div>
    </header>
  );
}