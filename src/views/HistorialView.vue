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

    }
}
</script>
<template>
    <div class="historial-container">
        <ActiveUser class="header" />
        <AsideComponent class="aside" />
        <main>
            <h1>Historial de constancias</h1>
        </main>
    </div>
</template>
<style scoped>
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

main {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: #EBE7E7;
    gap: 15%;
    justify-content: center;
    align-items: center;
    padding: 5%;
}
</style>