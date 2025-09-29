"use strict";
//Funciones para la Práctica3.03.

/* Ejercicio 4 - Modificando (objetos)
Añade, al objeto curso, un método denominado matricular que recibe un objeto discente
(creado en el ejercicio anterior) y que los añade a la propiedad alumnado del objeto curso.
NOTA: usa los objetos creados en prácticas anteriores para ahorrar tiempo. */

function constCurso2(nomCurso, anioCurso, descripcionCurso) {
  return {
    nombre: nomCurso,
    año: anioCurso,
    descripción: descripcionCurso,
    alumnado: [],

    // Método matricular.
    matricular: function (discente) {
      this.alumnado = [...this.alumnado, discente];
      console.log(
        `${discente.nombre} ${discente.apellidos} ha sido matriculado/a en ${this.nombre}.`
      );
    },
  };
}
export {constCurso2};
