import Cookies from "js-cookie";

export const login = (user) => {
  Cookies.set("USER", user.token)
};

export const id = (user) => {
  localStorage.setItem("ID", user.id);
};

export const logout = () => {
  Cookies.remove("USER");
  localStorage.removeItem("ID");
};

export const isLogin = () => {
  if (Cookies.get("USER") === undefined) {
    return false;
  }
  return true;
};