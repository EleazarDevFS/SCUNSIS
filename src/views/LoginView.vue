<script setup>
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import Logo from '../components/Logo.vue'

const toast = useToast()
const router = useRouter()

const username = ref('')
const password = ref('')

onMounted(() => {
  document.body.style.background = 'url("public/img/image.png") no-repeat center center fixed'
  document.body.style.backgroundSize = 'cover'
})

async function login() {
  if (!username.value || !password.value) {
    toast.error('Por favor ingresa usuario y contraseña')
    return
  }
  try {
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value })
    })
    const data = await response.json()
    if (response.ok && data.success) {
      toast.success('¡Iniciaste sesión exitosamente!')
      setTimeout(() => {
        router.push('/inicio')
      }, 300)
    } else {
      toast.error(data.message || 'Error al iniciar sesión')
    }
  } catch (err) {
    toast.error('No se pudo conectar al servidor')
  }
}
</script>

<template>
  <form class="login" id="loginsc" @submit.prevent="login">
    <Logo class="logotipo" />
    <input v-model="username" type="text" class="inputs-txt sub-log" placeholder="Usuario" />
    <input v-model="password" type="password" class="inputs-txt sub-log" placeholder="Contraseña" />
    <v-btn color="#7C0A02" variant="outlined" @click="login">
      Iniciar sesión
    </v-btn>
  </form>
</template>

<style scoped>
.logotipo {
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
  max-width: 200px;
  min-width: 400px;
  height: auto;
  gap: 10px;
}

.inputs-txt::placeholder {
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

.submits {
  height: 40px;
  background-color: #7C0A02;
  font-size: larger;
  border-radius: 10px;
  color: #fff;
}

.shortcuts:hover {
  color: #7C0A02;
  border: solid #7C0A0277;
}

#btns {
  position: relative;
  top: -1.2em;
}
#log{
  position: absolute;
  top: 80%;
  width: calc(100% - 70px);
}
</style>
