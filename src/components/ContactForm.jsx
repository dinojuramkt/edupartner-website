import { useState } from "react";
import { Send } from "lucide-react";
import { sendLeadToGoogleSheet } from "../utils/googleSheets.js";
import { addLead, updateLead } from "../utils/leadStorage.js";

const interests = [
  "Tiếng Anh",
  "Tin học",
  "Đào tạo ngắn hạn",
  "Đào tạo dài hạn",
  "Chưa xác định, cần tư vấn",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sheetSyncStatus, setSheetSyncStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmitted(false);
    setSubmitting(true);
    setSheetSyncStatus(null);

    const lead = addLead({
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      interest: formData.get("interest"),
      message: formData.get("message"),
      source: window.location.pathname,
    });

    const syncResult = await sendLeadToGoogleSheet(lead);
    updateLead(lead.id, {
      sheetSyncStatus: syncResult.status,
      sheetSyncedAt: syncResult.status === "sent" ? new Date().toISOString() : "",
      sheetSyncError: syncResult.status === "error" ? syncResult.message : "",
    });

    setSheetSyncStatus(syncResult.status);
    setSubmitted(true);
    setSubmitting(false);
    form.reset();
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
        <button type="submit" className="btn-primary gap-2 disabled:cursor-not-allowed disabled:opacity-70" disabled={submitting}>
          <Send className="h-4 w-4" aria-hidden="true" />
          {submitting ? "Đang gửi..." : "Gửi thông tin tư vấn"}
        </button>
        {submitted && (
          <p className="rounded-lg bg-leaf/10 p-4 text-sm font-semibold leading-6 text-leaf">
            {sheetSyncStatus === "sent"
              ? "Cảm ơn bạn đã gửi thông tin. Edupartner đã nhận yêu cầu và sẽ liên hệ tư vấn trong thời gian sớm nhất."
              : "Cảm ơn bạn đã gửi thông tin. Edupartner sẽ liên hệ tư vấn trong thời gian sớm nhất."}
          </p>
        )}
      </div>
    </form>
  );
}
