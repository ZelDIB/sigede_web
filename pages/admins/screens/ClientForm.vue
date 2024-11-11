<template>
    <div class="full-screen">
        <Navbar />
        <div class="content">
            <p class="title">DISEÑO DE FORMULARIO</p>
            <div class="container-form">
                <form @submit.prevent="handleSubmit">
                    <div class="add-container">
                        <button type="button" class="is-add" @click="addField">Agregar Fila</button>
                    </div>

                    <div v-for="(field, index) in formFields" :key="index" class="columns is-multiline">
                        <div class="column is-half">
                            <label :for="'name' + index" class="label">Nombre*</label>
                            <input type="text" :id="'name' + index" class="input" placeholder="Nombre"
                                v-model="field.name" />
                        </div>
                        <div class="column is-one-quarter">
                            <label :for="'field-type' + index" class="label">Tipo de campo*</label>
                            <div class="select">
                                <select :id="'field-type' + index" class="select-input" v-model="field.type">
                                    <option value="text">Texto</option>
                                    <option value="url">URL/Enlace</option>
                                    <option value="tel">Teléfono</option>
                                    <option value="number">Número</option>
                                    <option value="date">Fecha</option>
                                </select>
                            </div>
                        </div>
                        <div class="column is-one-quarter checkbox-container">
                            <label class="checkbox">
                                <input type="checkbox" :id="'is-required' + index" v-model="field.required" />
                                Obligatorio
                            </label>
                        </div>
                        <div class="column is-one-quarter checkbox-container">
                            <label class="checkbox">
                                <input type="checkbox" :id="'show-qr' + index" v-model="field.showQr" />
                                Ver en QR
                            </label>
                        </div>

                        <!-- Botón de Papelera en la misma fila -->
                        <div class="column five">
                            <button type="button" class="delete-btn" @click="removeField(index)">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>


                    <div class="form-row">
                        <div class="form-group">
                            <button type="submit" class="button is-save">Guardar</button>
                            <button type="button" class="button is-cancel">Cancelar</button>
                        </div>
                    </div>
                </form>
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
    name: "ClientForm",
    data() {
        return {
            formFields: [
                {
                    name: '',
                    type: 'text',
                    required: false,
                    showQr: false,
                },
            ],
        };
    },
    methods: {
        handleSubmit() {
            console.log("Campos guardados:", this.formFields);
            this.resetForm();
        },

        addField() {
            console.log('Antes de agregar campo:', this.formFields);
            this.formFields.push({
                name: '',
                type: 'text',
                required: false,
                showQr: false,
            });
            console.log('Después de agregar campo:', this.formFields);
        },

        removeField(index) {
            this.formFields.splice(index, 1);
            console.log('Después de eliminar campo:', this.formFields);
        },

        resetForm() {
            this.formFields = [
                {
                    name: '',
                    type: 'text',
                    required: false,
                    showQr: false,
                },
            ];
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
    padding: 10px;
    box-sizing: border-box;
    overflow-y: auto;
    max-height: 90vh;
    overflow-x: hidden;
}

label {
    font-weight: bold;
    color: black;
}

.input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    background-color: #e0e0e0;
    color: black;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.select-input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    background-color: #e0e0e0;
    color: black;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

input::placeholder {
    color: #888;
}

.columns {
    margin-bottom: 20px;
}

.column {
    display: flex;
    flex-direction: column;
}

.button {
    width: 180px;
    height: 35px;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    border: none;
    padding: 0;
    text-align: center;
    margin: 10px 0;
}

.add-container {
    display: flex;
    justify-content: center;

}

.is-add {
    width: 180px;
    height: 35px;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    border: none;
    padding: 0;
    text-align: center;
    background-color: black;
    margin-top: 7px;
    margin-bottom:10px ;
}

.is-save {
    background-color: black;
}

.is-cancel {
    background-color: #87342C;
}

.form-row {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
}

.is-multiline {
    display: flex;
    flex-wrap: wrap;
}

.checkbox input {
    width: 25px;
    height: 25px;
    background-color: black;
    border-radius: 5px;
    border: 2px solid #ccc;
    cursor: pointer;
    transition: background-color 0.3s;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #e0e0e0;
}

.checkbox input:checked {
    background-color: #007bff;
}

.checkbox {
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    cursor: pointer;
    color: black;
}

.checkbox-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: auto;
    padding-bottom: 20px;
}

.delete-btn {
    background: none;
    border: none;
    color: #ff4d4d;
    cursor: pointer;
    font-size: 20px;
    padding: 0;
    margin: 0;
}

.delete-btn:hover {
    color: #ff0000;
}

.fa-trash {
    font-size: 20px;
}

.five {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: auto;
    padding-bottom: 20px;
}

/* is-flex is-align-items-center */
@media (min-width: 1024px) {
    .column.is-half {
        flex: 1 1 48%;
    }

    .column.is-one-quarter {
        flex: 1 1 15%;
    }

    .column.five {
        flex: 1 1 5%;
    }
}

@media (min-width: 472px) {
    .button {
        margin: 0 15px;
    }
}

@media (max-width: 471px) {
    .button {
        width: 100%;
    }
}
</style>
