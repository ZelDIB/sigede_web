import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: "",
    fkInstitution: null,
  }),
  actions: {
    setToken(newToken) {
      this.token = newToken;
    },
    setFkInstitution(newFkInstitution) {
      this.fkInstitution = newFkInstitution;
    },
  },
  persist: true
});
