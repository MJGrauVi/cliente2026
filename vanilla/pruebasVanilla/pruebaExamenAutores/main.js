"use strict";

import { discos, setDiscos, validarFormulario, guardarDiscosEnLocalStorage, cargarDiscosDesdeLocalStorage, renderTablaDiscos, mostrarErrores } from "./funciones/funciones.js";
// DOM
const formulario = document.getElementById("formulario");
const tabla = document.querySelector("#tabla-discos tbody");
const erroresSeccion = document.getElementById("errores-seccion");

// Carga inicial
setDiscos(cargarDiscosDesdeLocalStorage());
renderTablaDiscos(tabla, discos);

// Submit
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const email = document.getElementById("email").value.trim();
  const autor = document.getElementById("autor").value.trim();
  const genero = document.getElementById("genero").value;
  const anio = document.getElementById("anio").value;

  const radioCheck = document.querySelector('input[name="pregunta"]:checked');
  const pregunta = radioCheck ? radioCheck.value : "";

  const errores = validarFormulario({ autor, email, genero, anio, pregunta });

  if (errores.length) {
    mostrarErrores(erroresSeccion, errores);
    return;
  }

  const nuevosDiscos = [...discos, { autor, email, genero, anio, pregunta }];
  setDiscos(nuevosDiscos);
  guardarDiscosEnLocalStorage(nuevosDiscos);
  renderTablaDiscos(tabla, nuevosDiscos);
  formulario.reset();
});

// Eliminar
tabla.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("btn-eliminar")) {
    const index = Number(evento.target.dataset.index);
    const nuevosDiscos = discos.filter((_, i) => i !== index);
    setDiscos(nuevosDiscos);
    guardarDiscosEnLocalStorage(nuevosDiscos);
    renderTablaDiscos(tabla, nuevosDiscos);
  }
});
