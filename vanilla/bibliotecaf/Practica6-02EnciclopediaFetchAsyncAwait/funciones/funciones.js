"use strict";

async function traerDatos (urlApi) {
  try {
    const respuesta = await fetch(urlApi);
    console.log(respuesta);
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    console.log(`Los datos: ${datos.results}`);
    return datos.results || datos; // Siempre array de peliculas
  } catch (error) {
    console.error("Error al obtener datos:", error.message);
    return [];
  }
}

const renderPeliculas = (listaPeliculas)=> {
  const ul = document.getElementById("listaPeliculas");
  ul.innerHTML = "";

  listaPeliculas.forEach((pelicula, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}.- ${pelicula.title}`;
    li.dataset.id = pelicula.episode_id;
    ul.appendChild(li);
  });
}

const mostrarDetalles = (pelicula)=> {
  const contenedor = document.getElementById("detalles");

  const fecha = new Date(pelicula.release_date)
    .toLocaleDateString("es-ES");
//Plantilla lierales para mostrar contenido.
  contenedor.innerHTML = `
    <h2>${pelicula.title}</h2>
    <p><strong>Director:</strong> ${pelicula.director}</p>
    <p><strong>Productor:</strong> ${pelicula.producer}</p>
    <p><strong>Lanzamiento:</strong> ${fecha}</p>
    <p><strong>Sinopsis:</strong> ${pelicula.opening_crawl}</p>
  `;
}

export { traerDatos, renderPeliculas, mostrarDetalles };
