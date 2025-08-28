export const setToken = (token) => {
  localStorage.setItem("adminToken", token);
};

export const getToken = () => {
  return localStorage.getItem("adminToken");
};

export const isAdminAuthenticated = () => {
  return !!getToken();
};

export const logout = () => {
  localStorage.removeItem("adminToken");
};
