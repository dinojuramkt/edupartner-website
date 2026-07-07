import { Link } from "react-router-dom";
import { Clock, Globe2, Mail, MapPin, Phone } from "lucide-react";
import { contactDetails } from "../data/contact.js";
import { assetUrl } from "../utils/assetUrl.js";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            className="h-20 w-auto max-w-[220px] object-contain"
            src={assetUrl("assets/logo-white.png")}
            alt="Edupartner"
          />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
            Edupartner đồng hành cùng học viên trong chương trình tiếng Anh, khóa học tin học,
            đào tạo ngắn hạn và đào tạo dài hạn phù hợp với mục tiêu cá nhân.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold">Liên kết</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <Link className="hover:text-skybrand" to="/">Trang chủ</Link>
            <Link className="hover:text-skybrand" to="/khoa-hoc">Khóa học</Link>
            <Link className="hover:text-skybrand" to="/tin-tuc">Tin tức</Link>
            <Link className="hover:text-skybrand" to="/lien-he">Liên hệ</Link>
          </div>
        </div>

        <div>
          <h2 className="text-base font-bold">Thông tin liên hệ</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-skybrand" />{contactDetails.address}</p>
            <a className="flex gap-3 hover:text-skybrand" href={contactDetails.phoneHref}>
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-skybrand" />
              {contactDetails.phone}
            </a>
            <a className="flex gap-3 hover:text-skybrand" href={contactDetails.emailHref}>
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-skybrand" />
              {contactDetails.email}
            </a>
            <a className="flex gap-3 hover:text-skybrand" href={contactDetails.websiteHref} target="_blank" rel="noreferrer">
              <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-skybrand" />
              {contactDetails.website}
            </a>
            <p className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-skybrand" />{contactDetails.workingHours}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-sm text-white/60">
          © 2026 Edupartner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
