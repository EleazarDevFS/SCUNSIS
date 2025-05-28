<script>
import ActiveUser from '../components/ActiveUser.vue';
import AsideComponent from '../components/AsideComponent.vue';
import MyForm from '../components/MyForm.vue';

export default {
    name: 'ConfiguracionView',
    components: {
        AsideComponent,
        ActiveUser,
        MyForm
    },
    mounted(){
        document.body.style.background = "#EBE7E7"
    }
}
</script>
<template>
    <div class="configuracion-container">
        <ActiveUser class="header" />
        <AsideComponent class="aside" />
        <main>
            <h5>configuracion</h5>
        </main>
    </div>


</template>
<style scoped>
.configuracion-container {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
}

main {
    width: calc(100% - 200px);
    height: calc(100% - 100px);
    overflow-y: auto;
}

.header {
    width: 100%;
}

.aside {
    width: 200px;
    height: 100vh;
}
</style>