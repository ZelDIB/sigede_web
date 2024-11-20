<template>
  <div class="full-screen">
    <Navbar />

    <div>
      <div class="content">
        <p class="title">ORGANIZACIONES</p>
        <div class="content-table">
          <div class="search-section">
            <div class="search-icon" style="border-radius: 10px 0 0 0">
              <i class="fas fa-user-plus icon"></i>
            </div>
            <div class="search-container">
              <input type="text" class="search-input" placeholder="Buscar..." />
              <i class="fas fa-magnifying-glass icon"></i>
            </div>
            <div class="search-icon" style="border-radius: 0 10px 0 0">
              <div style="width: 50%">
                <i class="fas fa-arrow-down-a-z icon"></i>
              </div>
              <div style="width: 50%">
                <i class="fas fa-up-down icon"></i>
              </div>
            </div>
          </div>
          <div class="grid-container">
            <div
              v-for="(empresa, index) in listaEmpresas"
              :key="index"
              class="card"
            >
              <img
                :src="empresa.imagen"
                alt="Logo de la empresa"
                class="card-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/pages/admins/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  name: "OrganizationsList",
  data() {
    return {
      listaEmpresas: [
        {
          imagen:
            "https://www.utez.edu.mx/wp-content/uploads/2024/08/LOGO_UTEZ-2016.png",
          id: 1,
        },
        {
          imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOhlSVeNbq54sz0U50sp6UcIxezr7luj8pw&s",
          id: 2,
        },
        {
          imagen:
            "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
          id: 3,
        },
        {
          imagen:
            "https://www.utez.edu.mx/wp-content/uploads/2024/08/LOGO_UTEZ-2016.png",
          id: 4,
        },
        {
          imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOhlSVeNbq54sz0U50sp6UcIxezr7luj8pw&s",
          id: 5,
        },
        {
          imagen:
            "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
          id: 6,
        },
        {
          imagen:
            "https://www.utez.edu.mx/wp-content/uploads/2024/08/LOGO_UTEZ-2016.png",
          id: 7,
        },
        {
          imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOhlSVeNbq54sz0U50sp6UcIxezr7luj8pw&s",
          id: 8,
        },
        {
          imagen:
            "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
          id: 9,
        },
      ],
    };
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  overflow: hidden; /* Oculta el scroll por defecto */
}

.full-screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e4e4e4;
  overflow-y: auto; /* Habilitar scroll vertical */
}

.content {
  text-align: center;
  justify-content: center;
  padding: 15px;
  overflow-y: auto; /* Habilitar scroll interno si es necesario */
  max-height: calc(100vh - 60px); /* Ajustar según la altura del Navbar */
}

.title {
  margin: 10px 0;
  color: black;
  text-decoration: underline;
  font-size: 35px;
  letter-spacing: 0.15em;
  font-weight: 300;
}

.content-table {
  border-radius: 8px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.search-section {
  display: flex;
  align-items: center;
  width: 100%;
}

.search-icon {
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #917d62;
  cursor: pointer;
}

.search-container {
  height: 40px;
  display: flex;
  align-items: center;
  background-color: black;
  flex-grow: 1;
  padding: 0 10px;
}

.search-input {
  flex-grow: 1;
  border: none;
  padding: 10px;
  color: white;
  background-color: black;
}

.icon {
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-icon div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit-icon .icon {
  color: white;
  font-size: 16px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
  justify-content: center;
}

.card {
  background: white;
  max-width: 390px;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 250px;
}

.card-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
