"use strict";
import {
  constCurso,
  incluirEnArray,
} from "../Practica3-03/EjerciciosP3/ejercicio1.js";
import { imprimirInforme } from "../Practica3-03/EjerciciosP3/ejercicio2.js";
import { discente } from "../Practica3-03/EjerciciosP3/ejercicio3.js";
import { constCurso2 } from "../Practica3-03/EjerciciosP3/ejercicio4.js";
import { imprimirObjeto } from "../Practica3-03/EjerciciosP3/ejercicio5.js";

//Casos de uso.
//Ejercicio1.
console.log(`*********************** Ejercicio 1 *******************`);
const daw1 = constCurso(
  "DAW",
  2025,
  "Curso para aprender HTML, Css, JavaScript, Php, y sus frameworks."
);
console.log(daw1);
const alumnos1daw = ["María", "Juana", "Cristina", "Juan Carlos", "Felipe"];
incluirEnArray(daw1, alumnos1daw);
//Muestro en formato texto los datos que contiene el objeto curso daw1.
const daw1Texto = JSON.stringify(daw1);
console.log(daw1Texto);

//Ejercicio2.
console.log(`******************* Ejercicio 2 *********************`);
imprimirInforme(daw1);

//Ejercicio3.
console.log(`******************* Ejercicio 3 *********************`);

discente.imprimirAficiones();
discente.imprimirInforme();
console.log(`La nota media es: `, discente.calcularMedia())

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
console.log(cursoJS.alumnado);

//Ejercicio5.
console.log(`****************** Ejercicio 5 *********************`);

imprimirObjeto(discente, "DISCENTE");


