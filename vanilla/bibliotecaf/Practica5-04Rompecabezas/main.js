"use strict";
import { cargarImagenes, crearEventosDragAndDrop, reiniciarPuzle } from "./funciones.js";


window.addEventListener("DOMContentLoaded", () => {

  cargarImagenes();
  crearEventosDragAndDrop();
  reiniciarPuzle();
  document.getElementById("reiniciar").addEventListener("click", reiniciarPuzle);


});//fin del addEventListener.
