"use strict";

import {
  traerDatos,
  renderPeliculas,
  mostrarError
} from "./funciones/funciones.js";

window.onload = () => {
  iniciarApp();
};

// Función principal: solo coordina
const iniciarApp = async () => {
  const urlApi = "https://swapi.dev/api/filmsss";

  try {
    const listaPeliculas = await traerDatos(urlApi);
    renderPeliculas(listaPeliculas);
  } catch (error) {
    mostrarError(error);
  }
};

