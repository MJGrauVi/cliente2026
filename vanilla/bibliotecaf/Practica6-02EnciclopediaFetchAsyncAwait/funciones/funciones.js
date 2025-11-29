"use strict";

async function traerDatos(urlApi) {
  try {
    const resultado = await fetch(urlApi);
    const data = await resultado.json();
    return data.results; // siempre array
  } catch (error) {
    console.error("Se ha producido un error:", error.message);
    return [];
  }
}

function renderPeliculas(listaPeliculas) {
  const ul = document.getElementById("listaPeliculas");
  ul.innerHTML = "";

  listaPeliculas.forEach((pelicula, index) => {
    const li = document.createElement("li");
    li.textContent = `${index+1}.- Id: ${pelicula.episode_id} - ${pelicula.title}`;
    li.dataset.id = pelicula.episode_id;
    ul.appendChild(li);
  });
}

function mostrarDetalles(pelicula) {
  const contenedor = document.getElementById("detalles");
  const d = new Date(pelicula.release_date);
  const fechaEuro = d.toLocaleDateString("es-ES");

  contenedor.innerHTML = `
    <h2><strong>Título:</strong> ${pelicula.title}</h2>
    <p><strong>Director:</strong> ${pelicula.director}</p>
    <p><strong>Productor:</strong> ${pelicula.producer}</p>
    <p><strong>Fecha de lanzamiento:</strong> ${fechaEuro}</p>
    <p><strong>Sinopsis:</strong> ${pelicula.opening_crawl}</p>
  `;
}

export {
  traerDatos,
  renderPeliculas,
  mostrarDetalles,
};
