import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  CheckCircle2,
  Download,
  FileText,
  Inbox,
  LogOut,
  Plus,
  Save,
  Trash2,
  UserCog,
} from "lucide-react";
import SEO from "../components/SEO.jsx";
import { categories } from "../data/courses.js";
import { useAuth } from "../hooks/useAuth.js";
import { useContent } from "../hooks/useContent.js";
import { createUser, deleteUser, logout } from "../utils/authStorage.js";
import {
  addCustomCourse,
  addCustomPost,
  deleteCustomCourse,
  deleteCustomPost,
  splitLines,
} from "../utils/contentStorage.js";
import {
  deleteLead,
  formatLeadDate,
  getLeads,
  LEADS_EVENT,
  statusLabels,
  updateLead,
} from "../utils/leadStorage.js";

const courseCategoryOptions = categories.filter((category) => category !== "Tất cả");

const initialCourseForm = {
  title: "",
  category: "Đào tạo ngắn hạn",
  description: "",
  audience: "",
  duration: "",
  format: "Online / Offline",
  schedule: "",
  image: "",
  overview: "",
  outcomes: "",
  curriculum: "",
};

const initialPostForm = {
  title: "",
  category: "Tư vấn giáo dục",
  date: new Intl.DateTimeFormat("vi-VN").format(new Date()),
  description: "",
  image: "",
  content: "",
};

const initialUserForm = {
  username: "",
  password: "",
  role: "editor",
};

const leadStatusOptions = [
  { value: "new", label: "Mới" },
  { value: "contacted", label: "Đã liên hệ" },
  { value: "consulted", label: "Đã tư vấn" },
  { value: "enrolled", label: "Đã đăng ký" },
  { value: "closed", label: "Đã đóng" },
];

const defaultCourseImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80";

const defaultPostImage =
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80";

function Field({ label, children }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-navy">
      {label}
      {children}
    </label>
  );
}

function textInputClass() {
  return "rounded-lg border border-slate-200 px-4 py-3 text-sm text-ink focus:border-skybrand";
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

export default function Admin() {
  const navigate = useNavigate();
  const { currentUser, users, isAdmin } = useAuth();
  const { courses, posts, customCourses, customPosts } = useContent();
  const [activeTab, setActiveTab] = useState("courses");
  const [courseForm, setCourseForm] = useState(initialCourseForm);
  const [postForm, setPostForm] = useState(initialPostForm);
  const [userForm, setUserForm] = useState(initialUserForm);
  const [leads, setLeads] = useState(() => getLeads());
  const [message, setMessage] = useState("");

  useEffect(() => {
    function reloadLeads() {
      setLeads(getLeads());
    }

    window.addEventListener(LEADS_EVENT, reloadLeads);
    window.addEventListener("storage", reloadLeads);

    return () => {
      window.removeEventListener(LEADS_EVENT, reloadLeads);
      window.removeEventListener("storage", reloadLeads);
    };
  }, []);

  const stats = useMemo(
    () => [
      { label: "Tổng khóa học", value: courses.length, icon: BookOpen },
      { label: "Khóa học tự thêm", value: customCourses.length, icon: Plus },
      { label: "Tổng bài viết", value: posts.length, icon: FileText },
      { label: "Yêu cầu mới", value: leads.filter((lead) => lead.status === "new").length, icon: Inbox },
      { label: "Tài khoản", value: users.length, icon: UserCog },
    ],
    [courses.length, customCourses.length, leads, posts.length, users.length],
  );

  function updateCourseField(field, value) {
    setCourseForm((current) => ({ ...current, [field]: value }));
  }

  function updatePostField(field, value) {
    setPostForm((current) => ({ ...current, [field]: value }));
  }

  function updateUserField(field, value) {
    setUserForm((current) => ({ ...current, [field]: value }));
  }

  function handleCourseSubmit(event) {
    event.preventDefault();
    const newCourse = addCustomCourse(
      {
        ...courseForm,
        title: courseForm.title.trim(),
        description: courseForm.description.trim(),
        audience: courseForm.audience.trim(),
        duration: courseForm.duration.trim() || "Theo lộ trình tư vấn",
        format: courseForm.format.trim() || "Online / Offline",
        schedule: courseForm.schedule.trim(),
        image: courseForm.image.trim() || defaultCourseImage,
        overview: courseForm.overview.trim() || courseForm.description.trim(),
        outcomes: splitLines(courseForm.outcomes),
        curriculum: splitLines(courseForm.curriculum),
      },
      courses,
    );

    setCourseForm(initialCourseForm);
    setMessage(`Đã thêm khóa học: ${newCourse.title}`);
  }

  function handlePostSubmit(event) {
    event.preventDefault();
    const paragraphs = splitLines(postForm.content);
    const newPost = addCustomPost(
      {
        ...postForm,
        title: postForm.title.trim(),
        category: postForm.category.trim() || "Tư vấn giáo dục",
        date: postForm.date.trim() || new Intl.DateTimeFormat("vi-VN").format(new Date()),
        description: postForm.description.trim(),
        image: postForm.image.trim() || defaultPostImage,
        content: [
          {
            heading: "Nội dung chính",
            paragraphs: paragraphs.length ? paragraphs : [postForm.description.trim()],
          },
        ],
      },
      posts,
    );

    setPostForm(initialPostForm);
    setMessage(`Đã thêm bài viết: ${newPost.title}`);
  }

  function removeCourse(id) {
    deleteCustomCourse(id);
    setMessage("Đã xóa khóa học đã thêm.");
  }

  function removePost(id) {
    deleteCustomPost(id);
    setMessage("Đã xóa bài viết đã thêm.");
  }

  function handleUserSubmit(event) {
    event.preventDefault();

    if (!isAdmin) {
      setMessage("Chỉ tài khoản quản trị mới có quyền tạo tài khoản.");
      return;
    }

    const result = createUser(userForm);
    if (!result.ok) {
      setMessage(result.message);
      return;
    }

    setUserForm(initialUserForm);
    setMessage(`Đã tạo tài khoản: ${result.user.username}`);
  }

  function removeUser(id) {
    const result = deleteUser(id);
    setMessage(result.ok ? "Đã xóa tài khoản." : result.message);
  }

  function changeLeadStatus(id, status) {
    updateLead(id, { status });
    setMessage("Đã cập nhật trạng thái yêu cầu tư vấn.");
  }

  function changeLeadNote(id, note) {
    updateLead(id, { note });
  }

  function removeLead(id) {
    deleteLead(id);
    setMessage("Đã xóa yêu cầu tư vấn.");
  }

  function exportLeads() {
    if (leads.length === 0) {
      setMessage("Chưa có yêu cầu tư vấn để xuất file.");
      return;
    }

    const headers = [
      "Thời gian gửi",
      "Họ và tên",
      "Số điện thoại",
      "Email",
      "Chương trình quan tâm",
      "Nội dung tư vấn",
      "Nguồn trang",
      "Trạng thái",
      "Ghi chú",
    ];
    const rows = leads.map((lead) => [
      formatLeadDate(lead.createdAt),
      lead.name,
      lead.phone,
      lead.email,
      lead.interest,
      lead.message,
      lead.source,
      statusLabels[lead.status] || lead.status,
      lead.note,
    ]);
    const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
    const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `edupartner-yeu-cau-tu-van-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    setMessage("Đã xuất danh sách yêu cầu tư vấn.");
  }

  function handleLogout() {
    logout();
    navigate("/dang-nhap", { replace: true });
  }

  return (
    <>
      <SEO
        title="Quản trị nội dung | Edupartner"
        description="Trang quản trị nội dung Edupartner để thêm khóa học và bài viết mới."
      />
      <section className="border-b border-slate-100 bg-[#F8FCFF]">
        <div className="container-page py-8">
          <div className="flex flex-col justify-between gap-5 rounded-lg border border-slate-100 bg-white p-5 shadow-soft lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-skybrand">Quản trị Edupartner</p>
              <h1 className="mt-2 text-2xl font-black text-navy sm:text-3xl">Bảng điều khiển</h1>
              <p className="mt-2 text-sm font-semibold text-muted">
                Đang đăng nhập: <span className="text-navy">{currentUser?.username}</span> · Quyền quản trị
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/khoa-hoc" className="btn-secondary">
                Xem trang khóa học
              </Link>
              <button type="button" className="btn-primary gap-2" onClick={handleLogout}>
                <LogOut className="h-4 w-4" aria-hidden="true" />
                Đăng xuất
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div className="flex items-center gap-4 rounded-lg border border-slate-100 bg-white p-4 shadow-soft" key={item.label}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-skybrand/10 text-skybrand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-2xl font-black leading-none text-navy">{item.value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10">
        <div className="container-page">
          <div className="mb-6 flex flex-wrap gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2">
            <button
              type="button"
              className={[
                "min-h-11 rounded-lg px-4 py-2 text-sm font-bold transition",
                activeTab === "courses" ? "bg-navy text-white" : "bg-white text-muted hover:text-navy",
              ].join(" ")}
              onClick={() => setActiveTab("courses")}
            >
              Khóa học
            </button>
            <button
              type="button"
              className={[
                "min-h-11 rounded-lg px-4 py-2 text-sm font-bold transition",
                activeTab === "posts" ? "bg-navy text-white" : "bg-white text-muted hover:text-navy",
              ].join(" ")}
              onClick={() => setActiveTab("posts")}
            >
              Bài viết
            </button>
            <button
              type="button"
              className={[
                "min-h-11 rounded-lg px-4 py-2 text-sm font-bold transition",
                activeTab === "leads" ? "bg-navy text-white" : "bg-white text-muted hover:text-navy",
              ].join(" ")}
              onClick={() => setActiveTab("leads")}
            >
              Yêu cầu tư vấn
            </button>
            <button
              type="button"
              className={[
                "min-h-11 rounded-lg px-4 py-2 text-sm font-bold transition",
                activeTab === "accounts" ? "bg-navy text-white" : "bg-white text-muted hover:text-navy",
              ].join(" ")}
              onClick={() => setActiveTab("accounts")}
            >
              Tài khoản
            </button>
          </div>

          {message && (
            <div className="mb-8 flex items-center gap-3 rounded-lg bg-leaf/10 p-4 text-sm font-bold text-leaf">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              {message}
            </div>
          )}

          {activeTab === "courses" ? (
            <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
              <form className="rounded-lg border border-slate-100 bg-white p-6 shadow-soft" onSubmit={handleCourseSubmit}>
                <h2 className="text-2xl font-bold text-navy">Thêm khóa học</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <Field label="Tên khóa học">
                    <input
                      className={textInputClass()}
                      value={courseForm.title}
                      onChange={(event) => updateCourseField("title", event.target.value)}
                      required
                    />
                  </Field>
                  <Field label="Danh mục">
                    <select
                      className={textInputClass()}
                      value={courseForm.category}
                      onChange={(event) => updateCourseField("category", event.target.value)}
                    >
                      {courseCategoryOptions.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Đối tượng phù hợp">
                    <input
                      className={textInputClass()}
                      value={courseForm.audience}
                      onChange={(event) => updateCourseField("audience", event.target.value)}
                      required
                    />
                  </Field>
                  <Field label="Thời lượng">
                    <input
                      className={textInputClass()}
                      value={courseForm.duration}
                      onChange={(event) => updateCourseField("duration", event.target.value)}
                      placeholder="Ví dụ: 120 phút/buổi"
                    />
                  </Field>
                  <Field label="Hình thức học">
                    <input
                      className={textInputClass()}
                      value={courseForm.format}
                      onChange={(event) => updateCourseField("format", event.target.value)}
                    />
                  </Field>
                  <Field label="Lịch học dự kiến">
                    <input
                      className={textInputClass()}
                      value={courseForm.schedule}
                      onChange={(event) => updateCourseField("schedule", event.target.value)}
                      placeholder="Ví dụ: lớp tối hoặc cuối tuần"
                    />
                  </Field>
                  <Field label="Ảnh đại diện URL">
                    <input
                      className={textInputClass()}
                      value={courseForm.image}
                      onChange={(event) => updateCourseField("image", event.target.value)}
                      placeholder="Để trống sẽ dùng ảnh mặc định"
                    />
                  </Field>
                  <Field label="Mô tả ngắn">
                    <textarea
                      className={`${textInputClass()} min-h-28`}
                      value={courseForm.description}
                      onChange={(event) => updateCourseField("description", event.target.value)}
                      required
                    />
                  </Field>
                  <Field label="Tổng quan chi tiết">
                    <textarea
                      className={`${textInputClass()} min-h-32`}
                      value={courseForm.overview}
                      onChange={(event) => updateCourseField("overview", event.target.value)}
                      placeholder="Để trống sẽ dùng mô tả ngắn"
                    />
                  </Field>
                  <Field label="Mục tiêu sau khóa học, mỗi dòng một ý">
                    <textarea
                      className={`${textInputClass()} min-h-32`}
                      value={courseForm.outcomes}
                      onChange={(event) => updateCourseField("outcomes", event.target.value)}
                    />
                  </Field>
                  <Field label="Nội dung chính, mỗi dòng một ý">
                    <textarea
                      className={`${textInputClass()} min-h-32`}
                      value={courseForm.curriculum}
                      onChange={(event) => updateCourseField("curriculum", event.target.value)}
                    />
                  </Field>
                </div>
                <button type="submit" className="btn-primary mt-6 gap-2">
                  <Save className="h-4 w-4" aria-hidden="true" />
                  Lưu khóa học
                </button>
              </form>

              <aside className="h-fit rounded-lg border border-slate-100 bg-[#F8FCFF] p-6">
                <h2 className="text-xl font-bold text-navy">Khóa học đã thêm</h2>
                <div className="mt-5 grid gap-3">
                  {customCourses.length === 0 && (
                    <p className="text-sm leading-7 text-muted">Chưa có khóa học tự thêm.</p>
                  )}
                  {customCourses.map((course) => (
                    <div className="rounded-lg bg-white p-4" key={course.id}>
                      <p className="font-bold text-navy">{course.title}</p>
                      <p className="mt-1 text-sm text-muted">{course.category}</p>
                      <div className="mt-3 flex gap-2">
                        <Link className="text-sm font-bold text-skybrand hover:text-navy" to={`/khoa-hoc/${course.slug}`}>
                          Xem
                        </Link>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 text-sm font-bold text-red-600 hover:text-red-700"
                          onClick={() => removeCourse(course.id)}
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                          Xóa
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          ) : activeTab === "posts" ? (
            <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
              <form className="rounded-lg border border-slate-100 bg-white p-6 shadow-soft" onSubmit={handlePostSubmit}>
                <h2 className="text-2xl font-bold text-navy">Thêm bài viết</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <Field label="Tiêu đề bài viết">
                    <input
                      className={textInputClass()}
                      value={postForm.title}
                      onChange={(event) => updatePostField("title", event.target.value)}
                      required
                    />
                  </Field>
                  <Field label="Danh mục">
                    <input
                      className={textInputClass()}
                      value={postForm.category}
                      onChange={(event) => updatePostField("category", event.target.value)}
                    />
                  </Field>
                  <Field label="Ngày đăng">
                    <input
                      className={textInputClass()}
                      value={postForm.date}
                      onChange={(event) => updatePostField("date", event.target.value)}
                    />
                  </Field>
                  <Field label="Ảnh đại diện URL">
                    <input
                      className={textInputClass()}
                      value={postForm.image}
                      onChange={(event) => updatePostField("image", event.target.value)}
                      placeholder="Để trống sẽ dùng ảnh mặc định"
                    />
                  </Field>
                  <Field label="Mô tả ngắn">
                    <textarea
                      className={`${textInputClass()} min-h-28`}
                      value={postForm.description}
                      onChange={(event) => updatePostField("description", event.target.value)}
                      required
                    />
                  </Field>
                  <Field label="Nội dung bài viết, mỗi dòng một đoạn">
                    <textarea
                      className={`${textInputClass()} min-h-40`}
                      value={postForm.content}
                      onChange={(event) => updatePostField("content", event.target.value)}
                    />
                  </Field>
                </div>
                <button type="submit" className="btn-primary mt-6 gap-2">
                  <Save className="h-4 w-4" aria-hidden="true" />
                  Lưu bài viết
                </button>
              </form>

              <aside className="h-fit rounded-lg border border-slate-100 bg-[#F8FCFF] p-6">
                <h2 className="text-xl font-bold text-navy">Bài viết đã thêm</h2>
                <div className="mt-5 grid gap-3">
                  {customPosts.length === 0 && (
                    <p className="text-sm leading-7 text-muted">Chưa có bài viết tự thêm.</p>
                  )}
                  {customPosts.map((post) => (
                    <div className="rounded-lg bg-white p-4" key={post.id}>
                      <p className="font-bold text-navy">{post.title}</p>
                      <p className="mt-1 text-sm text-muted">{post.category}</p>
                      <div className="mt-3 flex gap-2">
                        <Link className="text-sm font-bold text-skybrand hover:text-navy" to={`/tin-tuc/${post.slug}`}>
                          Xem
                        </Link>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 text-sm font-bold text-red-600 hover:text-red-700"
                          onClick={() => removePost(post.id)}
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                          Xóa
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          ) : activeTab === "leads" ? (
            <div className="grid gap-6">
              <div className="flex flex-col justify-between gap-4 rounded-lg border border-slate-100 bg-[#F8FCFF] p-6 md:flex-row md:items-center">
                <div>
                  <Inbox className="h-9 w-9 text-skybrand" aria-hidden="true" />
                  <h2 className="mt-3 text-2xl font-bold text-navy">Yêu cầu tư vấn của học viên</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
                    Danh sách này nhận dữ liệu từ form liên hệ trên website. Admin có thể theo dõi trạng thái, ghi chú tư vấn và xuất CSV để quản lý bằng Excel.
                  </p>
                </div>
                <button type="button" className="btn-primary gap-2" onClick={exportLeads}>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Xuất CSV
                </button>
              </div>

              {leads.length === 0 ? (
                <div className="rounded-lg border border-dashed border-slate-200 bg-white p-8 text-center">
                  <p className="text-lg font-bold text-navy">Chưa có yêu cầu tư vấn</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    Khi học viên gửi form ở trang Liên hệ, thông tin sẽ xuất hiện tại đây.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {leads.map((lead) => (
                    <article className="rounded-lg border border-slate-100 bg-white p-5 shadow-soft" key={lead.id}>
                      <div className="grid gap-5 lg:grid-cols-[1fr_220px]">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-bold text-navy">{lead.name}</h3>
                            <span className="rounded-full bg-skybrand/10 px-3 py-1 text-xs font-bold text-skybrand">
                              {statusLabels[lead.status] || lead.status}
                            </span>
                          </div>
                          <div className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 md:grid-cols-2">
                            <p>
                              <strong>Số điện thoại:</strong> {lead.phone}
                            </p>
                            <p>
                              <strong>Email:</strong> {lead.email || "Chưa cung cấp"}
                            </p>
                            <p>
                              <strong>Chương trình:</strong> {lead.interest}
                            </p>
                            <p>
                              <strong>Thời gian gửi:</strong> {formatLeadDate(lead.createdAt)}
                            </p>
                            <p>
                              <strong>Nguồn:</strong> {lead.source}
                            </p>
                          </div>
                          {lead.message && (
                            <p className="mt-4 rounded-lg bg-slate-50 p-4 text-sm leading-7 text-muted">
                              {lead.message}
                            </p>
                          )}
                        </div>

                        <div className="grid gap-3">
                          <label className="grid gap-2 text-sm font-semibold text-navy">
                            Trạng thái
                            <select
                              className={textInputClass()}
                              value={lead.status}
                              onChange={(event) => changeLeadStatus(lead.id, event.target.value)}
                            >
                              {leadStatusOptions.map((status) => (
                                <option key={status.value} value={status.value}>
                                  {status.label}
                                </option>
                              ))}
                            </select>
                          </label>
                          <label className="grid gap-2 text-sm font-semibold text-navy">
                            Ghi chú tư vấn
                            <textarea
                              className={`${textInputClass()} min-h-24`}
                              value={lead.note || ""}
                              onChange={(event) => changeLeadNote(lead.id, event.target.value)}
                              placeholder="Ví dụ: đã gọi lần 1, hẹn tư vấn lại..."
                            />
                          </label>
                          <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-red-100 px-4 py-2 text-sm font-bold text-red-600 hover:border-red-200 hover:bg-red-50"
                            onClick={() => removeLead(lead.id)}
                          >
                            <Trash2 className="h-4 w-4" aria-hidden="true" />
                            Xóa yêu cầu
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
              <form className="rounded-lg border border-slate-100 bg-white p-6 shadow-soft" onSubmit={handleUserSubmit}>
                <UserCog className="h-10 w-10 text-skybrand" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-bold text-navy">Tạo tài khoản mới</h2>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Tài khoản admin có quyền truy cập trang quản trị và tạo thêm tài khoản. Tài khoản biên tập dùng cho đăng nhập thông thường.
                </p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <Field label="Tên đăng nhập">
                    <input
                      className={textInputClass()}
                      value={userForm.username}
                      onChange={(event) => updateUserField("username", event.target.value)}
                      required
                    />
                  </Field>
                  <Field label="Mật khẩu">
                    <input
                      className={textInputClass()}
                      value={userForm.password}
                      onChange={(event) => updateUserField("password", event.target.value)}
                      type="password"
                      required
                    />
                  </Field>
                  <Field label="Quyền tài khoản">
                    <select
                      className={textInputClass()}
                      value={userForm.role}
                      onChange={(event) => updateUserField("role", event.target.value)}
                    >
                      <option value="editor">Biên tập</option>
                      <option value="admin">Quản trị</option>
                    </select>
                  </Field>
                </div>
                <button type="submit" className="btn-primary mt-6 gap-2">
                  <Save className="h-4 w-4" aria-hidden="true" />
                  Tạo tài khoản
                </button>
              </form>

              <aside className="h-fit rounded-lg border border-slate-100 bg-[#F8FCFF] p-6">
                <h2 className="text-xl font-bold text-navy">Danh sách tài khoản</h2>
                <div className="mt-5 grid gap-3">
                  {users.map((user) => (
                    <div className="rounded-lg bg-white p-4" key={user.id}>
                      <p className="font-bold text-navy">{user.username}</p>
                      <p className="mt-1 text-sm text-muted">
                        {user.role === "admin" ? "Quản trị" : "Biên tập"}
                      </p>
                      {user.username !== "admin" && (
                        <button
                          type="button"
                          className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-red-600 hover:text-red-700"
                          onClick={() => removeUser(user.id)}
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                          Xóa
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
