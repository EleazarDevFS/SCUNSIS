<script>
// Se importan los componentes AsideComponent y ActiveUser
import ActiveUser from '../components/ActiveUser.vue';
import AsideComponent from '../components/AsideComponent.vue';
export default {
  name: 'InicioView',
  components: {
    ActiveUser,
    AsideComponent
  }, mounted() {
    // Cada que se abra esta vista se ejecutarán las siguientes lineas de código
    document.body.style.background = "#EBE7E7"
    // Botones shortcuts de inicio
    const generate = document.getElementById('genera-constancias');
    const history = document.getElementById('historial-constancias');
    // Eventos para los shortcuts
    generate.addEventListener('click', ()=>{
      this.$router.push('genera_constancias');
    })
    history.addEventListener('click', ()=>{
      this.$router.push('/historial');
    })

  }
}
</script>
<template>
  <div class="inicio-container">
    <!-- Contenido principal -->
    <main>
      <div class="shortcuts"  id="genera-constancias">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
          <path
            d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </svg>
        Generar constancia(s)
      </div>
      <div class="shortcuts" id="historial-constancias">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
          <path
            d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
        </svg>
        Historial
      </div>
      
    </main>
      <v-alert style="display: none;"
  color="success"
  icon="$success"
  title="Alert title"
  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus..."
></v-alert>
  </div>

</template>
<style scoped>
.inicio-container {
  width: calc (100vw - 100px);
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}

main {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #EBE7E7;
  gap: 15%;
  justify-content: center;
  align-items: center;
  padding: 5%;
}

.header {
  width: 100%;
}

.aside {
  height: 100vh;
  width: 200px;
}

.shortcuts {
  color: #7C0A02;
  position: relative;
  top: -10%;
  padding: 5%;
  background-color: #D9D9D9;
  border-radius: 10px;
  /* centrar */
  display: flex;
  align-items: center;
  gap: 6%;
  transition: background 0.2s, color 0.2s;
}

.shortcuts:hover {
  background-color: #7C0A02;
  color: #fff;
}
</style>