<template>
  <div class="screen-split">
    <div class="left-half">
      <div class="container">
        <img src="../public/logoweb.png" alt="" width="220px">
        <p class="title">SIGEDE</p>
        <p class="sig">Sistema de gestión de credenciales</p>
      </div>
    </div>
    <div class="right-half">
      <div class="container2">
        <p class="title2">Iniciar sesión</p>
        <label for="email">Correo electrónico *</label>
        <input type="email" id="email" class="input-field" placeholder="Correo electrónico">
        
        <label for="password">Contraseña *</label>
        <div class="password-container">
          <input :type="showPassword ? 'text' : 'password'" id="password" class="input-field" placeholder="Contraseña">
          <span class="eye-icon" @click="togglePasswordVisibility">
            <i :class="showPassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'" style="color: #030303;"></i>
          </span>
        </div>

        <button class="login-button">Iniciar sesión</button>
        <a href="/auth/ResetPassword" class="forgot-password">Olvidé la contraseña</a>
      </div>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  data() {
    return {
      showPassword: false
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
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

.password-container {
  position: relative;
  width: 100%;
}

.eye-icon {
  position: absolute;
  right: 15px;
  top: 40%;
  transform: translateY(-50%);
  cursor: pointer;
}

.login-button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
}

.forgot-password {
  margin-top: 15px;
  font-size: 14px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
}

.forgot-password:hover {
  text-decoration: underline;
  color: #dbdada;
}
</style>
