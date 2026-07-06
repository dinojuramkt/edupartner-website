import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogIn, ShieldCheck, UserPlus } from "lucide-react";
import SEO from "../components/SEO.jsx";
import { useAuth } from "../hooks/useAuth.js";
import { createUser, login, logout } from "../utils/authStorage.js";

const initialLogin = {
  username: "",
  password: "",
};

const initialRegister = {
  username: "",
  password: "",
};

function inputClass() {
  return "rounded-lg border border-slate-200 px-4 py-3 text-sm text-ink focus:border-skybrand";
}

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, isAdmin } = useAuth();
  const [loginForm, setLoginForm] = useState(initialLogin);
  const [registerForm, setRegisterForm] = useState(initialRegister);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const from = location.state?.from || "/quan-tri";

  function handleLogin(event) {
    event.preventDefault();
    setMessage("");
    setError("");

    const result = login(loginForm.username, loginForm.password);
    if (!result.ok) {
      setError(result.message);
      return;
    }

    setLoginForm(initialLogin);
    navigate(result.user.role === "admin" ? from : "/", { replace: true });
  }

  function handleRegister(event) {
    event.preventDefault();
    setMessage("");
    setError("");

    const result = createUser({
      ...registerForm,
      role: "editor",
    });

    if (!result.ok) {
      setError(result.message);
      return;
    }

    setRegisterForm(initialRegister);
    setMessage("Đã đăng ký tài khoản. Bạn có thể đăng nhập bằng tài khoản vừa tạo.");
  }

  function handleLogout() {
    logout();
    setMessage("Bạn đã đăng xuất.");
  }

  return (
    <>
      <SEO
        title="Đăng ký / đăng nhập | Edupartner"
        description="Đăng nhập tài khoản quản trị Edupartner hoặc đăng ký tài khoản người dùng."
      />
      <section className="bg-[#F8FCFF]">
        <div className="container-page py-12 sm:py-16">
          <p className="text-sm font-bold uppercase tracking-wide text-skybrand">Tài khoản Edupartner</p>
          <h1 className="section-title mt-3">Đăng ký / đăng nhập</h1>
          <p className="section-lead">
            Tài khoản quản trị dùng để truy cập trang quản trị, thêm khóa học, bài viết và tạo thêm tài khoản.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          {location.state?.denied && (
            <div className="mb-8 rounded-lg bg-red-50 p-4 text-sm font-bold text-red-700">
              Tài khoản hiện tại không có quyền quản trị. Vui lòng đăng nhập bằng tài khoản admin.
            </div>
          )}

          {message && (
            <div className="mb-8 rounded-lg bg-leaf/10 p-4 text-sm font-bold text-leaf">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-8 rounded-lg bg-red-50 p-4 text-sm font-bold text-red-700">
              {error}
            </div>
          )}

          {currentUser ? (
            <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-soft">
              <ShieldCheck className="h-10 w-10 text-leaf" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-bold text-navy">Bạn đang đăng nhập</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Tài khoản: <strong>{currentUser.username}</strong> · Quyền:{" "}
                <strong>{currentUser.role === "admin" ? "Quản trị" : "Biên tập"}</strong>
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {isAdmin && (
                  <Link to="/quan-tri" className="btn-primary">
                    Vào trang quản trị
                  </Link>
                )}
                <button type="button" className="btn-secondary" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-2">
              <form className="rounded-lg border border-slate-100 bg-white p-6 shadow-soft" onSubmit={handleLogin}>
                <LogIn className="h-10 w-10 text-skybrand" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-bold text-navy">Đăng nhập</h2>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Tài khoản quản trị mặc định: <strong>admin</strong>
                </p>
                <div className="mt-6 grid gap-5">
                  <label className="grid gap-2 text-sm font-semibold text-navy">
                    Tên đăng nhập
                    <input
                      className={inputClass()}
                      value={loginForm.username}
                      onChange={(event) => setLoginForm((current) => ({ ...current, username: event.target.value }))}
                      autoComplete="username"
                      required
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-navy">
                    Mật khẩu
                    <input
                      className={inputClass()}
                      value={loginForm.password}
                      onChange={(event) => setLoginForm((current) => ({ ...current, password: event.target.value }))}
                      type="password"
                      autoComplete="current-password"
                      required
                    />
                  </label>
                </div>
                <button type="submit" className="btn-primary mt-6">
                  Đăng nhập
                </button>
              </form>

              <form className="rounded-lg border border-slate-100 bg-[#F8FCFF] p-6" onSubmit={handleRegister}>
                <UserPlus className="h-10 w-10 text-leaf" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-bold text-navy">Đăng ký tài khoản</h2>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Tài khoản đăng ký tại đây là tài khoản biên tập. Tài khoản quản trị có thể tạo thêm tài khoản trong trang quản trị.
                </p>
                <div className="mt-6 grid gap-5">
                  <label className="grid gap-2 text-sm font-semibold text-navy">
                    Tên đăng nhập
                    <input
                      className={inputClass()}
                      value={registerForm.username}
                      onChange={(event) => setRegisterForm((current) => ({ ...current, username: event.target.value }))}
                      autoComplete="username"
                      required
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-navy">
                    Mật khẩu
                    <input
                      className={inputClass()}
                      value={registerForm.password}
                      onChange={(event) => setRegisterForm((current) => ({ ...current, password: event.target.value }))}
                      type="password"
                      autoComplete="new-password"
                      required
                    />
                  </label>
                </div>
                <button type="submit" className="btn-secondary mt-6 bg-white">
                  Đăng ký
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
