"use strict";
import {constCurso, incluirEnArray} from "../Practica3-03/EjerciciosP3/ejercicio1.js";
import { imprimirInforme } from "../Practica3-03/EjerciciosP3/ejercicio2.js";
import { discente } from "../Practica3-03/EjerciciosP3/ejercicio3.js";
import { constCurso2 } from "../Practica3-03/EjerciciosP3/ejercicio4.js";
import {imprimirObjeto} from "../Practica3-03/EjerciciosP3/ejercicio5.js";

//Casos de uso.
//Ejercicio1.
console.log(`*********************** Ejercicio 1 *******************`);
const daw1 = constCurso(
  "DAW",
  2025,
  "Curso para aprender HTML, Css, JavaScript, Php, y sus frameworks."
);
const dam1 = constCurso(
  "DAM",
  2025,
  "Desarrollo aplicaciones multiplataforma con tecnologías para android."
);
const alumnos1daw = ["María", "Juana", "Cristina", "Juan Carlos", "Felipe"];
incluirEnArray(daw1, alumnos1daw);

console.log(daw1, dam1);
const daw1Texto = JSON.stringify(daw1);
console.log(daw1Texto);
let objeto = JSON.parse(daw1Texto);
console.log(objeto);

//Ejercicio2.
console.log(`******************* Ejercicio 2 *********************`);
imprimirInforme(daw1.alumnado.slice());
console.log(daw1);

//Ejercicio3.
console.log(`******************* Ejercicio 3 *********************`);

discente.imprimirAficiones();
discente.imprimirInforme();

//Ejercicio4.
console.log(`****************** Ejercicio 4 **********************`);

// Creamos un curso.
const cursoJS = constCurso2("JavaScript Básico", 2025, "Curso inicial de JS");

// Creamos los objetos discente con datos asociados
const alumno1 = { nombre: "Milagros", apellidos: "Vidal Berbabeu" };
const alumno2 = { nombre: "Francisco", apellidos: "Grau Bordera" };

// Matriculamos a los alumnos.
cursoJS.matricular(alumno1);
cursoJS.matricular(alumno2);

// Revisamos el alumnado del curso.
console.log(cursoJS.Alumnado);

//Ejercicio5.
console.log(`****************** Ejercicio 5 *********************`);

imprimirObjeto(discente, "DISCENTE");

//Pruebas
/*
const curso = {
  nomCurso: "DAW",
  anioCurso: 2025,
  descripcionCurso: "Desarrollo Aplicaciones Web",
  alumnado: ["Ana", "Juan", "María"],
};
let alumnado = curso.alumnado.join(" del curso LOE, ");
console.log(alumnado);

//-----------------sumar valores de un JSON
let numeros = [1, 8, 3];
let numerosJson = {
  1: 1,
  2: 2,
  3: 3,
};
const sumaNumeros = (a, b, c) => {
  console.log(a + b + c);
};
sumaNumeros(`Los valores de JSON suman:`, ...Object.values(numerosJson));
sumaNumeros(`Los valores del array suman: `, ...numeros);
const total = Object.values(numerosJson).reduce((acc, num) => acc + num, 0);
console.log(total); // 6 */
