<template>
  <div class="inicio-container">
    <div class="ac-container">
      <ActiveUser class="a-u" />
    </div>
    <div class="aside-container">
      <AsideComponent />
    </div>
    <div class="contenido-principal">

      <div class="main-container">

        <main>
          <div class="shortcuts">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
            </svg>
            Generar constancia(s)
          </div>
          <div class="shortcuts">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/>
            </svg>
            Historial
          </div>
        </main>
      </div>
    </div>

    <!-- <footer></footer> -->
  </div>

</template>

<script>
import ActiveUser from '../components/ActiveUser.vue';
import AsideComponent from '../components/AsideComponent.vue';
export default {
  name: 'InicioView',
  components: {
    ActiveUser,
    AsideComponent
  }, mounted() {
    document.body.style.background = "#EBE7E7"
  }
}
</script>
<style scoped>
.inicio-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
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

.main-container{
  width: 100%;
  height: 100%;
}
main {
  
  display: flex;
  gap: 20%;
  height: 100%; 
  justify-content: center;
  align-items: center;
}

.shortcuts{
  color: #7C0A02;
  position: relative;
  top: -10%;
  padding: 5%;
  background-color: #D9D9D9;
  border-radius: 10px;
  /* centrar */
  display: flex;
  align-items: center;   
  gap: 0.6rem;  
  transition: background 0.2s, color 0.2s;
}
.shortcuts:hover{
  background-color: #7C0A02;
  color: #fff;
}

.contenido-principal {
  display: flex;
  flex: 1;
  /* height: calc(100vh - 100px); */
}

.aside-container {
  height: 100vh;
}
</style>