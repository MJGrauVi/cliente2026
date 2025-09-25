"use strict";
import { constCurso } from "../Practica3-03/EjerciciosP3/ejercicio1.js";
import { imprimirInforme } from "../Practica3-03/EjerciciosP3/ejercicio2.js";

//Casos de uso.
//Ejercicio1.
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
console.log(daw1, dam1);
let alumnos1Daw = daw1.Alumnado.push(...alumnos1daw);
console.log(alumnos1Daw);

console.log(daw1, dam1);
console.log(daw1.Alumnado);

//Ejercicio2.

imprimirInforme(daw1);

//Ejercicio3.

discente.imprimirAficiones();

discente.imprimirInforme();

console.log("Media calculada:", discente.calcularMedia());

//Pruebas

const curso = {
  nomCurso: "DAW",
  anioCurso: 2025,
  descripcionCurso: "Desarrollo Aplicaciones Web",
  alumnado: ["Ana", "Juan", "María"],
};
let alumnado = curso.alumnado.join(" del curso LOE, ");
console.log(alumnado);
