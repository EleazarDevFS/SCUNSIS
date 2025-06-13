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
        const dateBtn = document.getElementById('date');
        const barSearch = document.getElementById('barra-search');
        dateBtn.addEventListener('click', ()=>{
            barSearch.style.display = 'inline';
        })
    }
}
</script>
<template>
    <div class="historial-container">
        <main>
            <ul>
                <li id="search">
                    <div class="barra-busqueda">
                    <input type="button" value="Todo"><input type="button" value="Mes actual"><input type="button" value="Mes pasado"><input type="button" value="Por fecha" id="date"><input style="display: none;" type="date" name="" id="barra-search">
                    </div>
                </li>
                <li v-for="i in 30">
                    Se crearón 20 constancias para la 16th jornada de Informática
                    <input value="Ver más" type="button" id="ver-mas">
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
    width: calc(100% - 151px);
    height: calc(100% - 90px);
    overflow-y: auto;
}

.historial-container {
    width: calc(100vw - 100px);
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
    gap: 2%;
}



ul li:nth-child(2n):not(.barra-busqueda) {
    background-color: #C4C4C4;
}
#search:hover{
    background-color: #D9D9D9;
}

.barra-busqueda{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.barra-busqueda input{
    border: solid 1px rgba(0,0,0,.3);
    width: 20%;
    height: 100%;
    border-collapse: collapse;
    padding: 5px;
}
.barra-busqueda input:hover{
    background-color: #7C0A02;
    color: #fff;
    font-weight: 500;
}
.barra-busqueda input[type="text"]{
    border: 2px solid rgba(0,0,0,.4);
}

#ver-mas{
    border: solid 3px rgba(0,0,0,.1);
    padding: 5px;
    border-radius: 5px;
    font-weight: 600;
    color: #7C0A02;
}
#ver-mas:hover{
    background-color: #7C0A02;
    color: #fff;
    font-weight: 700;
}

</style>