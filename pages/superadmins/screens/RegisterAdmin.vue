<template>
  <div class="full-screen">
    <Navbar />
    <div class="content">
      <p class="title">REGISTRO DE ADMINISTRADOR</p>

      <div class="form-container box">
        <div class="field">
          <label class="label">Nombre del administrador *</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Nombre del administrador"
            />
          </div>
        </div>

        <div class="field">
        <label class="label">Correo de contacto *</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="Correo de contacto"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Contraseña *</label>
        <div class="control has-icons-right">
          <input
            class="input"
            type="password"
            placeholder="Contraseña"
          />
          <span class="icon is-small is-right">
            <i class="fas fa-eye"></i>
          </span>
        </div>
      </div>

      <!--<div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" />
            Permiso para crear más administradores
          </label>
        </div>
      </div>-->

      <div class="buttons is-centered">
        <button class="button is-black">
          Registrar administrador
        </button>
        <button class="button is-danger is-dark">Cancelar</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "~/components/superadmins/Navbar.vue";
</script>

<style scoped>
.full-screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e4e4e4;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.title {
  margin-bottom: 20px;
  color: black;
  text-decoration: underline;
  font-size: 35px;
  letter-spacing: 0.15em;
  font-weight: 300;
}

.form-container {
  max-width: 80%;
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.buttons {
  margin-top: 20px;
}
</style>
