<script>
import ActiveUser from '../components/ActiveUser.vue';
import AsideComponent from '../components/AsideComponent.vue';

export default{
name: 'ConfiguracionView',
components:{
    AsideComponent,
    ActiveUser
}
}
</script>
<template>
    <div class="configuracion-container">
        <ActiveUser class="header"/>
        <AsideComponent class="aside" />
        <main>
            <h1>Configuración</h1>
        </main>
    </div>


</template>
<style scoped>
.configuracion-container{
display: flex;
flex-wrap: wrap;
width: 100vw;
height: 100vh;
}
main{
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: #EBE7E7;
    gap: 15%;
    padding: 5%;
    justify-content: center;
    align-items: center;
}
.header{
    width: 100%;
}
.aside{
    width: 200px;
    height: 100vh;
}
</style>