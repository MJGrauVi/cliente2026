"use strict";

import {
  traerDatos,
  renderPeliculas,
  mostrarDetalles,
} from "./funciones/funciones.js";

window.onload = () => {
  const urlApi = "https://swapi.dev/api/films";

  traerDatos(urlApi)
    .then((listaPeliculas) => {
      renderPeliculas(listaPeliculas);

      const ul = document.getElementById("listaPeliculas");
      ul.querySelectorAll("li").forEach((li) => {
        li.addEventListener("click", () => {
          const id = parseInt(li.dataset.id, 10);
          const pelicula = listaPeliculas.find((p) => p.episode_id === id);
          mostrarDetalles(pelicula);
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
