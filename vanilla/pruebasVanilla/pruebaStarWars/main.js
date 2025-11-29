"use strict";

const URL_API = "http://swapi.dev/api/films/";

async function cargarPeliculas() {
  try {
    const respuesta = await fetch(URL_API); //Aquí consuminos la promesa "then()"que devuelve fetch.
    //Esperamos a obtener el objeto respuesta.
    console.log(respuesta);
    const datos = await respuesta.json(); //Se espera

    mostrarListado(datos.results);
    console.log(`Datos ${datos}`);
  } catch (error) {
    console.error(`Error cargando peliculas: ${error}`);
  }
  /* Ejemplo con .then()
  
    function cargarPeliculas() {
  fetch(API_URL)
    .then(respuesta => respuesta.json()) // consumir promesa de fetch
    .then(datos => mostrarListado(datos.results)) // consumir promesa de json
    .catch(error => console.error("Error cargando películas:", error));
}
     */
}
const plantillaLista = ()=>{

}
// Función para mostrar listado de películas
function mostrarListado(peliculas) {
  const contenedor = document.getElementById("peliculas");
  contenedor.innerHTML = ""; // limpiar

  peliculas.forEach((pelicula, index) => {
    const elementoLista = document.createElement("li");
    elementoLista.className = "pelicula";
    elementoLista.textContent = `${index + 1}. ${pelicula.title}`;
    elementoLista.addEventListener("click", () => mostrarDetalle(pelicula));

    contenedor.appendChild(elementoLista);
  });
}

// Función para mostrar detalle de una película
function mostrarDetalle(pelicula) {
  const detalle = document.getElementById("detalle");
  detalle.innerHTML = `
    <h2>${pelicula.title}</h2>
    <p><strong>Sinopsis:</strong> ${pelicula.opening_crawl}</p>
    <p><strong>Director:</strong> ${pelicula.director}</p>
    <p><strong>Productor:</strong> ${pelicula.producer}</p>
    <p><strong>Fecha de lanzamiento:</strong> ${pelicula.release_date}</p>
  `;
}

// Al cargar la página, ejecutamos
cargarPeliculas();
