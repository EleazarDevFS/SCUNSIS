<template>
  <div class="switch-container">
    <label class="switch" :class="{ disabled: disabled }">
      <input 
        type="checkbox" 
        :checked="isOn" 
        @change="toggle"
        :disabled="disabled"
        ref="inputRef"
      />
      <span class="slider" :class="{ on: isOn }">
        <span class="slider-button"></span>
      </span>
    </label>
    <span v-if="showLabel" class="switch-label">
      {{ isOn ? onLabel : offLabel }}
    </span>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  onLabel: {
    type: String,
    default: 'ON'
  },
  offLabel: {
    type: String,
    default: 'OFF'
  },
  showLabel: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'medium', // small, medium, large
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  color: {
    type: String,
    default: '#252424'
  }
})

// Emits
const emit = defineEmits(['update:modelValue', 'change'])

// Referencias
const inputRef = ref(null)

// Estado reactivo
const isOn = ref(props.modelValue)

// Computed para clases dinámicas
const switchSize = computed(() => `switch-${props.size}`)

// Watchers
watch(() => props.modelValue, (newValue) => {
  isOn.value = newValue
}, { immediate: true })

// Métodos
const toggle = (event) => {
  if (props.disabled) return
  
  const newValue = event.target.checked
  isOn.value = newValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

// Método para toggle programático
const toggleSwitch = () => {
  if (props.disabled) return
  
  const newValue = !isOn.value
  isOn.value = newValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

// Exponer métodos para uso externo
defineExpose({
  toggle: toggleSwitch,
  focus: () => inputRef.value?.focus()
})
</script>

<style scoped>
.switch-container {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  user-select: none;
}

.switch {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.switch.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

/* Tamaños del switch */
.switch-small .slider {
  width: 40px;
  height: 20px;
}

.switch-small .slider-button {
  width: 16px;
  height: 16px;
}

.switch-medium .slider,
.slider {
  width: 60px;
  height: 30px;
}

.switch-medium .slider-button,
.slider-button {
  width: 26px;
  height: 26px;
}

.switch-large .slider {
  width: 80px;
  height: 40px;
}

.switch-large .slider-button {
  width: 36px;
  height: 36px;
}

.slider {
  position: relative;
  background-color: #ccc;
  border-radius: 50px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 2px;
}

.slider:hover:not(.disabled) {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.slider-button {
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(61, 112, 241, 0.2);
  transform: translateX(0);
}

/* Estado ON */
.slider.on {
  background-color: v-bind(color);
}

.switch-small .slider.on .slider-button {
  transform: translateX(20px);
}

.switch-medium .slider.on .slider-button,
.slider.on .slider-button {
  transform: translateX(30px);
}

.switch-large .slider.on .slider-button {
  transform: translateX(40px);
}

/* Focus states */
.switch input:focus + .slider {
  outline: 2px solid v-bind(color);
  outline-offset: 2px;
}

/* Label */
.switch-label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  min-width: 30px;
}

/* Animaciones */
@keyframes switch-on {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.slider.on .slider-button {
  animation: switch-on 0.3s ease;
}

/* Estados de hover y active */
.switch:not(.disabled):active .slider-button {
  transform: scale(0.95) translateX(var(--translate-x, 0));
}

.switch:not(.disabled):active .slider.on .slider-button {
  --translate-x: 30px;
}


  
  .switch-label {
    color: #181515;
  }


/* Responsive */
@media (max-width: 768px) {
  .switch-container {
    gap: 8px;
  }
  
  .switch-label {
    font-size: 12px;
  }
}
</style>