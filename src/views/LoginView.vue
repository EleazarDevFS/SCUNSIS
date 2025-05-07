<script>
import Logo from '../components/Logo.vue'; // usa ../ si estás en views

export default {
  components: {
    Logo
  },
  methods: {
    login() {
      // lógica de autenticación aquí...
      this.$router.push('/inicio');
    }
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

<style>
  
</style>
