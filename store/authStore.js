import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: "",
    fkInstitution: null,
    userId: null,
  }),
  actions: {
    setToken(newToken) {
      this.token = newToken;
    },
    setFkInstitution(newFkInstitution) {
      this.fkInstitution = newFkInstitution;
    },
    setUserId(newUserId) {
      this.userId = newUserId;
    },
  },
  persist: true,
});
