"use strict";

let discos = [];

/**
 * Carga los discos guardados en localStorage al iniciar la página.
 */
export const cargarDiscos = () => {
  const datos = localStorage.getItem("discos");
  discos = datos ? JSON.parse(datos) : [];
  return discos;
};

/**
 * Guarda los discos en localStorage.
 */
export const guardarEnLocalStorage = () =>
  localStorage.setItem("discos", JSON.stringify(discos));

/**
 * Añade un disco al listado y lo guarda.
 */
export const agregarDisco = (disco) => {
  discos.push(disco);
  guardarEnLocalStorage();
};

/**
 * Elimina un disco por su índice.
 */
export const eliminarDisco = (indice) => {
  discos.splice(indice, 1);
  guardarEnLocalStorage();
};

/**
 * Devuelve el array de discos actual.
 */
export const obtenerDiscos = () => discos;
