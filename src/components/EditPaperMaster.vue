<template>
  <div class="editor">
    <input type="file" accept="image/*" @change="onImageChange" />
    <button @click="addTextBox">Agregar Caja de Texto</button>
    <div class="canvas-container" ref="canvasContainer">
      <canvas ref="canvas" width="800" height="600"></canvas>
      <div v-for="(box, index) in textBoxes" :key="index" class="text-box"
        :style="{ top: box.y + 'px', left: box.x + 'px' }" contenteditable @mousedown="startDrag(index, $event)"
        @mouseup="stopDrag" @mousemove="onDrag($event)">
        {{ box.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const canvas = ref(null)
const canvasContainer = ref(null)
const image = ref(null)
const textBoxes = reactive([])
let draggingIndex = null
let offset = { x: 0, y: 0 }

const onImageChange = (event) => {
  const file = event.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (e) => {
    image.value = new Image()
    image.value.onload = () => {
      drawImage()
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

const addTextBox = () => {
  textBoxes.push({ x: 50, y: 50, text: 'Texto' })
}

const startDrag = (index, event) => {
  draggingIndex = index
  offset.x = event.offsetX
  offset.y = event.offsetY
}

const stopDrag = () => {
  draggingIndex = null
}

const onDrag = (event) => {
  if (draggingIndex === null) return
  const containerRect = canvasContainer.value.getBoundingClientRect()
  const mouseX = event.clientX - containerRect.left
  const mouseY = event.clientY - containerRect.top
  textBoxes[draggingIndex].x = mouseX - offset.x
  textBoxes[draggingIndex].y = mouseY - offset.y
}
</script>

<style scoped>
.editor {
  font-family: sans-serif;
  max-width: 900px;
  margin: 20px auto;
}

.canvas-container {
  position: relative;
  border: 1px solid #ccc;
  display: inline-block;
}

canvas {
  display: block;
}

.text-box {
  position: absolute;
  padding: 4px 8px;
  cursor: move;
  user-select: none;
}
</style>
