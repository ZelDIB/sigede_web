<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item" style="margin-left: 10px;">
          <img src="../assets/logo/LOGO.png" alt="SIGEDE Logo" height="40">
        </NuxtLink>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
  };
  </script>
  
  <style scoped>
  .navbar-item img {
    height: 40px;
  }
  .navbar-item{
    background-color: black;
  }
  </style>
  