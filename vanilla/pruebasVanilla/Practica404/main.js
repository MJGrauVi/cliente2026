'use strict';
import {
  mezclarPiezas,
  dragStart,
  dragOver,
  drop,
  verificarSolucion,
  mostrarMensajeExito,
  reiniciarJuego
} from './funciones.js';

// Variables de referencia.
const contenedorPiezas = document.getElementById("pieza-container");
const panelJuego = document.querySelector(".grilla");
const reiniciarBtn = document.getElementById("reiniciar");

// Crear y mezclar piezas al cargar la página.
let piezas = [];
for (let i = 1; i <= 9; i++) {
  const pieza = document.createElement("img");
  pieza.src = `imagenes/${i}.png`;  
  pieza.classList.add("pieza");
  pieza.draggable = true;
  pieza.dataset.posicion = i;
  piezas.push(pieza);

  pieza.addEventListener("dragstart", dragStart);  // Agregar evento dragstart.
}

// Mezcla y añade las piezas al contenedor.
piezas = mezclarPiezas(piezas);
piezas.forEach((p) => contenedorPiezas.appendChild(p));

// Crear las casillas en el panel de juego
const casillas = panelJuego.querySelectorAll(".casilla");
casillas.forEach((casilla) => {
  casilla.addEventListener("dragover", dragOver); // Permitir arrastrar sobre las casillas.
  casilla.addEventListener("drop", (event) => drop(event, () => verificarSolucion(casillas, mostrarMensajeExito)));
});

// Evento de reiniciar el juego
reiniciarBtn.addEventListener("click", () => {
  reiniciarJuego(piezas, contenedorPiezas, panelJuego, document.querySelector(".mensaje-exito"));
}, false);