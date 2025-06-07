<script setup>
import { ref, defineProps } from 'vue'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import EditPaperMaster from './EditPaperMaster.vue'
const props = defineProps({
    titulo: String,
    mensajePlaceholder: String
})

const editPaperMasterRef = ref(null)
const pdfUrl = ref(null)
const mensaje = ref('')
const cerrarFormulario = () => {
    // Cerrar formulario 
}

const submitForm = async () => {
    // 1. Obtener imagen PNG del canvas editado (incluye todos los textos y ediciones)
  const canvasImage = editPaperMasterRef.value?.getCanvasImage?.()
    if (!canvasImage) {
        console.log(canvasImage)
        alert('Primero edita y carga la hoja maestra en el editor.')
        return
    }

    // 2. Crear un PDF nuevo con el tamaño del canvas
    const tempImg = new window.Image();
    tempImg.src = canvasImage;
    await new Promise(resolve => { tempImg.onload = resolve; });
    const width = tempImg.width;
    const height = tempImg.height;

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([width, height]);

    // 3. Insertar imagen del canvas (ya contiene todos los textos y ediciones)
    const pngImage = await pdfDoc.embedPng(canvasImage);
    page.drawImage(pngImage, {
        x: 0,
        y: 0,
        width,
        height
    });

    // 4. Guardar y descargar
    const modifiedPdfBytes = await pdfDoc.save();
    const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'constancia-con-mensaje.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Edit Master Page
const pdfSelect = ref(false)
const formData = ref({ name: '' })
function handleFileChange(event) {
    const file = event.target.files[0]
    if (file && file.type === 'application/pdf') {
        pdfSelect.value = true
        pdfUrl.value = URL.createObjectURL(file)
    } else {
        pdfSelect.value = false
        pdfUrl.value = null
        alert('Por favor seleccione un archivo PDF válido')
    }
}

</script>

<template>
    <form class="formulario" @submit.prevent="submitForm">
        <div class="title-form">
            <h3>{{ titulo }}</h3>
        </div>

        <hr />
        <div class="grupo-formulario">
            <label for="numero-jornadas">Número de constancias a generar</label>
            <input type="number" id="numero-jornadas" class="campo-texto" placeholder="10" >
        </div>

        <div class="grupo-formulario">
            <label for="excel-jornadas">Cargar excel con los datos de las personas</label>
            <input type="file" id="excel-jornadas" class="campo-archivo" accept=".xlsx" >
        </div>

        <div class="grupo-formulario">
            <label for="fecha-jornadas">Seleccionar fecha</label>
            <input type="date" id="fecha-jornadas" class="campo-texto" >
        </div>
        <div class="grupo-formulario">
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" class="campo-textoarea" :placeholder="mensajePlaceholder" v-model="mensaje"
                ></textarea>
        </div>

        <div class="grupo-formulario editor">
            <div>
                <label for="hoja-jornadas" style="text-align: center;">Cargar hoja maestra</label>
            </div>
            <EditPaperMaster ref="editPaperMasterRef" />
            <!-- implementation component editImage -->
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
    width: 100%;
    height: 100%;
    min-height: 0;
    min-width: 0;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    background-color: #fff;
    border-radius: 0;
    box-shadow: none;
    box-sizing: border-box;
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
    margin-bottom: 20px;
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

/* ---- */
.vista-previa-pdf {
    margin-top: 20px;
}

/* ----- */
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

/* Editor style */
.editor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/*  */
.vista-previa-pdf {
    position: relative;
}

.mensaje-en-pdf {
    position: absolute;
    top: 120px;
    left: 50px;
    width: 500px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
    background-color: transparent;
    pointer-events: none;
}
</style>
