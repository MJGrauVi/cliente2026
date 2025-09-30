"use strict";
import {
  stringAmayusculas,
  stringMayus,
  ordenaAlReves,
  convertirAJson,
} from "./EjerciciosP4/ejercicio1.js";
import { generarArray } from "./EjerciciosP4/ejercicio2.js";

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

//Ejercicio2
/* const array1 = generarArray(10, 1, 10);
const array2 = generarArray(10, 1, 20);
const array3 = generarArray(10, 1, 30);
console.log(array1[2]);
const combinoArrays = [...array1, ...array2, ...array3];
const filtroMayores5 = combinoArrays.filter(valor=>valor>5);
console.log(`Los números mayores a 5 del combinado de arrays: `, filtroMayores5);
 */
const numeros1 = generarArray(10, 1, 10);
const numeros2 = generarArray(10, 1, 20);
const numeros3 = generarArray(10, 1, 30);
console.log(numeros3);
const mixArrays = [...numeros1, ...numeros2, ...numeros3];
const filtroArraysMas5 = mixArrays.filter((valor) => valor > 5);
console.log(
  `Los números mayores a 5 del combinado de arrays: `,
  filtroArraysMas5
);
