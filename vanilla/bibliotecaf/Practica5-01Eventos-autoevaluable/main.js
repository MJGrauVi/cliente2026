"use strict";
// Importar funciones desde funciones.js.
import { iniciarSaludo, detenerSaludo } from "./funcionesEjercicios5_01/Ejercicio1.js";
//window.onload = () => {

  document.addEventListener("DOMContentLoaded", (event) => {
        const comenzar = document.getElementById("comenzar");
        console.log(comenzar);
        const detener = document.getElementById("detener");
        const contenedor = document.getElementById("")

        let id = null;

        comenzar.addEventListener("click", (event) => {

            if (!id) {

                id = setInterval(iniciarSaludo, 2000); // Inicia el saludo cada 2 segundo.

            }
        }, false);

        detener.addEventListener("click", (event) => {
            id = detenerSaludo(id); // Detiene el intervalo.
        });
    });
//} //fin window.onload.
