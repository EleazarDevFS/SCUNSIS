<script>
export default {
  mounted() {
    //Botones de navegación
    const goGCbtn = document.getElementById('gc-btn');
    const inicioBtn = document.getElementById('inicio-btn');
    const logOut = document.getElementById('cerrar-sesion');
    const history = document.getElementById('historial-btn');
    const config = document.getElementById('configuracion-btn');
    //Eventos de click en los botones de navegaci+on
    goGCbtn.addEventListener('click', () => {
      this.$router.push('/genera_constancias');
    })
    inicioBtn.addEventListener('click', ()=>{
      this.$router.push('/inicio');
    })
    logOut.addEventListener('click', ()=>{
      this.$router.push('/')
    })
    history.addEventListener('click', ()=>{
      this.$router.push('/historial')
    })
    config.addEventListener('click', ()=>{
      this.$router.push('/configuracion')
    })
    
  }
}
</script>
<template>
  <aside>
    <button id="inicio-btn" class="btns-aside">
      <svg id="home" class="svg-aside" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
        width="24px" fill="currentColor">
        <path
          d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
      </svg>
      <span class="texts-aside">Inicio</span>
    </button>
    <button id="gc-btn" class="btns-aside">
      <svg class="svg-aside" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
        fill="currentColor">
        <path
          d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg>
      <span class="texts-aside">Generar Constancia(s)</span>
    </button>
    <button id="historial-btn" class="btns-aside">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path
          d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
      </svg>
      <span class="texts-aside">Historial</span>
    </button>
    <button id="configuracion-btn" class="btns-aside">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path
          d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
      </svg>
      <span class="texts-aside">Configuración</span>
    </button>
    <button id="cerrar-sesion" class="btns-aside">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
      </svg>
      <span class="texts-aside">Cerrar sesión</span>
    </button>
  </aside>
</template>
<style scoped>

.texts-aside {
  margin-top: 4px;
  display: inline-block;
}

#inicio-btn {
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.btns-aside {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

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
  text-align: left;
  padding-left: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btns-aside:hover {
  background: #7C0A02;
  color: #fff;
}
</style>
