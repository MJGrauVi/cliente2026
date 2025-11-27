"use strict";

import {
  /* validarNombre, */
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
  mostrarMensajeSegundos,
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

  //Borra mensajes existentes en el divErrores del formulario.
  function validarFormulario() {
    limpiarErrores(erroresDiv, form);
    let valido = true;
    //Referencias a los inputs.
    const nombreInput = form.elements["nombre"];
    const anioInput = form.elements["anio"];
    const codigoInput = form.elements["codigo"];
    //Si los datos del formulari no son correctos, marcamos el error en el input correspondiente
    if (!validarNombre(nombreInput.value)) {
      marcarError(
        nombreInput,
        "Nombre: obligatorio y >= 5 caracteres.",
        erroresDiv
      );
      valido = false;
    }
    if (!validarGrupoSolista(form)) {
      marcarError(null, "Selecciona: Grupo musical o Solista.", erroresDiv);
      valido = false;
    }
    if (!validarAnio(anioInput.value)) {
      marcarError(
        anioInput,
        "Año: debe tener formato YYYY (4 dígitos).",
        erroresDiv
      );
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
  //llamamos a validarFormulario con el click, si hay errores se detiene y muestra los mensajes.
  btnGuardar.addEventListener("click", () => {
    //No necesita controlar la propagación

    if (!validarFormulario()) return;
    //Continua si es true y devuelve el objeto creado.
    const nuevo = construirDiscoDesdeFormulario(form);

    //Lo añade al nuevo array creado con los discos anteriores.
    discos = [...discos, nuevo];

    //Guarda yuna vez convertido a JSON.
    guardarEnLocalStorage(discos);

    mostrarMensajeSegundos("Disco guardado correctamente");
    form.reset();
    listado.innerHTML = ""; // limpiar mensaje "No hay discos"
  });

  //Booleano para ocultar los discos al hacer clic en mostrar.
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

  listado.addEventListener("click", (event) => {
    //Añadimos la clase al elemento en el cual hacemos clic y guardamos si indice y eliminamos el elemento del array.
    if (event.target.classList.contains("borrar")) {
      const idx = Number(event.target.dataset.index);
      if (!isNaN(idx) && idx >= 0) {
        discos.splice(idx, 1); //Permite eliminar elementos en una posición específica.(indiceComienzoModificacion, numElementosEliminar)
        guardarEnLocalStorage(discos);
        mostrarDiscos(discos, listado);
        mostrarMensajeSegundos("Disco eliminado");
      }
    }
  });

  //Se le pasa el texto a buscar, el array con los discos guardados y el contenedor
  btnBuscar.addEventListener("click", () =>
    buscarDiscos(inputBuscar.value, discos, listado)
  );
  btnLimpiar.addEventListener("click", () => {
    inputBuscar.value = "";
    mostrarDiscos(discos, listado);
  });

  mostrarDiscos(discos, listado);
});
