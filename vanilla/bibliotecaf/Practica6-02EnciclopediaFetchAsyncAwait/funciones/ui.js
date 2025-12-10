"use strict";

export function renderPeliculas(listaPeliculas) {
  const ul = document.getElementById("listaPeliculas");
  if (!ul) return;

  ul.innerHTML = listaPeliculas
    .map(peli => `<li data-id="${peli.episode_id}">${peli.title}</li>`)
    .join("");
}

export function mostrarDetalles(pelicula) {
  const detalles = document.getElementById("detalles");
  if (!detalles) return;

  detalles.innerHTML = `
    <h2>${pelicula.title}</h2>
    <p>Director: ${pelicula.director}</p>
    <p>Fecha: ${pelicula.release_date}</p>
  `;
}

export function mostrarError(mensaje) {
  const ul = document.getElementById("listaPeliculas");
  if (ul) {
    ul.innerHTML = `<li>${mensaje}</li>`;
  } else {
    console.error(mensaje);
  }
}
