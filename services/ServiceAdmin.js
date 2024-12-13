import axios from "axios";
import BASEURL from "~/utils/properties";

export const getAllCapturitsByInstitutionId = async (institutionId) => {
  try {
    const response = await axios.get(
      `${BASEURL}api/users/capturists/${institutionId}`
    );
    return response.data;
  } catch (e) {
    console.error(e);
    return "Ocurrio un error en la peticion";
  }
};

export const registerCapturist = async (data) => {
  try {
    const response = await axios.post(
      `${BASEURL}api/capturists/register`,
      data
    );
    return response.data;
  } catch (e) {
    console.error(e);
    return "Ocurrio un error en la peticion";
  }
};

export const getOneCapturist = async (userAccountId, institutionId) => {
  try {
    const response = await axios.get(
      `${BASEURL}api/capturists/get-capturist/${userAccountId}/${institutionId}`
    );
    return response.data;
  } catch (e) {
    console.error(e);
    return "Ocurrio un error en la peticion";
  }
};
export const updateCapturist = async (data) => {
  try {
    const response = await axios.put(
      `${BASEURL}api/capturists/update-basic-data`,
      data
    );
    return response.data;
  } catch (e) {
    console.error(e);
    return "Ocurrio un error en la peticion";
  }
};

export const getForm = async () => {
  try {
    const institutionId = parseInt(localStorage.getItem("institutionId"));
    const response = await axios.get(
      `${BASEURL}api/user-info/get-institution-form/${institutionId}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const registerClientForm = async (data, institutionId) => {
  try {
    const response = await axios.post(
      `${BASEURL}api/user-info/create-forms?institutionId=${institutionId}`,
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.error(e);
    return "Ocurrio un error en la peticion";
  }
};

export const updateClientForm = async (data) => {
  try {
    await axios.put(`${BASEURL}api/user-info/update-forms`, data);
  } catch (error) {
    console.error(error);
  }
};

export const getInstitutionDocument = async () => {
  try {
    const { $axios } = useNuxtApp();
    const institutionId = parseInt(localStorage.getItem("institutionId"));
    const response = await $axios.get(`api/institutions/${institutionId}/docs`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const uploadDocument = async (formData) => {
  try {
    const { $axios } = useNuxtApp();
    const institutionId = parseInt(localStorage.getItem("institutionId"));
    const response = await $axios.put(
      `api/institutions/${institutionId}/patch/docs`,
      formData
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
