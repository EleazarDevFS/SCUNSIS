<script>
// Se importan los componentes AsideComponent y ActiveUser
import AsideComponent from '../components/AsideComponent.vue';
import ActiveUser from '../components/ActiveUser.vue';
export default {
    name: 'GenConsView',
    components: {
        AsideComponent,
        ActiveUser
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
            <h1><span>Generación de constancias</span></h1>
        </main>
    </div>
</template>
<style scoped>
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
    background-color: #EBE7E7;
    gap: 20%;
    justify-content: center;
    align-items: center;
}

.header {
    width: 100%;
}

.aside {
    height: 100vh;
    width: 200px;
}
</style>