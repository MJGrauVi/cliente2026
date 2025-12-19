"use strict";

import {
  traerDatos,
  renderPeliculas,
  mostrarDetalles,
} from "./funciones/funciones.js";

window.onload = () => {
  const urlApi = "https://swapi.dev/api/";
  //traerDatos devuelve una promesa para retornar un array cuando se resuelva.
  traerDatos(urlApi).then((listaPeliculas) => {
    //consumin¡mos la promesa con .then().

    // Mostrar mensaje si no carga nada.
    if (listaPeliculas.length === 0) {
      document.getElementById("listaPeliculas").innerHTML =
        "<li>No se pudieron cargar las películas</li>";
      return;
    }

    // <Mostrar la lista.
    renderPeliculas(listaPeliculas);

    // Añadir el evento al li por su id.
    const ul = document.getElementById("listaPeliculas");

    ul.querySelectorAll("li").forEach((li) => {
      li.addEventListener("click", () => {
        const id = parseInt(li.dataset.id, 10); //Parseo el string devuelto a int.
        const pelicula = listaPeliculas.find((peli) => peli.episode_id === id);
        mostrarDetalles(pelicula);
      });
    });
  });
};
