"use strict";
import { crearSelectorColores, crearLienzo, activarPintura, configurarBotonReset } from './principal.js';


document.addEventListener("DOMContentLoaded", () => {
  crearSelectorColores();
  crearLienzo(60, 60);
  activarPintura();
  configurarBotonReset();
});