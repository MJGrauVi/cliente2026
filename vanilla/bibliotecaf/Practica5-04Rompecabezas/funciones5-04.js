"use strict";
function cargarTodasLasImagenes() {
  const contenedor = document.getElementById("contenedorImg");
  contenedor.innerHTML = "";

  // Crear array con nombres de imagen
  const imagenes = [];
  for (let i = 1; i <= 9; i++) {
    imagenes.push(`rompecabezas_imagenes/${i}.png`);
  }

  // Mezclar el array aleatoriamente (algoritmo de Fisher-Yates)
  for (let i = imagenes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imagenes[i], imagenes[j]] = [imagenes[j], imagenes[i]];
  }

  // Crear y añadir cada imagen al contenedor
  imagenes.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Rompecabezas";
    img.classList.add("imagen-rompecabezas");
    contenedor.appendChild(img);
  });
}
export {cargarTodasLasImagenes};