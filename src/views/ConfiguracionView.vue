<script>
import ActiveUser from '../components/ActiveUser.vue';
import AsideComponent from '../components/AsideComponent.vue';
import MyFormComponent from '../components/MyFormComponent.vue'; // Import MyForm

export default {
    name: 'ConfiguracionView',
    components: {
        AsideComponent,
        ActiveUser,
        MyFormComponent
    }
}
</script>
<template>
    <div class="configuracion-container">
        <ActiveUser class="header" />
        <AsideComponent class="aside" />
        <main>
            <MyFormComponent
  titulo="Formulario de jornadas académicas"
  mensajePlaceholder="Por haber asistido a la conferencia X impartida por el/la (grado)(nombre)..."
/>

<MyFormComponent
  titulo="Formulario otros eventos"
  mensajePlaceholder="Por haber participado en el evento Y realizado el día..."
/>

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
    background-color: #D9D9D9;
}

.header {
    width: 100%;
}

.aside {
    width: 200px;
    height: 100vh;
}
</style>