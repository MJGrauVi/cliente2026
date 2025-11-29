"use strict";

async function traerDatos(urlApi) {
  try {
    const resultado = await fetch(urlApi);
    const data = await resultado.json();
    return data.results || data; // siempre array
  } catch (error) {
    console.error("Se ha producido un error:", error.message);
    return [];
  }
}
//Recorremos el array devuelto de la promesa para mostrar el listado.
const renderPeliculas = (listaPeliculas) =>{
  const ul = document.getElementById("listaPeliculas");
  ul.innerHTML = "";
  //Guardo el id de la pelicula en attibuto dataset.id.
  listaPeliculas.forEach((pelicula, index) => {
    const li = document.createElement("li");
    li.textContent = `${index+1}.- Id: ${pelicula.episode_id} - ${pelicula.title}`;
    li.dataset.id = pelicula.episode_id;
    ul.appendChild(li);
  });
}
//Mostramos el detalle de la pelicula, fecha formateada.
const mostrarDetalles = (pelicula) =>{
  const contenedor = document.getElementById("detalles");
  const fechaEuro = new Date(pelicula.release_date).toLocaleDateString("es-ES");


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
