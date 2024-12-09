<template>
  <nav class="navbar">
    <div class="navbar-content">
      <router-link to="/" class="navbar-item">SIGEDE</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};

import "@fortawesome/fontawesome-free/css/all.css";
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
}

.navbar-icon {
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
