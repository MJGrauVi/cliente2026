"use strict";

import {
  traerDatos,
  renderPeliculas,
  mostrarDetalles
} from "./funciones/funciones.js";

window.onload = () => {
  const urlApi = "https://swapi.dev/api/films";

  traerDatos(urlApi).then(listaPeliculas => {

    // Mostrar mensaje si no carga nada
    if (listaPeliculas.length === 0) {
      document.getElementById("listaPeliculas").innerHTML =
        "<li>No se pudieron cargar las películas</li>";
      return;
    }

    // Pintar lista
    renderPeliculas(listaPeliculas);

    // Añadir eventos
    const ul = document.getElementById("listaPeliculas");

    ul.querySelectorAll("li").forEach(li => {
      li.addEventListener("click", () => {
        const id = parseInt(li.dataset.id, 10);
        const pelicula = listaPeliculas.find(peli => peli.episode_id === id);
        mostrarDetalles(pelicula);
      });
    });

  });
};
