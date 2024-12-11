export const navbarConfig = {
  ADMIN: [
    { icon: "fa-brands fa-wpforms", route: "/admins/screens/ClientForm" },
    {
      icon: "fa-regular fa-file-word",
      route: "/admins/screens/ManageDocument",
    },
    { icon: "fas fa-users", route: "/admins/screens/CapturistList" },
    { icon: "fas fa-user", route: "/auth/Profile" },
  ],
  SUPERADMIN: [{ name: "Home", icon: "fas fa-home", route: "/" }],
  CAPTURISTA: [
    { icon: "fas fa-users", route: "/capturists/screens/CredentialsList" },
    { icon: "fas fa-user", route: "/auth/Profile" },
  ],
  DEFAULT: [{ name: "Home", icon: "fas fa-home", route: "/" }],
};
