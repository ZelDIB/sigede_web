<template>
  <div class="full-screen">
    <Navbar />
    <div class="content">
      <p class="title">diseño de la indentificación</p>
      <!-- CONTENEDOR GENERAL -->
      <div class="container-form">
        <!-- CONTENEDOR DE FORMULARIO -->
        <div class="form">
          <!-- CONTENEDOR DE CAMPOS IZQUIERDO-->
          <div class="formIzq">
            <h3 class="titleList">Lista de campos</h3>
            <table class="scrollable-table">
              <thead>
                <tr>
                  <td>
                    <div class="inputContainer">
                      <input
                        class="inputStyle"
                        type="text"
                        placeholder="Buscar..."
                      />
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Nombre del campo</td>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-for="(campo, index) in campos" :key="index">
                                    <td>{{ campo.nombre }}</td>
                                    <td>nombre</td>
                                </tr> -->

                <tr>
                  <td>Nombre</td>
                </tr>
                <tr>
                  <td>Apellido</td>
                </tr>
                <tr>
                  <td>Telefono</td>
                </tr>
                <tr>
                  <td>Curp</td>
                </tr>
                <tr>
                  <td>direccion</td>
                </tr>
                <tr>
                  <td>github</td>
                </tr>
                <tr>
                  <td>email</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="containerRight">
            <div
              class="zoneFile"
              @click="triggerFileInput"
              @dragover.prevent
              @drop.prevent="handleFileDrop"
            >
              <h3 class="titleList">
                subir archivo word <i class="fa-solid fa-upload"></i>
              </h3>
            </div>
            <input
              type="file"
              class="hidden-file-input"
              ref="fileInput"
              accept=".doc,.docx"
              @change="handleFileUpload"
            />
          </div>
        </div>
        <div class="sideBtn">
          <button class="button is-success btnStyle">Continuar</button>
          <button class="button is-danger btnStyle">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        console.log("Archivo cargado:", file.name);
      }
    },
    handleFileDrop(event) {
      const file = event.dataTransfer.files[0];
      if (file &&(file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
        console.log("Archivo arrastrado:", file.name);
      } else {
        console.error("Por favor, arrastra un archivo Word válido.");
      }
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  overflow-y: auto;
}

p {
  text-transform: uppercase;
}

.inputStyle {
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  caret-color: white;
  color:white
}

::placeholder {
  color: white;
}

.inputContainer{
    display: flex;
    flex-direction: row;
}

.full-screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e4e4e4;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
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

@media (max-width: 768px) {
  .title {
    font-size: 16px;
    font-weight: bolder;
  }
}

.container-form {
  border-radius: 8px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background-color: white;
  box-sizing: border-box;
  overflow-y: auto;
  max-height: 75vh;
  overflow-x: hidden;
  display: grid;
}

.form {
  display: grid;
  grid-template-columns: 50% 50%;
  overflow-wrap: break-word;
}

@media (max-width: 768px) {
  .form {
    grid-template-columns: 1fr;
  }
}


.container-form .titleList {
  color: black;
  font-size: 25px;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  text-align: center;
}

.formIzq {
  padding: 25px;
  justify-content: center;
  align-items: center;
}

.scrollable-table {
  color: black;
  border-collapse: separate;
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
}

.scrollable-table thead {
  display: table;
  width: 100%;
  table-layout: fixed;
  background-color: rgb(146, 125, 101);
}

.scrollable-table tbody {
  display: block;
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
  table-layout: fixed;
}

.scrollable-table tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

.containerRight {
  justify-content: center;
  align-items: center;
  display: flex;
  padding-right: 10%;
  padding-left: 10%;
  padding-top: 10%;
}

.zoneFile {
  background-color: rgb(194, 194, 194);
  width: 100%;
  height: calc(35vh - 20px);;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: background-color 0.3s ease;
}

.zoneFile:hover {
  background-color: #ddd;
  cursor: pointer;
}

.hidden-file-input {
  display: none;
}

.sideBtn {
  height: 20vh;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
}

.btnStyle{
    padding-left: 50px;
    padding-right: 50px;
    color:white
}

@media (max-width: 768px) {
  .sideBtn {
    padding: 20px 0px 20px 0px;
    flex-direction: column;
    gap: 10px;
  }
}

</style>
