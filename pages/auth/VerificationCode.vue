<template>
    <div class="screen-split">
      <div class="left-half">
        <div class="container">
          <img src="../../public/logoweb.png" alt="" width="220px">
          <p class="title">SIGEDE</p>
          <p class="sig">Sistema de gestión de credenciales</p>
        </div>
      </div>
      <div class="right-half">
        <div class="container2">
          <p class="title2">Código de Verificación</p>
          <label for="code">Código *</label>
          <div class="code-inputs">
            <input type="text" maxlength="1" class="code-input" @input="focusNext($event, 0)">
            <input type="text" maxlength="1" class="code-input" @input="focusNext($event, 1)">
            <input type="text" maxlength="1" class="code-input" @input="focusNext($event, 2)">
            <input type="text" maxlength="1" class="code-input" @input="focusNext($event, 3)">
            <input type="text" maxlength="1" class="code-input" @input="focusNext($event, 4)">
            <input type="text" maxlength="1" class="code-input" @input="focusNext($event, 5)">
          </div>
          <button class="login-button" @click="validateCode">Validar código</button>
          <p class="resend-text">¿Aún no has recibido el código?</p>
          <a href="/" class="forgot-password">Reenviar código</a>
        </div>
      </div>
    </div> 
  </template>
  
  <script>
 import ServiceAuth from "../../services/ServicesAuth.js";

export default {
  methods: {
    focusNext(event, index) {
      const inputs = document.querySelectorAll(".code-input");
      if (event.target.value && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    },
    async validateCode() {
      const inputs = Array.from(document.querySelectorAll(".code-input"));
      const code = inputs.map(input => input.value).join("");

      const userEmail = JSON.parse(localStorage.getItem("authUser"))?.email;

      if (!code || !userEmail) {
        alert("Por favor, completa todos los campos.");
        return;
      }
      try {
        const response = await ServiceAuth.validateVerificationCode(code, userEmail);

        if (response.code === 200) {
          alert("Código validado correctamente.");
        } else {
          alert("Error: " + response.message);
        }
      } catch (error) {
        alert("Hubo un problema al validar el código: " + error.message);
      }
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
  
  .code-inputs {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }
  
  .code-input {
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    border: 1px solid #000;
    border-radius: 8px;
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
  
  .resend-text {
    margin-top: 20px;
    font-size: 14px;
    color: #666;
  }
  
  .forgot-password {
    margin-top: 5px;
    font-size: 14px;
    color: #999898;
    text-decoration: none;
    font-weight: bold;
  }
  
  .forgot-password:hover {
    color: #dbdada;
  }
  </style>
  