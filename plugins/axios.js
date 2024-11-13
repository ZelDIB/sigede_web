import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL || "http://localhost:8080",
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
