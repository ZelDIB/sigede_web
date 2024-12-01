import axios from "axios";
import { useAuthStore } from "~/store/authStore";

export default defineNuxtPlugin((nuxtApp) => {
  const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL || "http://localhost:8080",
  });

  axiosInstance.interceptors.request.use((config) => {
    const autStore = useAuthStore();
    const token = autStore.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
