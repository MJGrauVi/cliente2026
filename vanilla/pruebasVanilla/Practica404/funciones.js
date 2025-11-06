"use strict";

// Función para mezclar las piezas.
export function mezclarPiezas(piezas) {
  return piezas.sort(() => Math.random() - 0.5);
}

// Funciones para arrastrar y soltar.
export function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.dataset.posicion);
}

export function dragOver(event) {
  event.preventDefault();
}

export function drop(event, verificarSolucion) {
  event.preventDefault();
  if (event.target.classList.contains("casilla") && !event.target.hasChildNodes()) {
    const posicion = event.dataTransfer.getData("text/plain");
    const pieza = document.querySelector(`.pieza[data-posicion='${posicion}']`);
    event.target.appendChild(pieza);
    verificarSolucion();
  }
}

// Función para verificar si la solución es correcta.
export function verificarSolucion(casillas, mostrarMensajeExito) {
  const correcto = Array.from(casillas).every(
    (casilla) =>
      casilla.firstChild && casilla.firstChild.dataset.posicion == casilla.dataset.posicion
  );

  if (correcto && Array.from(casillas).every((c) => c.hasChildNodes())) {
    mostrarMensajeExito("¡Felicidades! Has completado el rompecabezas correctamente.");
  }
}

// Función para mostrar el mensaje de éxito.
export function mostrarMensajeExito(mensaje) {
  const mensajeExistente = document.querySelector(".mensaje-exito");
  if (mensajeExistente) mensajeExistente.remove();

  const mensajeExito = document.createElement("div");
  mensajeExito.textContent = mensaje;
  mensajeExito.classList.add("mensaje-exito");
  document.body.appendChild(mensajeExito);
}

// Función para reiniciar el juego.
export function reiniciarJuego(piezas, contenedorPiezas, panelJuego, mensajeExistente) {
  contenedorPiezas.innerHTML = "";
  panelJuego.querySelectorAll(".casilla").forEach((casilla) => (casilla.innerHTML = ""));

  if (mensajeExistente) mensajeExistente.remove();

  piezas = mezclarPiezas(piezas);
  piezas.forEach((p) => contenedorPiezas.appendChild(p));
}