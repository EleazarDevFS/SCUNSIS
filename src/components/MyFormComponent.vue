<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  titulo: String,
  mensajePlaceholder: String
})

const nombre = ref('')
const email = ref('')
const mensaje = ref('')

const cerrarFormulario = () => {
  console.log('Formulario cancelado')
}

const submitForm = () => {
  alert(mensaje.value + email.value + nombre.value)
}
</script>

<template>
  <form class="formulario" @submit.prevent="submitForm">
    <div class="title-form">
      <h3>{{ titulo }}</h3>
    </div>

    <hr />

    <div class="grupo-formulario">
      <label for="nombre">Nombre:</label>
      <input
        id="nombre"
        type="text"
        class="campo-texto"
        placeholder="Nombre completo"
        v-model="nombre"
        required
      />
    </div>

    <div class="grupo-formulario">
      <label for="email">Email:</label>
      <input
        id="email"
        type="email"
        class="campo-texto"
        placeholder="correo@ejemplo.com"
        v-model="email"
        required
      />
    </div>

    <div class="grupo-formulario">
      <label for="mensaje">Mensaje:</label>
      <textarea
        id="mensaje"
        class="campo-textoarea"
        :placeholder="mensajePlaceholder"
        v-model="mensaje"
        required
      ></textarea>
    </div>

    <div class="botones-formulario">
      <button type="button" class="boton-cancelar" @click="cerrarFormulario">Cancelar</button>
      <button type="submit" class="boton-enviar" @click="submitForm">Generar</button>
    </div>
  </form>
</template>

<style scoped>
.formulario {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

.title-form {
  text-align: center;
  margin-bottom: 10px;
}

.title-form h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

hr {
  margin: 10px 0 20px;
  border: none;
  border-top: 2px solid #ccc;
}

.grupo-formulario {
  margin-bottom: 15px;
}

.grupo-formulario label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #222;
}

.campo-texto,
.campo-archivo,
.campo-textoarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
}

.campo-textoarea {
  resize: vertical;
  min-height: 100px;
}

.botones-formulario {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.boton-enviar,
.boton-cancelar {
  flex: 1;
  padding: 10px;
  margin: 0 5px;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease;
}

.boton-enviar {
  background-color: #222;
  color: #fff;
}

.boton-enviar:hover {
  background-color: #444;
}

.boton-cancelar {
  background-color: #bbb;
  color: #fff;
}

.boton-cancelar:hover {
  background-color: #999;
}
</style>
