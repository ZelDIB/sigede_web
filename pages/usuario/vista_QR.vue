<template>
    <div class="content-wrapper">
      <div class="box user-box">
        <figure class="image is-128x128 mx-auto">
          <img class="is-rounded" :src="userData.profilePicture" alt="Foto de perfil">
        </figure>
        <div class="content has-text-centered mt-4">
          <h2 class="title is-4">{{ userData.firstName }} {{ userData.lastName }}</h2>
          <p class="subtitle is-6">Fecha de caducidad: {{ userData.expirationDate }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "UserInfo",
    data() {
      return {
        userData: {
          profilePicture: "https://via.placeholder.com/128",
          firstName: "Nombre",
          lastName: "Apellido",
          expirationDate: "2025-12-31",
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .content-wrapper {
    background-color: #E4E4E4;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 60px;
  }
  
  .user-box {
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: white;
    width: 100%;
    max-width: 90%;
    height: calc(100vh - 60px);
    margin: 0;
  }
  </style>
  