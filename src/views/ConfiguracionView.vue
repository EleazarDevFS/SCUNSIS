<script>
import ActiveUser from '../components/ActiveUser.vue';
import AsideComponent from '../components/AsideComponent.vue';
import MyForm from '../components/MyForm.vue';
import EditPaperMaster from '../components/EditPaperMaster.vue';


export default {
    name: 'ConfiguracionView',
    components: {
        AsideComponent,
        ActiveUser,
        MyForm, EditPaperMaster
    },
    mounted() {
        document.body.style.background = "#EBE7E7"
    }
}
</script>
<template>
    <div class="configuracion-container">
        <div class="settings">
            <h3>Administración de usuarios</h3>
            <hr>
        </div>
        <div class="settings">
            <h3>Configuraciones por defecto</h3>
            <hr>
            
        </div>
    </div>


</template>
<style scoped>
.configuracion-container {
    display: flex;
    width: calc(100% - 1px);
    height: calc(100% - 86px);
    overflow-y: auto;
}

.settings {
    border: 1px solid rgba(0, 0, 0, .5);
    width: 50%;
}

.settings h3 {
    text-align: center;
}

.header {
    width: 100%;
}

.aside {
    width: 200px;
    height: 100vh;
}
</style>