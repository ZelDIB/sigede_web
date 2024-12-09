<template>
  <div class="full-screen">
    <CredentialLoader v-if="isLoading" />
    <div v-else>
      <Navbar />
      <div class="content">
        <p class="title">VISUALIZACION QR</p>
        <div class="container-form">
          <div class="form-row">
            <div class="form-column">
              <div class="user-info">
                <h2 class="subtitle is-4">
                  <strong>Nombre:</strong> Carlos Juan
                </h2>
                <p><strong>Puesto:</strong> Gerente</p>
                <p><strong>Ubicación:</strong> Groove Street</p>
                <p><strong>Fecha de nacimiento:</strong> 16-09-1996</p>
                <p><strong>RFC:</strong> NCUJENWAUCIBN</p>
                <p><strong>CURP:</strong> NCUJENWAUCIBN</p>
                <p><strong>Número laboral:</strong> 6648HBCVJ</p>
              </div>
            </div>

            <div class="image-column">
              <figure class="image is-128x128 mx-auto">
                <img class="is-rounded" :src="userImage" alt="Foto de perfil" />
              </figure>
              <div class="vigencia">
                <p>Vigencia</p>
                <span class="vigencia-date">15-09-2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/NavBar.vue";
import CredentialLoader from "../pages/auth/loader.vue";

export default {
  components: {
    Navbar,
    CredentialLoader,
  },
  data() {
    return {
      isLoading: false,
      userImage: "https://via.placeholder.com/128",
    };
  },
};
</script>

<style scoped>
.full-screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e4e4e4;
  height: 100%;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.title {
  margin: 10px 0;
  text-align: center;
  color: black;
  text-decoration: underline;
  font-size: 35px;
  letter-spacing: 0.15em;
  font-weight: 300;
}

.container-form {
  border-radius: 8px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background-color: white;
  padding: 3%;
  box-sizing: border-box;
  overflow-y: auto;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.form-column {
  flex: 1 1 60%;
  padding: 20px;
}

.image-column {
  flex: 1 1 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }

  .form-column,
  .image-column {
    flex: 1 1 100%;
    text-align: center;
  }
}
.user-info p,
.user-info h2 {
  margin: 5px 0;
  color: black;
  text-align: left;
}

.user-info h2 {
  font-size: 20px;
  font-weight: bold;
}

.user-info strong {
  color: black !important;
}

.vigencia {
  text-align: center;
  margin-top: 20px;
}

.vigencia-date {
  display: inline-block;
  background-color: #f6b145;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 5px 15px;
  border-radius: 5px;
}
</style>
