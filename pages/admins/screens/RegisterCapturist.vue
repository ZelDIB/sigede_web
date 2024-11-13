<template>
    <div class="full-screen">
        <Navbar />
        <div>
            <div class="content">
                <p class="title">REGISTRO DE CAPTURISTA</p>
                <div class="container-form">
                    <form @submit.prevent="handleSubmit">
                        <div class="form-row">
                            <div class="form-column">
                                <div class="form-group">
                                    <label for="name" :class="{'error-label': errors.name}">Nombre*</label>
                                    <input type="text" id="name" v-model="form.name"
                                        :class="['form-control', { 'error': errors.name }]" placeholder="Nombre" />
                                    <small v-if="errors.name" class="error-message">{{ errors.name }}</small>
                                </div>

                                <div class="form-group">
                                    <label for="email" :class="{'error-label': errors.email}">Correo*</label>
                                    <input id="email" v-model="form.email"
                                        :class="['form-control', { 'error': errors.email }]" placeholder="Correo" />
                                    <small v-if="errors.email" class="error-message">{{ errors.email }}</small>
                                </div>

                                <div class="form-group">
                                    <label for="password" :class="{'error-label': errors.password}">Contraseña*</label>
                                    <input type="password" id="password" v-model="form.password"
                                        :class="['form-control', { 'error': errors.password }]" placeholder="Contraseña" />
                                    <small v-if="errors.password" class="error-message">{{ errors.password }}</small>
                                </div>

                                <div class="form-group">
                                    <label for="confirmPassword" :class="{'error-label': errors.confirmPassword}">Confirmar Contraseña*</label>
                                    <input type="password" id="confirmPassword" v-model="form.confirmPassword"
                                        :class="['form-control', { 'error': errors.confirmPassword }]"
                                        placeholder="Confirmar Contraseña" />
                                    <small v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</small>
                                </div>
                            </div>

                            <div class="image-column">
                                <img src="/customer_service.png" alt="Imagen de registro" class="register-image" />
                            </div>
                        </div>

                        <div class="button-group">
                            <button type="submit" class="submit-btn">Registrar capturista</button>
                            <button type="button" class="cancel-btn">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    components: {
        Navbar,
    },
    name: 'RegisterCapturist',
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
            errors: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
        };
    },
    methods: {
        handleSubmit() {
            this.errors = {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            };

            let valid = true;

            if (!this.form.name) {
                this.errors.name = 'El nombre es obligatorio';
                valid = false;
            }

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!this.form.email) {
                this.errors.email = 'El correo es obligatorio';
                valid = false;
            } else if (!emailRegex.test(this.form.email)) {
                this.errors.email = 'El correo electrónico no es válido';
                valid = false;
            }

            if (!this.form.password) {
                this.errors.password = 'La contraseña es obligatoria';
                valid = false;
            }

            if (!this.form.confirmPassword) {
                this.errors.confirmPassword = 'Confirma la contraseña';
                valid = false;
            }
            if (this.form.password !== this.form.confirmPassword) {
                this.errors.confirmPassword = 'Las contraseñas no coinciden';
                valid = false;
            }

            console.log(this.errors);  

            if (!valid) {
                return;
            }

            console.log('Formulario enviado:', this.form);
            alert('Formulario enviado correctamente');
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

.container-form {
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
    width: 100%;
    justify-content: space-between;
}

.form-column {
    width: 60%;
    padding: 20px;
}

.image-column {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
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
