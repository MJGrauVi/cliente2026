"use strict";

import {
  validarNombre,
  validarGrupo,
  validarAnio,
  validarGeneros,
  validarLocalizacion
} from "./validaciones.js";

import { marcarError, limpiarErrores } from "./errores.js";

import { agregarDisco, eliminarDisco, obtenerDiscos } from "./almacenamiento.js";

/**
 * Valida todo el formulario y devuelve true si es válido.
 */
export const validarFormulario = (form, erroresDiv) => {
  limpiarErrores(form, erroresDiv);
  let valido = true;

  if (!validarNombre(form.nombre.value)) {
    marcarError(form.nombre, "El nombre debe tener al menos 5 caracteres", erroresDiv);
    valido = false;
  }

  if (!validarGrupo(form.grupoSolista.value)) {
    marcarError(form.grupoSolista, "El grupo/intérprete debe tener al menos 5 caracteres", erroresDiv);
    valido = false;
  }

  if (!validarAnio(form.anio.value)) {
    marcarError(form.anio, "El año debe tener 4 números (YYYY)", erroresDiv);
    valido = false;
  }

  if (!validarGeneros(form)) {
    marcarError(null, "Debes seleccionar al menos un género musical", erroresDiv);
    valido = false;
  }

  if (!validarLocalizacion(form.codigo.value)) {
    marcarError(form.codigo, "Código incorrecto (formato ES-000AA)", erroresDiv);
    valido = false;
  }

  return valido;
};

/**
 * Muestra todos los discos en el listado con su botón de borrado.
 */
export const mostrarDiscos = (listado, discos) => {
  listado.innerHTML = "";

  discos.forEach((disco, i) => {
    listado.innerHTML += `
      <li>
        <strong>${disco.nombre}</strong> (${disco.anio})
        <button class="borrar" data-id="${i}" title="Borrar disco">🗑️</button>
      </li>
    `;
  });
};

/**
 * Filtra los discos según el texto que introduce el usuario.
 * Muestra solo los que contienen ese texto en su nombre.
 */
export const filtrarDiscos = (texto, listado, discos) => {
  const filtrados = discos.filter(disco =>
    disco.nombre.toLowerCase().includes(texto.toLowerCase())
  );

  listado.innerHTML = "";

  filtrados.forEach((disco, i) => {
    listado.innerHTML += `
      <li>
        <strong>${disco.nombre}</strong> (${disco.anio})
      </li>
    `;
  });
};
