<template>
  <div class="editor">
    <input type="file" accept="image/*" @change="onImageChange" />
    <button @click="addTextBox" :disabled="image === null"
      style=" background: rgba(124, 10, 2,.5); color: #fff; border: none; border-radius: 4px; padding: 1px 2px; font-size: 16px; cursor: pointer; transition: background 0.2s;">
      Agregar Caja de Texto
    </button>
    <div class="sidebar-container">
      <!-- <div class="main-content"> -->

      <div class="canvas-container" ref="canvasContainer">
        <canvas ref="canvas" width="800" height="600"></canvas>
        <div v-for="(box, index) in textBoxes" :key="index" class="text-box" :style="{
          top: box.y + 'px',
          left: box.x + 'px',
          fontFamily: box.fontFamily,
          color: box.color,
          fontSize: box.fontSize + 'px',
          background: box.background,
          display: (box.id === 'firma-one' || box.id === 'firma-two') ? 'inline-block' : (box.id === 'verification-text' || box.id === 'folio-text') ? 'inline-block' : 'block',
          marginRight: (box.id === 'firma-one' || box.id === 'verification-text') ? '16px' : '0',
          minWidth: '40px',
        }" :class="{ selected: selectedBox === index }" @mousedown="startDrag(index, $event)"
          @click.stop="selectBox(index)">
          {{ box.text }}
          <button v-if="box.id && box.id.startsWith('extra-text-')" class="delete-btn"
            @click.stop="removeTextBox(index)">✕</button>
        </div>


      </div>
      <!-- </div> -->
      <div class="sidebar">
        <div v-if="selectedBox !== null">
          <label>Editar texto:</label>
          <textarea id="text-edition" v-model="textBoxes[selectedBox].text"></textarea>
          <div style="margin-top: 12px;">
            <label>Tipo de letra:</label>
            <select v-model="textBoxes[selectedBox].fontFamily">
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Verdana">Verdana</option>
              <option value="monospace">Monospace</option>
              <option value="serif">Serif</option>
              <option value="sans-serif">Sans-serif</option>
            </select>
          </div>
          <div style="margin-top: 12px; display: flex;  gap: 16px;">
            <div style="display: flex; flex-direction: column; align-items: flex-start;">
              <label>Color de texto:</label>
              <v-color-picker v-model="textBoxes[selectedBox].color" mode="rgba" show-swatches hide-canvas hide-inputs
                dot-size="18" swatches-max-height="120" style="max-width: 220px; margin-top: 8px;" />
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-start;">
              <label>Fondo:</label>
              <v-color-picker v-model="textBoxes[selectedBox].background" mode="rgba" show-swatches hide-canvas
                hide-inputs dot-size="18" swatches-max-height="120" style="max-width: 220px; margin-top: 8px;" />
              <button style="margin-left:0; margin-top:8px;" @click="clearBackground">Quitar fondo</button>
            </div>
          </div>
          <div style="margin-top: 12px;">
            <label>Tamaño (px):</label>
            <input type="number" min="8" max="72" v-model.number="textBoxes[selectedBox].fontSize"
              style="width:60px;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, reactive } from 'vue'
// import ColorPickerAdvanced from './ColorPickerAdvanced.vue'
import { ColorPicker } from 'pdfjs-dist'

// IDs y textos por defecto
const defaultTextBoxes = [
  { id: 'emisor-text', text: 'Emisor', x: 350, y: 40 },
  { id: 'otorga-text', text: 'Otorga', x: 350, y: 90 },
  { id: 'receptor-text', text: 'Receptor', x: 350, y: 140 },
  { id: 'body-text', text: 'Cuerpo', x: 350, y: 190 },
  { id: 'att-text', text: 'Atentamente', x: 350, y: 240 },
  { id: 'firma-one', text: 'Firma 1', x: 350, y: 450 },
  { id: 'firma-two', text: 'Firma 2', x: 600, y: 450 },
  { id: 'date-text', text: 'Fecha', x: 350, y: 370 },
  { id: 'verification-text', text: 'Puede validar su constancia en ', x: 350, y: 550 },
  { id: 'folio-text', text: 'Folio', x: 650, y: 550 },
]

const addDefaultTextBoxes = () => {
  textBoxes.splice(0, textBoxes.length)
  for (const box of defaultTextBoxes) {
    textBoxes.push({
      ...box,
      fontFamily: 'Arial',
      color: '#000000',
      fontSize: 18,
      background: 'rgba(255,255,255,0)'
    })
  }
  selectedBox.value = null;
  draggingIndex = null;
}

const canvas = ref(null)
const canvasContainer = ref(null)
const image = ref(null)
const textBoxes = reactive([])
let draggingIndex = null
let offset = { x: 0, y: 0 }
const selectedBox = ref(null)

const clearBackground = (event) => {
  event.preventDefault()
  if (
    selectedBox.value !== null &&
    textBoxes[selectedBox.value] !== undefined
  ) {
    textBoxes[selectedBox.value].background = 'rgba(255,255,255,0)'
  }
}

const onImageChange = (event) => {
  const file = event.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (e) => {
    image.value = new Image()
    image.value.onload = () => {
      drawImage()
      addDefaultTextBoxes()
    }
    image.value.src = e.target.result
  }
  reader.readAsDataURL(file)
}

const drawImage = () => {
  const ctx = canvas.value.getContext('2d')
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  if (image.value) {
    ctx.drawImage(image.value, 0, 0, canvas.value.width, canvas.value.height)
  }
}


let extraBoxCount = 1;
const addTextBox = (event) => {
  event.preventDefault();
  // Agregar un campo extra con id único
  textBoxes.push({
    id: `extra-text-${extraBoxCount++}`,
    text: 'Nuevo texto',
    x: 100,
    y: 100,
    fontFamily: 'Arial',
    color: '#000000',
    fontSize: 18,
    background: 'rgba(255,255,255,0)'
  });
}

const selectBox = (index) => {
  selectedBox.value = index
}

// Función para eliminar cajas de texto extra
const removeTextBox = (index) => {
  if (textBoxes[index] && textBoxes[index].id && textBoxes[index].id.startsWith('extra-text-')) {
    textBoxes.splice(index, 1);
    if (selectedBox.value === index) selectedBox.value = null;
  }
}

// Drag and drop robusto con eventos globales
const startDrag = (index, event) => {
  draggingIndex = index
  // Calcula el offset relativo al mouse dentro de la caja
  const box = textBoxes[index];
  const boxElement = event.target.closest('.text-box');
  const boxRect = boxElement.getBoundingClientRect();
  offset.x = event.clientX - boxRect.left;
  offset.y = event.clientY - boxRect.top;
  selectedBox.value = index
  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', stopDrag)
}

const stopDrag = () => {
  draggingIndex = null
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
}

const onDrag = (event) => {
  if (draggingIndex === null) return
  if (!textBoxes[draggingIndex]) return
  const containerRect = canvasContainer.value.getBoundingClientRect()
  // El mouse está en clientX/clientY, queremos que la esquina superior izquierda de la caja siga el mouse menos el offset
  textBoxes[draggingIndex].x = event.clientX - containerRect.left - offset.x
  textBoxes[draggingIndex].y = event.clientY - containerRect.top - offset.y
}

</script>

<style scoped>
.editor {
  background: #f7f7f7;
  font-family: sans-serif;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
}

.delete-btn {
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.sidebar-container {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.sidebar {
  width: 100%;
  border-right: 1px solid #ddd;
  padding: 16px;
  min-height: 650px;
  box-sizing: border-box;
}

.canvas-container {
  position: relative;
  border: 1px solid #ccc;
  display: inline-block;
}

.text-box {
  position: absolute;
  padding: 4px 8px;
  cursor: move;
  user-select: none;
  border-radius: 4px;
  min-width: 40px;
  min-height: 24px;
  transition: box-shadow 0.2s;
}

.text-box.selected {
  box-shadow: 0 0 0 2px #1976d2;
  border-color: #1976d2;
}

#text-edition {
  width: 100%;
  box-sizing: border-box;
  height: 200px;
  max-width: 100%;
  resize: none;
  font-family: Arial, sans-serif;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 12px;
  background-color: #fff;
  color: #333;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  font-size: 16px;
  line-height: 1.5;
}
</style>
