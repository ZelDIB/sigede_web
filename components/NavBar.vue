<template>
  <nav class="navbar">
    <div class="navbar-content">
      <router-link to="/" class="navbar-item">SIGEDE</router-link>
      <div class="navbar-icons">
        <div
          v-for="item in navItems"
          :key="item.route"
          class="navbar-icon"
          @click="navigate(item.route)"
        >
          <i :class="item.icon"></i> {{ item.name }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { navbarConfig } from "@/utils/navbarConfig";

export default {
  name: "NavBar",
  data() {
    return {
      role: "DEFAULT", // Valor inicial predeterminado
    };
  },
  computed: {
    navItems() {
      if (!process.client) {
        return navbarConfig.DEFAULT; // En el servidor, usa el rol predeterminado
      }
      return navbarConfig[this.role] || navbarConfig.DEFAULT; // Si no hay rol, usa DEFAULT
    },
  },
  created() {
    if (process.client) {
      const storedRole = localStorage.getItem("role");
      this.role = storedRole || "DEFAULT"; // Asigna el rol o DEFAULT
    }
  },
  methods: {
    navigate(route) {
      if (route) {
        this.$router.push(route); // Redirige usando $router.push
      } else {
        console.error("Ruta no válida:", route);
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: black;
  padding: 0.4rem;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-item {
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  letter-spacing: 0.5em;
}

.navbar-item:hover {
  text-decoration: underline;
}

.navbar-icons {
  display: flex;
  gap: 1.5rem;
  margin-right: 1rem; /* Espacio adicional al borde derecho */
}

.navbar-icon {
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 0.5rem; /* Espacio entre íconos y el borde si necesario */
}
</style>
