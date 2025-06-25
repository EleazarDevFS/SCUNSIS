<script setup>
import { ref, defineProps, watch } from 'vue'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import EditPaperMaster from './EditPaperMaster.vue'
const props = defineProps({
    titulo: String,
    mensajePlaceholder: String
})

// Sincronizar fecha seleccionada con el editor
const editPaperMasterRef = ref(null)
const pdfUrl = ref(null)
const mensaje = ref('')
const receptor = ref('')
const fechaSeleccionada = ref(''); // Nueva variable reactiva para la fecha
const cerrarFormulario = () => {
    // Cerrar formulario 
}

const submitForm = async () => {
    if (!excelData.value.length) {
        alert('Primero carga un archivo Excel válido.');
        return;
    }
    const canvasImage = editPaperMasterRef.value?.getCanvasImage?.();
    if (!canvasImage) {
        alert('Primero edita y carga la hoja maestra en el editor.');
        return;
    }
    for (const persona of excelData.value) {
        // Soporta array de arrays (sin encabezados) y array de objetos (con encabezados)
        let nombre, primer_apellido, segundo_apellido, grado_academico, grado;
        if (Array.isArray(persona)) {
            nombre = persona[0] || '';
            primer_apellido = persona[1] || '';
            segundo_apellido = persona[2] || '';
            grado_academico = persona[3] || '';
            grado = persona[4] || '';
        } else {
            nombre = persona.nombre || '';
            primer_apellido = persona.primer_apellido || '';
            segundo_apellido = persona.segundo_apellido || '';
            grado_academico = persona.grado_academico || '';
            grado = persona.grado || '';
        }
        const nombreCompleto = [nombre, primer_apellido, segundo_apellido].filter(Boolean).join(' ');
        const mensajePersonalizado = `Por su destacada participación, se otorga la presente constancia a ${grado ? grado + ' ' : ''}${nombreCompleto}.`;
        receptor.value = nombreCompleto;
        mensaje.value = mensajePersonalizado;
        await new Promise(resolve => setTimeout(resolve, 100));
        const canvasImg = editPaperMasterRef.value?.getCanvasImage?.();
        if (!canvasImg) continue;
        const tempImg = new window.Image();
        tempImg.src = canvasImg;
        await new Promise(resolve => { tempImg.onload = resolve; });
        const width = tempImg.width;
        const height = tempImg.height;
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([width, height]);
        const pngImage = await pdfDoc.embedPng(canvasImg);
        page.drawImage(pngImage, {
            x: 0,
            y: 0,
            width,
            height
        });
        const modifiedPdfBytes = await pdfDoc.save();
        const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `constancia-${nombreCompleto.replace(/\s+/g, '_')}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
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

// Guardar los datos del Excel
const excelData = ref([])

// Manejar la carga del Excel y obtener los datos del backend
async function onExcelChange(event) {
  const file = event.target.files ? event.target.files[0] : event;
  if (!file) return;
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response = await fetch('http://localhost:3001/api/upload-excel', {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    // Soporta ambos formatos: folios (array de objetos) o data (array de arrays)
    if (result.folios && Array.isArray(result.folios) && result.folios.length > 0) {
      excelData.value = result.folios;
    } else if (result.data && Array.isArray(result.data) && result.data.length > 1) {
      excelData.value = result.data.slice(1); // omite encabezado si existe
    } else {
      excelData.value = [];
    }
  } catch (err) {
    alert('Error procesando el archivo Excel');
  }
};

watch(fechaSeleccionada, (nuevaFecha) => {
  if (editPaperMasterRef.value && editPaperMasterRef.value.selectedDate !== undefined) {
    editPaperMasterRef.value.selectedDate = nuevaFecha;
  }
});
</script>

<template>
    <form class="formulario" @submit.prevent="submitForm">
        <div class="title-form">
            <h3>{{ titulo }}</h3>
        </div>

        <hr />
        <div class="grupo-formulario">
            <label for="numero-jornadas">Número de constancias a generar</label>
            <input type="number" id="numero-jornadas" class="campo-texto" placeholder="10">
        </div>

        <div class="grupo-formulario">
            <label for="excel-jornadas">Cargar excel con los datos de las personas</label>
            <v-file-input label="Archivo Excel" accept=".xlsx" multiple 
            :rules="[value => !!value || 'Porfavor cargue un archivo .xlsx o calc']"
            class="campo-archivo"
                id="excel-jornadas" @change="onExcelChange"></v-file-input>
        </div>
        <div class="grupo-formulario">
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" class="campo-textoarea" :placeholder="mensajePlaceholder"
                v-model="mensaje"></textarea>
        </div>

        <div class="grupo-formulario editor">
            <div>
                <label for="hoja-jornadas" style="text-align: center;">Cargar hoja maestra</label>
            </div>
            <span>{{mensaje}}</span>
            <EditPaperMaster ref="editPaperMasterRef" :valorTexto="mensaje" />
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
