import axios from "axios";
import BASEURL from "../utils/properties";

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

const validateVerificationCode = async (code, userEmail) => {
  const url = `${BASEURL}api/recovery-password/validate-verification-code`;
  const payload = { code, userEmail };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
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
};

const changePasswords = async (userEmail, newPassword) => {
  try {
    const response = await axios.put(`${BASEURL}api/recovery-password/change-password`, {
      newPassword: newPassword,
      userEmail: userEmail 
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al cambiar la contraseña: ' + error.message);
  }
};


export default {
  loginMethod,
  sendVerificationCode,
  validateVerificationCode,
  changePasswords
};
