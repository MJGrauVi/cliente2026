"use strict";
import {
  stringAmayusculas,
  stringMayus,
  ordenaAlReves,
  convertirAJson,
} from "./EjerciciosP4/ejercicio1.js";

let nombrePropio = ["Manolo", "Juan", "Paco", "Carmina", "Pilar"];

//Ejercicio 1.
console.log(`Array original: `, nombrePropio);
console.log(`Tranformado con toUpperCase: `, stringAmayusculas(nombrePropio));
console.log(`Transformo utilizando un objeto "stringMayus" `, stringMayus);

//Ordena al reves el array.
console.log(`Ordenado al revés: `, ordenaAlReves(nombrePropio));
console.log(`No modifico el original`, nombrePropio);
let noEsArray = "hola";
console.log(`¿Entra un array?`, ordenaAlReves(noEsArray));

//Punto3
//const resultado = convertirAJson(nombrePropio);
console.log(`Los valores del objeto son:\n`, convertirAJson(nombrePropio));
