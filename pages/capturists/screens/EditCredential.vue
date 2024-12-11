<template>
  <div class="full-screen">
    <CredentialLoader v-if="isLoading" />
    <div v-else>
      <NavBar />
      <div class="content">
        <p class="title">EDITAR CREDENCIAL</p>
        <div class="edit-content">
          <form @submit.prevent="saveChanges">
            <div class="form-row">
              <div class="form-group">
                <label for="fullname">Nombre Completo</label>
                <input
                  type="text"
                  id="fullname"
                  v-model="credential.fullname"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="expirationDate">Fecha de Expiración</label>
                <input
                  type="datetime-local"
                  id="expirationDate"
                  v-model="credential.expirationDate"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="userPhoto">Foto del Usuario</label>
                <input
                  type="file"
                  id="userPhoto"
                  @change="handleImageUpload"
                  class="form-control"
                />
                <img v-if="imagePreview" :src="imagePreview" alt="Preview" class="image-preview" />
              </div>
            </div>

            <div v-for="(field, index) in credential.fields" :key="index" class="form-group">
              <label :for="'field-' + index">{{ field.tag }}</label>
              <input
                :id="'field-' + index"
                v-model="field.value"
                class="form-control"
              />
            </div>
            <div class="print-btn-style">
              <button type="" class="button print-btn">Imprimir Credencial</button>
            </div>
            <div class="button-group">
              <button type="submit" class="button save-btn">Guardar Cambios</button>
              <button type="button" class="button cancel-btn" @click="cancelEdit">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CredentialLoader from "~/pages/auth/loader.vue";
import { getCredentialWithFields, updateCredential } from "~/services/ServicesCapturist";
import NavBar from "~/components/NavBar.vue";
import { ServiceCloudinary } from "~/services/ServiceCloudinary";


export default {
  name: "EditCredential",
  components: {
    NavBar,
    CredentialLoader,
  },
  data() {
    return {
      credential: null,
      imagePreview: null,
      selectedFile: null,
      isLoading: true,
    };
  },
  methods: {
    async fetchCredential() {
      try {
        const credentialId = this.$route.query.id;
        const response = await getCredentialWithFields(credentialId);
        this.credential = response.data;
      } catch (error) {
        console.error("Error al cargar la credencial:", error);
      } finally {
        this.isLoading = false;
      }
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.selectedFile = file;
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
      }
    },
    async saveChanges() {
      try {
        this.isLoading = true;

        let uploadedImageUrl = this.credential.userPhoto;
        if (this.selectedFile) {
          uploadedImageUrl = await ServiceCloudinary.uploadImage(this.selectedFile);
        }

        const updatedData = {
          fullname: this.credential.fullname,
          userPhoto: uploadedImageUrl,
          expirationDate: this.credential.expirationDate,
          issueDate: this.credential.issueDate,
          fields: this.credential.fields.map((field) => ({
            tag: field.tag,
            value: field.value,
          })),
        };

        await updateCredential(this.$route.query.id, updatedData);
        alert("¡Cambios guardados correctamente!");
        this.$router.push("/capturists/screens/CredentialsList");
      } catch (error) {
        console.error("Error al guardar los cambios:", error);
        alert("Error al guardar los cambios. Verifica los datos.");
      } finally {
        this.isLoading = false;
      }
    },
    cancelEdit() {
      this.$router.push("/capturists/screens/CredentialsList");
    },
  },
  async mounted() {
    await this.fetchCredential();
  },
};
</script>
<style scoped>
.full-screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e4e4e4;
}

.content {
  text-align: center;
  justify-content: center;
  padding: 15px;
}

.title {
  margin: 10px 0;
  color: black;
  text-decoration: underline;
  font-size: 35px;
  letter-spacing: 0.15em;
  font-weight: 300;
}

.edit-content {
  max-width: 800px;
  margin: auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.form-group {
  flex: 1 1 calc(50% - 20px);
}

.form-control {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.image-preview {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.button {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.save-btn {
  background-color: #4caf50;
  color: white;
  border: none;
}

.cancel-btn {
  background-color: #f44336;
  color: white;
  border: none;
}

.print-btn-style{
  padding-top: 5%;
  padding-bottom: 5%;
}
</style>
