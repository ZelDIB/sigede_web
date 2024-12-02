import axios from "axios";
import BASEURL from "../utils/properties";
import { useAuthStore } from "~/store/authStore";

export const loginMethod = async (data) => {
  try {
    const response = await axios.post(`${BASEURL}login`, data);

    const { institutionId, email, token } = response.data;

    localStorage.setItem("institutionId", institutionId);
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = `${token}`;

    return response.data;
  } catch (e) {
    console.error("Error en la petición de login:", e);
    throw new Error("Credenciales inválidas.");
  }
};
export const sendVerificationCode = async (data) => {
  try {
    const response = await axios.post(
      `${BASEURL}api/recovery-password/send-verification-code`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error al enviar el código de verificación:", error);
    throw new Error("No se pudo enviar el código de verificación.");
  }
};
export default {
  async validateVerificationCode(code, userEmail) {
    const url = `${BASEURL}api/recovery-password/validate-verification-code`;
    const payload = { code, userEmail };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error al validar el código.");
      }

      return await response.json();
    } catch (error) {
      console.error("Error en validateVerificationCode:", error);
      throw error;
    }
  },
};

export const getProfileInformation = async () => {
  const { $axios } = useNuxtApp();
  const authStore = useAuthStore();
  const userId = authStore.userId;
  try {
    const response = await $axios.post("api/users/get-account", {
      userId: 8,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateProfileInformation = async (data) => {
  const { $axios } = useNuxtApp();
  const authStore = useAuthStore();
  const userId = authStore.userId;
  let payload;
  try {
    if (data.password) {
      payload = {
        userId: 8,
        name: data.name,
        password: data.password,
      };
    } else {
      payload = {
        userId: 8,
        name: data.name,
      };
    }
    const response = await $axios.post("api/users/update-data", payload);
    return response;
  } catch (error) {
    console.error(error);
  }
};
