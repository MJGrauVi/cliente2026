"use strict";
//Funciones para la Práctica3.03.

/* Ejercicio 1 - Constructor (de objetos)
Crea una función que simule ser un constructor de objetos (recuerda que es una función que
devuelve un objeto) que genere objetos del tipo curso. Las propiedades de este objeto serán:
nombre del curso, año, descripción y alumnado que es un array (vacío de momento). */

function constCurso(nomCurso, anioCurso, descripcionCurso) {
  return {
    nombre: nomCurso,
    año: anioCurso,
    descripción: descripcionCurso,
    alumnado: [],
  };
}
//No sé si me he adelantada al hacer esta funcion para rellenar el array alumnado.
function incluirEnArray(curso, alumnos) {
  if (Array.isArray(alumnos)) {
    curso.alumnado = [...curso.alumnado, alumnos];
  }
}
export { constCurso, incluirEnArray };
