"use strict";
/* NOTA: La ejecucicón del código de los ejercicios se realizará transcurridos dos segundos desde la carga de la página a 
través de un setTimeout(()=>{ funcion_a_realizar }, 2000), a menos que el enunciado indique lo contrario. */

import { crearTabla, aplicarEstiloPrimos } from "./ejercicio2.js";
/* Ejercicio 1 - El censor DOM
Crear una función que recorra el DOM desde la etiqueta <body> del fichero Ejercicio01.html
y si encuentra la palabra "sexo" elimine el texto y la sustituya por "Contenido Bloqueado"
poniendo el texto en rojo, negrita y cursiva (utiliza clases para el estilo). */

//Ejercicio 2.
crearTabla(10, 10); //Crar tabla 10x10.

setTimeout(() => {
  aplicarEstiloPrimos();
}, 1000);
