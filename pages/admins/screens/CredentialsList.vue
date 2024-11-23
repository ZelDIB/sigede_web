<template>
    <div class="full-screen">
        <Navbar />
        <div>
            <div class="content">
                <p class="title">USUARIOS</p>
                <div class="content-table">
                    <div class="search-section">
                        <div class="search-icon" style="border-radius:  10px 0 0 0;">
                            <i class="fas fa-user-plus icon"></i>
                        </div>
                        <div class="search-container">
                            <input type="text" v-model="searchTerm" class="search-input" placeholder="Buscar..."
                                @keyup="filterList" />
                            <i class="fas fa-magnifying-glass icon" @click="filterList"></i>
                        </div>
                        <div class="search-icon" style="border-radius: 0 10px 0 0;">
                            <div style="width: 50%;" @click="sortByName">
                                <i class="fas fa-arrow-down-a-z icon"></i>
                            </div>
                            <div style="width: 50%;" @click="invertListOrder">
                                <i class="fas fa-up-down icon"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="imagen-column">Foto</th>
                                    <th class="name-column">Nombre del usuario</th>
                                    <th class="status-column">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in filteredList" :key="index">
                                    <td>
                                        <div class="status-container">
                                            <img :key="'img_' + index" :src="item.imagen" class="imagen" />
                                        </div>
                                    </td>
                                    <td>{{ item.name }}</td>
                                    <td>
                                        <div class="status-container">
                                            <div class="edit-icon">
                                                <i class="fas fa-edit icon"></i>
                                            </div>
                                            <span :class="item.status ? 'status-active' : 'status-inactive'">
                                                {{ item.status ? 'Activo' : 'Suspendido' }}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar';

export default {
    components: {
        Navbar
    },
    name: 'CredentialsList',
    data() {
        return {
            lista: [
                { imagen: "https://i.pinimg.com/736x/e2/dd/48/e2dd486606bbf36290ceae5f63b2338b.jpg", name: 'Pepe Gordiola Picaporte', status: false },
                { imagen: "https://i.pinimg.com/736x/e2/dd/48/e2dd486606bbf36290ceae5f63b2338b.jpg", name: 'Ameno Juan de Dios', status: true },
                { imagen: "https://i.pinimg.com/736x/e2/dd/48/e2dd486606bbf36290ceae5f63b2338b.jpg", name: 'Ameno Juan de Dios', status: true },
                { imagen: "https://i.pinimg.com/736x/e2/dd/48/e2dd486606bbf36290ceae5f63b2338b.jpg", name: 'Ameno Juan de Dios', status: false },
                { imagen: "https://i.pinimg.com/736x/e2/dd/48/e2dd486606bbf36290ceae5f63b2338b.jpg", name: 'Ameno Juan de Dios', status: false },
                { imagen: "https://i.pinimg.com/736x/e2/dd/48/e2dd486606bbf36290ceae5f63b2338b.jpg", name: 'Ameno Juan de Dios', status: true },
                { imagen: "https://i.pinimg.com/736x/e2/dd/48/e2dd486606bbf36290ceae5f63b2338b.jpg", name: 'Ameno Juan de Dios', status: true },
                { imagen: "https://i.pinimg.com/736x/e2/dd/48/e2dd486606bbf36290ceae5f63b2338b.jpg", name: 'Ameno Juan de Dios', status: false },
                { imagen: "https://i.pinimg.com/736x/e2/dd/48/e2dd486606bbf36290ceae5f63b2338b.jpg", name: 'Ameno Juan de Dios', status: false },
                { imagen: "https://i.pinimg.com/736x/e2/dd/48/e2dd486606bbf36290ceae5f63b2338b.jpg", name: 'Omar Oscar Santander Santana', status: false },
                { imagen: "https://i.pinimg.com/736x/e2/dd/48/e2dd486606bbf36290ceae5f63b2338b.jpg", name: 'Ameno Juan de Dios', status: true },
                { imagen: "https://i.pinimg.com/736x/e2/dd/48/e2dd486606bbf36290ceae5f63b2338b.jpg", name: 'Ameno Juan de Dios', status: true },
                { imagen: "https://i.pinimg.com/736x/e2/dd/48/e2dd486606bbf36290ceae5f63b2338b.jpg", name: 'Ameno Juan de Dios', status: false },
            ],
            searchTerm: '', 
            isAscending: true,
        };
    },
    computed: {
        // Filtro de búsqueda por nombre
        filteredList() {
            if (!this.searchTerm) {
                return this.lista;
            }
            return this.lista.filter(item =>
                item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        }
    },
    methods: {
        // Ordena de manera alfabética
        sortByName() {
            this.isAscending = !this.isAscending;
            this.lista.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();

                if (this.isAscending) {
                    return nameA.localeCompare(nameB);
                } else {
                    return nameB.localeCompare(nameA);
                }
            });
        },
        // Invierte el orden de la lista
        invertListOrder() {
            this.lista.reverse();
        },
 
    }
}
</script>


<style scoped>
html,
body {
    height: 100%;
    margin: 0;
    overflow-y: hidden;
}

.full-screen {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #E4E4E4;
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

.content-table {
    border-radius: 8px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.search-section {
    display: flex;
    align-items: center;
    width: 100%;
}

.search-icon {
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #917D62;
    cursor: pointer;
}

.search-container {
    height: 40px;
    display: flex;
    align-items: center;
    background-color: black;
    flex-grow: 1;
    padding: 0 10px;
}

.search-input {
    flex-grow: 1;
    border: none;
    padding: 10px;
    color: white;
    background-color: black;
}

.icon {
    color: white;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.table {
    width: 100%;
    border-collapse: collapse;
}

.table th,
.table td {
    padding: 10px;
    border: none;
}

.table th {
    background-color: #917D62;
}

.table tr {
    color: white;
}

.table td {
    background-color: white;
    color: black;
}

.search-icon div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.imagen-column {
    width: 15%;
    text-align: center;
}

.name-column {
    width: 60%;
    text-align: left;
}

.status-column {
    width: 25%;
    text-align: center;
}

.status-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.edit-icon {
    width: 30px;
    height: 30px;
    background-color: #917D62;
    border-radius: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}

.edit-icon .icon {
    color: white;
    font-size: 16px;
}

.status-active,
.status-inactive {
    display: inline-block;
    border-radius: 5px;
    text-align: center;
    width: 80%;
    color: white;
    opacity: 0.65;
}

.imagen {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
}


.status-active {
    background-color: green;
}

.status-inactive {
    background-color: red;
}
</style>
