<!-- ToggleButton.vue -->
<template>
  <button @click="toggle" :class="{ active: isActive }">
    <slot>{{ isActive ? 'Activado' : 'Desactivado' }}</slot>
  </button>
</template>

<script setup>
import { ref, watch } from 'vue'

// Props para estado inicial
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  }
})

// Emit para notificar cambios
const emit = defineEmits(['update:modelValue'])

// Estado interno
const isActive = ref(props.modelValue)

// Actualizar estado interno cuando cambia prop
watch(() => props.modelValue, (newVal) => {
  isActive.value = newVal
}, { immediate: true })

// Función para alternar
const toggle = () => {
  isActive.value = !isActive.value
  emit('update:modelValue', isActive.value)
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #ccc;
  color: #252424;
  transition: all 0.2s ease;
}

button.active {
  background-color: #717171;
  color: white;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>