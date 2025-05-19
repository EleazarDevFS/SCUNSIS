<script>
// Se importan los componentes AsideComponent y ActiveUser
import AsideComponent from '../components/AsideComponent.vue';
import ActiveUser from '../components/ActiveUser.vue';
import NavigationGC from '../components/NavigationGC.vue'
import { NavigationFailureType } from 'vue-router';
export default {
    name: 'GenConsView',
    components: {
        AsideComponent,
        ActiveUser,
        NavigationGC
    },
    mounted() {
        // Cada que se abra esta vista se ejecutarán las siguientes lineas de código
        document.body.style.background = "#EBE7E7"
    }
}
</script>
<template>
    <div class="Gen-Con-container">
        <ActiveUser class="header" />
        <AsideComponent class="aside" />
        <main>
            <NavigationGC/>
        </main>
    </div>
</template>
<style scoped>
/* Estilos para contenido main */

.Gen-Con-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
}

main {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: #fff;
    gap: 20%;
    justify-content: center;
}

.header {
    width: 100%;
}

.aside {
    height: 100vh;
    width: 200px;
}
</style>