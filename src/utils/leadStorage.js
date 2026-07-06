const LEADS_KEY = "edupartner_consultation_leads";
const LEADS_EVENT = "edupartner-leads-updated";

const statusLabels = {
  new: "Mới",
  contacted: "Đã liên hệ",
  consulted: "Đã tư vấn",
  enrolled: "Đã đăng ký",
  closed: "Đã đóng",
};

function readList() {
  if (typeof window === "undefined") return [];

  try {
    const value = window.localStorage.getItem(LEADS_KEY);
    return value ? JSON.parse(value) : [];
  } catch {
    return [];
  }
}

function writeList(value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LEADS_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(LEADS_EVENT));
}

export function getLeads() {
  return readList();
}

export function addLead(lead) {
  const leads = getLeads();
  const createdAt = new Date().toISOString();
  const newLead = {
    id: `lead-${Date.now()}`,
    name: lead.name?.trim() || "",
    phone: lead.phone?.trim() || "",
    email: lead.email?.trim() || "",
    interest: lead.interest?.trim() || "Chưa xác định, cần tư vấn",
    message: lead.message?.trim() || "",
    source: lead.source || window.location.pathname,
    status: "new",
    note: "",
    createdAt,
    updatedAt: createdAt,
  };

  writeList([newLead, ...leads]);
  return newLead;
}

export function updateLead(id, updates) {
  const updatedAt = new Date().toISOString();
  writeList(
    getLeads().map((lead) =>
      lead.id === id
        ? {
            ...lead,
            ...updates,
            updatedAt,
          }
        : lead,
    ),
  );
}

export function deleteLead(id) {
  writeList(getLeads().filter((lead) => lead.id !== id));
}

export function formatLeadDate(value) {
  if (!value) return "";

  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

export { LEADS_EVENT, statusLabels };
