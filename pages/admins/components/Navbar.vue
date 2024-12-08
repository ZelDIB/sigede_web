<template>
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">SIGEDE</router-link>

      <!-- Botón de hamburguesa para pantallas pequeñas -->
      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isActive }"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <!-- Menú desplegable -->
    <div :class="{ 'navbar-menu': true, 'is-active': isActive }">
      <div class="navbar-end">
        <div class="navbar-icons">
          <i class="fas fa-list navbar-icon"></i>
          <i class="fas fa-address-card navbar-icon"></i>
          <i class="fas fa-users navbar-icon"></i>
          <i class="fas fa-user navbar-icon"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    }
  }
}

import '@fortawesome/fontawesome-free/css/all.css';
</script>

<style scoped>
.navbar {
  padding: 0.4rem;
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
  align-items: center; /* Centra los iconos verticalmente */
}

.navbar-icon {
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
