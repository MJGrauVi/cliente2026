"use strict";

import {
  cargarPeliculas,
  manejarClicPeliculas
} from "./services/peliculasService.js";

document.addEventListener("DOMContentLoaded", async () => {
  const listaPeliculas = document.getElementById("listaPeliculas");
  const detalles = document.getElementById("detalles");

  try {
    const peliculas = await cargarPeliculas();

    peliculas.forEach(pelicula => {
      const li = document.createElement("li");
      li.textContent = `${pelicula.id} - ${pelicula.titulo}`;
      li.dataset.id = pelicula.id;
      listaPeliculas.appendChild(li);
    });
  } catch (error) {
    console.error(error.message);
  }

  listaPeliculas.addEventListener("click", async (event) => {
      try {
        await manejarClicPeliculas(event, detalles);
      } catch (error) {
        console.error(error.message);
      }
    },false);
}, false); //fin del listener.
