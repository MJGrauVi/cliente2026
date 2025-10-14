"use strict";
import contarParrafos from "./funcionesEjercicio4-01/ejercicio1.js";
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

setTimeout(() => {
  console.log(`El número de párrafos es:`, contarParrafos());
}, 1000);
