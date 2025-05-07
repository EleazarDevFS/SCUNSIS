<template>
  <div class="inicio-container">
    <div class="ac-container">
      <ActiveUser class="a-u" />
    </div>
    <div class="contenido-principal">
      <div class="aside-container">
        <aside>
          <button class="btns-aside">Inicio</button>
          <button class="btns-aside">Generar Constancia(s)</button>
          <button class="btns-aside">Historial</button>
          <button class="btns-aside">Configuración</button>
        </aside>
        <!-- <div class="main-container">

          <main>
            <div class="shortcuts">Generar constancia(s)</div>
            <div class="shortcuts">Historial</div>
          </main>
        </div> -->
      </div>
    </div>

    <footer></footer>
  </div>

</template>

<script>
import ActiveUser from '../components/ActiveUser.vue';
export default {
  name: 'InicioView',
  components: {
    ActiveUser
  }
}
</script>
<style scoped>
.inicio-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.a-u {
  width: 100%;
  height: 100%;
}

main {
  background-color: #EBE7E7;
  flex: 1;
  /* Ocupar el espacio restante */
}

.ac-container {
  height: 100px;
  width: 100%;
}

.aside-container {
  width: 200px;
}


/* .main-container{
      display: flex;
      flex-wrap: wrap;
    } */
.contenido-principal {
  display: flex;
  flex: 1;
  height: calc(100vh - 100px);
}

/* componente aside */

aside {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #D9D9D9;
}


.btns-aside {
  color: #7C0A02;
  background: none;
  height: 4em;
  border: none;
  font-weight: 600;
  /* border-radius: 20px ; */
  width: 100%;
  /* <- */
  text-align: left;
  padding-left: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btns-aside:hover {
  background: #7C0A02;
  color: #fff;
}
</style>