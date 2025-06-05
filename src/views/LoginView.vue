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
      // Bandera para mostrar alerta de bienvenida en HomePage
      sessionStorage.setItem('showWelcomeAlert', '1');
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
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 40px;
  position: relative;
  padding: 0 12px;
  background: #fff;
  color: #000;
  font-size: 1em;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  margin: 10px auto;
  transition: border-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* font-family: Arial, sans-serif; */
  font-weight: 400;
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
    color: #3b3b3b;
    font-style: normal;
    font-size: 1.3em;
    opacity: 1;
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
    color: #7C0A02;
    border: solid #7C0A0277;
  }
  #btns {
    position: relative;
    top: -1.2em;
  }
</style>
