import { useState } from "react";
import { Send } from "lucide-react";
import { addLead } from "../utils/leadStorage.js";

const interests = [
  "Tiếng Anh",
  "Tin học",
  "Đào tạo ngắn hạn",
  "Đào tạo dài hạn",
  "Chưa xác định, cần tư vấn",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    addLead({
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      interest: formData.get("interest"),
      message: formData.get("message"),
      source: window.location.pathname,
    });
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form className="card p-6" onSubmit={handleSubmit}>
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Họ và tên
          <input className="rounded-lg border border-slate-200 px-4 py-3 text-ink" name="name" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Số điện thoại
          <input className="rounded-lg border border-slate-200 px-4 py-3 text-ink" name="phone" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Email
          <input className="rounded-lg border border-slate-200 px-4 py-3 text-ink" name="email" type="email" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Chương trình quan tâm
          <select className="rounded-lg border border-slate-200 px-4 py-3 text-ink" name="interest" defaultValue="">
            <option value="" disabled>Chọn chương trình</option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>{interest}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Nội dung cần tư vấn
          <textarea className="min-h-32 rounded-lg border border-slate-200 px-4 py-3 text-ink" name="message" />
        </label>
        <button type="submit" className="btn-primary gap-2">
          <Send className="h-4 w-4" aria-hidden="true" />
          Gửi thông tin tư vấn
        </button>
        {submitted && (
          <p className="rounded-lg bg-leaf/10 p-4 text-sm font-semibold leading-6 text-leaf">
            Cảm ơn bạn đã gửi thông tin. Edupartner sẽ liên hệ tư vấn trong thời gian sớm nhất.
          </p>
        )}
      </div>
    </form>
  );
}
