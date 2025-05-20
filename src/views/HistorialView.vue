<script>
import ActiveUser from '../components/ActiveUser.vue';
import AsideComponent from '../components/AsideComponent.vue';
export default {
    name: 'HistorialView',
    components: {
        ActiveUser,
        AsideComponent
    },
    mounted() {
        document.body.style.background = '#EBE7E7';
    }
}
</script>
<template>
    <div class="historial-container">
        <ActiveUser class="header" />
        <AsideComponent class="aside" />
        <main>
            <!-- Formulario para generar constancias -->
            <!-- <form id="form-create-constance" action="">
                
                <span>Seleccione una hoja maestra previamente diseñada: </span><input type="file">
                <input type="submit" value="Subir">
            </form> -->
            <ul>
                <li>
                    <div class="barra-busqueda">
                    <input type="text" name="" id=""><input type="button" value="Mes actual"><input type="button" value="Mes pasado"><input type="button" value="Buscar por fecha">
                    </div>
                </li>
                <li v-for="i in 30">
                    Estamos creando la lista de historial con VUE.js
                    <input value="Ver  grupo de constancias" type="button">
                </li>
            </ul>

        </main>
    </div>
</template>
<style scoped>
/* Styles para la lista de historial*/
* {
    padding: 0;
    margin: 0;
}

main {
    width: calc(100% - 200px);
}

ul {
    /* Centrado y display*/
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* Estilo a la lista*/
    list-style: none;
}

ul li {
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #D9D9D9;
    border: solid 1px rgba(0, 0, 0, .1);
    width: 100%;
    padding: 10px;
    gap: 5%;
}

ul li:hover {
    background-color: #fff;
}

ul li:nth-child(2n):not(.barra-busqueda) {
    background-color: #C4C4C4;
}

.barra-busqueda{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.barra-busqueda input{
    border: solid 1px rgba(0,0,0,.3);
    width: 25%;
    height: 100%;
    border-collapse: collapse;
}
.barra-busqueda input[type="text"]{
    border: 2px solid rgba(0,0,0,.4);
}

.historial-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
}

.header {
    width: 100%;
}

.aside {
    height: 100vh;
    width: 200px;
}
</style>