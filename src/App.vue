<script>
import Logo from './components/Logo.vue';
  export default{
    components:{
      Logo
    }
  }

</script>

<template>
  <form class="login" id="loginsc">
    <Logo />
    <input type="text" class="inputs-txt sub-log" placeholder="Usuario" />
    <input type="password" class="inputs-txt sub-log" placeholder="Contraseña" />
    <button type="submit" id="btns" class="submits">Iniciar sesión</button>
  </form>
</template>

<style lang="scss">

</style>
