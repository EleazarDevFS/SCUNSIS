<script setup>
import { useRouter } from 'vue-router';
const emit = defineEmits(['change-view']);
const router = useRouter();
const goToHome = () => {
  router.push('/inicio');
  emit('change-view', 'InicioView');
}
</script>
<template>
    <div id="logo" @click="goToHome">
      <img src="/public/img/image copy.png" alt="Logo" />
      <p>SC-UNSIS</p>   
    </div>
  </template>
  
  <style scoped>
  #logo {
    height: 10vh;
    text-align: center;
    color: #7C0A02;
    font-weight: 600;
    font-size: xx-large;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -70px;
  }

  #logo img {
    min-width: 6vh;
    max-width: 7vh;
  }
</style>

