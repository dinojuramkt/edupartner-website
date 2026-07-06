import { useEffect, useState } from "react";
import { AUTH_EVENT, getCurrentUser, getUsers } from "../utils/authStorage.js";

export function useAuth() {
  const [currentUser, setCurrentUser] = useState(() => getCurrentUser());
  const [users, setUsers] = useState(() => getUsers());

  useEffect(() => {
    function reload() {
      setCurrentUser(getCurrentUser());
      setUsers(getUsers());
    }

    window.addEventListener(AUTH_EVENT, reload);
    window.addEventListener("storage", reload);

    return () => {
      window.removeEventListener(AUTH_EVENT, reload);
      window.removeEventListener("storage", reload);
    };
  }, []);

  return {
    currentUser,
    users,
    isAuthenticated: Boolean(currentUser),
    isAdmin: currentUser?.role === "admin",
  };
}
