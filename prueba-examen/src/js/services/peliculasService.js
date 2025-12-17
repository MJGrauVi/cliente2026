"use strict";

const urlBase = "http://localhost:3000/peliculas";

const cargarPeliculas = async () => {
  try {
    const response = await fetch(urlBase);

    if (!response.ok) {
      throw new Error("Error al cargar las películas");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

const cargarPeliculaPorId = async (id) => {
  try {
    const response = await fetch(`${urlBase}/${id}`);

    if (!response.ok) {
      throw new Error("Error al cargar la película");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}; 
const manejarClicPeliculas = async (event, contenedorDetalles) => {
  if (event.target.tagName !== "LI") {
    return;
  }

  try {
    const id = event.target.dataset.id;
    const pelicula = await cargarPeliculaPorId(id);

    contenedorDetalles.innerHTML = `
      <p><strong>Título:</strong> ${pelicula.titulo}</p>
      <p><strong>Año:</strong> ${pelicula.año}</p>
    `;
  } catch (error) {
    console.error(error.message);
  }
};
export {cargarPeliculas, cargarPeliculaPorId, manejarClicPeliculas}