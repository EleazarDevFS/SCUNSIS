<script setup>
import { ref, defineProps } from 'vue'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import EditPaperMaster from './EditPaperMaster.vue'
const props = defineProps({
    titulo: String,
    mensajePlaceholder: String
})

const pdfUrl = ref(null)
const mensaje = ref('')
const cerrarFormulario = () => {
    // Cerrar formulario 
}

const submitForm = async () => {
    const input = document.getElementById('hoja-jornadas')
    const file = input.files[0]

    if (!file) {
        alert('Primero selecciona un archivo PDF.')
        return
    }

    const arrayBuffer = await file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(arrayBuffer)

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const { width, height } = firstPage.getSize()

    // Aquí dibujamos el mensaje en el PDF
    firstPage.drawText(mensaje.value, {
        x: 50,
        y: height - 100,
        size: 14,
        font,
        color: rgb(0, 0, 0),
    })

    const modifiedPdfBytes = await pdfDoc.save()

    // Crear descarga automática del PDF modificado
    const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'constancia-con-mensaje.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
            <input type="number" id="numero-jornadas" class="campo-texto" placeholder="10" required>
        </div>

        <div class="grupo-formulario">
            <label for="excel-jornadas">Cargar excel con los datos de las personas</label>
            <input type="file" id="excel-jornadas" class="campo-archivo" accept=".xlsx" required>
        </div>

        <div class="grupo-formulario">
            <label for="fecha-jornadas">Seleccionar fecha</label>
            <input type="date" id="fecha-jornadas" class="campo-texto" required>
        </div>
        <div class="grupo-formulario">
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" class="campo-textoarea" :placeholder="mensajePlaceholder" v-model="mensaje"
                required></textarea>
        </div>

        <div class="grupo-formulario">
            <label for="hoja-jornadas" style="text-align: center;">Cargar hoja maestra</label>
            <!-- <input type="file" id="hoja-jornadas" class="campo-archivo" accept="application/pdf"
                @change="handleFileChange" required> -->
            <EditPaperMaster />
             <!-- implementation component editImage -->
        </div>

        <div class="botones-formulario">
            <button type="button" class="boton-cancelar" @click="cerrarFormulario">Cancelar</button>
            <button type="submit" class="boton-enviar" @click="submitForm">Generar</button>
        </div>
        <!-- Iframe para editar pdf -->
        <!-- <div v-if="pdfUrl" class="vista-previa-pdf">
            <h4>Vista previa de la hoja maestra:</h4>
            <iframe :src="pdfUrl" width="100%" height="700px" style="border: 1px solid #ccc;">
                <div class="mensaje-en-pdf">{{ mensaje }}</div>
            </iframe>
        </div> -->
    </form>
</template>

<style scoped>
.formulario {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    max-height: 90%;
    overflow-y: auto;
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
