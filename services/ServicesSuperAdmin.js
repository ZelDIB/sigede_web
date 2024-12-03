import { useAuthStore } from "~/store/authStore";

export const getAllInstitutions = async () => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.get("api/institutions");
    return response.data;
  } catch (e) {
    console.error(e);
    return "Ocurrio un error en la peticion";
  }
};

export const getAllAdmins = async () => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.get("api/users/admins");
    return response.data;
  } catch (e) {
    console.error(e);
    return "Ocurrio un error en la peticion";
  }
};

export const registerOrgatization = async (data) => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.post(
      "api/institutions/post-institution",
      data
    );
    return response.data;
  } catch (e) {
    console.error(e);
    return "Ocurrio un error en la peticion";
  }
};

export const getAdminsByInstitutionId = async (institutionId) => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.get(`api/users/admins/${institutionId}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return "Ocurrio un error en la peticion";
  }
};

export const getInstitutionInfoByinstitutionId = async (institutionId) => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.get(`api/institutions/${institutionId}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return "Ocurrio un error en la peticion";
  }
};

export const updateInstitution = async (data) => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.put(`api/institutions/update`, data);
    return response.data;
  } catch (e) {
    console.error(e);
    return "Ocurrio un error en la peticion";
  }
};

export const registerAdmin = async (data) => {
  const { $axios } = useNuxtApp();
  const authStore = useAuthStore();
  const fkInstitution = authStore.fkInstitution;
  try {
    const response = await $axios.post("api/admin/register", {
      name: data.name,
      email: data.email,
      fkInstitution: fkInstitution,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
