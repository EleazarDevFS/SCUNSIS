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
        MyForm,EditPaperMaster
        },
    mounted(){
        document.body.style.background = "#EBE7E7"
    }
}
</script>
<template>
    <div class="configuracion-container">
        <main>
             <EditPaperMaster></EditPaperMaster>
            <button >
                Hola
            </button>
        </main>

    </div>


</template>
<style scoped>
.configuracion-container {
    display: flex;
    flex-wrap: wrap;
    width:calc(100vw - 100px);
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