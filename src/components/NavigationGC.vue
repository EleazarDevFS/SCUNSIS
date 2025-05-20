<script>
export default {
    mounted() {
        const btns = document.querySelectorAll('.btn-button');

        // Guardar el color original de cada botón
        btns.forEach((boton) => {
            const estilos = getComputedStyle(boton);
            boton.dataset.originalColor = estilos.backgroundColor;
        });

        btns.forEach((boton) => {

            boton.addEventListener('click', () => {
                // Restaurar el color original a todos los botones
                btns.forEach((b) => {
                    b.style.backgroundColor = b.dataset.originalColor;
                });

                // Cambiar el color del botón clicado
                boton.style.backgroundColor = '#f5f5f5' //'rgba(0,0,0,.3)';

            });
        });
    }
}


</script>
<template>
    <div class="select-event">
        <button class="btn-button">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="currentColor">
                    <path
                        d="M840-120v-640H120v320H40v-320q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120ZM360-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM40-80v-112q0-34 17.5-62.5T104-298q62-31 126-46.5T360-360q66 0 130 15.5T616-298q29 15 46.5 43.5T680-192v112H40Zm80-80h480v-32q0-11-5.5-20T580-226q-54-27-109-40.5T360-280q-56 0-111 13.5T140-226q-9 5-14.5 14t-5.5 20v32Zm240-400Zm0 400Z" />
                </svg>
                Jornadas académicas
            </span>
        </button>

        <button class="btn-button">

            <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="currentColor">
                    <path
                        d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
                </svg>
                Congresos
            </span>
        </button>

        <button class="btn-button">

            <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="currentColor">
                    <path
                        d="M820-300q-25 0-42.5-17.5T760-360v-100q0-25 17.5-42.5T820-520q25 0 42.5 17.5T880-460v100q0 25-17.5 42.5T820-300Zm-20 140v-62q-51-8-85.5-46.5T680-360h40q0 42 29 71t71 29q42 0 71-29t29-71h40q0 53-34.5 91.5T840-222v62h-40ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q14 0 27.5 2t26.5 7q-26 31-40 69.5T360-640q0 43 14 81.5t40 69.5q-13 5-26.5 7t-27.5 2ZM40-160v-111q0-34 17-63t47-44q38-20 82.5-34.5T284-435q-40 28-62 71t-22 93v111H40Zm560-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T680-640q0-33-23.5-56.5T600-720q-33 0-56.5 23.5T520-640q0 33 23.5 56.5T600-560ZM280-160v-111q0-34 17-63t47-44q51-26 115.5-44T600-440q12 0 23.5.5T646-438q-10 18-16.5 37.5T621-360h-21q-72 0-127.5 18T381-306q-10 5-15.5 14.5T360-271v31h287q15 26 37 46t49 34H280Zm320-480Zm0 400Z" />
                </svg>
                Ponencias
            </span>
        </button>

        <button class="btn-button">

            <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="currentColor">
                    <path
                        d="M240-40v-329L110-580l185-300h370l185 300-130 211v329l-240-80-240 80Zm80-111 160-53 160 53v-129H320v129Zm20-649L204-580l136 220h280l136-220-136-220H340Zm98 383L296-558l57-57 85 85 169-170 57 56-226 227ZM320-280h320-320Z" />
                </svg>
                Reconocimientos

            </span>
        </button>

        <button class="btn-button">

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
</template>
<style scoped>
.select-event {
    display: flex;
    position: absolute;
    width: calc(100% - 200px);
    justify-content: space-between;
    border: solid 5px rgba(0, 0, 0, .1);
}

.btn-button {
    display: flex;
    align-items: center;
    width: 20%;
    border: solid 1px rgba(0, 0, 0, .1);
    padding: 5px;
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
</style>