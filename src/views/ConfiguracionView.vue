<template>
  <div class="configuracion-container">
    <ActiveUser class="header"/>
    <AsideComponent class="aside" />
    <main>
      <h1>Configuración</h1>
      <ToggleButton v-model="toggleState">
        {{ toggleState ? 'Activado' : 'Desactivado' }}
      </ToggleButton>
      <SwitchButton v-model="largeSwitch" size="large" color="#717171" />

    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ActiveUser from '../components/ActiveUser.vue'
import AsideComponent from '../components/AsideComponent.vue'
import ToggleButton from '../components/ToggleButton.vue'
import SwitchButton from '../components/SwitchButton.vue'

const toggleState = ref(false)
</script>

<style scoped>
.configuracion-container {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
}

main {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #EBE7E7;
  gap: 2rem;
  padding: 5%;
  justify-content: center;
  align-items: center;
}

.header {
  width: 100%;
}

.aside {
  width: 200px;
  height: 100vh;
}

h1 {
  margin: 0;
  color: #333;
  font-size: 2rem;
}
</style>