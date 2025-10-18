"use strict";
/* Ejercicio 3 - Ocultar DOM
Crea una web que tenga cinco elementos <p> con el mismo estilo. Programa una acción
para que cada segundo uno de los párrafos (seleccionado de forma aleatoria) cambie su
color de fondo a uno generado aleatoriamente (usa un atributo en lugar de clases para esto,
pero recuerda que no es una buena práctica).
Dota de algún estilo CSS para que los párrafos sean distinguibles (altura, longitud, color y un
borde). */

const crearWeb = () => {
  const divContainer = document.createElement("div"); //Creo un elemento html div.
  divContainer.setAttribute("id", "contenerdorWeb"); //Le añado el atributo id.
  let numeroParrafos = 5;
  for (let i = 0; i < numeroParrafos; i++) {
    //Creo los párrafos, le añado la clase y contenido, y lo añado al contenedor.
    let parrafo = document.createElement("p");
    parrafo.className = `parrafo`;
    parrafo.textContent = `Párrafo creado con un for`;
    divContainer.appendChild(parrafo);
  }
  document.body.appendChild(divContainer); //Añado todo a body.
};
// Función para generar un color hexadecimal.
const generarColorAleatorio = () => {
  const valorHexadecimal = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += valorHexadecimal[Math.floor(Math.random() * 16)];
  }
  return color;
};
const indiceAleatorio = (valor) => {
  let numero = Math.floor(Math.random() * valor);
  return numero;
};

const colorParrafoAleatorio = () => {
  const parrafos = document.querySelectorAll(".parrafo"); // Selecciona todos los párrafos.
  parrafos.forEach((p) => (p.style.backgroundColor = ""));
  const indiceGenerado = indiceAleatorio(parrafos.length); // Pasa número de párrafos.
  const parrafoSeleccionado = parrafos[indiceGenerado]; // Obtiene el párrafo correspondiente.
  const nuevoColor = generarColorAleatorio(); // Genera un nuevo color aleatorio.
  parrafoSeleccionado.style.backgroundColor = nuevoColor; // Cambia el color de fondo del párrafo.
};

export {
  crearWeb,
  generarColorAleatorio,
  indiceAleatorio,
  colorParrafoAleatorio,
};
