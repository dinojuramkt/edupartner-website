import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { assetUrl } from "../utils/assetUrl.js";

const navItems = [
  { label: "Trang chủ", path: "/" },
  { label: "Khóa học", path: "/khoa-hoc" },
  { label: "Tin tức", path: "/tin-tuc" },
  { label: "Liên hệ", path: "/lien-he" },
  { label: "Đăng ký/đăng nhập", path: "/dang-nhap" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    [
      "rounded-full px-4 py-2 text-sm font-semibold transition",
      isActive
        ? "bg-skybrand text-white"
        : "text-slate-700 hover:bg-slate-100 hover:text-navy",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-page flex min-h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            className="h-12 w-auto max-w-[210px] object-contain sm:h-14 sm:max-w-[260px]"
            src={assetUrl("assets/logo-horizontal.png")}
            alt="Edupartner"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu chính">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/lien-he" className="btn-primary gap-2">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Tư vấn miễn phí
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-navy lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label={open ? "Đóng menu" : "Mở menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-2 py-4" aria-label="Menu mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navClass}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
