"use strict";
import {
  stringAmayusculas,
  stringMayus,
  ordenaAlReves,
  convertirAJson,
  mostrarJson,
} from "./EjerciciosP4/ejercicio1.js";

let nombrePropio = ["Manolo", "Juan", "Paco", "Carmina", "Pilar"];
let esArray =  ["Manolo", "Juan", "Paco", "Carmina", "Pilar"];
let noEsArray = `hola`;
//Ejercicio 1.
//console.log(`Array original: `, nombrePropio);
//console.log(`Tranformado con toUpperCase: `, stringAmayusculas(nombrePropio));
console.log(`Transformo utilizando un objeto "stringMayus" `, stringMayus);

//Ordena al reves el array.
//console.log(`Ordenado al revés: `, ordenaAlReves(nombrePropio));
console.log(ordenaAlReves(noEsArray));
console.log(ordenaAlReves(esArray));
console.log(nombrePropio);

//Punto3

/* const nombresJson = convertirAJson(nombrePropio);
nombresJson.forEach(mostrarJson); */
