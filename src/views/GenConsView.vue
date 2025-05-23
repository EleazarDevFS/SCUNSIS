<script>
import AsideComponent from '../components/AsideComponent.vue';
import ActiveUser from '../components/ActiveUser.vue';
import NavigationGC from '../components/NavigationGC.vue';
import { NavigationFailureType } from 'vue-router';

export default {
    name: 'GenConsView',
    components: {
        AsideComponent,
        ActiveUser,
        NavigationGC
    },
    mounted() {
        document.body.style.background = "#EBE7E7";
        //Botones NavegacionGC
        const btns = document.querySelectorAll('.btn-button');
        //FormulariosGC
        const forms = document.querySelectorAll('.forms-gc');
        btns.forEach((boton) => {
            const estilos = getComputedStyle(boton);
            boton.dataset.originalColor = estilos.backgroundColor;
        });
        //Color a los botones
        btns.forEach((boton) => {
            boton.addEventListener('click', () => {
                btns.forEach((b) => {
                    b.style.backgroundColor = b.dataset.originalColor;
                });
                boton.style.backgroundColor = '#f5f5f5';
                //Que boton es
                const whatBtn = boton.id;
                switch (whatBtn) {
                    case "jornadas-btn":
                        this.mostrarFormulario('form-jornadas');
                        break;
                    case "congresos-btn":
                        this.mostrarFormulario('form-congresos');
                        break;
                    case "ponencias-btn":
                        this.mostrarFormulario('form-ponencias');
                        break;
                    case "reconocimientos-btn":
                        this.mostrarFormulario('form-reconocimientos');
                        break;
                    case "otros-btn":
                        this.mostrarFormulario('form-otros');
                        break;
                    default:
                        alert('No existe el tipo de constancias solicitado.')
                }
            });
        });
        //Botón cancelar formulario
        const cancelBtns = document.querySelectorAll('.boton-cancelar');
        cancelBtns.forEach((cancelBtn) => {
            cancelBtn.addEventListener('click', () => {
                const forms = document.querySelectorAll('.formulario');
                forms.forEach((form) => {
                    form.style.display = 'none';
                })
            })
        })

    },
    methods: {
        mostrarFormulario(idFormulario) {
            // Ocultar todos los formularios primero
            const forms = document.querySelectorAll('.formulario');
            forms.forEach((form) => {
                form.style.display = 'none';
            });
            
            // Mostrar el formulario seleccionado
            const formularioSeleccionado = document.getElementById(idFormulario);
            if (formularioSeleccionado) {
                formularioSeleccionado.style.display = 'block';
            }
        },
        
        botonesNavegacionGc() {
            // Este método ya no es necesario ya que la lógica se movió al mounted()
            // Se mantiene por compatibilidad pero no hace nada
        },
        
        cerrarFormulario() {
            const forms = document.querySelectorAll('.formulario');
            forms.forEach((form) => {
                form.style.display = 'none';
            });
        }
    }

}
</script>

<template>
    <div class="Gen-Con-container">
        <ActiveUser class="header" />
        <AsideComponent class="aside" />
        <main>
            <!-- <NavigationGC /> -->
            <div class="select-event">
                <button class="btn-button" id="jornadas-btn">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="currentColor">
                            <path
                                d="M840-120v-640H120v320H40v-320q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120ZM360-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM40-80v-112q0-34 17.5-62.5T104-298q62-31 126-46.5T360-360q66 0 130 15.5T616-298q29 15 46.5 43.5T680-192v112H40Zm80-80h480v-32q0-11-5.5-20T580-226q-54-27-109-40.5T360-280q-56 0-111 13.5T140-226q-9 5-14.5 14t-5.5 20v32Zm240-400Zm0 400Z" />
                        </svg>
                        Jornadas académicas
                    </span>
                </button>

                <button id="congresos-btn" class="btn-button">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="currentColor">
                            <path
                                d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
                        </svg>
                        Congresos
                    </span>
                </button>

                <button class="btn-button" id="ponencias-btn">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="currentColor">
                            <path
                                d="M820-300q-25 0-42.5-17.5T760-360v-100q0-25 17.5-42.5T820-520q25 0 42.5 17.5T880-460v100q0 25-17.5 42.5T820-300Zm-20 140v-62q-51-8-85.5-46.5T680-360h40q0 42 29 71t71 29q42 0 71-29t29-71h40q0 53-34.5 91.5T840-222v62h-40ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q14 0 27.5 2t26.5 7q-26 31-40 69.5T360-640q0 43 14 81.5t40 69.5q-13 5-26.5 7t-27.5 2ZM40-160v-111q0-34 17-63t47-44q38-20 82.5-34.5T284-435q-40 28-62 71t-22 93v111H40Zm560-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T680-640q0-33-23.5-56.5T600-720q-33 0-56.5 23.5T520-640q0 33 23.5 56.5T600-560ZM280-160v-111q0-34 17-63t47-44q51-26 115.5-44T600-440q12 0 23.5.5T646-438q-10 18-16.5 37.5T621-360h-21q-72 0-127.5 18T381-306q-10 5-15.5 14.5T360-271v31h287q15 26 37 46t49 34H280Zm320-480Zm0 400Z" />
                        </svg>
                        Ponencias
                    </span>
                </button>

                <button class="btn-button" id="reconocimientos-btn">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="currentColor">
                            <path
                                d="M240-40v-329L110-580l185-300h370l185 300-130 211v329l-240-80-240 80Zm80-111 160-53 160 53v-129H320v129Zm20-649L204-580l136 220h280l136-220-136-220H340Zm98 383L296-558l57-57 85 85 169-170 57 56-226 227ZM320-280h320-320Z" />
                        </svg>
                        Reconocimientos
                    </span>
                </button>

                <button class="btn-button" id="otros-btn">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="currentColor">
                            <path
                                d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
                        </svg>
                        Otros
                    </span>
                </button>
            </div>
            
            <!-- Formulario de jornadas acádemicas -->
            <form style="display: none;" class="formulario" id="form-jornadas">
                <div class="title-form">
                    <h3>Formulario de jornadas acádemicas</h3>
                </div>
                <hr>
                <div class="grupo-formulario">
                    <label for="numero-jornadas">Número de constancias a generar</label>
                    <input type="number" id="numero-jornadas" class="campo-texto" placeholder="10" required>
                </div>

                <div class="grupo-formulario">
                    <label for="hoja-jornadas">Cargar hoja maestra</label>
                    <input type="file" id="hoja-jornadas" class="campo-archivo" required>
                </div>

                <div class="grupo-formulario">
                    <label for="excel-jornadas">Cargar excel con (Nombre, e-mail)</label>
                    <input type="file" id="excel-jornadas" class="campo-archivo" required>
                </div>

                <div class="grupo-formulario">
                    <label for="fecha-jornadas">Seleccionar fecha</label>
                    <input type="date" id="fecha-jornadas" class="campo-texto" required>
                </div>

                <div class="grupo-formulario">
                    <label for="mensaje-jornadas">Mensaje</label>
                    <textarea id="mensaje-jornadas" class="campo-textoarea"
                        placeholder="Por haber asistido a la conferencia X impartida por el/la (grado)(nombre)..."></textarea>
                </div>
                <button type="button" class="boton-cancelar" @click="cerrarFormulario">Cancelar</button>
                <button type="submit" class="boton-enviar">Generar</button>
            </form>
            
            <!-- Formulario de congresos -->
            <form style="display: none;" class="formulario" id="form-congresos">
                <div class="title-form">
                    <h3>Formulario para congresos</h3>
                </div>
                <hr>
                <div class="grupo-formulario">
                    <label for="numero-congresos">Número de constancias a generar</label>
                    <input type="number" id="numero-congresos" class="campo-texto" placeholder="10" required>
                </div>

                <div class="grupo-formulario">
                    <label for="hoja-congresos">Cargar hoja maestra</label>
                    <input type="file" id="hoja-congresos" class="campo-archivo" required>
                </div>

                <div class="grupo-formulario">
                    <label for="excel-congresos">Cargar excel con (Nombre, e-mail)</label>
                    <input type="file" id="excel-congresos" class="campo-archivo" required>
                </div>

                <div class="grupo-formulario">
                    <label for="fecha-congresos">Seleccionar fecha</label>
                    <input type="date" id="fecha-congresos" class="campo-texto" required>
                </div>

                <div class="grupo-formulario">
                    <label for="mensaje-congresos">Mensaje</label>
                    <textarea id="mensaje-congresos" class="campo-textoarea"
                        placeholder="Por haber asistido a la conferencia X impartida por el/la (grado)(nombre)..."></textarea>
                </div>
                <button type="button" class="boton-cancelar" @click="cerrarFormulario">Cancelar</button>
                <button type="submit" class="boton-enviar">Generar</button>
            </form>
            
            <!-- Formulario para ponencias -->
            <form style="display: none;" class="formulario" id="form-ponencias">
                <div class="title-form">
                    <h3>Formulario para ponencias</h3>
                </div>
                <hr>
                <div class="grupo-formulario">
                    <label for="numero-ponencias">Número de constancias a generar</label>
                    <input type="number" id="numero-ponencias" class="campo-texto" placeholder="10" required>
                </div>

                <div class="grupo-formulario">
                    <label for="hoja-ponencias">Cargar hoja maestra</label>
                    <input type="file" id="hoja-ponencias" class="campo-archivo" required>
                </div>

                <div class="grupo-formulario">
                    <label for="excel-ponencias">Cargar excel con (Nombre, e-mail)</label>
                    <input type="file" id="excel-ponencias" class="campo-archivo" required>
                </div>

                <div class="grupo-formulario">
                    <label for="fecha-ponencias">Seleccionar fecha</label>
                    <input type="date" id="fecha-ponencias" class="campo-texto" required>
                </div>

                <div class="grupo-formulario">
                    <label for="mensaje-ponencias">Mensaje</label>
                    <textarea id="mensaje-ponencias" class="campo-textoarea"
                        placeholder="Por haber asistido a la conferencia X impartida por el/la (grado)(nombre)..."></textarea>
                </div>
                <button type="button" class="boton-cancelar" @click="cerrarFormulario">Cancelar</button>
                <button type="submit" class="boton-enviar">Generar</button>
            </form>
            
            <!-- Formulario de reconocimientos -->
            <form style="display: none;" class="formulario" id="form-reconocimientos">
                <div class="title-form">
                    <h3>Formulario de reconocimientos</h3>
                </div>
                <hr>
                <div class="grupo-formulario">
                    <label for="numero-reconocimientos">Número de constancias a generar</label>
                    <input type="number" id="numero-reconocimientos" class="campo-texto" placeholder="10" required>
                </div>

                <div class="grupo-formulario">
                    <label for="hoja-reconocimientos">Cargar hoja maestra</label>
                    <input type="file" id="hoja-reconocimientos" class="campo-archivo" required>
                </div>

                <div class="grupo-formulario">
                    <label for="excel-reconocimientos">Cargar excel con (Nombre, e-mail)</label>
                    <input type="file" id="excel-reconocimientos" class="campo-archivo" required>
                </div>

                <div class="grupo-formulario">
                    <label for="fecha-reconocimientos">Seleccionar fecha</label>
                    <input type="date" id="fecha-reconocimientos" class="campo-texto" required>
                </div>

                <div class="grupo-formulario">
                    <label for="mensaje-reconocimientos">Mensaje</label>
                    <textarea id="mensaje-reconocimientos" class="campo-textoarea"
                        placeholder="Por haber asistido a la conferencia X impartida por el/la (grado)(nombre)..."></textarea>
                </div>
                <button type="button" class="boton-cancelar" @click="cerrarFormulario">Cancelar</button>
                <button type="submit" class="boton-enviar">Generar</button>
            </form>
            
            <!-- Form Otros -->
            <form style="display: none;" class="formulario" id="form-otros">
                <div class="title-form">
                    <h3>Formulario otros eventos</h3>
                </div>
                <hr>
                <div class="grupo-formulario">
                    <label for="numero-otros">Número de constancias a generar</label>
                    <input type="number" id="numero-otros" class="campo-texto" placeholder="10" required>
                </div>

                <div class="grupo-formulario">
                    <label for="hoja-otros">Cargar hoja maestra</label>
                    <input type="file" id="hoja-otros" class="campo-archivo" required>
                </div>

                <div class="grupo-formulario">
                    <label for="excel-otros">Cargar excel con (Nombre, e-mail)</label>
                    <input type="file" id="excel-otros" class="campo-archivo" required>
                </div>

                <div class="grupo-formulario">
                    <label for="fecha-otros">Seleccionar fecha</label>
                    <input type="date" id="fecha-otros" class="campo-texto" required>
                </div>

                <div class="grupo-formulario">
                    <label for="mensaje-otros">Mensaje</label>
                    <textarea id="mensaje-otros" class="campo-textoarea"
                        placeholder="Por haber asistido a la conferencia X impartida por el/la (grado)(nombre)..."></textarea>
                </div>
                <button type="button" class="boton-cancelar" @click="cerrarFormulario">Cancelar</button>
                <button type="submit" class="boton-enviar">Generar</button>
            </form>
        </main>
    </div>
</template>

<style scoped>
/* Estilos para contenido main y contenedor principal*/

.Gen-Con-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
}

main {
    width: calc(100% - 200px);
    height: calc(100vh - 130px);
    overflow-y: auto;
}

.header {
    width: 100%;
}

.aside {
    height: 100vh;
    width: 200px;
}

/* Terminan estilos para main y contenedor principal */

/* Estilos para NavigationGC */

.select-event {
    display: flex;
    position: relative;
    width: 100%;
    justify-content: space-between;
    border: solid 5px rgba(0, 0, 0, .1);
}

.btn-button {
    display: flex;
    align-items: center;
    width: 20%;
    border: solid 2px rgba(0, 0, 0, .1);
    padding: 5px;
    cursor: pointer;
}

.btn-button span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    overflow: hidden;
}

/* Terminan estilos para NavigationGC */
/* Formulario Jornadas*/
.formulario {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    height: max-content;
    margin: 5px auto;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}

.grupo-formulario {
    margin-bottom: 5px;
}

.grupo-formulario label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.campo-texto,
.campo-archivo,
.campo-textoarea {
    width: 100%;
    padding: 7px;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-sizing: border-box;
}

.campo-archivo {
    padding: 4px;
}

.campo-textoarea {
    resize: vertical;
    min-height: 70px;
}

.boton-enviar {
    width: 50%;
    padding: 5px;
    background-color: #222;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
}

.boton-enviar:hover {
    background-color: #333;
}

.boton-cancelar {
    width: 50%;
    padding: 5px;
    background-color: #888;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 5px;
}

.boton-cancelar:hover {
    background-color: #5e5e5e;
    color: #fff;
}

.formulario hr {
    margin: 0 0 20px 0;
}

/* Fin formulario Jornadas */
.title-form {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>