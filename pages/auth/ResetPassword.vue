<template>
  <div class="screen-split">
    <div class="left-half">
      <div class="container">
        <img src="../../public/logoweb.png" alt="" width="220px" />
        <p class="title">SIGEDE</p>
        <p class="sig">Sistema de gestión de credenciales</p>
      </div>
    </div>
    <div class="right-half">
      <div class="container2">
        <p class="title2">Cambio de Contraseña</p>
        <label for="new-password">Nueva Contraseña *</label>
        <input
          type="password"
          id="new-password"
          class="input-field"
          v-model="newPassword"
          placeholder="Nueva Contraseña"
        />
        <label for="confirm-password">Confirmar Contraseña *</label>
        <input
          type="password"
          id="confirm-password"
          class="input-field"
          v-model="confirmPassword"
          placeholder="Confirmar Contraseña"
        />
        <button class="login-button" @click="changePassword" :disabled="isLoading">
          <span v-if="isLoading">Procesando...</span>
          <span v-else>Cambiar Contraseña</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import ServiceAuth from "../../services/ServicesAuth.js";

export default {
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
      isLoading: false,
    };
  },
  methods: {
    async changePassword() {
      if (this.newPassword !== this.confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Las contraseñas no coinciden.",
        });
        return;
      }

      const userEmail = localStorage.getItem("email");
      if (!userEmail) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se encontró el email del usuario.",
        });
        return;
      }

      this.isLoading = true;

      try {
        const response = await ServiceAuth.changePasswords(userEmail, this.newPassword);

        if (response) {
          Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "Contraseña cambiada exitosamente.",
          });

          this.newPassword = "";
          this.confirmPassword = "";

          this.$router.push("/");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message || "Error al cambiar la contraseña.",
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

  <style scoped>
  .screen-split {
    display: flex;
    height: 100vh;
  }
  
  .left-half {
    flex: 1;
    background-color: black;
  }
  
  .right-half {
    flex: 1;
    background-color: white;
  }
  
  .title {
    margin: 10px 0;
    text-align: center;
    color: rgb(255, 254, 254);
    font-size: 45px;
    letter-spacing: 0.8em;
    font-weight: 300;
  }
  
  .title2 {
    margin: 10px 0;
    color: black;
    font-size: 35px;
    font-weight: 300;
  }
  
  .sig {
    margin: 10px 0;
    color: rgb(255, 254, 254);
    font-size: 18px;
    font-weight: 300;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
  }
  
  .container2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-width: 400px;
    margin: auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  label {
    align-self: flex-start;
    font-size: 14px;
    margin: 10px 0 5px;
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #000;
    border-radius: 8px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }
  
  .login-button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    color: #fff;
    background-color: #000;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 20px;
    font-weight: 300;
    margin-bottom: 10px;
  }
  </style>
  