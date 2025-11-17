"use strict";

import {
  validarFormulario,
  mostrarDiscos,
  filtrarDiscos
} from "./eventos.js";

import {
  cargarDiscos,
  agregarDisco,
  eliminarDisco
} from "./almacenamiento.js";

window.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("adDisco");
  const erroresDiv = document.getElementById("errores");
  const listado = document.getElementById("listado");
    // Elementos de búsqueda
  const buscarInput = document.getElementById("buscarTexto");
  const btnBuscar = document.getElementById("btnBuscar");
  const btnLimpiar = document.getElementById("btnLimpiar");

  // Cargar inicial desde localStorage
  cargarDiscos();
  mostrarDiscos(listado);

  // Botón Guardar
  form.guardar.addEventListener("click", () => {
    if (validarFormulario(form, erroresDiv)) {
      
      const disco = {
        nombre: form.nombre.value,
        caratula: form.caratula.value,
        grupoSolista: form.grupoSolista.value,
        anio: form.anio.value,
        generos: [...form.querySelectorAll('input[name="generoMusical"]:checked')]
          .map(g => g.value),
        codigo: form.codigo.value,
        prestado: form.prestado.checked
      };

      agregarDisco(disco);
      mostrarDiscos(listado);
    }
  }, false);


  // --------------------------
  // MOSTRAR DISCO
  // --------------------------
  form.mostrar.addEventListener("click", () => {
    mostrarDiscos(listado, obtenerDiscos());
  }, false);


  // --------------------------
  // BORRAR DISCO (delegación de eventos)
  // --------------------------
  listado.addEventListener("click", (e) => {
    if (e.target.classList.contains("borrar")) {

      const id = e.target.dataset.id;

      if (confirm("¿Seguro que deseas eliminar este disco?")) {
        eliminarDisco(id);
        mostrarDiscos(listado, obtenerDiscos());
      }
    }
  }, false);



  // Botón Buscar → filtrar resultados por nombre
  btnBuscar.addEventListener("click", () => {
    const texto = buscarInput.value.trim();
    if (!texto) return alert("Escribe algo para buscar.");
    filtrarDiscos(texto, listado, obtenerDiscos());
  }, false);

  btnLimpiar.addEventListener("click", () => {
    buscarInput.value = "";
    mostrarDiscos(listado, obtenerDiscos());
  }, false);

  document.getElementById("btnBuscar").addEventListener("click", buscar);
document.getElementById("btnLimpiar").addEventListener("click", limpiarBusqueda);

});
