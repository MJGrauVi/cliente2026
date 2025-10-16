"use strict";
/* Ejercicio 1 - Contando elementos del DOM
Se dispone de una página web en Ejercicio01.html. Añade el código necesario en un
fichero js aparte para mostrar la siguiente información:
• el número de párrafos de la página,
• el texto del segundo párrafo,
• el número de enlaces de la página,
• la dirección del primer enlace y
• la dirección del penúltimo enlace.
El texto con la información será añadido al <div> con id=info y debe estar debidamente
formateado. */

const contarParrafos = () => {
  let cantidadParrafos = document.getElementsByTagName("p");
  console.log(cantidadParrafos);

  return cantidadParrafos.length;
};
const numeroParrafos = () => {
  let cantidad = document.body.childNodes;
  console.log(cantidad);
  return cantidad.length;
};

const textoSegundoP = () => {
  const todosP = document.getElementsByTagName("p");
  return todosP[1].textContent;
};


/* const textoSegundoP = () => {
  const parrafos = document.getElementsByTagName("p");
  console.log(`Parrafos`, parrafos);
  return parrafos.length >= 2
    ? parrafos[1].textContent
    : "No hay segundo párrafo.";
};
function obtenerSegundoParrafo() {
  const parrafos = document.getElementsByTagName("p");
  return parrafos.length >= 2
    ? parrafos[1].textContent
    : "No hay segundo párrafo.";
}

function contarEnlaces() {
  const enlaces = document.getElementsByTagName("a");
  return enlaces.length;
}

function obtenerPrimerEnlace() {
  const enlaces = document.getElementsByTagName("a");
  return enlaces.length >= 1 ? enlaces[0].href : "No hay enlaces.";
}

export function obtenerPenultimoEnlace() {
  const enlaces = document.getElementsByTagName("a");
  return enlaces.length >= 2
    ? enlaces[enlaces.length - 2].href
    : "No hay suficientes enlaces.";
} */

export {
  contarParrafos,
  numeroParrafos,
  textoSegundoP,
  /*obtenerSegundoParrafo,
  contarEnlaces,
  obtenerPrimerEnlace,
  obtenerPenultimoEnlace, */
};
