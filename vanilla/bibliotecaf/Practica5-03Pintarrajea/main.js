"use strict";
import { crearSelectorColores, crearLienzo, pintarCelda, activarPintura, configurarBotonReset } from './principal.js';


document.addEventListener("DOMContentLoaded", () => {
  crearSelectorColores();
  crearLienzo(60, 60);
  pintarCelda, 
  activarPintura();
  configurarBotonReset();
});