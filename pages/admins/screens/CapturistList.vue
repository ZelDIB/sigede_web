<template>
    <div>
        <Navbar />

        <div class="full-screen">
            <div class="content">
                <p class="title">CAPTURISTAS</p>
                <div class="content-table">
                    <div class="search-section">
                        <div class="search-icon" style="border-radius:  10px 0 0 0;">
                            <i class="fas fa-user-plus icon"></i>
                        </div>
                        <div class="search-container">
                            <input type="text" class="search-input" placeholder="Buscar..." />
                            <i class="fas fa-magnifying-glass icon"></i>
                        </div>
                        <div class="search-icon" style="border-radius: 0 10px 0 0;">
                            <div style="width: 50px;">
                                <i class="fas fa-arrow-down-a-z icon"></i>
                            </div>
                            <div style="width: 50px;">
                                <i class="fas fa-up-down icon"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="name-column">Nombre</th>
                                    <th class="status-column">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in lista" :key="index">
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
    name: 'CapturistList',
    data() {
        return {
            lista: [
                { name: 'Ameno Juan de Dios', status: false },
                { name: 'Ameno Juan de Dios', status: true },
                { name: 'Ameno Juan de Dios', status: true },
                { name: 'Ameno Juan de Dios', status: false },
                { name: 'Ameno Juan de Dios', status: false },
                { name: 'Ameno Juan de Dios', status: true },
                { name: 'Ameno Juan de Dios', status: true },
                { name: 'Ameno Juan de Dios', status: false },
                { name: 'Ameno Juan de Dios', status: false },
                { name: 'Ameno Juan de Dios', status: true },
                { name: 'Ameno Juan de Dios', status: true },
                { name: 'Ameno Juan de Dios', status: false },
                { name: 'Ameno Juan de Dios', status: false },
                { name: 'Ameno Juan de Dios', status: true },
                { name: 'Ameno Juan de Dios', status: true },
                { name: 'Ameno Juan de Dios', status: false },
                { name: 'Ameno Juan de Dios', status: false },
                { name: 'Ameno Juan de Dios', status: true },
                { name: 'Ameno Juan de Dios', status: true },
                { name: 'Ameno Juan de Dios', status: false },
                { name: 'Ameno Juan de Dios', status: false },
                { name: 'Ameno Juan de Dios', status: true },
                { name: 'Ameno Juan de Dios', status: true },
                { name: 'Ameno Juan de Dios', status: false },
            ]
        };
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #E4E4E4;
    overflow: hidden;
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

.name-column {
    width: 66.66%; 
    text-align: left; 
}

.status-column {
    width: 33.33%;
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
    border-radius: 25%;
    text-align: center;
    width: 160px;
    color: white;
    opacity: 0.65;
}

.status-active {
    background-color: green;
}

.status-inactive {
    background-color: red;
}
</style>
