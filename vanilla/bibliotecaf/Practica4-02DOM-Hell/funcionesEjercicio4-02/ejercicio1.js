"use strict";
/* Ejercicio 1 - El censor DOM
Crear una función que recorra el DOM desde la etiqueta <body> del fichero Ejercicio01.html
y si encuentra la palabra "sexo" elimine el texto y la sustituya por "Contenido Bloqueado"
poniendo el texto en rojo, negrita y cursiva (utiliza clases para el estilo). */

function sustituirString() {
  //Añado el contenido del body.
  const contenidoBody = document.body.innerHTML;
  //Reemplazo el texto y creo una clase "bloqueado" para darle los estilos solicitados.
  const nuevoContenido = contenidoBody.replace(
    /sexo/gi,
    '<span class="bloqueado">Contenido Bloqueado</span>'
  ); // /sexo/gi modificador de expresion regular(g-global, todas las coincidencias, e i-insensible a mayusculas y minusculas).
  // Actualizo el contenido del body con el texto modificado.
  document.body.innerHTML = nuevoContenido;
}
export { sustituirString };
