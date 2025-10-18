"use strict";
/* NOTA: La ejecucicón del código de los ejercicios se realizará transcurridos dos segundos desde la carga de la página a 
través de un setTimeout(()=>{ funcion_a_realizar }, 2000), a menos que el enunciado indique lo contrario. */

import { sustituirString } from "./funcionesEjercicio4-02/ejercicio1.js";
import {
  crearTabla,
  aplicarEstiloPrimos,
} from "./funcionesEjercicio4-02/ejercicio2.js";
import {
  crearWeb,
  generarColorAleatorio,
  indiceAleatorio,
  colorParrafoAleatorio,
} from "./funcionesEjercicio4-02/ejercicio3.js";
import {
  crearCarrusel,
  cambiarImagen,
} from "./funcionesEjercicio4-02/ejercicio4.js";
/* 
// Ejercicio 1 - El censor DOM
setTimeout(() => {
  sustituirString();
}, 1000);

 
//Ejercicio 2.
crearTabla(10, 10); //Crar tabla 10x10.

setTimeout(() => {
  aplicarEstiloPrimos();
}, 1000);


//Ejercicio 3.
crearWeb();

const intervalo = setInterval(() => {
  colorParrafoAleatorio();
}, 1000);

setTimeout(() => {
  clearInterval(intervalo);
}, 10000);

 */

//Ejercicio 4.
crearCarrusel();

// Aparecera al minuto.
/* setTimeout(() => {
  setInterval(() => {
    cambiarImagen();
  }, 2000);
}, 1000); */
