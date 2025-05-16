<script>
import Logo from '../components/Logo.vue';

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
      // Vamos a navegar hacia la vista de Inicio
      this.$router.push('/inicio');
      
    }
  }
}
</script>

<template>
  <form class="login" id="loginsc" @submit.prevent="login">
    <Logo class="logotipo"/>
    <input type="text" class="inputs-txt sub-log" placeholder="Usuario" />
    <input type="password" class="inputs-txt sub-log" placeholder="Contraseña" />
    <button type="submit" id="btns" class="submits">Iniciar sesión</button>
  </form>
</template>

<style scoped>
.logotipo{
  margin-top: 16%;
}
   .inputs-txt {
    border-radius: 10px;
    height: 40px;
    position: relative;
  }
    /* Contenido encima */
  .login {
    width: max-content;
    background-color: #F7F6F6be;
    position: relative;
    z-index: 2;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 1em;
    color: #000;
    width: 100%;
    max-width: 800px;
    min-width: 400px;
    height: auto;
    gap: 10px;
  }

  .inputs-txt::placeholder{
    color: #888;
    font-style: normal;
    font-size: 1.3em;
    opacity: 1;
    color: #000000e9;
  }

  .sub-log {
    top: -3em;
  }

  .labels {
    position: relative;
  }

  .submits{
    height: 40px;
    background-color: #7C0A02;
    font-size: larger;
    border-radius: 10px;
    color: #fff;
  }
  .shortcuts:hover{
    /* background: #7C0A02; */
    color: #7C0A02;
    border: solid #7C0A0277;
  }
  #btns {
    position: relative;
    top: -1.2em;
  }
</style>
