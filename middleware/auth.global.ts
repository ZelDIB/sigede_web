import { decodeToken } from "../pages/utils/tokenUtils";

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("No se encontró el token en localStorage");
      if (to.path !== "/") {
        return navigateTo("/");
      }
      return;  
    }

    try {
      const decodedToken = decodeToken(token);
      if (!decodedToken || !decodedToken.roles || decodedToken.roles.length === 0) {
        throw new Error("Token no válido o sin roles");
      }

      type Role = 'SUPERADMIN' | 'ADMIN' | 'CAPTURISTA';

      const roles: Role = decodedToken.roles[0] as Role;

      const roleRoutes: Record<Role, string[]> = {
        SUPERADMIN: ['/superadmins/screens/OrganizationsList', '/superadmins/screens'],
        ADMIN: ['/admins/screens/CapturistList', '/admins/screens'],
        CAPTURISTA: ['/capturists/screens/CredentialsList', '/capturists/screens'],
      };

      const allowedRoutes = roleRoutes[roles];

      if (!allowedRoutes) {
        console.warn("El rol no tiene rutas permitidas");
        return navigateTo("/"); 
      }

      const isAllowed = allowedRoutes.some(route => to.path.startsWith(route));

      if (isAllowed || to.path === allowedRoutes[0]) {
        return; 
      }

      return navigateTo(allowedRoutes[0]);
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      localStorage.removeItem("token");
      if (to.path !== "/") {
        return navigateTo("/"); 
      }
      return; 
    }
  }
});
