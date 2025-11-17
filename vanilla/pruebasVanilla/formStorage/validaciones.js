"use strict";

/**
 * Valida que el nombre del disco tenga al menos 5 caracteres.
 */
export const validarNombre = (texto) =>
  texto && texto.trim().length >= 5;

/**
 * Valida que el grupo o solista tenga mínimo 5 caracteres.
 */
export const validarGrupo = (texto) =>
  texto && texto.trim().length >= 5;

/**
 * Valida que el año tenga exactamente 4 números.
 */
export const validarAnio = (anio) =>
  /^\d{4}$/.test(anio);

/**
 * Valida que exista al menos un género musical seleccionado.
 */
export const validarGeneros = (form) =>
  form.querySelectorAll('input[name="generoMusical"]:checked').length > 0;

/**
 * Valida que el código siga el patrón ES-000AA.
 */
export const validarLocalizacion = (codigo) =>
  /^ES-\d{3}[A-Z]{2}$/.test(codigo);
