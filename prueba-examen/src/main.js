"use strict";

import {
  cargarPeliculas,
  cargarPeliculaPorId
} from "./services/peliculasService.js";

document.addEventListener("DOMContentLoaded", async () => {
  const listaPeliculas = document.getElementById("listaPeliculas");
  const detalles = document.getElementById("detalles");

  try {
    const peliculas = await cargarPeliculas();

    peliculas.forEach(pelicula => {
      const li = document.createElement("li");
      li.textContent = `${pelicula.id} - ${pelicula.titulo}`;

      li.addEventListener("click", async () => {
        try {
          const detalle = await cargarPeliculaPorId(pelicula.id);

          detalles.innerHTML = `
            <p><strong>Título:</strong> ${detalle.titulo}</p>
            <p><strong>Año:</strong> ${detalle.año}</p>
          `;
        } catch (error) {
          console.error(error.message);
        }
      }, false);

      listaPeliculas.appendChild(li);
    });

  } catch (error) {
    console.error(error.message);
  }
}, false);
