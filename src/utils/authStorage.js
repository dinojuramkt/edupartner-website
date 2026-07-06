const USERS_KEY = "edupartner_users";
const SESSION_KEY = "edupartner_session";
const AUTH_EVENT = "edupartner-auth-updated";

const defaultAdmin = {
  id: "admin-default",
  username: "admin",
  password: "Edu@1234",
  role: "admin",
};

function readJson(key, fallback) {
  if (typeof window === "undefined") return fallback;

  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(AUTH_EVENT));
}

export function getUsers() {
  const users = readJson(USERS_KEY, []);
  const hasAdmin = users.some((user) => user.username === defaultAdmin.username);

  if (hasAdmin) return users;

  const seededUsers = [defaultAdmin, ...users];
  writeJson(USERS_KEY, seededUsers);
  return seededUsers;
}

export function getCurrentUser() {
  const session = readJson(SESSION_KEY, null);
  if (!session?.username) return null;

  const user = getUsers().find((item) => item.username === session.username);
  if (!user) return null;

  return {
    id: user.id,
    username: user.username,
    role: user.role,
  };
}

export function login(username, password) {
  const normalizedUsername = username.trim();
  const user = getUsers().find((item) => item.username === normalizedUsername);

  if (!user || user.password !== password) {
    return {
      ok: false,
      message: "Tên đăng nhập hoặc mật khẩu không đúng.",
    };
  }

  writeJson(SESSION_KEY, {
    username: user.username,
    role: user.role,
  });

  return {
    ok: true,
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
    },
  };
}

export function logout() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SESSION_KEY);
  window.dispatchEvent(new CustomEvent(AUTH_EVENT));
}

export function createUser({ username, password, role }) {
  const normalizedUsername = username.trim();
  const users = getUsers();

  if (!normalizedUsername || !password) {
    return {
      ok: false,
      message: "Vui lòng nhập tên đăng nhập và mật khẩu.",
    };
  }

  if (users.some((user) => user.username.toLowerCase() === normalizedUsername.toLowerCase())) {
    return {
      ok: false,
      message: "Tên đăng nhập đã tồn tại.",
    };
  }

  const newUser = {
    id: `user-${Date.now()}`,
    username: normalizedUsername,
    password,
    role: role === "admin" ? "admin" : "editor",
  };

  writeJson(USERS_KEY, [...users, newUser]);

  return {
    ok: true,
    user: {
      id: newUser.id,
      username: newUser.username,
      role: newUser.role,
    },
  };
}

export function deleteUser(id) {
  const users = getUsers();
  const user = users.find((item) => item.id === id);

  if (!user || user.username === defaultAdmin.username) {
    return {
      ok: false,
      message: "Không thể xóa tài khoản admin mặc định.",
    };
  }

  writeJson(
    USERS_KEY,
    users.filter((item) => item.id !== id),
  );

  return {
    ok: true,
  };
}

export { AUTH_EVENT };
