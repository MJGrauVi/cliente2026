"use strict";

import {
  traerDatos,
  renderPeliculas,
  mostrarDetalles
} from "./funciones/funciones.js";

window.onload = () => {
  iniciarApp();
};

  const iniciarApp = async ()=>{ 
  const urlApi = "https://swapi.dev/api/films";

  // Cargar datos.
  const listaPeliculas = await traerDatos(urlApi);
  console.log(listaPeliculas);

  //Mostrar mensaje sin no carga las peliculas.
    if (listaPeliculas.length === 0) {
  document.getElementById("listaPeliculas").innerHTML =
    "<li>No se pudieron cargar las películas</li>";
  return;
}

  // Pintar lista.
  renderPeliculas(listaPeliculas);

  // Añadir evento al li por su id.
  const ul = document.getElementById("listaPeliculas");

  ul.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      const id = parseInt(li.dataset.id, 10);
      const pelicula = listaPeliculas.find(peli => peli.episode_id === id);
      mostrarDetalles(pelicula);
    });
  });
}

