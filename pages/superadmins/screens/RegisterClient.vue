<template>
    <div class="full-screen">
        <Navbar />
        <div>
            <div class="content">
                <p class="title">DATOS DE LA EMPRESA</p>
                <div class="container-form">
                    <form @submit.prevent="handleSubmit">
                        <div class="form-row">
                            <!-- Columna del formulario -->
                            <div class="form-column">
                                <div class="form-group">
                                    <label for="name" :class="{ 'error-label': errors.name }">Nombre de la
                                        institución*</label>
                                    <input type="text" id="name" v-model="form.name"
                                        :class="['form-control', { error: errors.name }]" />
                                    <small v-if="errors.name" class="error-message">{{
                                        errors.name
                                    }}</small>
                                </div>

                                <div class="form-group">
                                    <label for="phone" :class="{ 'error-label': errors.phone }">Teléfono de
                                        contacto*</label>
                                    <input type="text" id="phone" v-model="form.phone"
                                        :class="['form-control', { error: errors.phone }]" />
                                    <small v-if="errors.phone" class="error-message">{{
                                        errors.phone
                                    }}</small>
                                </div>

                                <div class="form-group">
                                    <label for="email" :class="{ 'error-label': errors.email }">Correo de
                                        contacto*</label>
                                    <input id="email" v-model="form.email"
                                        :class="['form-control', { error: errors.email }]" />
                                    <small v-if="errors.email" class="error-message">{{
                                        errors.email
                                    }}</small>
                                </div>

                                <div class="form-group">
                                    <label for="address" :class="{ 'error-label': errors.address }">Dirección*</label>
                                    <input type="address" id="address" v-model="form.address"
                                        :class="['form-control', { error: errors.address }]" />
                                    <small v-if="errors.address" class="error-message">{{
                                        errors.address
                                    }}</small>
                                </div>
                            </div>

                            <div class="image-column">
                                <div class="form-group dotted-border">
                                    <label for="imageUpload">Subir imagen*</label>
                                    <div class="custom-file-input-container ">
                                        <button type="button" class="custom-file-button">Seleccionar archivo</button>
                                        <span class="file-name">{{ form.image ? form.image.name : "No se ha seleccionado ningún archivo" }}</span>
                                        <input
                                            type="file"
                                            id="imageUpload"
                                            @change="handleImageUpload"
                                            accept="image/png, image/jpeg, image/jpg, image/gif"
                                            class="custom-file-input"
                                        />
                                    </div>
                                    <small v-if="errors.image" class="error-message">{{ errors.image }}</small>

                                    <div v-if="imagePreview" class="image-preview">
                                        <img :src="imagePreview" alt="Preview" class="register-image" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="button-group">
                            <button type="submit" class="submit-btn">
                                Registrar institución
                            </button>
                            <button type="button" class="cancel-btn"  @click="goBack">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "~/components/superadmins/Navbar.vue";
import { registerOrgatization } from "~/services/ServicesSuperAdmin";
export default {
    components: {
        Navbar,
    },
    data() {
        return {
            form: {
                name: "",
                email: "",
                phone: "",
                address: "",
                image: null,
            },
            imagePreview: null,
            errors: {
                name: "",
                email: "",
                phone: "",
                address: "",
                image: "",
            },
        };
    },
    methods: {
        goBack (){
            this.$router.push("./OrganizationsList");
        },
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const validImageTypes = [
                    "image/png",
                    "image/jpeg",
                    "image/jpg",
                    "image/gif",
                ];
                if (!validImageTypes.includes(file.type)) {
                    this.errors.image =
                        "El archivo debe ser una imagen válida (.png, .jpg, .jpeg, .gif)";
                    this.form.image = null;
                    this.imagePreview = null;
                } else {
                    this.errors.image = "";
                    this.form.image = file;
                    this.imagePreview = URL.createObjectURL(file);
                }
            }
        },
        async handleSubmit() {
            this.errors = {
                name: "",
                email: "",
                phone: "",
                address: "",
                image: "",
            };

            let valid = true;

            if (!this.form.name) {
                this.errors.name = "El nombre es obligatorio";
                valid = false;
            }
            if (!this.form.phone) {
                this.errors.phone = "El teléfono es obligatorio";
                valid = false;
            }

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!this.form.email) {
                this.errors.email = "El correo es obligatorio";
                valid = false;
            } else if (!emailRegex.test(this.form.email)) {
                this.errors.email = "El correo electrónico no es válido";
                valid = false;
            }

            if (!this.form.address) {
                this.errors.address = "La dirección es obligatoria";
                valid = false;
            }

            if (!this.form.image) {
                this.errors.image = "Es obligatorio subir una imagen";
                valid = false;
            }

            if (!valid) {
                return;
            }
            
              try {
                const sendData = {
                    "institutionName": this.form.name,
                    "institutionAddress": this.form.address,
                    "institutionEmail": this.form.email,
                    "institutionPhone": this.form.phone,
                    "logo": "https://www.utez.edu.mx/wp-content/uploads/2024/08/LOGO_UTEZ-2016.png"//Aqui se debe de sustituir la URL que de devielve cloudinary
                };
                const response = await registerOrgatization(sendData);

                if (response === "Ocurrio un error en la peticion") {
                    this.errorMessage = "Ocurrio un error en la peticion.";
                    alert("fallo en el registro :(")
                } else {
                    this.form = {
                        name: "",
                        email: "",
                        phone: "",
                        address: "",
                        image: null,
                    }  
                    alert("Registro exitosooooooo =D")
                    this.goBack();

                }

            } catch (e) {
                this.errorMessage = "Ocurrio un error en la peticion.";
                alert("fallo en el registro :(")
            }

            console.log("Formulario enviado:", this.form);
            alert("Formulario enviado correctamente");
        },
    },
};
</script>

<style scoped>
html,
body {
    height: 100%;
    margin: 0;
    overflow-y: auto;
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
    overflow-y: hidden;
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
    padding: 5px;
}

.image-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.dotted-border {
    border: 2px dashed #ccc;
    padding: 15px;
    width: 100%;
    text-align: center;
    border-radius: 8px;
}

.custom-file-input-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.custom-file-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}

.custom-file-button {
    background-color: #e0e0e0;
    color: black;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid #ccc;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    max-width: 300px;
    width: 90%;
}



.file-name {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
    text-align: center;
}

.register-image {
    max-width: 100%;
    max-height: 300px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
    .form-column {
        flex: 1 1 60%;
        padding: 20px;
    }

    .image-column {
        flex: 1 1 40%;
        padding: 20px;

    }
}

.register-image {
    max-width: 75%;
    max-height: 300px;
    height: auto;
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

.button-group {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
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
    width: 200px;
}

.submit-btn {
    background-color: black;
}

.cancel-btn {
    background-color: #87342c;
}

label {
    font-weight: bold;
    color: black;
}

label.error-label {
    color: red;
}
</style>
