"use strict";

import { traerDatos } from "./datos.js";
import { renderPeliculas, mostrarDetalles, mostrarError } from "./ui.js";

export const iniciarApp = async () => {
  const urlApi = "//http://localhost:3000/videojuegos";
  //http://localhost:3000/videojuegos/https://swapi.dev/api/films

  try {
    const listaPeliculas = await traerDatos(urlApi);
    manejarPeliculas(listaPeliculas);
  } catch (error) {
    mostrarError("Error al iniciar la aplicación: " + error.message);
  }
};

function manejarPeliculas(listaPeliculas) {
  if (!listaPeliculas || listaPeliculas.length === 0) {
    mostrarError("No se pudieron cargar las películas");
    return;
  }

  renderPeliculas(listaPeliculas);
  prepararEventos(listaPeliculas);
}

function prepararEventos(listaPeliculas) {
  const ul = document.getElementById("listaPeliculas");
  if (!ul) return;

  ul.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      const id = parseInt(li.dataset.id, 10);
      const pelicula = listaPeliculas.find(peli => peli.episode_id === id);
      mostrarDetalles(pelicula);
    });
  });
}
