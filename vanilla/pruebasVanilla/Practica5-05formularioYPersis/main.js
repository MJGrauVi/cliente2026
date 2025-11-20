"use strict";

import {
  validarNombre,
  validarGrupoSolista,
  validarAnio,
  validarGeneroMusical,
  validarLocalizacion,
  marcarError,
  limpiarErrores,
  cargarDiscos,
  guardarEnLocalStorage,
  construirDiscoDesdeFormulario,
  mostrarDiscos,
  buscarDiscos,
  mostrarMensajeSegundos
} from "./js/funciones.js";

//Esperamos a que carge todo el DOM.
document.addEventListener("DOMContentLoaded", () => {

  //Tomamos referencia a los contenedores.
  const form = document.getElementById("adDisco");
  const erroresDiv = document.getElementById("errores");
  const listado = document.getElementById("listado");

  const inputBuscar = document.getElementById("inputBuscar");
  const btnBuscar = document.getElementById("btnBuscar");
  const btnLimpiar = document.getElementById("btnLimpiar");

  const btnGuardar = form.querySelector('input[name="guardar"]');
  const btnMostrar = form.querySelector('input[name="mostrar"]');

  let discos = cargarDiscos();

  function validarFormulario() {
    limpiarErrores(erroresDiv, form);
    let valido = true;

    const nombreInput = form.elements["nombre"];
    const anioInput = form.elements["anio"];
    const codigoInput = form.elements["codigo"];

    if (!validarNombre(nombreInput.value)) {
      marcarError(nombreInput, "Nombre: obligatorio y >= 5 caracteres.", erroresDiv);
      valido = false;
    }
    if (!validarGrupoSolista(form)) {
      marcarError(null, "Selecciona: Grupo musical o Solista.", erroresDiv);
      valido = false;
    }
    if (!validarAnio(anioInput.value)) {
      marcarError(anioInput, "Año: debe tener formato YYYY (4 dígitos).", erroresDiv);
      valido = false;
    }
    if (!validarGeneroMusical(form)) {
      marcarError(null, "Selecciona al menos un género musical.", erroresDiv);
      valido = false;
    }
    if (!validarLocalizacion(codigoInput.value)) {
      marcarError(codigoInput, "Localización: formato ES-001AA.", erroresDiv);
      valido = false;
    }

    return valido;
  }

  btnGuardar.addEventListener("click", () => {
    if (!validarFormulario()) return;

    const nuevo = construirDiscoDesdeFormulario(form);
    discos = [...discos, nuevo];
    guardarEnLocalStorage(discos);

    mostrarMensajeSegundos("Disco guardado correctamente");
    form.reset();
    listado.innerHTML = ""; // limpiar mensaje "No hay discos"
  });

  let mostrando = false;
  btnMostrar.addEventListener("click", () => {
    if (!mostrando) {
      mostrarDiscos(discos, listado);
      mostrando = true;
    } else {
      listado.innerHTML = "";
      mostrando = false;
    }
  });

  listado.addEventListener("click", (e) => {
    if (e.target.classList.contains("borrar")) {
      const idx = Number(e.target.dataset.index);
      if (!isNaN(idx) && idx >= 0) {
        discos.splice(idx, 1);
        guardarEnLocalStorage(discos);
        mostrarDiscos(discos, listado);
        mostrarMensajeSegundos("Disco eliminado");
      }
    }
  });

  btnBuscar.addEventListener("click", () => buscarDiscos(inputBuscar.value, discos, listado));
  btnLimpiar.addEventListener("click", () => {
    inputBuscar.value = "";
    mostrarDiscos(discos, listado);
  });

  mostrarDiscos(discos, listado);
});
