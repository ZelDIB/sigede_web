<template>
  <div class="full-screen">
    <Navbar />
    <div class="content">
      <p class="title">REGISTRO DE ADMINISTRADOR</p>
      <div class="form-container">
        <form @submit.prevent="showAlert">
          <div class="form-row">
            <div class="form-column">
              <div class="form-group">
                <label for="name" :class="{ 'error-label': errors.name }"
                  >Nombre del administrador *</label
                >
                <input
                  id="name"
                  type="text"
                  v-model="form.name"
                  :class="['form-control', { error: errors.name }]"
                  placeholder="Nombre del administrador"
                />
                <small v-if="errors.name" class="error-message">{{
                  errors.name
                }}</small>
              </div>

              <div class="form-group">
                <label for="email" :class="{ 'error-label': errors.email }"
                  >Correo de contacto *</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  :class="['form-control', { error: errors.email }]"
                  placeholder="Correo de contacto"
                />
                <small v-if="errors.email" class="error-message">{{
                  errors.email
                }}</small>
              </div>

              <div class="buttons">
                <button type="submit" class="submit-btn">
                  Registrar administrador
                </button>
                <button class="cancel-btn" @click="handleCancel">
                  Cancelar
                </button>
              </div>
            </div>

            <div class="image-column">
              <img src="/shield-icon.png" alt="New admin" class="admin-image" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <CustomAlert
      v-if="showCustomAlert"
      :title="alertTitle"
      :message="alertMessage"
      :confirm-text="alertConfirmText"
      @confirm="handleConfirm"
      @cancel="handleCancelAlert"
    />
  </div>
</template>

<script setup>
import Navbar from "~/components/superadmins/Navbar.vue";
import CustomAlert from "~/components/CustomAlert.vue";
import { registerAdmin } from "~/services/ServicesSuperAdmin";
import { reactive, ref } from "vue";

const { $toast, $router } = useNuxtApp();

const form = reactive({
  name: "",
  email: "",
});

const errors = reactive({
  name: null,
  email: null,
});

const showCustomAlert = ref(false);
const alertTitle = ref("");
const alertMessage = ref("");
const alertConfirmText = ref("");

const validateForm = () => {
  errors.name = null;
  errors.email = null;

  let isValid = true;

  if (!form.name) {
    errors.name = "El nombre del administrador es obligatorio.";
    isValid = false;
  }

  if (!form.email) {
    errors.email = "El correo es obligatorio.";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "El correo no tiene un formato válido.";
    isValid = false;
  }

  return isValid;
};

const showAlert = () => {
  if (validateForm()) {
    alertTitle.value = "ADVERTENCIA";
    alertMessage.value = `¿Estás seguro de registrar a este administrador?`;
    alertConfirmText.value = "Registrar";
    showCustomAlert.value = true;
  }
};

const handleRegisterAdmin = () => {
  const data = {
    name: form.name,
    email: form.email,
  };
  const response = registerAdmin(data);
  console.log(response);

  if (response.status == 200) {
    $toast.success("Administrador registrado correctamente");
    $router.push("/OrganizationDetail.vue");
  }
};

const handleConfirm = () => {
  handleRegisterAdmin();
  showCustomAlert.value = false;
};

const handleCancelAlert = () => {
  showCustomAlert.value = false;
};

const handleCancel = () => {
  form.name = "";
  form.email = "";
  errors.name = null;
  errors.email = null;
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
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.15em;
}

.form-container {
  border-radius: 8px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background-color: white;
  padding: 3%;
  box-sizing: border-box;
  overflow-y: auto;
  max-height: 90vh;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}

.form-column,
.image-column {
  flex: 1 1 100%;
  padding: 20px;
}

.image-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .form-column {
    flex: 1 1 60%;
    order: 1;
  }

  .image-column {
    flex: 1 1 40%;
    order: 2;
  }
}

@media (max-width: 767px) {
  .form-column {
    order: 2;
  }

  .image-column {
    order: 1;
  }
}

.admin-image {
  max-width: 80%;
  max-height: 250px;
  height: auto;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  gap: 60px;
}

.submit-btn,
.cancel-btn {
  padding: 8px 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 43%;
}

.submit-btn {
  background-color: black;
}

.cancel-btn {
  background-color: #87342c;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: #e0e0e0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

label {
  font-weight: bold;
  color: black;
}

.form-control.error {
  border-color: red;
  background-color: #ffdddd;
  box-shadow: 0px 4px 8px rgba(255, 0, 0, 0.1);
}

.error-message {
  color: red;
  font-size: 12px;
  display: block;
}

label.error-label {
  color: red;
}
</style>
