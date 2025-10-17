"use strict";
/* NOTA: La ejecucicón del código de los ejercicios se realizará transcurridos dos segundos desde la carga de la página a 
través de un setTimeout(()=>{ funcion_a_realizar }, 2000), a menos que el enunciado indique lo contrario. */

import { sustituirString } from "./funcionesEjercicio4-02/ejercicio1.js";
import {
  crearTabla,
  aplicarEstiloPrimos,
} from "./funcionesEjercicio4-02/ejercicio2.js";
import {crearWeb, generarColorAleatorio, indiceAleatorio, colorParrafoAleatorio} from "./funcionesEjercicio4-02/ejercicio3.js";

// Ejercicio 1 - El censor DOM
//sustituirString();

//Ejercicio 2.
crearTabla(10, 10); //Crar tabla 10x10.
//Ejercicio 3.
 crearWeb();

setTimeout(() => {
  aplicarEstiloPrimos();
  sustituirString();
}, 1000);

const intervalo = setInterval(()=>{
colorParrafoAleatorio();
},1000);
setTimeout(()=>{
  clearInterval(intervalo);
}, 10000);

