<script>
import Logo from '../components/Logo.vue'; // usa ../ si estás en views

export default {
  components: {
    Logo
  },
  mounted() {
    // Aplicar imagen de fondo cuando entramos al login
    document.body.style.background = 'url("public/img/image.png") no-repeat center center fixed';
    document.body.style.backgroundSize = 'cover';
  },
  methods: {
    login() {

      // Cambiar fondo del body
      document.body.style.background = '#EBE7E7'; 
      // lógica de autenticación aquí...
      this.$router.push('/inicio');
      
    }
  }
}
</script>

<template>
  <form class="login" id="loginsc" @submit.prevent="login">
    <Logo />
    <input type="text" class="inputs-txt sub-log" placeholder="Usuario" />
    <input type="password" class="inputs-txt sub-log" placeholder="Contraseña" />
    <button type="submit" id="btns" class="submits">Iniciar sesión</button>
  </form>
</template>

<style>
  
</style>
